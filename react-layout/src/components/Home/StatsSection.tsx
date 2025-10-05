import React from 'react'; // React core: required for JSX and component definitions
import { Row, Col } from 'antd'; // Ant Design grid primitives used to layout stat cards
import StatCard from './StatCard.tsx'; // Reusable StatCard component that renders a single statistic

// StatsSection: renders a responsive row of StatCard components from statsData prop
const StatsSection: React.FC<any> = ({ statsData }) => {
  return (
    // Row: AntD grid row with horizontal & vertical gutter and bottom spacing
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {/* Map over statsData to render one StatCard per stat object */}
      {statsData.map((stat, index) => (
        // Col: responsive column sizing (xs: full, sm: half, lg: third)
        <Col xs={24} sm={12} lg={8} key={index}>
          {/* StatCard: receives a single stat object (title, value, etc.) */}
          <StatCard stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

export default StatsSection; // Default export so parent pages (Home/Dashboard) can import and render this section