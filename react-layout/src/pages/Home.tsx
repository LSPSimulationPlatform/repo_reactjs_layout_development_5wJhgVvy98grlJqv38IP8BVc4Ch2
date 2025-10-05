import React from 'react'; // Import React to enable JSX and component definitions
import useHome from '../hooks/useHome.tsx'; // Custom hook that provides navigation and stats data for the dashboard
import WelcomeSection from '../components/Home/WelcomeSection.tsx'; // Top welcome section component
import StatsSection from '../components/Home/StatsSection.tsx'; // Section that renders statistic cards
import DashboardContent from '../components/Home/DashboardContent.tsx'; // Main dashboard content (progress + actions)

const Home: React.FC = () => { // Define Home as a React functional component (no props expected)
  const { navigate, statsData } = useHome(); // Destructure navigate function and prepared stats data from the hook
  
  return (
    <div> {/* Page container for the Home/dashboard content */}
      <WelcomeSection /> {/* Renders greeting/title and short descriptive paragraph */}
      <StatsSection statsData={statsData} /> {/* Renders responsive stat cards using data from the hook */}
      <DashboardContent navigate={navigate} /> {/* Renders progress and quick actions; receives navigate for routing */}
    </div>
  );
};

export default Home; // Default export so routing/pages can import and render this page