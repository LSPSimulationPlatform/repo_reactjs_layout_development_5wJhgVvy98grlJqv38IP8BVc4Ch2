// Import React to enable JSX and define the component
import React from 'react';
// Import Ant Design Form, Select and Col for form controls and responsive layout
import { Form, Select, Col } from 'antd';

// Destructure Option from Select for concise usage below
const { Option } = Select;

// Define RoleDepartmentFields as a React functional component (no props)
const RoleDepartmentFields: React.FC = () => {
  // Return JSX: two responsive columns containing Select controls for role and department
  return (
    <>
      {/* Left column: responsive sizing (full width xs, half width sm+) */}
      <Col xs={24} sm={12}>
        {/* Form.Item binds the Select to the parent AntD Form under the key "role" */}
        <Form.Item
          // Visible label displayed above the select control
          label="Role"
          // Field name used in form values and submission
          name="role"
          // Validation: require a selection and show a message if empty
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          {/* Select: dropdown to choose a user role; placeholder guides the user */}
          <Select placeholder="Select user role" size="large">
            {/* Option entries: each Option has a value and visible label */}
            <Option value="admin">Administrator</Option>
            <Option value="editor">Editor</Option>
            <Option value="viewer">Viewer</Option>
            <Option value="manager">Manager</Option>
          </Select>
        </Form.Item>
      </Col>

      {/* Right column: responsive sizing (full width xs, half width sm+) */}
      <Col xs={24} sm={12}>
        {/* Form.Item binds the Select to the parent AntD Form under the key "department" */}
        <Form.Item
          // Visible label shown above the department select
          label="Department"
          // Field name used in form values and submission
          name="department"
          // Validation: require selection and show message if not chosen
          rules={[{ required: true, message: 'Please select a department!' }]}
        >
          {/* Select: dropdown to choose department with a helpful placeholder */}
          <Select placeholder="Select department" size="large">
            {/* Option entries enumerate available departments with values and labels */}
            <Option value="engineering">Engineering</Option>
            <Option value="marketing">Marketing</Option>
            <Option value="sales">Sales</Option>
            <Option value="hr">Human Resources</Option>
            <Option value="finance">Finance</Option>
            <Option value="general">General</Option>
          </Select>
        </Form.Item>
      </Col>
    </>
  );
};

// Default export so parent CreateUser form can import and render these fields
export default RoleDepartmentFields;