import React from "react";
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const JoinArchiveSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <Title
        level={2}
        style={{
          color: '#333',
          fontSize: '56px', // Increased font size
          fontWeight: 'bold', // Made it bold
          marginBottom: '20px',
        }}
      >
        Join the ARCHIVE Community Today
      </Title>
      <Paragraph
        style={{
          fontSize: '22px', // Increased font size
          fontWeight: 'bold', // Made it bold
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}
      >
        Become a part of our ever-growing family of book-lovers and discover a world of knowledge.
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{
          padding: '0 60px',
          fontSize: '20px', // Made button text bigger
          fontWeight: 'bold',
          borderRadius: '25px',
        }}
      >
        Get Started
      </Button>
    </section>
  );
};

export default JoinArchiveSection;