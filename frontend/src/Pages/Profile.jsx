import React from "react";
import { Layout, Row, Col, Card, Typography, Button, Input, Avatar, Divider, Space } from "antd";
import { SearchOutlined, BellOutlined, MailOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const ProfilePage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <Sider width={80} style={{ background: "#1a1a1a", height: "100vh" }} />

      <Layout>
        {/* Header Section */}
        <Header
          style={{
            background: "#fff",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Title level={3} style={{ margin: 0 }}>Welcome, Amanda</Title>
          <Text type="secondary">Tue, 07 June 2022</Text>
          <Space>
            <SearchOutlined style={{ fontSize: 20, color: "#888" }} />
            <BellOutlined style={{ fontSize: 20, color: "#888" }} />
            <Avatar src="https://i.pravatar.cc/100" />
          </Space>
        </Header>

        <Content style={{ padding: "40px" }}>
          
          {/* Background Card */}
          <Card style={{
            height: 100,
            borderRadius: 12,
            background: "linear-gradient(to right,rgb(0, 162, 255),rgb(222, 245, 255))",
            marginBottom: 40,
          }} />

          {/* Profile Section */}
          <Card style={{ padding: 30, borderRadius: 12 }}>
            <Row gutter={[32, 32]} align="middle">
              
              {/* Profile Image */}
              <Col xs={24} md={6} style={{ textAlign: "center" }}>
                <Avatar size={190} src="https://i.pravatar.cc/100" />
                <Title level={4} style={{ marginTop: 10 }}>Alexa Rawles</Title>
                <Text type="secondary">alexarawles@gmail.com</Text>
              </Col>

              {/* Form Fields */}
              <Col xs={24} md={18}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Text>Full Name</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                  <Col span={12}>
                    <Text>Nick Name</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                  <Col span={12} style={{ marginTop: 20 }}>
                    <Text>Gender</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                  <Col span={12} style={{ marginTop: 20 }}>
                    <Text>Country</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                  <Col span={12} style={{ marginTop: 20 }}>
                    <Text>Language</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                  <Col span={12} style={{ marginTop: 20 }}>
                    <Text>Time Zone</Text>
                    <Input placeholder="Your First Name" />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Edit Button */}
            <Button type="primary" style={{ float: "right", marginTop: 20 }}>Edit</Button>
          </Card>

          {/* Email Address Section */}
          <Card style={{ marginTop: 40 }}>
            <Title level={4}>My email Address</Title>
            <Row align="middle">
              <MailOutlined style={{ fontSize: 20, marginRight: 10 }} />
              <Text>alexarawles@gmail.com</Text>
              <Text type="secondary" style={{ marginLeft: 10 }}>1 month ago</Text>
            </Row>
            <Button type="dashed" style={{ marginTop: 20 }}>+ Add Email Address</Button>
          </Card>

        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
