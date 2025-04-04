import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Typography, Divider, Button, Rate, Carousel, Tag, Space } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const BookPage = () => {
  const [book, setBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBook({
        title: "Visions of the Daughters of Albion",
        author: "William Blake",
        rating: 3.8,
        reviews: 2,
        isbn: "978-0140422153",
        publisher: "Penguin Classics",
        publishedDate: "1793",
        language: "English",
        subjects: ["Poetry", "Symbolism", "Freedom"],
        image: "https://i.pinimg.com/736x/78/f9/6e/78f96ea7bd019bb16cb6c3f0ed82bda2.jpg",
        description:
          "A visionary poem by William Blake, exploring themes of oppression, freedom, and sexuality. The work critiques societal norms and advocates for personal liberation.",
        themes: [
          "Freedom vs. Oppression",
          "Role of Women in Society",
          "Love and Desire",
          "Religious and Mythological Symbolism",
        ],
      });

      setAuthorBooks([
        { id: 1, title: "Milton: A Poem", author: "William Blake", image: "https://i.pinimg.com/736x/ed/eb/77/edeb779cda95e28331b7152a5a98a690.jpg" },
        { id: 2, title: "Jerusalem", author: "William Blake", image: "https://i.pinimg.com/736x/c1/db/0d/c1db0d51e4403a77fd1438f1ef6ae6d2.jpg" },
        { id: 3, title: "Songs of Innocence and Experience", author: "William Blake", image: "https://i.pinimg.com/736x/05/37/63/053763e71a6ad72700fac7049300296b.jpg" },
        { id: 4, title: "The Marriage of Heaven and Hell", author: "William Blake", image: "https://i.pinimg.com/736x/95/9c/8f/959c8f084bc42c37719629b304adee17.jpg" },
      ]);

      setRecommendedBooks([
        { id: 5, title: "Paradise Lost", author: "John Milton", image: "https://i.pinimg.com/736x/ed/eb/77/edeb779cda95e28331b7152a5a98a690.jpg" },
        { id: 6, title: "The Divine Comedy", author: "Dante Alighieri", image: "https://i.pinimg.com/736x/59/0c/18/590c187a1d79efdc19dc5f6087d74a79.jpg" },
        { id: 7, title: "Leaves of Grass", author: "Walt Whitman", image: "https://i.pinimg.com/736x/6e/44/81/6e4481ec7cea43b11676ff71716f3366.jpg" },
        { id: 8, title: "The Waste Land", author: "T.S. Eliot", image: "https://i.pinimg.com/736x/82/c2/94/82c29458246cc8ffdadc5cf5a0aec01c.jpg" },
      ]);

      setQuotes([
        "In soft anguish and silent lamentation, the daughters of Albion sigh and weep.",
        "The eye sees more than the heart knows.",
        "Opposition is true friendship.",
        "What is now proved was once only imagined.",
        "He who desires but acts not, breeds pestilence.",
      ]);
    }, 2000);
  }, []);

  return (
    <Layout style={{ background: "#fff", minHeight: "100vh", padding: "40px" }}>
      <Content>
        <Title level={1} style={{ textAlign: "left", marginBottom: "20px" }}>
          {book ? book.title : "Loading..."}
        </Title>

        {/* Book Overview Section */}
        <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0px 6px 12px rgba(0,0,0,0.1)" }}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} sm={8} md={6}>
              {book ? (
                <img
                  src={book.image}
                  alt="Book Cover"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0px 6px 10px rgba(0,0,0,0.2)",
                  }}
                />
              ) : (
                <p>Loading cover...</p>
              )}
            </Col>
            <Col xs={24} sm={16} md={18}>
              {book && (
                <>
                  <Paragraph><strong>Author:</strong> {book.author}</Paragraph>
                  <Rate allowHalf disabled value={book.rating} /> <Text>({book.reviews} Reviews)</Text>
                  <Divider />
                  <Paragraph><strong>Publisher:</strong> {book.publisher}</Paragraph>
                  <Paragraph><strong>Published:</strong> {book.publishedDate}</Paragraph>
                  <Paragraph><strong>ISBN:</strong> {book.isbn}</Paragraph>
                  <Paragraph><strong>Language:</strong> {book.language}</Paragraph>
                  <Paragraph><strong>Subjects:</strong> {book.subjects.join(", ")}</Paragraph>
                  <Space size="middle">
                    <Button type="primary" size="large">Borrow</Button>
                    <Button size="large">Wishlist</Button>
                  </Space>
                </>
              )}
            </Col>
          </Row>
        </Card>

        {/* Top Quotes */}
        <Card style={{ marginTop: "40px" }}>
          <Title level={3}>Top Quotes</Title>
          <Carousel autoplay dots={false} style={{ textAlign: "center" }}>
            {quotes.map((quote, index) => (
              <div key={index}>
                <Text italic style={{ fontSize: "18px" }}>"{quote}"</Text>
              </div>
            ))}
          </Carousel>
        </Card>

        {/* Book Themes */}
        <Card style={{ marginTop: "40px" }}>
          <Title level={3}>Themes</Title>
          <Space size="middle">
            {book && book.themes.map((theme, index) => (
              <Tag key={index} color="blue">{theme}</Tag>
            ))}
          </Space>
        </Card>

        {/* More by This Author */}
        <Card style={{ marginTop: "40px" }}>
          <Title level={3}>More by {book ? book.author : "the author"}</Title>
          <Row gutter={16}>
            {authorBooks.map((item) => (
              <Col key={item.id} span={6}>
                <Card cover={<img alt={item.title} src={item.image} style={{ height: "200px", objectFit: "cover" }} />}>
                  <Card.Meta title={item.title} description={item.author} />
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default BookPage;
