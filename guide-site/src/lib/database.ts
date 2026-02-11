import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase 配置
// 获取默认 schema
let gSchema = 'public';

// 创建 Supabase 客户端
let supabase: SupabaseClient | null = null;

// 获取 Supabase 客户端
export function getSupabase(): SupabaseClient {
  if (!supabase) {
    gSchema = process.env.SUPABASE_SCHEMA as "public";
    // 运行时检查环境变量
    const runtimeSupabaseUrl = process.env.SUPABASE_URL;
    const runtimeSupabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    
    if (!runtimeSupabaseUrl || !runtimeSupabaseAnonKey) {
      console.warn('Missing Supabase environment variables. Database features will not work.');
      // Return a dummy client or throw error depending on strictness
      // For now, let's throw to be explicit, or maybe we should handle it gracefully
      // throw new Error('Missing Supabase environment variables.');
    }
    
    // Check if we have values before creating client to avoid crash if env is missing
    if (runtimeSupabaseUrl && runtimeSupabaseAnonKey) {
        supabase = createClient(runtimeSupabaseUrl, runtimeSupabaseAnonKey, {
            db: {
                schema: process.env.SUPABASE_SCHEMA as "public"
            }
        });
    } else {
        // Create a dummy object to satisfy type check but it will fail on calls
        // This is a temporary fallback for development without env vars
        throw new Error('Missing Supabase environment variables. Please configure .env file.');
    }
  }
  return supabase as SupabaseClient;
}

// 执行查询
export async function query<T = any>(
  table: string, 
  options: {
    select?: string;
    filters?: Record<string, any>;
    orderBy?: { column: string; ascending?: boolean };
    limit?: number;
    offset?: number;
    schema?: string;
  } = {}
): Promise<T[]> {
  const client = getSupabase();
  const { data, error } = await client.from(table).select(options.select || '*');
  if (error) {
    console.error('Supabase query error:', error);
    throw error as any;
  }
  return data as T[];
}

export async function insert<T = any>(
  table: string, 
  data: Record<string, any>,
  schema?: string
): Promise<T> {
  const client = getSupabase();
  const { data: result, error } = await client
    .from(table)
    .insert(data)
    .select()
    .single();

  if (error) {
    console.error('Supabase insert error:', error);
    throw error;
  }
  return result;
}

// 计数查询
export async function count(
  table: string, 
  filters?: Record<string, any>,
  schema?: string
): Promise<number> {
  const client = getSupabase();
  const schemaName = schema || gSchema;
  const tableName = schemaName === 'public' ? table : `${schemaName}.${table}`;
  let query = client.from(tableName).select('*', { count: 'exact', head: true });

  // 应用过滤器
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  const { count, error } = await query;
  console.log(count);
  if (error) {
    console.error('Supabase count error:', error);
    throw error;
  }

  return count || 0;
}

// 测试连接
export async function testConnection(): Promise<boolean> {
  try {
    const client = getSupabase();
    // Use a simple query that doesn't depend on specific tables if possible, 
    // or catch the error if table doesn't exist
    // 'examples' table might not exist in guide-site, so maybe check auth or something generic
    // But sticking to template code:
    const { data, error } = await client.from('examples').select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection test failed:', error);
    return false;
  }
}

// 关闭连接（Supabase 不需要手动关闭）
export async function closePool(): Promise<void> {
  // Supabase 客户端会自动管理连接
  console.log('Supabase connection pool closed');
}
