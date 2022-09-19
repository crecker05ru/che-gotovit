export const roundNumber = (value: number, precision: number = 1): number => {
  if (typeof value !== "number") {
    return 0
  }
  let shift = Math.pow(10, precision)
  return Math.round(value * shift) /  shift
}
