import { Users, MessageSquare } from 'lucide-react'

const teams = [
  {
    id: 't1',
    title: 'AI Builders',
    lookingFor: 'Frontend dev (React) + UI/UX',
    blurb: 'We are shipping an ML-powered productivity tool at Utopia Hack.',
  },
  {
    id: 't2',
    title: 'Open Source Ninjas',
    lookingFor: 'Backend dev (Node/Express) + DevOps',
    blurb: 'Targeting the sustainability track with OSS contributions.',
  },
  {
    id: 't3',
    title: 'Web3 Tinkerers',
    lookingFor: 'Smart contracts (Solidity) + Product',
    blurb: 'Building a fun onchain social mini-app for hackers.',
  },
]

export default function TeamFinder() {
  return (
    <section id="teams" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Find teammates</h2>
            <p className="mt-2 text-slate-600">Connect with builders joining similar events.</p>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Create a post</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white">
                <Users className="h-3.5 w-3.5" /> Team
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.blurb}</p>
              <p className="mt-3 text-sm font-medium text-slate-600">Looking for: {t.lookingFor}</p>
              <div className="mt-5">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                  <MessageSquare className="h-4 w-4" /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
