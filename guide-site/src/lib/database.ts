import mysql from 'mysql2/promise';

// 阿里云 RDS 配置
// 请在 .env.local 中配置以下环境变量
// ALIYUN_RDS_HOST=rm-xxx.mysql.rds.aliyuncs.com
// ALIYUN_RDS_PORT=3306
// ALIYUN_RDS_USER=your_username
// ALIYUN_RDS_PASSWORD=your_password
// ALIYUN_RDS_DATABASE=your_database

let pool: mysql.Pool | null = null;

export function getDbPool(): mysql.Pool {
  if (!pool) {
    const host = process.env.ALIYUN_RDS_HOST;
    const user = process.env.ALIYUN_RDS_USER;
    const password = process.env.ALIYUN_RDS_PASSWORD;
    const database = process.env.ALIYUN_RDS_DATABASE;
    const port = parseInt(process.env.ALIYUN_RDS_PORT || '3306');

    if (!host || !user || !password || !database) {
      console.warn('Missing Alibaba Cloud RDS environment variables. Database features will not work.');
      throw new Error('Missing Alibaba Cloud RDS environment variables. Please configure .env file.');
    }

    pool = mysql.createPool({
      host,
      user,
      password,
      database,
      port,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      // 阿里云 RDS 推荐配置
      connectTimeout: 10000, 
      ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false // 根据实际证书情况调整
      } : undefined
    });
  }
  return pool;
}

// 通用查询函数
export async function query<T = any>(
  sql: string,
  values?: any[]
): Promise<T[]> {
  try {
    const db = getDbPool();
    const [rows] = await db.execute(sql, values);
    return rows as T[];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// 模拟 Supabase 风格的简单查询构建器 (为了兼容现有代码结构)
// 注意：这只是一个简单的适配层，建议后续直接使用 SQL
export async function select<T = any>(
  table: string, 
  options: {
    select?: string; // 暂时忽略，默认 *
    filters?: Record<string, any>;
    limit?: number;
    offset?: number;
  } = {}
): Promise<T[]> {
  const db = getDbPool();
  let sql = `SELECT * FROM ??`;
  const params: any[] = [table];

  if (options.filters && Object.keys(options.filters).length > 0) {
    const conditions: string[] = [];
    Object.entries(options.filters).forEach(([key, value]) => {
      conditions.push(`?? = ?`);
      params.push(key, value);
    });
    sql += ` WHERE ${conditions.join(' AND ')}`;
  }

  if (options.limit) {
    sql += ` LIMIT ?`;
    params.push(options.limit);
  }

  if (options.offset) {
    sql += ` OFFSET ?`;
    params.push(options.offset);
  }

  const [rows] = await db.query(sql, params);
  return rows as T[];
}

export async function insert<T = any>(
  table: string, 
  data: Record<string, any>
): Promise<T> {
  const db = getDbPool();
  const keys = Object.keys(data);
  const values = Object.values(data);
  
  const sql = `INSERT INTO ?? (${keys.map(() => '??').join(', ')}) VALUES (${values.map(() => '?').join(', ')})`;
  const params = [table, ...keys, ...values];

  const [result] = await db.query(sql, params);
  // @ts-ignore
  return { id: result.insertId, ...data } as T;
}

export async function count(
  table: string, 
  filters?: Record<string, any>
): Promise<number> {
  const db = getDbPool();
  let sql = `SELECT COUNT(*) as total FROM ??`;
  const params: any[] = [table];

  if (filters && Object.keys(filters).length > 0) {
    const conditions: string[] = [];
    Object.entries(filters).forEach(([key, value]) => {
      conditions.push(`?? = ?`);
      params.push(key, value);
    });
    sql += ` WHERE ${conditions.join(' AND ')}`;
  }

  const [rows] = await db.query(sql, params);
  // @ts-ignore
  return rows[0]?.total || 0;
}

// 测试连接
export async function testConnection(): Promise<boolean> {
  try {
    const db = getDbPool();
    await db.query('SELECT 1');
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}

// 关闭连接池
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('Database connection pool closed');
  }
}
