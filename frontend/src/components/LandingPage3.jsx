import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import companiesBg from '../assets/companies.png';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const LandingPage = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Content>
        {/* Section 1: Happy Consumers */}
        <section
          style={{
            backgroundColor: '#e6f7ff',
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <Title level={1} style={{ color: '#1890ff', marginBottom: '20px' }}>
            More than 500,000 Happy Consumers
          </Title>
          <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            ARCHIVE is built from scratch based directly on user feedback.
          </Paragraph>
        </section>

        {/* Section 2: Trusted by Big Names */}
        <section
          style={{
            position: 'relative',
            backgroundImage: `url(${companiesBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '80px 20px',
            color: '#fff',
          }}
        >
          <Row align="middle" justify="space-between">
            <Col xs={24} md={16}>
              <Title level={2} style={{ color: '#fff' }}>
                Trusted by Big Names
              </Title>
            </Col>
          </Row>
        </section>

        {/* Section 3: Call to Action */}
        
      </Content>
    </Layout>
  );
};

export default LandingPage;
