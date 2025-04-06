import React from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Button,
  Input,
  Avatar,
  Space,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const ProfilePage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        style={{
          background: "#fff",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <Sidebar />
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: 250, background: "#f0f2f5" }}>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            height: 70,
          }}
        >
          <Title level={3} style={{ margin: 0 }}>
            Welcome, Amanda
          </Title>
          <Space>
            <Text type="secondary">Tue, 07 June 2022</Text>
            <SearchOutlined style={{ fontSize: 20, color: "#999" }} />
            <BellOutlined style={{ fontSize: 20, color: "#999" }} />
            <Avatar size={40} src="https://i.pravatar.cc/100" />
          </Space>
        </Header>

        {/* Content */}
        <Content style={{ padding: "30px" }}>
          {/* Hero Card */}
          <Card
            style={{
              height: 120,
              borderRadius: 16,
              background:
                "linear-gradient(90deg, #00A2FF 0%, #C2F0FF 100%)",
              boxShadow: "0 8px 24px rgba(0, 162, 255, 0.2)",
              marginBottom: 40,
            }}
            bodyStyle={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Title level={3} style={{ color: "white", margin: 0 }}>
              Your Profile Overview
            </Title>
          </Card>

          {/* Profile Section */}
          <Card
            style={{
              borderRadius: 16,
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={6} style={{ textAlign: "center" }}>
                <Avatar
                  size={160}
                  src="https://i.pravatar.cc/300"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Title level={4} style={{ marginTop: 12 }}>
                  Alexa Rawles
                </Title>
                <Text type="secondary">alexarawles@gmail.com</Text>
              </Col>

              <Col xs={24} md={18}>
                <Row gutter={20}>
                  {[
                    "Full Name",
                    "Nick Name",
                    "Gender",
                    "Country",
                    "Language",
                    "Time Zone",
                  ].map((label, index) => (
                    <Col span={12} style={{ marginTop: index >= 2 ? 20 : 0 }} key={label}>
                      <Text strong>{label}</Text>
                      <Input
                        placeholder={`Enter your ${label}`}
                        style={{
                          borderRadius: 10,
                          marginTop: 5,
                          padding: 10,
                          border: "1px solid #ddd",
                        }}
                      />
                    </Col>
                  ))}
                </Row>

                <Button
                  type="primary"
                  style={{
                    float: "right",
                    marginTop: 30,
                    borderRadius: 10,
                    background: "#1890ff",
                    border: "none",
                  }}
                >
                  Edit Profile
                </Button>
              </Col>
            </Row>
          </Card>

          {/* Email Section */}
          <Card
            style={{
              marginTop: 40,
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
            }}
          >
            <Title level={4}>My Email Address</Title>
            <Row
              align="middle"
              justify="space-between"
              style={{
                background: "#fafafa",
                padding: 15,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Space>
                <MailOutlined style={{ fontSize: 18, color: "#1890ff" }} />
                <Text>alexarawles@gmail.com</Text>
              </Space>
              <Text type="secondary">Last updated: 1 month ago</Text>
            </Row>

            <Button
              type="dashed"
              style={{
                marginTop: 20,
                width: "100%",
                borderRadius: 10,
              }}
            >
              + Add Email Address
            </Button>
          </Card>
        </Content>

        {/* Footer */}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
