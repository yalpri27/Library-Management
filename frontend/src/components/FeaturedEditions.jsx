import React from "react";
import { Card, Button, Row, Col, Typography, Space } from "antd";

const { Title, Text } = Typography;

const editions = [
  {
    title: "Visions of the Daughters of Albion",
    year: "2002",
    publisher: "Huntington Library",
    language: "English",
    action: "Borrow",
    img: "https://covers.openlibrary.org/b/id/1234567-M.jpg", // Replace with real image URL
  },
  {
    title: "Visions of the Daughters of Albion",
    year: "1884",
    publisher: "Printed by W. Blake, 1793. [Edmonton, Eng.]",
    language: "English",
    action: "Locate",
    img: "https://covers.openlibrary.org/b/id/7654321-M.jpg", // Replace with real image URL
  },
];

const FeaturedEditions = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Title level={4}>📚 Showing {editions.length} Featured Editions</Title>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {editions.map((edition, index) => (
          <Card key={index} bordered hoverable style={{ borderRadius: 10 }}>
            <Row gutter={16} align="middle">
              <Col xs={24} sm={6} md={4}>
                <img
                  src={edition.img}
                  alt="Edition cover"
                  style={{ width: "100%", borderRadius: 6 }}
                />
              </Col>
              <Col xs={24} sm={12} md={16}>
                <Title level={5}>{edition.title}</Title>
                <Text type="secondary">
                  {edition.year}, {edition.publisher}, {edition.language}
                </Text>
              </Col>
              <Col xs={24} sm={6} md={4} style={{ textAlign: "right" }}>
                <Button
                  type={edition.action === "Borrow" ? "primary" : "default"}
                  style={{ minWidth: 100 }}
                >
                  {edition.action}
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default FeaturedEditions;
