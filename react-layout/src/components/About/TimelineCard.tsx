import React from 'react'; // import React to enable JSX and component definitions
import { Card, Timeline } from 'antd'; // import AntD Card and Timeline UI components
import useAbout from '../../hooks/useAbout.tsx'; // import custom hook that provides about-page data (timeLine array)

/* TimelineCard component:
   - renders a Card containing an Ant Design Timeline
   - uses timeLine data returned by useAbout hook
*/
const TimelineCard: React.FC = () => { // define functional component (no props)
  const { timeLine } = useAbout(); // call hook and extract timeLine array used by Timeline

  return (
    <Card title="Development Timeline"> {/* Card wrapper with title shown in header */}
      {/* Timeline component: receives `items` prop (array of milestone descriptors) */}
      <Timeline
        items={timeLine} /* pass timeline items directly so AntD renders dots, colors, and content */
      />
    </Card>
  ); // end JSX return
}; // end component

export default TimelineCard; // default export so About page can import and render this card