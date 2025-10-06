// src/hooks/tableColumns.tsx
import type { ColumnsType } from 'antd/es/table';
import { Button, Space, Avatar, Tag, Dropdown } from 'antd';

import { UserOutlined, MailOutlined, PhoneOutlined, MoreOutlined } from '@ant-design/icons';
import { getActionItems } from './actionItems.tsx';

// Export a factory that returns the Table columns configured with the provided row action handlers
export const columns = (
  handleView: (userId: string) => void,
  handleEdit: (userId: string) => void,
  handleDelete: (userId: string) => void
): ColumnsType<any> => [
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: any) => (
      <Space>
        {/* Avatar: shows image if provided, otherwise user icon */}
        <Avatar src={record.avatar} icon={<UserOutlined />} />
        <div>
          {/* Primary line: user's display name in bold */}
          <div style={{ fontWeight: 500 }}>{text}</div>
          {/* Secondary line: small, muted text for email */}
          <div style={{ fontSize: '12px', color: '#666' }}>
            {/* Small mail icon preceding the email */}
            <MailOutlined style={{ marginRight: 4 }} />
            {record.email}
          </div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Contact',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone: string) => (
      <Space>
        {/* Phone icon to indicate the type of data */}
        <PhoneOutlined />
        {phone}
      </Space>
    ),
    // Only show this column on medium and larger screens
    responsive: ['md'],
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role: string) => {
      // Choose tag color by role
      const color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : 'green';
      return <Tag color={color}>{role}</Tag>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      // Render status as uppercase inside a Tag with success color for active
      <Tag color={status === 'active' ? 'green' : 'default'}>{status.toUpperCase()}</Tag>
    ),
  },
  {
    title: 'Join Date',
    dataIndex: 'joinDate',
    key: 'joinDate',
    // Only show join date on large screens to save space on small devices
    responsive: ['lg'],
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_: any, record: any) => (
      <Dropdown
        // Build menu items wired to handlers for this record
        menu={{ items: getActionItems(record, handleView, handleEdit, handleDelete) }}
        trigger={['click']}
      >
        {/* Button with "more" icon that triggers the actions dropdown */}
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];