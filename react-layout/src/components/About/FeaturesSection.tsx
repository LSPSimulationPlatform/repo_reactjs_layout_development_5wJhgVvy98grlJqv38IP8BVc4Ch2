import React from 'react'; // Import React to enable JSX and React types (required by some toolchains)
import { Typography, Row, Col, Card } from 'antd'; // Import Ant Design primitives used in this component
import useAbout from '../../hooks/useAbout.tsx';

const { Title } = Typography; // Destructure Title for concise usage in JSX

const FeaturesSection: React.FC = () => { // Define FeaturesSection as a React Functional Component (no props expected)
  const { features } = useAbout(); // Call useAbout hook and destructure features array used for rendering cards

  return (
    <> {/* Fragment groups multiple children without adding an extra DOM node */}
      <Title level={3}>Key Features</Title> {/* H3 heading for the features section */}

      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {/* Row: AntD grid row with horizontal and vertical gutter spacing and bottom margin */}
        {features.map((feature, index) => (
          /* Map over features array to render one Col/Card per feature.
             index used as key here for static demo data; prefer stable ids for dynamic lists. */
          <Col xs={24} sm={12} lg={6} key={index}>
            {/* Col: responsive column sizes
                - xs=24: full width on extra-small screens
                - sm=12: half width on small screens
                - lg=6: quarter width on large screens */}
            <Card hoverable style={{ height: '100%' }}>
              {/* Card: hoverable to indicate interactivity; height 100% to equalize row card heights */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                {feature.icon} {/* Render the feature's icon JSX, centered above title/description */}
              </div>

              <Card.Meta
                title={feature.title} // Feature title displayed prominently
                description={feature.description} // Short description explaining the feature
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturesSection; // Default export so the About page can import and render this section