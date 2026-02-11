"use client";
import { Card, Typography, Space, Button, Row, Col } from 'antd';
import { HomeOutlined, ApiOutlined, DatabaseOutlined, CloudOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ padding: '24px', minHeight: '100vh', background: '#f0f2f5' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* 头部 */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={1} style={{ marginBottom: '16px' }}>
            <HomeOutlined style={{ marginRight: '12px', color: '#1890ff' }} />
            Next.js基础项目模板
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#666' }}>
            快速开始新业务开发的完整项目架构
          </Paragraph>
        </div>

        {/* 功能特性 */}
        <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
              <ApiOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4}>API路由</Title>
              <Paragraph>基于Next.js App Router的完整API架构</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
              <DatabaseOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
              <Title level={4}>数据库集成</Title>
              <Paragraph>MySQL数据库配置和连接管理</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
              <CloudOutlined style={{ fontSize: '48px', color: '#faad14', marginBottom: '16px' }} />
              <Title level={4}>文件存储</Title>
              <Paragraph>Supabase文件存储和管理</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
              <HomeOutlined style={{ fontSize: '48px', color: '#f5222d', marginBottom: '16px' }} />
              <Title level={4}>现代化UI</Title>
              <Paragraph>基于Ant Design的响应式界面</Paragraph>
            </Card>
          </Col>
        </Row>

        {/* 快速开始 */}
        <Card title="快速开始" style={{ marginBottom: '24px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={5}>1. 环境配置</Title>
              <Paragraph code>cp env.example .env.local</Paragraph>
              <Paragraph>编辑 .env.local 文件，配置数据库信息</Paragraph>
            </div>
            
            <div>
              <Title level={5}>2. 安装依赖</Title>
              <Paragraph code>npm install</Paragraph>
            </div>
            
            <div>
              <Title level={5}>3. 初始化数据库</Title>
              <Paragraph code>npm run init-db</Paragraph>
            </div>
            
            <div>
              <Title level={5}>4. 启动开发服务器</Title>
              <Paragraph code>npm run dev</Paragraph>
            </div>
          </Space>
        </Card>

        {/* 开发指南 */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card title="开发指南" hoverable>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Link href="/api/health" passHref>
                  <Button type="link" style={{ padding: 0 }}>
                    • 查看API健康检查
                  </Button>
                </Link>
                <Link href="/examples" passHref>
                  <Button type="link" style={{ padding: 0 }}>
                    • 查看示例页面
                  </Button>
                </Link>
                <Paragraph>
                  • 在 src/app/api/ 目录下创建新的API路由
                </Paragraph>
                <Paragraph>
                  • 在 src/components/ 目录下创建新的React组件
                </Paragraph>
                <Paragraph>
                  • 在 src/types/ 目录下定义TypeScript类型
                </Paragraph>
              </Space>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card title="技术栈" hoverable>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Paragraph>
                  <strong>前端:</strong> Next.js 14, React 18, TypeScript
                </Paragraph>
                <Paragraph>
                  <strong>UI:</strong> Ant Design, Tailwind CSS
                </Paragraph>
                <Paragraph>
                  <strong>后端:</strong> Next.js API Routes
                </Paragraph>
                <Paragraph>
                  <strong>数据库:</strong> MySQL
                </Paragraph>
                <Paragraph>
                  <strong>存储:</strong> Supabase Storage
                </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* 底部 */}
        <div style={{ textAlign: 'center', marginTop: '48px', padding: '24px', color: '#999' }}>
          <Paragraph>
            Next.js基础项目模板 - 让开发更高效
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
