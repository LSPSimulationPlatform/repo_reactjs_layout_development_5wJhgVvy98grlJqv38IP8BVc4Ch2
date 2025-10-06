import React from 'react'; // React core: required for JSX and component typing
import { Form, Row, Col } from 'antd'; // Ant Design form and grid primitives used to build the form layout
import useCreateUser from '../../hooks/useCreateUser.tsx'; // Custom hook encapsulating form state, handlers and helpers
import NameFields from './NameFields.tsx'; // Composite fields for first/last name
import ContactFields from './ContactFields.tsx'; // Composite fields for email/phone
import RoleDepartmentFields from './RoleDepartmentFields.tsx'; // Selects for role and department
import DateStatusFields from './DateStatusFields.tsx'; // Date picker + status switch
import AvatarField from './AvatarField.tsx'; // File upload field for profile picture
import BioField from './BioField.tsx'; // Textarea for bio/description
import FormActions from './FormActions.tsx'; // Action buttons (reset/submit)

/**
 * UserForm
 * - Renders the CreateUser form by composing small field components.
 * - Uses useCreateUser hook to obtain the AntD form instance and handlers.
 */
const UserForm: React.FC = () => {
  const { form, onFinish, onFinishFailed, onReset } = useCreateUser();
  // form: AntD Form instance used for controlling fields programmatically
  // onFinish: submit handler called when validation passes
  // onFinishFailed: handler called when validation fails
  // onReset: handler to reset/clear form (passed to FormActions)

  return (
    <Form
      form={form} // bind the AntD Form instance from the hook to this Form
      layout="vertical" // vertical layout: labels above controls for readability
      onFinish={onFinish} // handle successful form submission
      onFinishFailed={onFinishFailed} // handle validation failures
      initialValues={{ // initial default values for controlled fields
        status: true, // default account status = active
        role: 'viewer', // default role selection
        department: 'general', // default department selection
      }}
    >
      {/* Row provides responsive grid spacing for the grouped fields */}
      <Row gutter={[16, 16]}>
        {/* NameFields: first/last name inputs (each wrapped in Col for responsive sizing) */}
        <NameFields />

        {/* ContactFields: email and phone inputs with validation */}
        <ContactFields />

        {/* RoleDepartmentFields: role and department Select controls */}
        <RoleDepartmentFields />

        {/* DateStatusFields: join date DatePicker and account status Switch */}
        <DateStatusFields />

        {/* AvatarField: file upload control for profile picture; integrates with form via name="avatar" */}
        <AvatarField />

        {/* BioField: TextArea for optional user biography with character limit and counter */}
        <BioField />
      </Row>

      {/* FormActions: renders Reset and Submit buttons; passes onReset handler for Reset */}
      <FormActions onReset={onReset} />
    </Form>
  );
};

export default UserForm; // Default export so CreateUser page can import and render this form