import Spline from '@splinetool/react-spline'
import { ArrowRight, Search } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
          Welcome to your coding utopia
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Discover. Join. Build.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Explore hackathons, coding contests, webinars and workshops tailored to your interests. Manage registrations, find teammates, and grow your portfolio — all in one place.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            <Search className="h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search events, tags or locations"
              className="w-full rounded-md px-2 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
              Search
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
          <span>Trending: Hackathon • Web3 • AI/ML • Open Source</span>
        </div>
      </div>
    </section>
  )
}
