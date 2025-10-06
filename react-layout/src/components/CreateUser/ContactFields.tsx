import React from 'react'; // Import React to enable JSX and define functional components
import { Form, Input, Col } from 'antd'; // Import AntD form and layout primitives used in these fields
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'; // Import icons used as input prefixes

const ContactFields: React.FC = () => { // Define ContactFields as a React functional component (no props)
  return (
    <> {/* Fragment groups the two Col elements without adding an extra DOM node */}
      <Col xs={24} sm={12}> {/* Left column: full width on xs, half width on sm+ */}
        <Form.Item
          label="Email Address" /* Label shown above the email input */
          name="email" /* Field key used by the parent AntD Form (form values under 'email') */
          rules={[ /* Validation rules applied by AntD Form for the email field */
            { required: true, message: 'Please enter email address!' }, /* Required rule with message */
            { type: 'email', message: 'Please enter a valid email!' }, /* Email format validation rule */
          ]}
        >
          <Input 
            prefix={<MailOutlined />} /* Icon shown inside the input to indicate email */
            placeholder="Enter email address" /* Placeholder guiding the user */
            size="large" /* Larger size for better touch targets */
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}> {/* Right column: full width on xs, half width on sm+ */}
        <Form.Item
          label="Phone Number" /* Label shown above the phone input */
          name="phone" /* Field key used by the parent AntD Form (form values under 'phone') */
          rules={[ /* Validation rules applied by AntD Form for the phone field */
            { required: true, message: 'Please enter phone number!' }, /* Required rule with message */
            { pattern: /^\+?[\d\s\-\(\)]+$/, message: 'Please enter a valid phone number!' }, /* Simple phone regex validation */
          ]}
        >
          <Input 
            prefix={<PhoneOutlined />} /* Icon shown inside the input to indicate phone */
            placeholder="+1 (555) 123-4567" /* Placeholder example of expected format */
            size="large" /* Larger size for consistent UI with email field */
          />
        </Form.Item>
      </Col>
    </>
  );
};

export default ContactFields; // Default export so CreateUser page can import and render these contact fields