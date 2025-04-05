import React from 'react';
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, BookOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import bgimg from '../assets/homepage.png';
import LandingPage2 from '../components/LandingPage2';
import LandingPage3 from '../components/LandingPage3';

const { Header } = Layout;

// Updated floating text style to match the image design
const floatingItemStyle = {
  backgroundColor: '#000',
  borderRadius: '25px',            // Rounded rectangular shape as seen in the design
  padding: '6px 20px',             // Size as per the design
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
  cursor: 'pointer',
  color: '#fff',
  fontSize: '12px',                // Smaller font matching the design
  fontWeight: '500',
  // Removed absolute positioning to allow natural inline layout
};

const LandingPage = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.8)', // Grey with 20% transparency
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
          position: 'fixed',
          width: '100%',
          zIndex: 1000
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          <BookOutlined style={{ marginRight: '10px', fontSize: '28px' }} />
          ARCHIVE
        </div>
        {/* Floating Text Items modified to match the design */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={floatingItemStyle}>Contact-Us</div>
          <div style={floatingItemStyle}>Login In</div>
          <div style={floatingItemStyle}>Sign Up</div>
        </div>
      </Header>

      {/* Hero Section */}
      <div
        style={{
          height: '100vh',
          background: `url(${bgimg}) no-repeat center center / cover`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '64px' // accounts for fixed header
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '72px',
            fontWeight: 'bold',
            textShadow: '4px 4px 10px rgba(0, 0, 0, 0.7)',
            marginBottom: '40px'
          }}
        >
          ARCHIVE
        </h1>

        <Input
          placeholder="Search"
          prefix={
            <SearchOutlined
              style={{
                fontSize: '28px',
                position: 'relative',
                top: '-2px'
              }}
            />
          }
          style={{
            width: '50%',
            maxWidth: '500px',
            marginBottom: '30px',
            height: '50px',
            borderRadius: '25px',
            padding: '0 20px'
          }}
        />

        <Button
          type="primary"
          size="large"
          style={{
            padding: '0 50px',
            borderRadius: '25px',
            fontWeight: 'bold'
          }}
        >
          Start Now
        </Button>
      </div>

      {/* Curve Transition */}
      <div
        style={{
          width: '100%',
          height: '40px', // Reduced height for less white space
          backgroundColor: '#fff',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          marginTop: '-30px'  // Reduced negative margin to overlap LandingPage2
        }}
      />

      {/* Content Section (Ensures overlap of LandingPage2) */}
      <div style={{ backgroundColor: '#fff', padding: '60px 20px', position: 'relative', zIndex: 2 }}>
        <LandingPage2 />
        <LandingPage3 />
      </div>
    </Layout>
  );
};

export default LandingPage;
