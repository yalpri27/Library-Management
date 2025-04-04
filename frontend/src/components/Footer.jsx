import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Typography, notification } from 'antd';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    notification.success({
      message: 'Subscription Successful',
      description: 'You have successfully subscribed to our newsletter!',
    });
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: '#1f1f1f', color: '#fff', padding: '48px 24px', marginTop: '20px' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: '#fff' }}>Book Library</Title>
            <Paragraph style={{ color: '#ccc' }}>
              Your digital gateway to endless stories and knowledge.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: '#fff' }}>Quick Links</Title>
            <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
              <li><Link to="/about" style={{ color: '#ccc' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: '#ccc' }}>Contact</Link></li>
              <li><Link to="/terms" style={{ color: '#ccc' }}>Terms & Conditions</Link></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: '#fff' }}>Follow Us</Title>
            <div style={{ display: 'flex', gap: 16, fontSize: 24 }}>
              <a href="#" style={{ color: '#ccc' }} aria-label="Facebook">
                <FacebookFilled />
              </a>
              <a href="#" style={{ color: '#ccc' }} aria-label="Twitter">
                <TwitterSquareFilled />
              </a>
              <a href="#" style={{ color: '#ccc' }} aria-label="Instagram">
                <InstagramFilled />
              </a>
            </div>
          </Col>

          {/* Newsletter Signup */}
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: '#fff' }}>Newsletter</Title>
            <Form onFinish={handleNewsletterSubmit}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Subscribe
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>

        {/* Copyright */}
        <Row justify="center" style={{ marginTop: 48, borderTop: '1px solid #333', paddingTop: 24 }}>
          <Col>
            <Paragraph style={{ color: '#999' }}>
              © {new Date().getFullYear()} Book Library. All rights reserved.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
