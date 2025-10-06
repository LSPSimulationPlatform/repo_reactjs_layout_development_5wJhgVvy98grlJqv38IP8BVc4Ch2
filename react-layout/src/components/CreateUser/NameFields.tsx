import React from 'react'; // React core import required for JSX and component definitions
import { Form, Input, Col } from 'antd'; // Ant Design: Form controls, Input field, responsive column
import { UserOutlined } from '@ant-design/icons'; // Icon used as input prefix to indicate user/name fields

const NameFields: React.FC = () => { // Define NameFields as a functional React component (no props expected)
  return (
    <> {/* Fragment groups the two Col elements without adding an extra DOM node */}
      <Col xs={24} sm={12}> {/* Left column: full width on extra-small screens, half width on small+ screens */}
        <Form.Item
          label="First Name" /* Label displayed above the input to describe the field */
          name="firstName" /* Key used by the parent AntD Form for this field's value */
          rules={[ /* Validation rules applied by AntD Form for this field */
            { required: true, message: 'Please enter first name!' }, /* Required check with message */
            { min: 2, message: 'First name must be at least 2 characters!' }, /* Minimum length rule */
          ]}
        >
          <Input 
            prefix={<UserOutlined />} /* Prefix icon inside the input to indicate it's a name field */
            placeholder="Enter first name" /* Placeholder guiding the user what to type */
            size="large" /* Size prop increases input height for better accessibility/touch */
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}> {/* Right column: full width on extra-small, half width on small+ */}
        <Form.Item
          label="Last Name" /* Label shown above the last name input */
          name="lastName" /* Form key for binding last name value */
          rules={[ /* Validation rules for last name field */
            { required: true, message: 'Please enter last name!' }, /* Required validation */
            { min: 2, message: 'Last name must be at least 2 characters!' }, /* Minimum length validation */
          ]}
        >
          <Input 
            prefix={<UserOutlined />} /* Reuse user icon as prefix for visual consistency */
            placeholder="Enter last name" /* Placeholder example for last name */
            size="large" /* Keep size consistent with first name input */
          />
        </Form.Item>
      </Col>
    </>
  );
};

export default NameFields; // Default export so parent CreateUser form can import and render these fields