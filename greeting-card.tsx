import { greet } from "@/lib/greet"
import { HelloButton } from "@/components/hello-button"

// A card that displays a greeting and a hello button.
export function GreetingCard({ name = "world" }: { name?: string }) {
  return (
    <div className="rounded-lg border p-4">
      <p className="mb-2">{greet(name)}</p>
      <HelloButton name={name} />
    </div>
  )
}
