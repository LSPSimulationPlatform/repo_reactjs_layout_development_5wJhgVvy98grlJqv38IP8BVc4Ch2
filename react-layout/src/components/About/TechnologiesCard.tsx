import React from 'react'; // Import React to enable JSX and React types (required by some toolchains)
import { Card, Tag, Typography } from 'antd'; // Ant Design UI primitives: Card container, Tag badges, Typography text
import useAbout from '../../hooks/useAbout.tsx'; // Custom hook providing about-page data (technologies array)

const { Paragraph } = Typography; // Destructure Paragraph from Typography for concise usage

const TechnologiesCard: React.FC = () => { // Define component as React Functional Component with no props
  const { technologies } = useAbout(); // Call hook to retrieve technologies array used to render Tag list

  return (
    <Card title="Technologies Used"> {/* Card: visual container with a title */}
      <div style={{ marginBottom: 16 }}> {/* Wrapper div: spacing below the tag list */}
        {technologies.map((tech, index) => ( /* Map over technologies -> render a Tag per tech */
          <Tag 
            key={index} /* Key: using index for stable demo arrays; prefer stable id for dynamic data */
            color={tech.color} /* Tag color derived from tech metadata (string or preset) */
            style={{ marginBottom: 8 }} /* Small bottom margin so tags wrap with spacing */
          >
            {tech.name} {/* Render technology name inside the Tag */}
          </Tag>
        ))}
      </div>

      <Paragraph>
        {/* Paragraph: explanatory text about why these technologies were chosen */}
        This project leverages modern web technologies to create a robust and scalable
        application architecture. Each technology is carefully chosen to provide the
        best developer experience and user interface.
      </Paragraph>
    </Card>
  );
};

export default TechnologiesCard; // Default export so About page can import and render this card