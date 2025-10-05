import React from 'react'; // Import React for JSX and component creation
import { Layout, Button, Typography, Space, Dropdown, Avatar } from 'antd'; // AntD primitives used in header
import {
  MenuFoldOutlined, // Icon when menu is folded
  MenuUnfoldOutlined, // Icon when menu is unfolded
  UserOutlined, // Icon used for user/avatar
  SettingOutlined, // Icon for settings menu item
  LogoutOutlined, // Icon for logout menu item
} from '@ant-design/icons'; // Import icons from Ant Design

const { Header } = Layout; // Destructure Header from Layout for concise usage
const { Title } = Typography; // Destructure Title from Typography for concise usage

const HeaderBar: React.FC<any> = ({ collapsed, setCollapsed }) => { // HeaderBar receives collapsed state and setter
  const userMenuItems = [ // Define items for the user dropdown menu
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' }, // Profile menu entry
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' }, // Settings entry
    { type: 'divider' as const }, // Visual divider between groups
    { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', danger: true }, // Logout entry (danger)
  ];

  

  return (
    <Header
      style={{
        padding: '0 16px', // Horizontal padding inside header
        background: '#fff', // White background for header
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Vertically center items
        justifyContent: 'space-between', // Space between left and right groups
        borderBottom: '1px solid #f0f0f0', // Subtle bottom border for separation
      }}
    >
      <Space> {/* Left group: menu toggle + title */}
        <Button
          type="text" // Text-style button (no background)
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} // Toggle icon based on collapsed state
          onClick={() => setCollapsed(!collapsed)} // Toggle collapsed state when clicked
          style={{ fontSize: '16px', width: 64, height: 64 }} // Fixed sizing for consistent touch target
        />
        <Title level={4} style={{ margin: 0 }}> {/* App title with zero margin to align with button */}
          Dashboard {/* Visible title text */}
        </Title>
      </Space>

      <Dropdown
        menu={{ items: userMenuItems }} // Attach menu items and click handler
        placement="bottomRight" // Dropdown appears anchored to bottom-right of trigger
      >
        <Space style={{ cursor: 'pointer' }}> {/* Clickable area showing avatar and username */}
          <Avatar icon={<UserOutlined />} /> {/* Avatar: shows user icon or image */}
          <span>John Doe</span> {/* Static username placeholder; replace with dynamic user data */}
        </Space>
      </Dropdown>
    </Header>
  );
};

export default HeaderBar; // Default export so layout can import and use this header component
