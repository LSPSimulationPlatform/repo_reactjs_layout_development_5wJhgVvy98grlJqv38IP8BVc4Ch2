import React from 'react'; // React core: enables JSX and defines functional components
import { Button } from 'antd'; // Ant Design Button component used for the clickable action
import { 
  UserOutlined, // icon used for 'user' action
  RightOutlined, // trailing icon used inside every action button
  ArrowUpOutlined // icon used for 'arrowUp' action
} from '@ant-design/icons'; // import icons from Ant Design's icon package

// ActionButton props:
// - type: AntD Button type (default || primary etc.)
// - icon: string key selecting which icon to render inside the button
// - text: visible label shown inside the button
// - onClick: click handler invoked when the button is pressed
const ActionButton: React.FC<any> = ({ 
  type = 'default', // default to 'default' button styling when not provided
  icon, // string key controlling which icon to render (e.g., 'user' | 'arrowUp')
  text, // visible button label
  onClick // click handler passed from parent
}) => {
  // getIcon: map the icon key to a JSX icon element
  const getIcon = () => {
    switch (icon) {
      case 'user': // when icon prop === 'user'
        return <UserOutlined />; // render the user icon
      case 'arrowUp': // when icon prop === 'arrowUp'
        return <ArrowUpOutlined />; // render the upward arrow icon
      default: // fallback for unknown or undefined icon keys
        return null; // no leading icon rendered
    }
  };

  // Render the AntD Button:
  // - type: passed through to control visual emphasis
  // - icon: leading icon returned by getIcon()
  // - onClick: callback fired when the user clicks the button
  // - block: makes the button stretch to the container width (good for stacked actions)
  // Inside the button we render:
  // - text: the primary label
  // - RightOutlined: trailing affordance indicating forward/action
  return (
    <Button 
      type={type} 
      icon={getIcon()} 
      onClick={onClick}
      block
    >
      {text} {/* visible label shown to the user */}
      <RightOutlined /> {/* trailing chevron/icon indicating continuation */}
    </Button>
  );
};

export default ActionButton; // Default export so other modules can import and reuse this component