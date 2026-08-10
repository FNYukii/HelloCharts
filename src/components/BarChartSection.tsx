import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import clsx from 'clsx'

const TEMPERATURE_RECORDS = [
  {
    date: '08/01',
    temperature: 25,
  },
  {
    date: '08/02',
    temperature: 25,
  },
  {
    date: '08/03',
    temperature: 26,
  },
  {
    date: '08/04',
    temperature: 27,
  },
  {
    date: '08/05',
    temperature: 28,
  },
  {
    date: '08/06',
    temperature: 30,
  },
] as const

export const BarChartSection = () => (
  <section className="mt-4">
    <h2 className="text-xl">Bar Chart</h2>

    <div className={clsx('w-160 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <BarChart data={TEMPERATURE_RECORDS}>
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
