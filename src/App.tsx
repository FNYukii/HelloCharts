import { BarChartSection } from './components/BarChartSection'
import { LineChartSection } from './components/LineChartSection'
import { PieChartSection } from './components/PieChartSection'
import { RadarChartSection } from './components/RadarChartSection'

export const App = () => {
  return (
    <div className="pt-4 px-4 pb-16">
      <h1 className="text-2xl">HelloCharts</h1>

      <LineChartSection />
      <BarChartSection />
      <PieChartSection />
      <RadarChartSection />
    </div>
  )
}
