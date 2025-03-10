import React from 'react'

import { LineChart } from '../../components'
import HeaderChart from '../../components/Charts/HeaderChart'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <HeaderChart category="Chart" title="Inflation Rate" />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line