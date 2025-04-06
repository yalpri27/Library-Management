import React from 'react';
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, BookOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { useNavigate } from 'react-router-dom'; // 👈 Import this
import bgimg from '../assets/homepage.png';
import LandingPage2 from '../components/LandingPage2';
import LandingPage3 from '../components/LandingPage3';
import Footer from '../components/Footer';
import JoinArchiveSection from '../components/JoinArchiveSection';
const { Header } = Layout;

const floatingItemStyle = {
  backgroundColor: '#000',
  borderRadius: '20px',
  padding: '4px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  color: '#fff',
  fontSize: '12px',
  fontWeight: 500,
  height: '32px',              // New: fix height for uniformity
  lineHeight: '24px',         // Better vertical alignment
  minWidth: '80px',           // Minimum width for consistent sizing
  textAlign: 'center'
};

const LandingPage = () => {
  const navigate = useNavigate(); // 👈 Hook for navigation

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.8)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
          position: 'fixed',
          width: '100%',
          zIndex: 1000
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          <BookOutlined style={{ marginRight: '10px', fontSize: '28px' }} />
          ARCHIVE
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={floatingItemStyle} onClick={() => navigate('/contact')}>Contact-Us</div>
          <div style={floatingItemStyle} onClick={() => navigate('/login')}>Login In</div>
          <div style={floatingItemStyle} onClick={() => navigate('/signup')}>Sign Up</div>
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
          paddingTop: '64px'
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
          prefix={<SearchOutlined style={{ fontSize: '28px', position: 'relative', top: '-2px' }} />}
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
          onClick={() => navigate('/signup')} // Optional: Navigate on Start Now too
        >
          Start Now
        </Button>
      </div>

      {/* Curve Transition */}
      <div
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: '#fff',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          marginTop: '-30px'
        }}
      />

      {/* Content Section */}
      <div style={{ backgroundColor: '#fff', padding: '60px 20px', position: 'relative', zIndex: 2 }}>
        <JoinArchiveSection />
        <LandingPage2 />
        <LandingPage3 />
      </div>
        <Footer />

    </Layout>
  );
};

export default LandingPage;
