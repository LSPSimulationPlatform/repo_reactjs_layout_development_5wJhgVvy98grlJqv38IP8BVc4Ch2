import React from 'react'; // Import React to enable JSX and component definitions
import { Layout, Menu, Typography } from 'antd'; // Import AntD layout, menu and typography primitives
import {
  HomeOutlined, // Icon for Home menu item
  UserOutlined, // Icon for Users menu item
  InfoCircleOutlined, // Icon for About menu item
  PlusOutlined, // Icon for Create User menu item
} from '@ant-design/icons'; // Ant Design icon set


const { Sider } = Layout; // Destructure Sider from Layout for concise usage
const { Title } = Typography; // Destructure Title for concise usage in the brand area

const Sidebar: React.FC<any> = ({ // Sidebar component accepts layout/navigation props
  collapsed, // boolean: whether sider is collapsed
  setCollapsed, // function: setter to toggle collapsed state
  navigate, // function: navigate to routes (usually from react-router)
  location, // location object: current route path used to mark selected menu item
}) => {
  const menuItems = [ // Define menu entries displayed in the sidebar
    { key: '/', icon: <HomeOutlined />, label: 'Home' }, // Home route
    { key: '/about', icon: <InfoCircleOutlined />, label: 'About' }, // About page route
    { key: '/users', icon: <UserOutlined />, label: 'Users' }, // Users list route
    { key: '/create-user', icon: <PlusOutlined />, label: 'Create User' }, // Create user route
  ];

  return (
    <Sider
      trigger={null} // Hide the default trigger, using custom toggle elsewhere
      collapsible // Make the sider collapsible
      collapsed={collapsed} // Controlled collapsed state provided via prop
      breakpoint="md" // Collapse automatically at the 'md' breakpoint
      onBreakpoint={(broken) => setCollapsed(broken)} // Update collapsed state when breakpoint changes
      style={{
        overflow: 'auto', // Allow scrolling if menu content exceeds viewport height
        height: '100vh', // Full viewport height so the sider fills the left side
        position: 'fixed', // Fix position so the sider stays when content scrolls
        left: 0, // Anchor to the left
        top: 0, // Anchor to the top
        bottom: 0, // Anchor to the bottom
        zIndex: 1000, // Keep sider above other content layers
      }}
    >
      <div
        style={{
          height: 32, // small brand bar height
          margin: 16, // spacing around the brand area
          background: 'rgba(255, 255, 255, 0.2)', // translucent background for brand area
          borderRadius: 6, // rounded corners for the brand container
          display: 'flex', // flex to center content
          alignItems: 'center', // vertically center brand content
          justifyContent: 'center', // horizontally center brand content
        }}
      >
        {!collapsed && ( // Only show full title when sider is expanded
          <Title level={4} style={{ color: 'white', margin: 0 }}>
            AntD Application {/* Brand/title displayed in the sider when expanded */}
          </Title>
        )}
      </div>

      <Menu
        theme="dark" // Dark theme to match typical sidebar styling
        mode="inline" // Inline mode for vertical menu layout
        selectedKeys={[location.pathname]} // Highlight the menu item matching current path
        items={menuItems} // Menu entries defined above
        onClick={({ key }) => navigate(key)} // Navigate to the selected route when menu item clicked
      />
    </Sider>
  );
};

export default Sidebar; // Default export so layout can import and render this sidebar component
