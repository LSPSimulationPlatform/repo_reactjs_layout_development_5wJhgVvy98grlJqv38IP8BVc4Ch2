import React from 'react'; // Import React to enable JSX and define functional components
import { Button, Space } from 'antd'; // Import Ant Design Button and Space for layout and controls
import { ArrowLeftOutlined } from '@ant-design/icons'; // Import left-arrow icon for visual affordance

 

const BackButton: React.FC<any> = ({ onBack }) => { // Define BackButton component; receives onBack callback prop
  return (
    <div style={{ marginBottom: 24 }}> {/* Container div: adds spacing below the button group */}
      <Space> {/* Space: arranges children horizontally with consistent gap */}
        <Button 
          icon={<ArrowLeftOutlined />} /* Icon: left arrow shown inside the button to indicate "back" */
          onClick={onBack} /* onClick: calls the provided onBack handler when the button is clicked */
        >
          Back to Users {/* Visible label inside the button that communicates the action */}
        </Button>
      </Space>
    </div>
  );
};

export default BackButton; // Default export so parent pages (CreateUser/Users) can import and use this component