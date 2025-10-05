import React from 'react'; // Import React to enable JSX and define the functional component
import { Card, Progress } from 'antd'; // Import AntD Card and Progress (Progress imported here though individual items use ProgressItem)
import ProgressItem from './ProgressItem.tsx'; // Import the small reusable ProgressItem component

const ProjectProgressCard: React.FC = () => { // Define ProjectProgressCard as a React functional component
  return (
    <Card title="Project Progress" bordered={false}> {/* Card: container with title and no outer border */}
      {/* Render a ProgressItem for the Website Redesign task (animated/active) */}
      <ProgressItem 
        title="Website Redesign" /* label shown for this progress entry */
        percent={75} /* numeric completion percent passed to the item */
        status="active" /* visual status (active shows animation) */
      />
      {/* Render a ProgressItem for the Mobile App task (default/normal status) */}
      <ProgressItem 
        title="Mobile App" /* label for mobile app progress */
        percent={50} /* 50% complete */
      />
      {/* Render a ProgressItem for the API Development task (success state) */}
      <ProgressItem 
        title="API Development" /* label for API development progress */
        percent={90} /* 90% complete */
        status="success" /* success state indicates near-completion */
      />
    </Card>
  );
};

export default ProjectProgressCard; // Default export so parent modules (e.g., DashboardContent) can import and render this card