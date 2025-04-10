import React, { useState } from 'react';

import {
  Layout,
  Button,
  Input,
  Form,
  Select,
  Upload,
  DatePicker,
  message as antdMessage,
  Alert,
  Typography,
  Space,
  Result,
  Row,
  Col,
} from 'antd';
import {
  PlusCircleOutlined,
  SaveOutlined,
  UploadOutlined
} from '@ant-design/icons';
import moment from 'moment';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

export default function AddBooksAntD() {
  const [form] = Form.useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [alert, setAlert] = useState(null);

  const onFinish = (values) => {
    console.log('Submitting book:', {
      ...values,
      publishYear: values.publishYear?.format('YYYY'),
    });
    setShowSuccess(true);
    form.resetFields();
  };

  const onFinishFailed = () => {
    setAlert({ type: 'error', text: 'Please fill in all required fields' });
  };

  const normFile = (e) => {
    return Array.isArray(e) ? e : e?.fileList;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 16 }}>
        <Title level={3} style={{ margin: 0 }}>Add New Book</Title>
      </Header>
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
        {alert && (
          <Alert
            type={alert.type}
            message={alert.text}
            closable
            onClose={() => setAlert(null)}
            style={{ marginBottom: 16 }}
          />
        )}

        {showSuccess ? (
          <Result
            status="success"
            title="Book Added Successfully!"
            subTitle="The book has been added to your library inventory."
            extra={[
              <Button type="primary" onClick={() => setShowSuccess(false)} icon={<PlusCircleOutlined />}>
                Add Another Book
              </Button>,
              <Button onClick={() => setShowSuccess(false)}>
                View All Books
              </Button>,
            ]}
          />
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Book Title"
                  name="title"
                  rules={[{ required: true, message: 'Please enter the book title' }]}
                >
                  <Input placeholder="Enter book title" />
                </Form.Item>
                <Form.Item
                  label="Author"
                  name="author"
                  rules={[{ required: true, message: 'Please enter the author' }]}
                >
                  <Input placeholder="Enter author name" />
                </Form.Item>
                <Form.Item
                  label="ISBN"
                  name="isbn"
                  rules={[{ required: true, message: 'Please enter ISBN' }]}
                >
                  <Input placeholder="Enter ISBN number" />
                </Form.Item>
                <Form.Item
                  label="Publisher"
                  name="publisher"
                >
                  <Input placeholder="Enter publisher name" />
                </Form.Item>
                <Form.Item
                  label="Publication Year"
                  name="publishYear"
                >
                  <DatePicker picker="year" style={{ width: '100%' }} placeholder="Select year" />
                </Form.Item>
                <Form.Item
                  label="Upload Cover Image"
                  name="cover"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload name="cover" listType="picture" maxCount={1} beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Category"
                  name="category"
                >
                  <Select placeholder="Select Category">
                    <Option value="fiction">Fiction</Option>
                    <Option value="non-fiction">Non-Fiction</Option>
                    <Option value="science">Science</Option>
                    <Option value="history">History</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Copies"
                  name="copies"
                  initialValue={1}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  label="No. of Pages"
                  name="pages"
                  rules={[{ required: true, message: 'Please enter the number of pages' }]}
                >
                  <Input type="number" placeholder="Enter total pages" min={1} />
                </Form.Item>
                <Form.Item
                  label="Language"
                  name="language"
                  rules={[{ required: true, message: 'Please select language' }]}
                >
                  <Select placeholder="Select Language">
                    <Option value="english">English</Option>
                    <Option value="hindi">Hindi</Option>
                    <Option value="french">French</Option>
                    <Option value="spanish">Spanish</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Description"
                  name="description"
                >
                  <Input.TextArea rows={4} placeholder="Enter book description" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>Submit</Button>
                <Button onClick={() => form.resetFields()}>Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        )}
      </Content>
    </Layout>
  );
}