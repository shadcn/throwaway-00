"use client"

// A throwaway button that greets the user on click.
export function HelloButton({ name = "world" }: { name?: string }) {
  return (
    <button
      type="button"
      onClick={() => alert(`Hello, ${name}!`)}
      className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
    >
      Say hello
    </button>
  )
}
