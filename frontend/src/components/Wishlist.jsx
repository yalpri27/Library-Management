import React, { useState } from "react";
import { Layout, Typography, Input, Button, Select, Radio, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar"; // ✅ Import Sidebar like in ContactForm

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const Wishlist = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* ✅ Sidebar Included */}
      <Sidebar />

      {/* ✅ Main Content */}
      <Layout style={{ padding: "40px", background: "#fff", flex: 1 }}>
        <Content style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Title level={1}>Wishlist</Title>
          <Title level={3}>Search</Title>

          {/* Select Collection */}
          <div style={{ marginBottom: "20px" }}>
            <Text strong>Select Collection</Text>
            <Select placeholder="Search" style={{ width: "100%", marginTop: "5px" }}>
              <Option value="favorites">Favorites</Option>
              <Option value="to-read">To Read</Option>
              <Option value="wishlist">Wishlist</Option>
            </Select>
            <Text type="secondary">Choose the collection you are adding items to.</Text>
          </div>

          {/* Select Item Type */}
          <div style={{ marginBottom: "20px" }}>
            <Text strong>Select Item Type</Text>
            <Radio.Group defaultValue="book">
              <Space size="large">
                <Radio value="book">📖 Book</Radio>
                <Radio value="film">🎬 Film</Radio>
                <Radio value="music">🎵 Music</Radio>
                <Radio value="video-game">🎮 Video Game</Radio>
              </Space>
            </Radio.Group>
            <Text type="secondary">The type of item you are adding.</Text>
          </div>

          {/* Search for Books */}
          <div style={{ marginBottom: "20px" }}>
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wishlist;