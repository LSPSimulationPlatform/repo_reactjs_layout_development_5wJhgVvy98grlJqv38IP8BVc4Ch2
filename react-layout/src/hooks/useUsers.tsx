// Import React hooks and router utilities used in this custom hook
import { useState } from 'react'; // useState: local state for search text
import { useNavigate } from 'react-router-dom'; // useNavigate: programmatic navigation helper

// Import mock data and helper builders used to power the users table
import { mockUsers } from './mockUsers.tsx'; // mockUsers: static dataset used for demo/listing
import { getActionItems } from './actionItems.tsx'; // getActionItems: builds menu items for row actions
import { columns } from './tableColumns.tsx'; // columns: factory that returns table column definitions

// Default export: custom hook that encapsulates users list state, filters and handlers
export default function useUsers() {
  const navigate = useNavigate(); // navigate: function to change routes from handlers if needed
  const [searchText, setSearchText] = useState(''); // searchText: controlled input state for filtering

  // filteredUsers: derive a filtered list from mockUsers using the current searchText
  // matches name, email or role (case-insensitive)
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(searchText.toLowerCase())
  );

  // handleEdit: placeholder handler invoked when "Edit" action is triggered for a user row
  const handleEdit = (userId: string) => {
    console.log('Edit user:', userId); // log for debugging; replace with real edit/navigation logic
  };

  // handleDelete: placeholder handler invoked when "Delete" action is triggered for a user row
  const handleDelete = (userId: string) => {
    console.log('Delete user:', userId); // log for debugging; replace with API call + refresh logic
  };

  // handleView: placeholder handler invoked when "View" action is triggered for a user row
  const handleView = (userId: string) => {
    console.log('View user:', userId); // log for debugging; could navigate to details page
  };

  
  // Return the public API for components using this hook
  return {
    navigate, // expose navigate so consumers can perform navigation if they need
    searchText, // expose current search text for controlled inputs
    setSearchText, // setter to update the search text from UI
    usersData: mockUsers, // raw users dataset (unfiltered) for any consumer needs
    filteredUsers, // filtered array used as the table dataSource
    handleEdit, // edit handler bound to this hook
    handleDelete, // delete handler bound to this hook
    handleView, // view handler bound to this hook
    // getActionItems: helper that binds this hook's handlers to a specific record
    getActionItems: (record: any) => getActionItems(record, handleView, handleEdit, handleDelete),
    // columns: table columns wired with this hook's handlers for actions column
    columns: columns(handleView, handleEdit, handleDelete)
  };
}