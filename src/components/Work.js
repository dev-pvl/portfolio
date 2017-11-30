import React from 'react'
import {AreaChart, Area} from 'recharts/es6'

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page H', uv: 5000, pv: 4500, amt: 2700},
];

class Work extends React.Component {
  render() {
    return (
      <AreaChart width={window.innerWidth} height={window.innerHeight} data={data}
            margin={{top: 50, right: 0, left: 60, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    )
  }
}

export default Work
