import clsx from 'clsx'
import { useEffect, useRef } from 'react'

const SPEED = 0.4 // 流れるスピード（px/frame）
const BAR_WIDTH = 1 // 各バーの幅（px）
const BAR_GAP = 1 // バー同士の間隔（px）

export const LiveBarWaveformChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスのサイズを親要素に合わせる（1倍固定）
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width // 親要素の幅をそのまま使用
        canvas.height = rect.height // 親要素の高さをそのまま使用
      }
    }

    // 設定値取得
    const step = BAR_WIDTH + BAR_GAP
    const maxBars = Math.ceil(canvas.width / step) + 5 // 画面幅に必要なバーの数

    // 波形データ（振幅 0.0〜1.0）
    const data: number[] = Array.from(
      { length: maxBars },
      () => Math.random() * 0.15 + 0.05,
    )

    let animationFrameId: number
    let offsetX = 0 // アニメーション用オフセット

    // 描画関数
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // オフセットの更新
      offsetX += SPEED

      // 1バー分（step）移動したら、一番古いデータを消して新しいデータを追加
      if (offsetX >= step) {
        offsetX -= step
        data.shift()

        // 地震のようなノイズ波形（たまに大きな振幅を発生させる）
        const isSpike = Math.random() < 0.05
        const newAmplitude = isSpike
          ? Math.random() * 0.8 + 0.2 // スパイク（強い揺れ）
          : Math.random() * 0.15 + 0.05 // 平常時（微小な揺れ）

        data.push(newAmplitude)
      }

      // 上下対称のバーを描画
      for (let i = 0; i < data.length; i++) {
        const amplitude = data[i]
        const barHeight = amplitude * (canvas.height * 0.8) // 画面高さに対する割合

        const x = i * step - offsetX
        const centerY = canvas.height / 2
        const y = centerY - barHeight / 2

        ctx.fillStyle = '#3b82f6'
        ctx.fillRect(x, y, BAR_WIDTH, barHeight)
      }

      // 次回の描画を予約
      animationFrameId = requestAnimationFrame(render)
    }

    // 描画関数実行
    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="mt-4">
      <h2 className="text-xl">Live Bar Waveform Chart / ライブ棒波形グラフ</h2>

      <div className={clsx('h-80 aspect-video', 'border border-neutral-400')}>
        <canvas ref={canvasRef} className="size-full" />
      </div>
    </section>
  )
}
