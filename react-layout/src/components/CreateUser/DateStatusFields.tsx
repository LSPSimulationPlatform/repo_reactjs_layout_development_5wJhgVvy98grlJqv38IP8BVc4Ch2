import React from 'react'; // Import React to enable JSX and define functional components
import { Form, DatePicker, Switch, Col } from 'antd'; // AntD primitives used: Form.Item, DatePicker, Switch, Col for layout

const DateStatusFields: React.FC = () => { // Define component as a React Functional Component (no props expected)
  return (
    <> {/* Fragment groups the two Col elements without adding an extra DOM node */}
      <Col xs={24} sm={12}> {/* Left column: full width on xs, half width on sm+ */}
        <Form.Item
          label="Join Date" /* Label shown above the date picker describing the field */
          name="joinDate" /* Form field key used by the parent AntD Form (form values under 'joinDate') */
          rules={[{ required: true, message: 'Please select join date!' }]} /* Validation: required with message */
        >
          <DatePicker 
            style={{ width: '100%' }} /* Make the picker take full column width for consistent layout */
            placeholder="Select join date" /* Placeholder instructing the user */
            size="large" /* Larger control for better touch target */
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}> {/* Right column: full width on xs, half width on sm+ */}
        <Form.Item
          label="Account Status" /* Label above the switch to indicate its purpose */
          name="status" /* Field key used in form values for the account status */
          valuePropName="checked" /* Bind the Switch's checked prop to the form value */
        >
          <div style={{ paddingTop: 8 }}> {/* Small top padding to vertically align the switch with the label */}
            <Switch 
              checkedChildren="Active" /* Text shown inside switch when checked */
              unCheckedChildren="Inactive" /* Text shown inside switch when unchecked */
              size="default" /* Default size; change to "small" or "large" if desired */
            />
          </div>
        </Form.Item>
      </Col>
    </>
  );
};

export default DateStatusFields; // Default export so CreateUser page can import and render these fields