import React from 'react'; // React core: enables JSX and component definitions
import { Card, Space } from 'antd'; // Ant Design Card for container, Space for vertical spacing/layout
import ActionButton from './ActionButton.tsx'; // Reusable action button component used for each quick action


const QuickActionsCard: React.FC<any> = ({ navigate }) => { // Component receives `navigate` to perform route changes
  return (
    <Card title="Quick Actions" bordered={false}> {/* Card: titled container; bordered={false} for flat style */}
      <Space direction="vertical" style={{ width: '100%' }}> {/* Space: stack buttons vertically and stretch to full width */}
        <ActionButton 
          type="primary" /* type: AntD button type - primary to emphasize the main action */
          icon="user" /* icon: key passed to ActionButton to render leading icon */
          text="Create New User" /* text: visible label inside the button */
          onClick={() => navigate('/create-user')} /* onClick: navigates to the create-user route when clicked */
        />
        <ActionButton 
          icon="user" /* secondary action uses default button style with same leading icon */
          text="View All Users" /* label for viewing the users list */
          onClick={() => navigate('/users')} /* navigates to the users listing route */
        />
        <ActionButton 
          icon="arrowUp" /* icon key for an upward/learn-more affordance */
          text="Learn More About This App" /* label that invites the user to read about the app */
          onClick={() => navigate('/about')} /* navigates to the about page */
        />
      </Space>
    </Card>
  );
};

export default QuickActionsCard; // Default export so parent pages (Dashboard/Home) can import and render this card