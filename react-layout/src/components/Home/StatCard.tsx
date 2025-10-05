import React from 'react'; // React core: required for JSX and functional components
import { Card, Statistic } from 'antd'; // Ant Design Card (container) and Statistic (metric display)

/* StatCard
   - Renders a single statistic inside an AntD Card.
   - Props:
     - stat: object containing { title, value, precision, valueStyle, prefix, suffix }
*/
const StatCard: React.FC<any> = ({ stat }) => { // stat prop carries all display options for the Statistic
  return (
    <Card> {/* Card: provides padding and visual separation for the statistic */}
      <Statistic
        title={stat.title} /* title: small label shown above the numeric value */
        value={stat.value} /* value: main numeric/text value displayed prominently */
        precision={stat.precision} /* precision: number of decimal places to show (optional) */
        valueStyle={stat.valueStyle} /* valueStyle: inline styles applied to the value (color/weight) */
        prefix={stat.prefix} /* prefix: optional leading JSX (e.g., icon) rendered before the value */
        suffix={stat.suffix} /* suffix: optional trailing text (e.g., '%', currency) rendered after value */
      />
    </Card>
  );
};

export default StatCard; // Default export so parent components can import and render this StatCard