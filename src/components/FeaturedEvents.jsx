import { CalendarDays, MapPin, Clock, Bookmark } from 'lucide-react'

const events = [
  {
    id: '1',
    title: 'Utopia Hack 2025',
    type: 'Hackathon',
    date: 'Dec 12–14, 2025',
    mode: 'Online',
    location: 'Remote',
    desc: '48-hour product sprint with prizes, mentors and sponsor challenges.'
  },
  {
    id: '2',
    title: 'Algo Rush Challenge',
    type: 'Coding Contest',
    date: 'Nov 29, 2025',
    mode: 'Online',
    location: 'HackerRank',
    desc: 'Compete in timed rounds to solve DSA/Algo problems.'
  },
  {
    id: '3',
    title: 'Ship Fast Workshop',
    type: 'Workshop',
    date: 'Dec 3, 2025',
    mode: 'Hybrid',
    location: 'Bengaluru + Remote',
    desc: 'Hands-on session on rapid prototyping with modern stacks.'
  }
]

export default function FeaturedEvents() {
  return (
    <section id="events" className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured events</h2>
            <p className="mt-2 text-slate-600">Curated picks happening soon. Sign in to see personalised suggestions.</p>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">See all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.id} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{e.type}</span>
                <button className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-slate-500 hover:bg-slate-50 hover:text-slate-700">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.desc}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{e.date}</div>
                <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{e.mode}</div>
                <div className="inline-flex items-center gap-2 col-span-2"><MapPin className="h-4 w-4" />{e.location}</div>
              </div>

              <div className="mt-5">
                <button className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">Register</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
