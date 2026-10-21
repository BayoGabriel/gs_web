type ForkConnectorProps = {
  /** 'up' enters the branch from below; 'down' enters from above. */
  direction: 'up' | 'down'
  delay?: boolean
}

const paths = {
  up: 'M0 100 C 36 100, 36 50, 72 50',
  down: 'M0 0 C 36 0, 36 50, 72 50',
}

/** Horizontal bezier connector from a source edge to a branch card. */
export function ForkConnector({ direction, delay }: ForkConnectorProps) {
  return (
    <svg
      viewBox="0 0 72 100"
      preserveAspectRatio="none"
      className="h-full w-full text-forest"
      aria-hidden="true"
    >
      <path
        d={paths[direction]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        className={delay ? 'branch-path branch-path-delay' : 'branch-path'}
        style={{ ['--branch-length' as string]: 140 }}
      />
    </svg>
  )
}
