import { BarChart } from './charts/recharts/BarChart'
import { LineChart } from './charts/recharts/LineChart'
import { PieChart } from './charts/recharts/PieChart'
import { RadarChart } from './charts/recharts/RadarChart'
import { ScatterChart } from './charts/recharts/ScatterChart'
import { LineWaveformChart } from './charts/recharts/LineWaveformChart'
import { SunburstChart } from './charts/recharts/SunburstChart'

export const App = () => {
  return (
    <div className="pt-4 px-4 pb-16">
      <h1 className="text-3xl">HelloCharts</h1>

      <div className="flex flex-wrap gap-8">
        <LineChart />
        <BarChart />
        <RadarChart />
        <PieChart />
        <ScatterChart />
        <SunburstChart />
        <LineWaveformChart />
      </div>
    </div>
  )
}
