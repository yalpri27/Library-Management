import React from 'react';
import { Layout, Input, Button, Menu } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/reset.css"; 
import bgimg from '../assets/homepage.png';



const { Header, Content } = Layout;

const LandingPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navigation bar */}
      <Header
        style={{
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
          ARCHIVE
        </div>
        <Menu theme="dark" mode="horizontal" style={{ backgroundColor: '#000' }}>
          <Menu.Item key="1">Contact Us</Menu.Item>
          <Menu.Item key="2">Login In</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>

      {/* Main content area */}
      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
          background: `url(${bgimg}) no-repeat center center/cover`
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '72px',
            fontWeight: 'bold',
            margin: '0 0 40px'
          }}
        >
          ARCHIVE,
        </h1>

        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          suffix={<PlusOutlined />}
          style={{
            width: '50%',
            maxWidth: '500px',
            marginBottom: '40px',
            height: '50px',
            borderRadius: '25px'
          }}
        />

        <Button
          type="primary"
          size="large"
          style={{ padding: '0 50px', borderRadius: '25px' }}
        >
          Start Now
        </Button>
      </Content>
    </Layout>
  );
};

export default LandingPage;