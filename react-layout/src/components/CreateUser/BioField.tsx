import React from 'react'; // Import React to enable JSX and define the component
import { Col, Form, Input } from 'antd'; // Import Ant Design layout and form primitives used in this field

const { TextArea } = Input; // Destructure TextArea from Input for concise usage below

const BioField: React.FC = () => { // Define BioField as a React functional component (no props expected)
  return (
    <Col xs={24}> {/* Col: responsive grid column; xs=24 makes it full-width on extra-small screens */}
      <Form.Item
        label="Bio" /* Label shown above the field to describe its purpose */
        name="bio" /* Field name used by the surrounding AntD Form for values and submission */
        rules={[ /* Validation rules array applied by AntD Form */
          { max: 500, message: 'Bio cannot exceed 500 characters!' }, /* Max length rule with user-facing message */
        ]}
      >
        <TextArea 
          rows={4} /* rows: visible height in lines for the textarea */
          placeholder="Enter a brief bio (optional)" /* Placeholder guiding the user what to enter */
          showCount /* showCount: display character counter to the user */
          maxLength={500} /* maxLength: enforce client-side character limit in the UI */
        />
      </Form.Item>
    </Col>
  );
};

export default BioField; // Default export so CreateUser page can import and render this field