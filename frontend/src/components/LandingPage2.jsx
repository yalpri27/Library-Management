import React from 'react';
import { Card, Typography } from 'antd';
import {
  UserAddOutlined,
  BookOutlined,
  ReadOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// Common style objects for reusability
const stepStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const iconContainerStyle = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '28px',
  color: '#fff',
};

const textContainerStyle = {
  marginLeft: '20px',
};

const LandingPage2 = () => {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        margin: '0',
        position: 'relative',
        zIndex: '2',
        width: '100%',
        top: '-80px', // Makes it smoothly overlap Page 1
        animation: 'fadeSlideUp 1s ease-out', // Adding smooth animation
      }}
    >
      {/* Animation for smooth entrance */}
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
          maxWidth: '600px',
          borderRadius: '10px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          How It Works
        </Title>

        {/* Step 1 */}
        <div style={stepStyle}>
          <div style={{ ...iconContainerStyle, backgroundColor: '#f1c40f' }}>
            <UserAddOutlined />
          </div>
          <div style={textContainerStyle}>
            <Title level={4} style={{ margin: 0 }}>
              Get our membership
            </Title>
            <Paragraph style={{ margin: 0 }}>
              Sign up for our membership to access exclusive benefits.
            </Paragraph>
          </div>
        </div>

        {/* Step 2 */}
        <div style={stepStyle}>
          <div style={{ ...iconContainerStyle, backgroundColor: '#3498db' }}>
            <BookOutlined />
          </div>
          <div style={textContainerStyle}>
            <Title level={4} style={{ margin: 0 }}>
              Explore library
            </Title>
            <Paragraph style={{ margin: 0 }}>
              Browse our extensive library of books and resources.
            </Paragraph>
          </div>
        </div>

        {/* Step 3 */}
        <div style={stepStyle}>
          <div style={{ ...iconContainerStyle, backgroundColor: '#2ecc71' }}>
            <ReadOutlined />
          </div>
          <div style={textContainerStyle}>
            <Title level={4} style={{ margin: 0 }}>
              Your fav book
            </Title>
            <Paragraph style={{ margin: 0 }}>
              Select your favorite book and dive into a new world.
            </Paragraph>
          </div>
        </div>

        {/* Step 4 */}
        <div style={stepStyle}>
          <div style={{ ...iconContainerStyle, backgroundColor: '#e74c3c' }}>
            <SmileOutlined />
          </div>
          <div style={textContainerStyle}>
            <Title level={4} style={{ margin: 0 }}>
              Enjoy!
            </Title>
            <Paragraph style={{ margin: 0 }}>
              Enjoy your reading experience and share it with friends.
            </Paragraph>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LandingPage2;
