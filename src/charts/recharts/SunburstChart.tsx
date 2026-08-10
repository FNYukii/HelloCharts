import clsx from 'clsx'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

const DATA = [
  {
    name: '国内事業',
    value: 60,
    fill: '#3b82f6',
    children: [
      {
        name: '関東',
        value: 40,
        fill: '#3b82f6',
        children: [
          { name: '食品', value: 25, fill: '#3b82f6' },
          { name: '加工', value: 10, fill: '#3b82f6' },
          { name: '薬剤', value: 2, fill: '#3b82f6' },
          { name: '金融', value: 1, fill: '#3b82f6' },
          { name: '医療', value: 1, fill: '#3b82f6' },
          { name: '化学', value: 0.5, fill: '#3b82f6' },
          { name: '興業', value: 0.5, fill: '#3b82f6' },
        ],
      },
      {
        name: '関西',
        value: 20,
        fill: '#3b82f6',
        children: [
          { name: '食品', value: 10, fill: '#0000' },
          { name: '加工', value: 5, fill: '#0000' },
          { name: '金融', value: 3, fill: '#0000' },
          { name: '医療', value: 1, fill: '#0000' },
          { name: '化学', value: 1, fill: '#0000' },
        ],
      },
    ],
  },
  {
    name: '海外事業',
    value: 40,
    fill: '#3b82f6',
    children: [
      {
        name: 'アジア',
        value: 25,
        fill: '#3b82f6',
        children: [
          { name: '食品', value: 10, fill: '#3b82f6' },
          { name: '加工', value: 3, fill: '#3b82f6' },
          { name: '金融', value: 3, fill: '#3b82f6' },
          { name: '薬剤', value: 2, fill: '#3b82f6' },
          { name: '医療', value: 1, fill: '#3b82f6' },
          { name: '化学', value: 0.5, fill: '#3b82f6' },
          { name: '興業', value: 0.5, fill: '#3b82f6' },
        ],
      },
      {
        name: '北米',
        value: 5,
        fill: '#3b82f6',
        children: [
          { name: '加工', value: 3, fill: '#0000' },
          { name: '薬剤', value: 2, fill: '#0000' },
          { name: '金融', value: 1, fill: '#0000' },
          { name: '医療', value: 1, fill: '#0000' },
          { name: '化学', value: 1, fill: '#0000' },
          { name: '工業', value: 1, fill: '#0000' },
          { name: '興業', value: 1, fill: '#0000' },
        ],
      },
      {
        name: '中東',
        value: 5,
        fill: '#3b82f6',
        children: [
          { name: '食品', value: 2, fill: '#3b82f6' },
          { name: '加工', value: 2, fill: '#3b82f6' },
          { name: '薬剤', value: 1, fill: '#3b82f6' },
        ],
      },
      {
        name: '欧州',
        value: 5,
        fill: '#3b82f6',
        children: [
          { name: '食品', value: 1, fill: '#3b82f6' },
          { name: '加工', value: 1, fill: '#3b82f6' },
          { name: '薬剤', value: 1, fill: '#3b82f6' },
          { name: '化学', value: 1, fill: '#0000' },
          { name: '工業', value: 1, fill: '#0000' },
        ],
      },
    ],
  },
]

export const SunburstChart = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl">Sunburst Chart / 階層円グラフ</h2>

      <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={90}
            />

            <Pie
              data={DATA.flatMap((business) => business.children)}
              dataKey="value"
              nameKey="name"
              innerRadius={92}
              outerRadius={112}
            />

            <Pie
              data={DATA.flatMap((business) =>
                business.children.flatMap((area) => area.children),
              )}
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
