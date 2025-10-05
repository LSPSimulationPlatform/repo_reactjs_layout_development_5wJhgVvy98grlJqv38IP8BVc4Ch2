import React, { useState, useEffect } from 'react'; // React core + hooks for state and lifecycle
import { Outlet, useNavigate, useLocation } from 'react-router-dom'; // Routing helpers and outlet for nested routes
import { Layout as AntLayout, Grid } from 'antd'; // Ant Design Layout and Grid utilities
import Sidebar from '../components/Layout/Sidebar.tsx'; // Sidebar component for app navigation
import HeaderBar from '../components/Layout/HeaderBar.tsx'; // Header component (top bar with user menu)
import FooterBar from '../components/Layout/FooterBar.tsx'; // Footer component for page bottom


const { Content } = AntLayout; // Destructure Content subcomponent from AntD Layout
const { useBreakpoint } = Grid; // Destructure useBreakpoint hook to get responsive breakpoints

const AppLayout: React.FC = () => { // Main layout component that wraps routed pages
  const [collapsed, setCollapsed] = useState(false); // Local state: whether the sidebar is collapsed
  const navigate = useNavigate(); // Hook: programmatic navigation function
  const location = useLocation(); // Hook: current location object (used to highlight menu, etc.)
  const screens = useBreakpoint(); // Get current responsive breakpoint booleans (xs, sm, md, lg, ...)

  useEffect(() => { // Side-effect: adjust collapsed state when breakpoint changes
    setCollapsed(!screens.md); // Collapse sidebar on small screens (when md is false)
  }, [screens.md]); // Re-run whenever md breakpoint toggles

  return (
    <AntLayout style={{ minHeight: '100vh' }}> {/* Root AntD layout filling viewport height */}
      <Sidebar
        collapsed={collapsed} /* pass collapsed state to Sidebar so it can render accordingly */
        setCollapsed={setCollapsed} /* pass setter so Sidebar or header can toggle collapse */
        navigate={navigate} /* pass navigate so Sidebar menu items can change routes */
        location={location} /* pass location to allow Sidebar to mark the active item */
      />

      <AntLayout
        style={{
          marginLeft: collapsed ? 80 : 200, /* shift main content to accommodate sider width */
          transition: 'margin-left 0.2s', /* smooth transition when sider toggles */
        }}
      >
        <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} /> {/* Top header with collapse toggle */}

        <Content
          style={{
            margin: '24px 16px 0', /* outer spacing around content area */
            overflow: 'initial', /* allow inner content to manage its own overflow */
            minHeight: 'calc(100vh - 112px)', /* ensure footer fits without overlap */
          }}
        >
          <div
            style={{
              padding: 24, /* inner padding for the content card */
              background: '#fff', /* white background for content surface */
              borderRadius: 8, /* rounded corners for visual polish */
              minHeight: '100%', /* ensure inner container spans available height */
            }}
          >
            <Outlet /> {/* Placeholder where routed page components are rendered */}
          </div>
        </Content>

        <FooterBar /> {/* Page footer rendered below content */}
      </AntLayout>
    </AntLayout>
  );
};

export default AppLayout; // Default export so the app's router can use this layout component
