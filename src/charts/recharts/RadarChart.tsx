import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RCRadarChart,
  ResponsiveContainer,
} from 'recharts'
import clsx from 'clsx'

const SKILL_LEVEL_RECORDS = [
  {
    name: 'HP',
    value: 200,
  },
  {
    name: 'STR',
    value: 80,
  },
  {
    name: 'DEF',
    value: 140,
  },
  {
    name: 'AGI',
    value: 60,
  },
  {
    name: 'INT',
    value: 100,
  },
] as const

export const RadarChart = () => (
  <section className="mt-4">
    <h2 className="text-xl">Radar Chart / レーダーチャート</h2>

    <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
      <ResponsiveContainer>
        <RCRadarChart data={SKILL_LEVEL_RECORDS}>
          <PolarGrid stroke="var(--color-neutral-300)" />
          <PolarAngleAxis dataKey="name" stroke="var(--color-neutral-400)" />
          <PolarRadiusAxis stroke="var(--color-neutral-300)" />

          <Radar
            dataKey="value"
            stroke="var(--color-blue-500)"
            fill="var(--color-blue-500)"
            fillOpacity={0.4}
            activeDot={false}
          />
        </RCRadarChart>
      </ResponsiveContainer>
    </div>
  </section>
)
