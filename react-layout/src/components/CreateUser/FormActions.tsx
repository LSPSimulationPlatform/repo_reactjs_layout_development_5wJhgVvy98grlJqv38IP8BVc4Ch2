import React from 'react'; // React core: required for JSX and defining React components
import { Button } from 'antd'; // Ant Design Button used for form actions (reset / submit)
import { SaveOutlined, ClearOutlined } from '@ant-design/icons'; // Icons used inside the buttons

const FormActions: React.FC<any> = ({ onReset }) => { // Component: receives onReset callback via props
  return (
    // Container: aligns action buttons to the right, adds spacing and wraps on small screens
    <div style={{ 
      marginTop: 24, /* spacing above the actions to separate from form fields */
      display: 'flex', /* use flexbox to align buttons horizontally */
      gap: 16, /* gap between buttons */
      justifyContent: 'flex-end', /* align buttons to the right */
      flexWrap: 'wrap' /* allow buttons to wrap to next line on narrow viewports */
    }}>
      {/* Reset button: triggers the provided onReset handler to clear or reset the form */}
      <Button 
        icon={<ClearOutlined />} /* icon: shows a clear/erase affordance inside the button */
        onClick={onReset} /* onClick: call the onReset prop when pressed */
        size="large" /* larger size for better touch targets */
      >
        Reset Form {/* visible label describing the action */}
      </Button>

      {/* Submit button: primary action for creating/submitting the form */}
      <Button 
        type="primary" /* primary style denotes main action */
        htmlType="submit" /* submits the surrounding form when clicked */
        icon={<SaveOutlined />} /* icon: save/create affordance */
        size="large" /* match size with reset button for visual consistency */
      >
        Create User {/* visible label for the submit action */}
      </Button>
    </div>
  );
};

export default FormActions; // Default export so parent forms/pages can import and use these actions