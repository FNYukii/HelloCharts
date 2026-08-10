import { BarChartSection } from './components/BarChartSection'
import { LineChartSection } from './components/LineChartSection'
import { PieChartSection } from './components/PieChartSection'

export const App = () => {
  return (
    <div className="pt-4 px-4 pb-16">
      <h1 className="text-2xl">HelloCharts</h1>

      <LineChartSection />
      <BarChartSection />
      <PieChartSection />
    </div>
  )
}
