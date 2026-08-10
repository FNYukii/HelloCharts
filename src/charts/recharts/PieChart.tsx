import clsx from 'clsx'
import { ResponsiveContainer, PieChart as RCPieChart, Pie } from 'recharts'

const PRODUCT_SHARE_RECORDS = [
  { name: 'a', value: 60 },
  { name: 'b', value: 20 },
  { name: 'c', value: 15 },
  { name: 'd', value: 5 },
] as const

export const PieChart = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl">Pie Chart / 円グラフ</h2>

      <div className={clsx('h-80 aspect-square', 'border border-neutral-400')}>
        <ResponsiveContainer>
          <RCPieChart>
            <Pie
              data={PRODUCT_SHARE_RECORDS}
              dataKey="value"
              innerRadius="60%"
              fill="var(--color-blue-500)"
              label
            />
          </RCPieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
