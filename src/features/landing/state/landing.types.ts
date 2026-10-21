export type NavItem = {
  label: string
  href: `#${string}`
}

export type Problem = {
  id: string
  title: string
  description: string
}

export type HowItWorksStep = {
  id: string
  index: string
  title: string
  description: string
}

export type Benefit = {
  id: string
  title: string
  description: string
}

export type ComparisonColumn = {
  id: string
  label: string
  caption: string
  rows: string[]
}
