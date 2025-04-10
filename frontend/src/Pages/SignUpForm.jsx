"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select, Typography, Layout } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import "antd/dist/reset.css";
import "./SignUpForm.css"; // Optional: Keep custom CSS for tweaks

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Content } = Layout;

function SignUpForm() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/library");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Layout className="main-container" style={{ minHeight: "100vh", background: "#f7f9fc" }}>
      <div style={{ textAlign: "right", padding: "1rem" }}>
        <Button type="default" onClick={handleContactClick}>
          Contact Us
        </Button>
      </div>

      <Content style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
        <div className="form-box" style={{ background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <Title level={2}>Sign Up with Archive!</Title>
          <Paragraph>Your library catalog is available anywhere, anytime.</Paragraph>

          <Form layout="vertical">
            <Title level={4}>Account Information:</Title>

            {/* You can uncomment and use these when needed */}
            {/* <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter your first name" }]}>
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter your last name" }]}>
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Enter a password" }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item label="Role" name="role">
              <Select defaultValue="User">
                <Option value="User">User</Option>
                <Option value="Admin">Admin</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Place/Country" name="country">
              <Select defaultValue="India">
                <Option value="India">India</Option>
              </Select>
            </Form.Item> */}

            <Form.Item>
              <Button
                icon={<GoogleOutlined />}
                onClick={handleGoogleLogin}
                type="primary"
                style={{ width: "100%", marginBottom: "1rem" }}
              >
                Login with Google
              </Button>
            </Form.Item>

            <Form.Item>
             
              <Paragraph style={{ marginTop: "1rem" }}>
                Already have an account?{" "}
                <span
                  onClick={handleLoginRedirect}
                  style={{ color: "#1890ff", cursor: "pointer", textDecoration: "underline" }}
                >
                  Log in
                </span>
              </Paragraph>
            </Form.Item>
          </Form>
        </div>
      </Content>

      <Footer />
    </Layout>
  );
}

export default SignUpForm;
