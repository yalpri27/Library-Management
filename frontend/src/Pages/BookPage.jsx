import React from "react";
import RecommendationsSection from "../components/RecommendationsSection";
import BookDetails from "../components/BookDetails";
import FeaturedEditions from "../components/FeaturedEditions";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";

import { Carousel } from "antd";
import {
  Layout,
  Typography,
  Row,
  Col,
  Image,
  Button,
  Card,
  Divider,
  List,
  Space,
} from "antd";
import SuggestionsSection from "../components/SuggestionsSection";

const { Content } = Layout;
const { Title, Text, Link } = Typography;
import { useParams } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

const BookPage = () => {
  const { id } = useParams();

  let bookId = id.replace(/-/g, " ");
  console.log("Book ID:", bookId); // This will log the book ID to the console

  const [bookDetails, setBookDetails] = useState(null);

  const fetchBookDetails = async () => {
    try {
      const bookRef = doc(db, "books", bookId);
      const bookSnapshot = await getDoc(bookRef);

      if (bookSnapshot.exists()) {
        setBookDetails({ id: bookSnapshot.id, ...bookSnapshot.data() });
      } else {
        console.error("Book not found in the database.");
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  // Fetch book details when the component mounts
  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <Layout style={{ paddingTop: "0.5%" }}>
      <Content>
        <Row gutter={32}>
          {/* Sidebar */}
          <Col xs={24} md={6}>
            <Card
              style={{ borderRadius: 10 }}
              cover={
                <Image
                  alt="Visions of the daughters of Albion"
                  src={bookDetails?.coverImage}
                  preview={false}
                  style={{ borderRadius: 10 }}
                />
              }
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Button type="primary" block>
                  Borrow ▼
                </Button>
                <Button block>Want to Read ▼</Button>
              </Space>

              <Divider />

              <Space
                direction="horizontal"
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Text>⭐</Text>
                <Text>✏️ Review</Text>
                <Text>📝 Notes</Text>
                <Text>🔗 Share</Text>
              </Space>

              <Divider />

              <Divider />

              <Text strong>Check nearby libraries</Text>
              <ul
                style={{ paddingLeft: 20, marginBottom: 24, lineHeight: "2" }}
              >
                <li>
                  <Link href="#">Library.link</Link>
                </li>
                <li>
                  <Link href="#">WorldCat</Link>
                </li>
              </ul>

              <Text strong>Buy this book</Text>
              <ul
                style={{ paddingLeft: 20, marginBottom: 16, lineHeight: "2" }}
              >
                <li>
                  <Link href="#">Better World Books</Link>
                </li>
                <li>
                  <Link href="#">Amazon</Link>
                </li>
                <li>
                  <Link href="#">More</Link>
                </li>
              </ul>

              <Text
                type="secondary"
                style={{ fontSize: 12, lineHeight: "1.8" }}
              >
                When you buy books using these links the Internet Archive may
                earn a small commission.
              </Text>
            </Card>
          </Col>

          {/* Main Book Details */}
          <Col xs={24} md={18}>
            <Title level={2}>{bookDetails?.title}</Title>
            <Text>
              by <Link>{bookDetails?.author}</Link>
            </Text>
            <br />
            <Text strong style={{ color: "#faad14" }}>
              ★ 5.0 (2 ratings)
            </Text>
            <Text style={{ marginLeft: 10 }}>
              {" "}
              · 2 Want to read · 1 Have read
            </Text>
            <Divider />

            <Row gutter={16} style={{ marginBottom: 20 }}>
              <Col>
                <Text strong>Publish Date:</Text> 2002
              </Col>
              <Col>
                <Text strong>Publisher:</Text> Huntington Library
              </Col>
              <Col>
                <Text strong>Language:</Text> English
              </Col>
              <Col>
                <Text strong>Pages:</Text> 78
              </Col>
            </Row>

            <Text type="secondary">
              Subjects: English poetry, Illustrations, Poetry (poetic works by
              one author)
            </Text>
            <br />
            <Text type="secondary">People: William Blake (1757–1827)</Text>
            <Divider />

            <Title level={4}>Showing 2 featured editions</Title>
            <FeaturedEditions />
            <BookDetails />

            {/* Community Reviews Section */}
            <Card style={{ marginTop: 24 }}>
              <Title level={5}>Community Reviews (0)</Title>
              <Text>
                No community reviews have been submitted for this work.
              </Text>
              <br />
              <Link href="#" style={{ display: "inline-block", marginTop: 8 }}>
                + Log in to add your community review
              </Link>
            </Card>

            {/* Lists Section */}
            <Card style={{ marginTop: 24 }}>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ margin: 0 }}>
                  Lists
                </Title>
                <Link href="#">See All</Link>
              </Row>

              <Row gutter={16}>
                {[1, 2, 3].map((item) => (
                  <Col key={item}>
                    <Card
                      hoverable
                      style={{ width: 120 }}
                      cover={
                        <Image
                          alt="List cover"
                          src="https://covers.openlibrary.org/b/id/240726-L.jpg"
                          preview={false}
                        />
                      }
                    >
                      <Link
                        href="#"
                        strong
                        style={{ display: "block", marginBottom: 4 }}
                      >
                        Art & Architecture
                      </Link>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        from <Link href="#">Stephen Partington</Link>
                      </Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
            <SuggestionsSection />
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};

export default BookPage;
