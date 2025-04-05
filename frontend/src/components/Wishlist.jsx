import React, { useState } from "react";
import {
  Layout,
  Typography,
  Input,
  Button,
  Select,
  Radio,
  Space,
  Card,
  Row,
  Col,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar"; // ✅ Sidebar import

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// 🔹 Mock Book Data
const bookData = {
  favorites: [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://bukharibooks.com/wp-content/uploads/2020/03/pride-470x470.png",
    },
  ],
  "to-read": [
    {
      title: "1984",
      author: "George Orwell",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoP23ZEOMCHxVOowNRoxu-DmCvxEkLlIU9A&s",
    },
  ],
  wishlist: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
    },
  ],
};

const Wishlist = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("favorites");

  const books = bookData[selectedCollection] || [];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout style={{ padding: "40px", background: "#fff", flex: 1 }}>
        <Content style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Title level={1}>Wishlist</Title>

          <Title level={3}>Search</Title>

          {/* Collection Dropdown */}
          <div style={{ marginBottom: "20px" }}>
            <Text strong>Select Collection</Text>
            <Select
              value={selectedCollection}
              onChange={setSelectedCollection}
              style={{ width: "100%", marginTop: "5px" }}
              placeholder="Select a collection"
            >
              <Option value="favorites">Favorites</Option>
              <Option value="to-read">To Read</Option>
              <Option value="wishlist">Wishlist</Option>
            </Select>
            <Text type="secondary">Choose the collection you are adding items to.</Text>
          </div>

          {/* Item Type */}
          {/* <div style={{ marginBottom: "20px" }}> */}
            {/* <Text strong>Select Item Type</Text>
            <Radio.Group defaultValue="book">
              <Space size="large">
                <Radio value="book">📖 Book</Radio>
                <Radio value="film">🎬 Film</Radio>
                <Radio value="music">🎵 Music</Radio>
                <Radio value="video-game">🎮 Video Game</Radio>
              </Space>
            </Radio.Group> */}
            {/* <Text type="secondary">The type of item you are adding.</Text>
          </div> */}

          {/* Search Input */}
          <div style={{ marginBottom: "40px" }}>
            <Text strong>Search for Books</Text>
            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <Input
                placeholder="Harry Potter and The Cursed Child"
                prefix={<SearchOutlined />}
                style={{ flex: 1 }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="primary">Search</Button>
            </div>
            <Text type="secondary">Search by ISBN or keyword. ISBN search will automatically add an item.</Text>
          </div>

          {/* 📚 Book Display Section */}
          <Title level={3} style={{ marginBottom: "20px" }}>
            {selectedCollection.charAt(0).toUpperCase() + selectedCollection.slice(1)} Books
          </Title>

          <Row gutter={[24, 24]}>
            {books.map((book, index) => (
              <Col key={index} xs={24} sm={18} md={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={book.title}
                      src={book.image}
                      style={{ height: "240px", width: "200%",   objectFit: "cover", borderRadius: "10px" }}
                    />
                  }
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    transition: "all 0.3s",
                  }}
                >
                  <Card.Meta title={book.title} description={book.author} />
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wishlist;
