import clsx from 'clsx'
import React, { useRef, useEffect } from 'react'

const BAR_COUNT = 32
const BARS_GAP = 3

export const LiveFrequencySpectrum: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const barWidth = (canvas.width - BARS_GAP * (BAR_COUNT + 1)) / BAR_COUNT
    const maxBarHeight = canvas.height - 20

    let frameId: number

    // 各バーの 現在の高さ,目標の高さ を保持
    const currentHeights = new Array(BAR_COUNT).fill(0.1)
    const targetHeights = new Array(BAR_COUNT).fill(0.1)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < BAR_COUNT; i++) {
        // --- 1. 目標値（音の大きさ）の更新を緩やかにする ---
        // たまに目標値を変更する
        if (Math.random() < 0.08) {
          const freqWeight = 1 - (i / BAR_COUNT) * 0.4
          // 急激な1.0への跳ね上がりを避け、振幅を抑える (最大でも0.7程度)
          targetHeights[i] = (Math.random() * 0.6 + 0.1) * freqWeight
        }

        // --- 2. 補間処理（現在値を目標値へじわっと近づける）---
        // 差分の 15% ずつ近づけることで、急激な変化を防いで滑らかにする
        currentHeights[i] += (targetHeights[i] - currentHeights[i]) * 0.15

        // 目標値自体もゆっくり減衰させる（すべり台のように落とす）
        targetHeights[i] *= 0.95

        const barHeight = Math.max(0.03, currentHeights[i]) * maxBarHeight
        const x = BARS_GAP + i * (barWidth + BARS_GAP)
        const y = canvas.height - barHeight

        ctx.fillStyle = '#3b82f6'
        ctx.fillRect(x, y, barWidth, barHeight)
      }

      // 次回の描画を予約
      frameId = requestAnimationFrame(render)
    }

    // 描画実行
    render()

    // クリーンアップ
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="mt-4">
      <h2 className="text-xl">
        Live Frequency Spectrum / ライブ周波数スペクトラム
      </h2>

      <div
        className={clsx(
          'h-80 aspect-video',
          'border border-neutral-400',
          'flex justify-center items-center',
        )}
      >
        <canvas ref={canvasRef} width={400} height={200} />
      </div>
    </section>
  )
}
