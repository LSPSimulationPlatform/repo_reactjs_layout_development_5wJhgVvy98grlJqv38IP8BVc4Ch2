import React from 'react'; // Import React to enable JSX and React types (required by some toolchains)
import { Typography } from 'antd'; // Import Ant Design Typography primitives for semantic text components

const { Title, Paragraph } = Typography; // Destructure Title and Paragraph for concise JSX usage

const AboutHeader: React.FC = () => { // Define AboutHeader as a React functional component (no props)
  return (
    <> {/* Fragment: groups multiple children without adding an extra DOM node */}
      <Title level={2}>About This Application</Title> {/* H2: primary page heading describing the page */}
      <Paragraph>
        This application demonstrates a comprehensive layout structure using Ant Design components
        with React Router for navigation. It showcases best practices for building scalable and
        maintainable React applications.
      </Paragraph> {/* Paragraph: explanatory text summarizing app purpose and architecture */}
    </>
  );
};

export default AboutHeader; // Default export so other modules (About page) can import and render this header