import { BarChartSection } from './charts/recharts/BarChartSection'
import { LineChartSection } from './charts/recharts/LineChartSection'
import { PieChartSection } from './charts/recharts/PieChartSection'
import { RadarChartSection } from './charts/recharts/RadarChartSection'
import { ScatterChartSection } from './charts/recharts/ScatterChartSection'
import { WaveformChartSection } from './charts/recharts/WaveformChartSection'
import { SoundPlayer } from './charts/others/WaveformPlayer'

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

        <SoundPlayer />
      </div>
    </div>
  )
}
