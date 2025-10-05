import React from 'react' // Import React to enable JSX usage (not strictly required for hooks but kept for consistency)
// Import icons used in dashboard stats for visual affordances (prefixes)
import { 
  ArrowUpOutlined, 
  ArrowDownOutlined, 
  UserOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Hook to programmatically navigate between routes

// Custom hook providing home/dashboard helpers and data (navigate + statsData)
export default function useHome() {
  const navigate = useNavigate(); // Obtain navigate function to change routes from within handlers

  // statsData: array of metric descriptors used by the StatsSection / StatCard components
  const statsData = [
    {
      title: 'Active Users', // metric title shown above the value
      value: 1128, // numeric metric value
      precision: 0, // number of decimals to display for the value
      valueStyle: { color: '#3f8600' }, // inline style applied to the value (green color)
      prefix: <ArrowUpOutlined />, // leading icon indicating trend (up)
      suffix: '%', // suffix appended to the value for contextual units
      icon: <UserOutlined />, // optional icon representing the metric domain
    },
    {
      title: 'Sales', // title for sales metric
      value: 93, // numeric value for sales metric
      precision: 2, // two decimals for finer detail
      valueStyle: { color: '#cf1322' }, // value styled red to indicate negative trend
      prefix: <ArrowDownOutlined />, // leading icon indicating trend (down)
      suffix: '%', // percent unit
      icon: <ShoppingCartOutlined />, // icon representing commerce/sales
    },
    {
      title: 'Revenue', // revenue metric title
      value: 58730, // revenue numeric value
      precision: 0, // integer display
      prefix: '$', // prefix currency symbol
      icon: <DollarCircleOutlined />, // icon representing money/currency
    },
  ];

  // Return the navigation function and the prepared stats data for consumption by Home components
  return { navigate, statsData };
}
