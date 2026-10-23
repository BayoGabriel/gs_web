/** Money is always integer minor units + ISO currency, per implementation.md. */

export function formatMoney(
  minorUnits: number,
  currency = 'NGN',
  locale?: string,
): string {
  return new Intl.NumberFormat(locale ?? 'en-NG', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(minorUnits / 100)
}

/** Parse a user-typed amount ("1,234.56") into integer minor units. */
export function parseMoneyInput(input: string): number | null {
  const cleaned = input.replace(/[,\s]/g, '')
  if (!/^\d*\.?\d{0,2}$/.test(cleaned) || cleaned === '' || cleaned === '.')
    return null
  const value = Math.round(Number(cleaned) * 100)
  return Number.isFinite(value) ? value : null
}

/** Format a markup value (amount or percent) for display. */
export function formatMarkup(
  type: 'amount' | 'percent',
  minorUnits: number,
  currency = 'NGN',
): string {
  return type === 'amount'
    ? formatMoney(minorUnits, currency)
    : `${minorUnits / 100}%`
}
