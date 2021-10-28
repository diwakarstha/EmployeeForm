import React from "react";
import { Form, Input, Button, Space, Card, Select, DatePicker } from "antd";
const { Option } = Select;

const EmployeeForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="977">+977</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );
  return (
    <React.Fragment>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card title="Employee Form">
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ prefix: "977", remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
            >
              <Input placeholder="Enter firstname" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please input your lastname!" },
              ]}
            >
              <Input placeholder="Enter lastname" />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                placeholder="Enter phone number"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Please select country!" }]}
            >
              <Select placeholder="select your country">
                <Option value="nepal">Nepal</Option>
                <Option value="usa">United State</Option>
                <Option value="canada">Canada</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="designation"
              label="Designation"
              rules={[
                { required: true, message: "Please select designation!" },
              ]}
            >
              <Select placeholder="select your designation">
                <Option value="ceo">CEO</Option>
                <Option value="se">Software Engineer</Option>
                <Option value="jd">Juniour Developer</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="start-date"
              label="Start Date"
              rules={[{ required: true, message: "Please select start date!" }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </React.Fragment>
  );
};

export default EmployeeForm;
