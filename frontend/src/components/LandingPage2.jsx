import React from 'react';
import { Card, Typography } from 'antd';
import {
  UserAddOutlined,
  BookOutlined,
  ReadOutlined,
  SmileOutlined,
  StarOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const stepStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
};

const iconContainerStyle = {
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
  color: '#fff',
};

const textContainerStyle = {
  marginLeft: '25px',
};

const LandingPage2 = () => {
  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeSlideUp 1s ease-out',
      }}
    >
      <style>
        {`
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <Card
        style={{
          width: '100%',
          maxWidth: '900px',
          borderRadius: '20px',
          padding: '50px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '60px' }}>
          📚 How ARCHIVE Works
        </Title>

        {[{
          icon: <UserAddOutlined />, bg: '#f1c40f', title: 'Get Our Membership', desc: 'Sign up to unlock exclusive features and full access.'
        }, {
          icon: <BookOutlined />, bg: '#3498db', title: 'Explore the Library', desc: 'Discover books by genre, author, and popularity.'
        }, {
          icon: <ReadOutlined />, bg: '#2ecc71', title: 'Choose Your Favorite', desc: 'Bookmark or start reading your favorite books instantly.'
        }, {
          icon: <StarOutlined />, bg: '#9b59b6', title: 'Rate & Review', desc: 'Leave ratings and reviews for books you love.'
        }, {
          icon: <ShareAltOutlined />, bg: '#1abc9c', title: 'Share with Friends', desc: 'Recommend your favorite reads to others.'
        }, {
          icon: <SmileOutlined />, bg: '#e74c3c', title: 'Enjoy!', desc: 'Enjoy a personalized and joyful reading journey.'
        }].map((step, index) => (
          <div key={index} style={stepStyle}>
            <div style={{ ...iconContainerStyle, backgroundColor: step.bg }}>
              {step.icon}
            </div>
            <div style={textContainerStyle}>
              <Title level={3} style={{ margin: 0 }}>{step.title}</Title>
              <Paragraph style={{ margin: 0 }}>{step.desc}</Paragraph>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default LandingPage2;
