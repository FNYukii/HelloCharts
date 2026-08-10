import { BarChartSection } from './components/BarChartSection'
import { LineChartSection } from './components/LineChartSection'
import { PieChartSection } from './components/PieChartSection'
import { RadarChartSection } from './components/RadarChartSection'
import { ScatterChartSection } from './components/ScatterChartSection'
import { WaveformChartSection } from './components/WaveformChartSection'
import { WaveformPlayer } from './components/WaveformPlayer'

export const App = () => {
  return (
    <div className="pt-4 px-4 pb-16">
      <h1 className="text-2xl">HelloCharts</h1>

      <div className="flex flex-wrap gap-8">
        <LineChartSection />
        <BarChartSection />
        <RadarChartSection />
        <PieChartSection />
        <ScatterChartSection />
        <WaveformChartSection />

        <WaveformPlayer />
      </div>
    </div>
  )
}
