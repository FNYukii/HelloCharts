import {
  CartesianGrid,
  Line,
  LineChart as RCLineChart,
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

export const LineChart = () => (
  <section className="mt-4">
    <h2 className="text-xl">Line Chart / 折れ線グラフ</h2>

    <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <RCLineChart data={TEMPERATURE_RECORDS}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-neutral-300)"
          />

          <XAxis dataKey="date" stroke="var(--color-neutral-400)" />
          <YAxis dataKey="temperature" stroke="var(--color-neutral-400)" />

          <Line
            dataKey="temperature"
            stroke="var(--color-blue-500)"
            activeDot={false}
          />
        </RCLineChart>
      </ResponsiveContainer>
    </div>
  </section>
)
