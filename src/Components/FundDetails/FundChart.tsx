// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   Chart,
//   ArgumentAxis,
//   ++,
//   ValueAxis,
//   AreaSeries,
//   Title,
//   Legend,
// } from '@devexpress/dx-react-chart-material-ui';
// import { styled } from '@mui/material/styles';
// import { Stack, Animation } from '@devexpress/dx-react-chart';
// import { gaming as data } from './DemoData/data-vizualization';
// import { Title } from '@mui/icons-material';

// const PREFIX = 'Demo';``

// const classes = {
//   chart: `${PREFIX}-chart`,
// };

// const LegendRoot = props => (
//   <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
// );

// const LegendLabel = props => (
//   <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
// );

// const ChartRootBase = styled(Chart.Root)(() => ({
//   [`&.${classes.chart}`]: {
//     paddingRight: '20px',
//   },
// }));

// const ChartRoot = props => (
//   <ChartRootBase className={classes.chart} {...props} />
// );

// const format = () => tick:any => tick;
// const stacks = [{
//   series: ['Liquids', 'Solids', 'Gas', 'Cement Production', 'Gas Flaring'],
// }];

// export default Demo(props) {
//   const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//           rootComponent={ChartRoot}
//         >
//           <ArgumentAxis tickFormat={format} />
//           <ValueAxis />
//           <AreaSeries
//             name="Liquids"
//             valueField="liquids"
//             argumentField="year"
//           />
//           <AreaSeries
//             name="Solids"
//             valueField="solids"
//             argumentField="year"
//           />
//           <AreaSeries
//             name="Gas"
//             valueField="gas"
//             argumentField="year"
//           />
//           <AreaSeries
//             name="Cement Production"
//             valueField="cementProduction"
//             argumentField="year"
//           />
//           <AreaSeries
//             name="Gas Flaring"
//             valueField="gasFlaring"
//             argumentField="year"
//           />
//           <Animation />
//           <Legend position="bottom" rootComponent={LegendRoot} labelComponent={LegendLabel} />
//           <Title text="Carbon Emission Estimates" />
//           <Stack stacks={stacks} />
//         </Chart>
//       </Paper>
//     );
  
// }
import React from 'react'

export const FundChart = () => {
  return (
    <div>FundChart</div>
  )
}
