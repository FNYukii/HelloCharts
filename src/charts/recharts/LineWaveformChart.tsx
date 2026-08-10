import clsx from 'clsx'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

const WAVE_RECORDS = [
  { time: 0.0, gal: 0.02 },
  { time: 0.2, gal: -0.04 },
  { time: 0.4, gal: 0.03 },
  { time: 0.6, gal: -0.01 },
  { time: 0.8, gal: 0.05 },
  { time: 1.0, gal: -0.03 },
  { time: 1.2, gal: 0.01 },
  { time: 1.4, gal: -0.02 },
  { time: 1.6, gal: 0.04 },
  { time: 1.8, gal: -0.05 },
  { time: 2.0, gal: 0.02 },
  { time: 2.2, gal: -0.01 },
  { time: 2.4, gal: 0.03 },
  { time: 2.6, gal: -0.04 },
  { time: 2.8, gal: 0.01 },
  { time: 3.0, gal: -0.02 },
  // MARK: P波
  { time: 3.2, gal: 0.25 },
  { time: 3.4, gal: -0.32 },
  { time: 3.6, gal: 0.28 },
  { time: 3.8, gal: -0.41 },
  { time: 4.0, gal: 0.35 },
  { time: 4.2, gal: -0.22 },
  { time: 4.4, gal: 0.38 },
  { time: 4.6, gal: -0.45 },
  { time: 4.8, gal: 0.31 },
  { time: 5.0, gal: -0.27 },
  { time: 5.2, gal: 0.33 },
  { time: 5.4, gal: -0.39 },
  { time: 5.6, gal: 0.29 },
  { time: 5.8, gal: -0.21 },
  { time: 6.0, gal: 0.18 },
  // MARK: S派
  { time: 6.2, gal: -1.25 },
  { time: 6.4, gal: 2.45 },
  { time: 6.6, gal: -2.8 },
  { time: 6.8, gal: 2.15 },
  { time: 7.0, gal: -1.9 },
  { time: 7.2, gal: 1.65 },
  { time: 7.4, gal: -2.1 },
  { time: 7.6, gal: 1.75 },
  { time: 7.8, gal: -1.4 },
  { time: 8.0, gal: 1.2 },
  { time: 8.2, gal: -1.55 },
  { time: 8.4, gal: 1.1 },
  { time: 8.6, gal: -0.95 },
  { time: 8.8, gal: 0.85 },
  { time: 9.0, gal: -1.05 },
  { time: 9.2, gal: 0.7 },
  { time: 9.4, gal: -0.8 },
  { time: 9.6, gal: 0.6 },
  { time: 9.8, gal: -0.65 },
  { time: 10.0, gal: 0.5 },
  { time: 10.2, gal: -0.55 },
  { time: 10.4, gal: 0.42 },
  { time: 10.6, gal: -0.48 },
  { time: 10.8, gal: 0.38 },
  { time: 11.0, gal: -0.32 },
  // MARK: 減衰
  { time: 11.2, gal: 0.25 },
  { time: 11.4, gal: -0.22 },
  { time: 11.6, gal: 0.18 },
  { time: 11.8, gal: -0.15 },
  { time: 12.0, gal: 0.12 },
  { time: 12.2, gal: -0.1 },
  { time: 12.4, gal: 0.08 },
  { time: 12.6, gal: -0.07 },
  { time: 12.8, gal: 0.05 },
  { time: 13.0, gal: -0.04 },
  { time: 13.2, gal: 0.03 },
  { time: 13.4, gal: -0.03 },
  { time: 13.6, gal: 0.02 },
  { time: 13.8, gal: -0.02 },
  { time: 14.0, gal: 0.01 },
  { time: 14.2, gal: -0.01 },
  { time: 14.4, gal: 0.02 },
  { time: 14.6, gal: -0.01 },
  { time: 14.8, gal: 0.01 },
  { time: 15.0, gal: 0.0 },
] as const

export const LineWaveformChart = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl">Line Waveform Chart / 折れ線波形グラフ</h2>

      <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
        <ResponsiveContainer>
          <LineChart data={WAVE_RECORDS}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-neutral-300)"
            />
            <ReferenceLine
              y={0}
              stroke="var(--color-neutral-400)"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
              stroke="var(--color-neutral-400)"
            />
            <YAxis domain={[-3, 3]} stroke="var(--color-neutral-400)" />

            <Line
              type="monotone"
              dataKey="gal"
              stroke="var(--color-blue-500)"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
