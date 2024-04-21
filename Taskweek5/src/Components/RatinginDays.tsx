
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';





const dataset = [
  {
    london: 40,
    day: 'Monday',
  },
  {
    london: 30,
    day: 'Tuesday',
  },
  {
    london: 27,
    day: 'Wednesday',
  },
  {
    london: 84,
    day: 'Thursday',
  },
  {
    london: 47,
    day: 'Friday',
  },
  {
    london: 50,
    day: 'Saturday',
  },
  {
    london: 59,
    day: 'Sunday',
  }
];

const valueFormatter = (value: number | null) => `${value}mm`;

const chartSetting = {
 
  series: [{ dataKey: 'london', label: 'Sales rating of the day', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'day'},
        ]}
        {...chartSetting}
      />
    </div>
  );
}
