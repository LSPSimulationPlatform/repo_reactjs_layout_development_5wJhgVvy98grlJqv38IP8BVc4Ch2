import { 
  GithubOutlined, // Icon used to represent Ant Design / repo-related feature
  CodeOutlined, // Icon representing code / development
  LayoutOutlined, // Icon representing layout / structural feature
  MobileOutlined, // Icon representing mobile/responsive capability
  CheckCircleOutlined, // Icon indicating completed milestone
  SyncOutlined, // Icon indicating in-progress / syncing milestone
  ClockCircleOutlined // Icon indicating scheduled / future milestone
} from '@ant-design/icons'; // Import all required icons from Ant Design's icon package

import { Typography } from 'antd'; // Import Typography to render inline Text elements
const { Text } = Typography; // Destructure Text for concise usage when building timeline children

// Custom hook that returns static data used by the About page (features, technologies, timeline)
export default function useAbout() {
  // features: array of feature descriptors used to render feature cards on About page
  const features = [
    {
      title: 'Responsive Layout', // Feature title
      description: 'Mobile-first design that adapts to all screen sizes', // Short description
      icon: <MobileOutlined style={{ fontSize: 24, color: '#1890ff' }} />, // Icon JSX with inline styling
    },
    {
      title: 'Component Structure', // Feature title
      description: 'Modular and reusable component architecture', // Short description
      icon: <LayoutOutlined style={{ fontSize: 24, color: '#52c41a' }} />, // Icon JSX with inline styling
    },
    {
      title: 'Modern React', // Feature title
      description: 'Built with React 18, TypeScript, and functional components', // Short description
      icon: <CodeOutlined style={{ fontSize: 24, color: '#722ed1' }} />, // Icon JSX with inline styling
    },
    {
      title: 'Ant Design', // Feature title
      description: 'Enterprise-class UI design language and components', // Short description
      icon: <GithubOutlined style={{ fontSize: 24, color: '#fa541c' }} />, // Icon JSX with inline styling
    },
  ];

  // technologies: array of simple objects used to render Tag badges for tech stack
  const technologies = [
    { name: 'React 18', color: 'blue' }, // React entry with Tag color hint
    { name: 'TypeScript', color: 'purple' }, // TypeScript entry with Tag color hint
    { name: 'Ant Design', color: 'cyan' }, // Ant Design entry
    { name: 'React Router v6', color: 'green' }, // Router entry
    { name: 'Responsive Design', color: 'orange' }, // Responsiveness entry
    { name: 'Modern CSS', color: 'red' }, // CSS tooling entry
  ];

  // timeLine: array of AntD Timeline item descriptors used by TimelineCard component
  const timeLine = [
    {
      color: 'green', // color of the timeline dot
      dot: <CheckCircleOutlined />, // custom dot icon JSX indicating completion
      children: ( // children JSX displayed beside the dot
        <div>
          <Text strong>Project Setup</Text> {/* Strong text for milestone title */}
          <br />
          <Text type="secondary">Initialize React app with TypeScript</Text> {/* Secondary description text */}
        </div>
      ),
    },
    {
      color: 'green', // completed milestone color
      dot: <CheckCircleOutlined />, // completed dot icon
      children: (
        <div>
          <Text strong>Layout Structure</Text> {/* Milestone title */}
          <br />
          <Text type="secondary">Implement responsive layout with Ant Design</Text> {/* Milestone description */}
        </div>
      ),
    },
    {
      color: 'blue', // in-progress milestone color
      dot: <SyncOutlined spin />, // spinning sync icon to signal active work
      children: (
        <div>
          <Text strong>Component Development</Text> {/* Milestone title */}
          <br />
          <Text type="secondary">Building reusable components</Text> {/* Milestone description */}
        </div>
      ),
    },
    {
      color: 'gray', // future/scheduled milestone color
      dot: <ClockCircleOutlined />, // clock icon for upcoming work
      children: (
        <div>
          <Text strong>Testing & Optimization</Text> {/* Milestone title */}
          <br />
          <Text type="secondary">Performance optimization and testing</Text> {/* Milestone description */}
        </div>
      ),
    },
  ];

  // Return the prepared data for consumption by About page components
  return { features, timeLine, technologies };
}
