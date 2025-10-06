// Import icons used for menu item visual affordances
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// Import MenuProps type from antd to type the returned items array
import type { MenuProps } from 'antd';

/**
 * getActionItems
 * - Returns an array of MenuProps['items'] suitable for antd Menu/Dropdown.
 * - Each item is wired to call the corresponding handler with record.id when selected.
 *
 * Parameters:
 * - record: the table row object (expected to contain an `id` property)
 * - handleView: callback invoked to view details for the given user id
 * - handleEdit: callback invoked to start editing the given user id
 * - handleDelete: callback invoked to delete the given user id
 */
export const getActionItems = (
  record: any, // table row data (used to extract the id)
  handleView: (userId: string) => void, // view handler receives user id
  handleEdit: (userId: string) => void, // edit handler receives user id
  handleDelete: (userId: string) => void // delete handler receives user id
): MenuProps['items'] => [
  {
    key: 'view', // unique key for the menu item
    label: 'View Details', // visible label shown in the menu
    icon: <UserOutlined />, // leading icon for visual affordance
    onClick: () => handleView(record.id), // call view handler with the row id when clicked
  },
  {
    key: 'edit', // unique key for edit action
    label: 'Edit User', // visible label for edit
    icon: <EditOutlined />, // edit icon
    onClick: () => handleEdit(record.id), // call edit handler with the row id when clicked
  },
  {
    type: 'divider', // menu divider to separate destructive action visually
  },
  {
    key: 'delete', // unique key for delete action
    label: 'Delete User', // visible label for delete
    icon: <DeleteOutlined />, // delete/trash icon
    danger: true, // mark this menu item as dangerous (red style) in antd
    onClick: () => handleDelete(record.id), // call delete handler with the row id when clicked
  },
];