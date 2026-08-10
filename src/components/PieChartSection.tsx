import clsx from 'clsx'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'

const PRODUCT_SHARE_RECORDS = [
  { name: 'a', value: 60 },
  { name: 'b', value: 20 },
  { name: 'c', value: 15 },
  { name: 'd', value: 5 },
] as const

export const PieChartSection = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl">Pie Chart</h2>

      <div className={clsx('w-80 aspect-square', 'border border-neutral-400')}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={PRODUCT_SHARE_RECORDS}
              dataKey="value"
              innerRadius="60%"
              fill="var(--color-blue-500)"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
