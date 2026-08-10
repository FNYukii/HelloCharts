import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from 'recharts'
import clsx from 'clsx'

const HEIGHT_AND_WEIGHT_RECORDS = [
  { name: 'Kaito', height: 190, weight: 70 },
  { name: 'Mirai', height: 180, weight: 85 },
  { name: 'Ayato', height: 172, weight: 63 },
  { name: 'Koji', height: 171, weight: 55 },
  { name: 'Toru', height: 170, weight: 57 },
  { name: 'Subaru', height: 169, weight: 54 },
  { name: 'Kojiro', height: 167, weight: 52 },
  { name: 'Tsuyoshi', height: 165, weight: 50 },
  { name: 'Haruto', height: 164, weight: 45 },
] as const

export const ScatterChartSection = () => (
  <section className="mt-4">
    <h2 className="text-xl">Scatter Chart</h2>

    <div className={clsx('w-160 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <ScatterChart>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-neutral-300)"
          />

          <XAxis
            dataKey="weight"
            unit="kg"
            type="number"
            stroke="var(--color-neutral-400)"
          />
          <YAxis dataKey="height" unit="cm" stroke="var(--color-neutral-400)" />

          <Scatter
            data={HEIGHT_AND_WEIGHT_RECORDS}
            fill="var(--color-blue-500)"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  </section>
)
