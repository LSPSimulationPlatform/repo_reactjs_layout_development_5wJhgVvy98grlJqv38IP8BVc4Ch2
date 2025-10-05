import React from 'react'; // Import React to enable JSX and component typing
import { Row, Col } from 'antd'; // Ant Design grid primitives used to layout the dashboard columns
import ProjectProgressCard from './ProjectProgressCard.tsx'; // Left column card showing project progress bars
import QuickActionsCard from './QuickActionsCard.tsx'; // Right column card containing quick action buttons

// DashboardContent props:
// - navigate: function passed from parent to perform navigation actions (e.g., react-router navigate)
const DashboardContent: React.FC<any> = ({ navigate }) => { // Functional component receiving navigate prop
  return (
    // Row: AntD grid row with horizontal and vertical spacing (gutter)
    <Row gutter={[16, 16]}>
      {/* Left Column: on xs screens full width, on large screens half width */}
      <Col xs={24} lg={12}>
        {/* ProjectProgressCard: renders multiple Progress bars describing project statuses */}
        <ProjectProgressCard />
      </Col>

      {/* Right Column: on xs screens full width, on large screens half width */}
      <Col xs={24} lg={12}>
        {/* QuickActionsCard: renders action buttons; pass navigate so buttons can change routes */}
        <QuickActionsCard navigate={navigate} />
      </Col>
    </Row>
  );
};

export default DashboardContent; // Default export so the parent Home page can import and render this content