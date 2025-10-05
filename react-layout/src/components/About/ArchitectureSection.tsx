import React from 'react'; // Import React to enable JSX and React types (required by some toolchains)
import { Card, Typography } from 'antd'; // Import Ant Design Card and Typography UI primitives used in this component

const { Title, Paragraph, Text } = Typography; // Destructure Title, Paragraph, Text for concise JSX usage

const ArchitectureSection: React.FC = () => { // Define ArchitectureSection as a React Functional Component (no props expected)
  return (
    <Card> {/* Card: visual container with padding and border for the architecture overview */}
      <Title level={4}>Architecture Overview</Title> {/* Title: H4 semantic heading for the section */}
      <Paragraph>
        The application follows a modular architecture pattern with clear separation of concerns:
      </Paragraph> {/* Paragraph: short explanatory lead-in to the list below */}
      <ul>
        <li>
          <Text strong>Layout Component:</Text> {/* Text strong: highlights the term "Layout Component" */}
          {' '}Provides the main application shell with navigation{/* plain text: explains purpose of layout component */}
        </li>
        <li>
          <Text strong>Page Components:</Text>{' '} {/* highlights "Page Components" */}
          Individual pages with specific functionality{/* explains role of page components */}
        </li>
        <li>
          <Text strong>Routing:</Text>{' '} {/* highlights "Routing" */}
          React Router v6 with nested routes and outlet pattern{/* describes routing approach used */}
        </li>
        <li>
          <Text strong>Responsive Design:</Text>{' '} {/* highlights "Responsive Design" */}
          Mobile-first approach with breakpoint-based layouts{/* explains responsiveness strategy */}
        </li>
        <li>
          <Text strong>Component Library:</Text>{' '} {/* highlights "Component Library" */}
          Consistent UI using Ant Design components{/* explains UI consistency source */}
        </li>
      </ul>
    </Card>
  );
};

export default ArchitectureSection; // Default export so other modules (About page) can import and render this section