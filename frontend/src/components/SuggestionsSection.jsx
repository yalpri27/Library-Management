import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";

const { Title } = Typography;

const suggestions = {
  youMightLike: [
    { title: "Their Eyes Were Watching God", img: "https://covers.openlibrary.org/b/id/1-M.jpg", action: "Read" },
    { title: "Biography", img: "https://covers.openlibrary.org/b/id/2-M.jpg", action: "Read" },
    { title: "For the Word", img: "https://covers.openlibrary.org/b/id/3-M.jpg", action: "Read" },
    { title: "Marti y la Música", img: "https://covers.openlibrary.org/b/id/4-M.jpg", action: "Read" },
    { title: "Blue Book", img: "https://covers.openlibrary.org/b/id/5-M.jpg", action: "Read" },
    { title: "Black Book", img: "https://covers.openlibrary.org/b/id/6-M.jpg", action: "Read" },
  ],
  moreByAuthor: [
    { title: "Lessons from the Early Church", img: "https://covers.openlibrary.org/b/id/7-M.jpg", action: "Read" },
    { title: "Armstrong is My Uncle", img: "https://covers.openlibrary.org/b/id/8-M.jpg", action: "Read" },
    { title: "Japanese Script", img: "https://covers.openlibrary.org/b/id/9-M.jpg", action: "Read" },
    { title: "Sci-Fi Adventures", img: "https://covers.openlibrary.org/b/id/10-M.jpg", action: "Read" },
    { title: "Texas Cattle Disease", img: "https://covers.openlibrary.org/b/id/11-M.jpg", action: "Read" },
    { title: "Old Book", img: "https://covers.openlibrary.org/b/id/12-M.jpg", action: "Read" },
  ],
};

const BookGrid = ({ books }) => (
  <Row gutter={[16, 24]}>
    {books.map((book, index) => (
      <Col xs={12} sm={8} md={6} lg={4} key={index}>
        <Card
          hoverable
          cover={<img alt={book.title} src={book.img} style={{ height: 200, objectFit: "cover" }} />}
          bodyStyle={{ textAlign: "center" }}
        >
          <Button type="default">Read</Button>
        </Card>
      </Col>
    ))}
  </Row>
);

const SuggestionsSection = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <div style={{ marginBottom: 50 }}>
        <Title level={4}>📖 You might also like</Title>
        <BookGrid books={suggestions.youMightLike} />
      </div>
      <div>
        <Title level={4}>🖋️ More by this author</Title>
        <BookGrid books={suggestions.moreByAuthor} />
      </div>
    </div>
  );
};

export default SuggestionsSection;
