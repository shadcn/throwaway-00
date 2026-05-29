// Truncates a string to a max length, appending an ellipsis when cut.
export function truncate(value: string, max: number) {
  if (value.length <= max) {
    return value
  }

  return `${value.slice(0, max)}…`
}
