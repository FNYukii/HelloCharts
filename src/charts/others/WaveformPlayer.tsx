import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import audioUrl from '../../assets/wind.wav'
import clsx from 'clsx'

export const SoundPlayer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Wavesurferインスタンス作成
    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#3b82f6', // 未再生部分
      progressColor: '#3b82f6', // 再生済み部分
      cursorColor: '#3b82f6', // 再生位置カーソル
      barWidth: 1,
      barGap: 1,
      url: audioUrl,
      normalize: true,
    })

    // イベントリスナー登録
    wavesurfer.on('ready', () => {
      wavesurfer.play().catch((error) => {
        alert(
          `ブラウザの自動再生ポリシーによって自動再生がブロックされました\n${error}`,
        )
      })
    })

    return () => {
      wavesurfer.destroy()
    }
  }, [])

  return (
    <section className="mt-4">
      <h2 className="text-xl">Waveform Chart / 波系グラフ 2</h2>

      <div
        className={clsx(
          'h-80 aspect-video',
          'border border-neutral-400',
          'flex items-center',
        )}
      >
        <div ref={containerRef} className="w-full" />
      </div>
    </section>
  )
}
