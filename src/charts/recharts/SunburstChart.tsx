import clsx from 'clsx'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

const level1Data = [
  { name: '国内事業', value: 50, fill: '#3b82f6' },
  { name: '海外事業', value: 50, fill: '#3b82f6' },
]

const level2Data = [
  { name: '関東', value: 25, fill: '#3b82f6' },
  { name: '関西', value: 25, fill: '#3b82f6' },
  { name: 'アジア', value: 20, fill: '#3b82f6' },
  { name: '北米', value: 15, fill: '#3b82f6' },
  { name: '中東', value: 10, fill: '#3b82f6' },
  { name: '欧州', value: 5, fill: '#3b82f6' },
]

const level3Data = [
  { name: '食品', value: 15, fill: '#3b82f6' },
  { name: '加工', value: 5, fill: '#3b82f6' },
  { name: '薬剤', value: 2, fill: '#3b82f6' },
  { name: '金融', value: 1, fill: '#3b82f6' },
  { name: '医療', value: 1, fill: '#3b82f6' },
  { name: '化学', value: 1, fill: '#3b82f6' },
  // MARK
  { name: 'none', value: 25, fill: '#0000' },
  // MARK
  { name: '食品', value: 10, fill: '#3b82f6' },
  { name: '洗剤', value: 5, fill: '#3b82f6' },
  { name: '薬剤', value: 2, fill: '#3b82f6' },
  { name: '薬剤', value: 1, fill: '#3b82f6' },
  { name: '薬剤', value: 1, fill: '#3b82f6' },
  { name: '薬剤', value: 1, fill: '#0000' },
  // MARK
  { name: '金融', value: 5, fill: '#3b82f6' },
  { name: '医療', value: 3, fill: '#3b82f6' },
  { name: '化学', value: 1, fill: '#3b82f6' },
  { name: '出版', value: 1, fill: '#3b82f6' },
  // MARK
  { name: 'none', value: 20, fill: '#0000' },
]

export const SunburstChart = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl">Sunburst Chart / 階層円グラフ</h2>

      <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={level1Data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={90}
            />

            <Pie
              data={level2Data}
              dataKey="value"
              nameKey="name"
              innerRadius={92}
              outerRadius={112}
            />

            <Pie
              data={level3Data}
              dataKey="value"
              nameKey="name"
              innerRadius={114}
              outerRadius={134}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
