import { cn } from '../../lib/cn'
import { StepFour, StepOne, StepThree, StepTwo } from './StepArtScenes'

const scenes = [StepOne, StepTwo, StepThree, StepFour]

/**
 * Animated "how it works" diagrams — code versions of assets/svg/step-*.
 * Theme-token colours; every motion is transform/opacity (no layout cost).
 */
export function StepArt({ step, className }: { step: number; className?: string }) {
  const Scene = scenes[(step - 1) % scenes.length]
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-hidden="true"
      className={cn('step-art block h-auto w-full rounded-xl', className)}
    >
      <rect width="480" height="360" fill="var(--surface)" />
      <Scene />
    </svg>
  )
}
