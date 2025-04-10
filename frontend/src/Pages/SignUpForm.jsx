"use client";

import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select, Typography, Layout, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import "antd/dist/reset.css";
import "./SignUpForm.css";

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Content } = Layout;

function SignUpForm() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const [image, setImage] = useState(null);

const handleImageChange = (e) => {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
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
      message.error("Google sign-in failed");
    }
  };

  const handleSignup = async (values) => {
    const { name, email, password, role, country } = values;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Generate DiceBear avatar URL
      const avatarURL = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;
  
      // Store additional info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role,
        country,
        avatarURL, // store avatar URL
        createdAt: new Date().toISOString(),
      });
  
      message.success("Signup successful! Redirecting...");
      navigate("/library");
    } catch (error) {
      console.error("Signup Error:", error);
      message.error(error.message);
    }
  };
  

  return (
    <Layout className="main-container" style={{ minHeight: "100vh", background: "#f7f9fc" }}>
      <div style={{ textAlign: "right", padding: "1rem" }}>
        
      </div>

      <Content style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
        <div className="form-box" style={{ background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <Title level={2}>Sign Up with Archive!</Title>
          <Paragraph>Your library catalog is available anywhere, anytime.</Paragraph>

          <Form layout="vertical" onFinish={handleSignup}>
            <Title level={4}>Account Information:</Title>

            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, min: 6, message: "Password must be at least 6 characters" }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item label="Role" name="role" initialValue="User">
              <Select>
                <Option value="User">User</Option>
                <Option value="Admin">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Place/Country" name="country" initialValue="India">
              <Select>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button icon={<GoogleOutlined />} onClick={handleGoogleLogin} type="primary" style={{ width: "100%", marginBottom: "1rem" }}>
                Login with Google
              </Button>
            </Form.Item>
            <Form.Item label="Profile Image">
  <input type="file" accept="image/*" onChange={handleImageChange} />
</Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Start My Library
              </Button>
              <Paragraph style={{ marginTop: "1rem" }}>
                Already have an account?{" "}
                <span onClick={handleLoginRedirect} style={{ color: "#1890ff", cursor: "pointer", textDecoration: "underline" }}>
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
