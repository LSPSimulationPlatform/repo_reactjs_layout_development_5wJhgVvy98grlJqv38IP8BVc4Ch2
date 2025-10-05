import React from 'react'; // Import React to enable JSX and define the component
import { Layout } from 'antd'; // Import Ant Design Layout to access Footer subcomponent

const { Footer } = Layout; // Destructure Footer from Layout for concise usage below

const FooterBar: React.FC = () => { // Define FooterBar as a React functional component (no props)
  return (
    <Footer
      style={{
        textAlign: 'center', // Center the footer content horizontally
        background: '#f5f5f5', // Light gray background to separate footer from main content
        borderTop: '1px solid #e8e8e8', // Subtle top border to create a visual divider
      }}
    >
      {/* Visible footer text displayed to all users */}
      Ant Design Layout Demo ©2025 Created with ❤️
    </Footer>
  );
};

export default FooterBar; // Default export so layout components/pages can import and render this footer
