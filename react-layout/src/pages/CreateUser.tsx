import React from 'react'; // React core: required to use JSX and define the component
import { Typography, Card } from 'antd'; // Ant Design primitives: Typography for headings/paragraphs, Card for content container
import useCreateUser from '../hooks/useCreateUser.tsx'; // Custom hook that provides navigation and form helpers for create user flow
import BackButton from '../components/CreateUser/BackButton.tsx'; // Reusable Back button component used to return to users list
import UserForm from '../components/CreateUser/UserForm.tsx'; // Composed form component that renders all create-user fields and actions

const { Title, Paragraph } = Typography; // Destructure Title and Paragraph for concise JSX usage

const CreateUser: React.FC = () => { // Define CreateUser page as a React functional component (no props)
  const { navigate } = useCreateUser(); // Extract navigate function from hook to programmatically change routes

  return (
    <div> {/* Page container: groups back button, heading, description and the card with the form */}
      <BackButton onBack={() => navigate('/users')} /> {/* BackButton: calls navigate('/users') when clicked */}

      <Title level={2}>Create New User</Title> {/* Page heading indicating the form purpose */}
      <Paragraph>
        Fill in the form below to create a new user account. All fields marked with * are required.
      </Paragraph> {/* Short paragraph explaining what the user should do */}

      <Card> {/* Card: visual container around the form for separation and elevation */}
        <UserForm /> {/* UserForm: the composed form that contains all input fields and actions */}
      </Card>
    </div>
  );
};

export default CreateUser; // Default export so router/pages can import and render this page