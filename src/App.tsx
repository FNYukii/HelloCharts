import { BarChartSection } from './components/BarChartSection'
import { LineChartSection } from './components/LineChartSection'
import { PieChartSection } from './components/PieChartSection'
import { RadarChartSection } from './components/RadarChartSection'
import { ScatterChartSection } from './components/ScatterChartSection'

export const App = () => {
  return (
    <div className="pt-4 px-4 pb-16">
      <h1 className="text-2xl">HelloCharts</h1>

      <LineChartSection />
      <BarChartSection />
      <PieChartSection />
      <RadarChartSection />
      <ScatterChartSection />
    </div>
  )
}
