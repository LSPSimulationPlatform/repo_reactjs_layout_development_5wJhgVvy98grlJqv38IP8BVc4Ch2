import React from 'react'; // Import React to enable JSX and component definitions
import { Form, Upload, Button, Col } from 'antd'; // Ant Design components used in this field: Form.Item, Upload wrapper, Button, Col layout
import { UploadOutlined } from '@ant-design/icons'; // Icon shown inside the upload button
import useCreateUser from '../../hooks/useCreateUser.tsx'; // Custom hook providing form helpers and uploadProps for this form

const AvatarField: React.FC = () => { // Define AvatarField as a functional component (no props)
  const { uploadProps } = useCreateUser(); // Destructure uploadProps from the hook (controls beforeUpload, onChange, file list, etc.)

  return (
    <Col xs={24}> {/* Col: responsive grid column, full width on extra-small screens */}
      <Form.Item
        label="Profile Picture" /* Label displayed above the upload control */
        name="avatar" /* Form field name used in form values */
      >
        <Upload {...uploadProps}> {/* Upload: AntD upload wrapper; spread uploadProps from hook to control behavior */}
          <Button icon={<UploadOutlined />} size="large"> {/* Button triggers file selection when clicked */}
            Click to Upload {/* Visible button text instructing the user */}
          </Button>
        </Upload>
      </Form.Item>
    </Col>
  );
};

export default AvatarField; // Default export so CreateUser page can import and render this field