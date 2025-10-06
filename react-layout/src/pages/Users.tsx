import React from 'react'; // React core: required to use JSX and define this functional component
import { Typography, Table, Card, Button, Input } from 'antd'; // AntD primitives used on the page (typography, table, card, button, input)
import { 
  PlusOutlined, // Icon shown inside the "Create New User" button
  SearchOutlined, // Icon used as prefix in the search input
} from '@ant-design/icons'; // Ant Design icons package
import useUsers from '../hooks/useUsers.tsx'; // Custom hook that provides users data, filters and table configuration

const { Title } = Typography; // Destructure Title for concise usage in JSX
const { Search } = Input; // Destructure Search for antd Input.Search (we're using Input with prefix; preserve naming)

const Users: React.FC = () => { // Define Users page as a React functional component (no props expected)
  // Destructure the API returned by the useUsers hook:
  // - navigate: function to programmatically navigate to other routes
  // - setSearchText: setter for the search input state used to filter the table
  // - usersData: raw users dataset (unused directly here but available)
  // - filteredUsers: filtered dataset used as the Table dataSource
  // - columns: configured table columns (renders avatar, actions, etc.)
  const {
    navigate, setSearchText, usersData, filteredUsers, columns
  } = useUsers();

  return (
    <div> {/* Page wrapper: groups header controls and the main card */}
      <div style={{ 
        display: 'flex', /* use flexbox to position title and action button */
        justifyContent: 'space-between', /* push title left and button right */
        alignItems: 'center', /* vertically center the row items */
        marginBottom: 24, /* spacing below header row */
        flexWrap: 'wrap', /* allow items to wrap on narrow screens */
        gap: 16 /* gap between wrapped items for consistent spacing */
      }}>
        <Title level={2} style={{ margin: 0 }}>User Management</Title> {/* Page heading with zero margin for alignment */}
        <Button 
          type="primary" /* primary button style to highlight main action */
          icon={<PlusOutlined />} /* add plus icon to the left of the label */
          onClick={() => navigate('/create-user')} /* navigate to the create-user page when clicked */
        >
          Create New User {/* Button label visible to the user */}
        </Button>
      </div>

      <Card> {/* Card: container for search controls and the users table */}
        <div style={{ marginBottom: 16 }}> {/* spacing wrapper above the table */}
          <Search
            placeholder="Search users by name, email, or role" /* guiding placeholder text */
            prefix={<SearchOutlined />} /* small icon inside the input to indicate search */
            onChange={(e) => setSearchText(e.target.value)} /* update hook state as user types (controlled search) */
            style={{ width: 300 }} /* fixed width for predictable layout */
            allowClear /* show clear button to reset the search input quickly */
          />
        </div>

        <Table
          columns={columns} /* column definitions including renderers and actions */
          dataSource={filteredUsers} /* filtered dataset from the hook shown in the table */
          rowKey="id" /* use the 'id' field as the unique row key */
          pagination={{
            pageSize: 10, /* default rows per page */
            showSizeChanger: true, /* allow user to change page size */
            showQuickJumper: true, /* allow quick jump to a page number */
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} users`, /* human readable total label */
          }}
          scroll={{ x: 800 }} /* enable horizontal scrolling at smaller widths to prevent layout break */
        />
      </Card>
    </div>
  );
};

export default Users; // Default export so pages/routes can import and render this Users page