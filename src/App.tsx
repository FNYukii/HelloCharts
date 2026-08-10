import { TemperatureChart } from './components/TemperatureChart'

export const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">HelloCharts</h1>

      <TemperatureChart />
    </div>
  )
}
