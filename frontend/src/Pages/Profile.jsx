import React, { useEffect, useState } from "react";
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
  message,
  Spin,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setFormData({
              name: data.name || "",
              nickname: data.nickname || "",
              gender: data.gender || "",
              country: data.country || "",
              language: data.language || "",
              timezone: data.timezone || "",
            });
          } else {
            message.error("User data not found.");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
          message.error("Failed to fetch profile data.");
        } finally {
          setLoading(false);
        }
      } else {
        message.error("No user is logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No user authenticated");
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, formData);
      message.success("Profile updated successfully.");
      setUserData((prev) => ({ ...prev, ...formData }));
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
      message.error("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <Layout style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center" }}>
        <Spin size="large" />
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#fff", boxShadow: "2px 0 5px rgba(0,0,0,0.1)", position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 1000 }}>
        <Sidebar />
      </Sider>

      <Layout style={{ marginLeft: 250, background: "#f0f2f5" }}>
        <Header style={{ background: "#fff", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", height: 70 }}>
          <Title level={3} style={{ margin: 0 }}>
            {userData ? `Welcome, ${userData.name?.split(" ")[0]}` : "Loading..."}
          </Title>
          <Space>
            <Text type="secondary">{new Date().toDateString()}</Text>
            <SearchOutlined style={{ fontSize: 20, color: "#999" }} />
            <BellOutlined style={{ fontSize: 20, color: "#999" }} />
            <Avatar size={40} src={userData?.avatarURL} />
          </Space>
        </Header>

        <Content style={{ padding: "30px" }}>
          <Card style={{ height: 120, borderRadius: 16, background: "linear-gradient(90deg, #00A2FF 0%, #C2F0FF 100%)", boxShadow: "0 8px 24px rgba(0, 162, 255, 0.2)", marginBottom: 40 }} bodyStyle={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Title level={3} style={{ color: "white", margin: 0 }}>
              Your Profile Overview
            </Title>
          </Card>

          <Card style={{ borderRadius: 16, backdropFilter: "blur(10px)", boxShadow: "0 4px 30px rgba(0,0,0,0.05)" }}>
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={6} style={{ textAlign: "center" }}>
                <Avatar size={160} src={userData?.avatarURL} style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                <Title level={4} style={{ marginTop: 12 }}>
                  {userData?.name}
                </Title>
                <Text type="secondary">{userData?.email}</Text>
              </Col>

              <Col xs={24} md={18}>
                <Row gutter={20}>
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "Nick Name", key: "nickname" },
                    { label: "Gender", key: "gender" },
                    { label: "Country", key: "country" },
                    { label: "Language", key: "language" },
                    { label: "Time Zone", key: "timezone" },
                  ].map((item, index) => (
                    <Col span={12} style={{ marginTop: index >= 2 ? 20 : 0 }} key={item.key}>
                      <Text strong>{item.label}</Text>
                      <Input
                        value={formData[item.key]}
                        onChange={(e) => handleInputChange(item.key, e.target.value)}
                        placeholder={`Enter your ${item.label}`}
                        disabled={!isEditing}
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

                <div style={{ float: "right", marginTop: 30 }}>
                  {isEditing ? (
                    <>
                      <Button type="primary" onClick={handleSave} style={{ borderRadius: 10, marginRight: 10 }}>
                        Save
                      </Button>
                      <Button onClick={() => setIsEditing(false)} style={{ borderRadius: 10 }}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button type="primary" onClick={() => setIsEditing(true)} style={{ borderRadius: 10 }}>
                      Edit Profile
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ marginTop: 40, borderRadius: 16, boxShadow: "0 4px 30px rgba(0,0,0,0.04)" }}>
            <Title level={4}>My Email Address</Title>
            <Row align="middle" justify="space-between" style={{ background: "#fafafa", padding: 15, borderRadius: 10, marginTop: 10 }}>
              <Space>
                <MailOutlined style={{ fontSize: 18, color: "#1890ff" }} />
                <Text>{userData?.email}</Text>
              </Space>
              <Text type="secondary">Last updated: recently</Text>
            </Row>
            <Button type="dashed" style={{ marginTop: 20, width: "100%", borderRadius: 10 }}>
              + Add Email Address
            </Button>
          </Card>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
