import { formatName } from "@/lib/format-name"

// Builds a greeting string for the given name.
export function greet(name = "world") {
  return `Hello, ${formatName(name)}!`
}
