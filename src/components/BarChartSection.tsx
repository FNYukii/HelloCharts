import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { temperatureRecords } from '../constants/temperatureRecords'
import clsx from 'clsx'

export const BarChartSection = () => (
  <section className="mt-4">
    <h2 className="text-xl">Bar Chart</h2>

    <div className={clsx('w-160 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <BarChart data={temperatureRecords}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-neutral-300)"
          />

          <XAxis dataKey="date" stroke="var(--color-neutral-500)" />
          <YAxis dataKey="temperature" stroke="var(--color-neutral-500)" />

          <Bar
            dataKey="temperature"
            fill="var(--color-blue-500)"
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>
)
