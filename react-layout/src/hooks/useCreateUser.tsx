import type { UploadProps } from "antd"; // <-- Yalnız type üçün
import { Form, message } from "antd"; // <-- Qalanları normal import
import { useNavigate } from "react-router-dom"; // Hook to programmatically navigate after successful form submit

// Custom hook that encapsulates CreateUser form instance, upload configuration and handlers
export default function useCreateUser() {
  const navigate = useNavigate(); // Get navigate function to change routes programmatically
  const [form] = Form.useForm<any>(); // Create an AntD Form instance for controlled form operations

  // uploadProps: configuration passed into AntD <Upload /> to control behavior and validation
  const uploadProps: UploadProps = {
    name: "avatar", // field name sent with upload requests (if used)
    listType: "picture", // show thumbnails for selected files
    maxCount: 1, // allow only a single file selection
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      return false; // prevent automatic upload
    },
    onChange: (info) => {
      console.log("Upload info:", info);
    },
  };

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success("User created successfully!");
    setTimeout(() => {
      navigate("/users");
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Please check the form for errors");
  };

  const onReset = () => {
    form.resetFields();
    message.info("Form has been reset");
  };

  return {
    navigate,
    form,
    uploadProps,
    onFinish,
    onFinishFailed,
    onReset,
  };
}
