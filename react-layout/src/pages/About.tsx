import React from 'react'; // Import React to enable JSX and define the component
import { Divider } from 'antd'; // Ant Design Divider used to separate sections visually
import AboutHeader from '../components/About/AboutHeader.tsx'; // Header component for the About page
import FeaturesSection from '../components/About/FeaturesSection.tsx'; // Section listing key features as cards
import TechAndTimelineSection from '../components/About/TechAndTimelineSection.tsx'; // Two-column section: technologies + timeline
import ArchitectureSection from '../components/About/ArchitectureSection.tsx'; // Section describing app architecture

const About: React.FC = () => { // Define About as a React functional component (no props expected)
  return (
    <div> {/* Page container: groups all About page sections */}
      <AboutHeader /> {/* Top header: title and brief description for the About page */}
      <Divider /> {/* Visual divider between header and feature section */}
      <FeaturesSection /> {/* Renders key features as responsive cards */}
      <TechAndTimelineSection /> {/* Renders technologies used and development timeline side-by-side */}
      <Divider /> {/* Visual divider before architecture overview */}
      <ArchitectureSection /> {/* Detailed architecture overview card */}
    </div>
  );
};

export default About; // Default export so routing/pages can import and render the About page