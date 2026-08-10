import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { temperatureRecords } from '../constants/temperatureRecords'
import clsx from 'clsx'

export const TemperatureChart = () => (
  <section className="mt-4">
    <h2 className="text-xl">Line Chart</h2>

    <div className={clsx('w-160 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <LineChart data={temperatureRecords}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-neutral-300)"
          />

          <XAxis dataKey="date" stroke="var(--color-neutral-500)" />
          <YAxis dataKey="temperature" stroke="var(--color-neutral-500)" />

          <Line
            dataKey="temperature"
            stroke="var(--color-blue-500)"
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </section>
)
