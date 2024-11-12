export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-start justify-center gap-2 mx-6">
        <div className="text-sm font-bold">
          Hey, there!
        </div>
        <h1 className="flex flex-col text-4xl md:text-6xl lg:text-7xl font-bold tracking leading-snug">
          <span className="text-primary">I'm Aayush,</span>
          <span>a software engineer with</span>
          <span>a focus on fullstack development.</span>
        </h1>
      </div>
    </main>
  )
}