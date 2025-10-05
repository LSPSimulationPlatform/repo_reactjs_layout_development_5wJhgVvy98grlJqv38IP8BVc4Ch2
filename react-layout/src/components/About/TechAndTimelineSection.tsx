import React from 'react'; // React core to allow JSX and component definitions
import { Row, Col, Card, Tag, Typography } from 'antd'; // Ant Design layout / display primitives used across child components
import TechnologiesCard from './TechnologiesCard.tsx'; // Child component that renders the "Technologies Used" card
import TimelineCard from './TimelineCard.tsx'; // Child component that renders the "Development Timeline" card

const TechAndTimelineSection: React.FC = () => { // Functional component: groups technologies + timeline into a responsive two-column row
  return (
    <Row gutter={[24, 24]}> {/* Row: responsive grid row with horizontal and vertical spacing (gutter) */}
      <Col xs={24} lg={12}> {/* Left column: full width on xs, half width on large screens */}
        <TechnologiesCard /> {/* Child: renders technology tags and explanatory text inside an AntD Card */}
      </Col>

      <Col xs={24} lg={12}> {/* Right column: full width on xs, half width on large screens */}
        <TimelineCard /> {/* Child: renders project / development timeline using AntD Timeline inside a Card */}
      </Col>
    </Row>
  );
};

export default TechAndTimelineSection; // Default export so About page can import and render this composed section