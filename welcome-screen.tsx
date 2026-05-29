import { GreetingCard } from "@/components/greeting-card"

// A full-screen welcome view wrapping the greeting card.
export function WelcomeScreen({ name = "world" }: { name?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <GreetingCard name={name} />
    </div>
  )
}
