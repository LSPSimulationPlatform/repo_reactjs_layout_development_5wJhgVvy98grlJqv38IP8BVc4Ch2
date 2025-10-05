import React from 'react'; // React core: required for JSX and component typing
import { Progress } from 'antd'; // Ant Design Progress component used to render progress bars

// ProgressItem props:
// - title: string label shown to the left of the percent
// - percent: number 0-100 indicating completion
// - status: optional AntD Progress status ('normal' | 'active' | 'success' | 'exception')
const ProgressItem: React.FC<any> = ({ 
  title, // title text displayed above the progress bar area
  percent, // numeric percent value displayed and passed to Progress
  status = 'normal' // default progress status when not provided
}) => {
  // Return a small block that shows a label, percent text, and a Progress bar
  return (
    <div style={{ marginBottom: 16 }}> {/* container with bottom spacing to separate items */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span>{title}</span> {/* left: human-readable title of the progress item */}
        <span>{percent}%</span> {/* right: textual percent indicator for quick reading */}
      </div>
      <Progress percent={percent} status={status} /> {/* AntD Progress visual bar with given percent and status */}
    </div>
  );
};

export default ProgressItem; // Default export so parent components (e.g., ProjectProgressCard) can import and render this item