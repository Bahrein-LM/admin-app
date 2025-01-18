import React from 'react'

import { pieChartData } from '../../data/dummy'
import { Pie as PieChart } from '../../components'
import HeaderChart from '../../components/Charts/HeaderChart'

const PiePage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <HeaderChart category="Bar" title="Inflation Rate in Bar" />
        <div className='w-full'>
          <PieChart id="chart-pie" data={pieChartData} legendVisiblity={true} height="full" />
        </div>
    </div>
  )
}

export default PiePage