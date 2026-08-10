import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import audioUrl from '../../assets/wind.wav'
import clsx from 'clsx'

export const AudioSpectramSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Wavesurferインスタンス作成
    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#3b82f6',
      cursorWidth: 0,
      barWidth: 1,
      barGap: 1,
      url: audioUrl,
      normalize: true,
    })

    return () => {
      wavesurfer.destroy()
    }
  }, [])

  return (
    <section className="mt-4">
      <h2 className="text-xl">Audio Spectrum / オーディオスペクトラム</h2>

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
