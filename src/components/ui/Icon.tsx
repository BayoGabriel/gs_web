import type { SVGProps } from 'react'

export type IconName = 'menu' | 'close' | 'chevron' | 'arrow-right' | 'check'

type IconProps = SVGProps<SVGSVGElement> & { name: IconName }

const paths: Record<IconName, string> = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  chevron: 'M6 9l6 6 6-6',
  'arrow-right': 'M4 12h14M13 6l6 6-6 6',
  check: 'M5 12.5l4.5 4.5L19 7',
}

export function Icon({ name, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  )
}
