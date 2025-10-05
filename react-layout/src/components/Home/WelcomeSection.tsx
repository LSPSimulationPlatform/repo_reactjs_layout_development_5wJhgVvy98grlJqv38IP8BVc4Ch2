import React from 'react'; // Import React so JSX compiles and component can be defined
import { Typography } from 'antd'; // Import Ant Design Typography primitives for semantic text

const { Title, Paragraph } = Typography; // Destructure Title and Paragraph for concise JSX usage

const WelcomeSection: React.FC = () => { // Define WelcomeSection as a React functional component (no props)
  return (
    <> {/* Fragment: groups Title + Paragraph without adding extra DOM node */}
      <Title level={2}>Welcome to Dashboard</Title> {/* Title: H2-level semantic heading shown to users */}
      <Paragraph>
        {/* Paragraph: explanatory text providing context about the dashboard demo */}
        This is a comprehensive demo of Ant Design layout components with React Router.
        The layout includes a responsive sidebar, header with user menu, and footer.
      </Paragraph>
    </>
  );
};

export default WelcomeSection; // Default export so parent pages (e.g., Home) can import and render this section