import { Rocket } from 'lucide-react'

export default function CTA() {
  return (
    <section id="organise" className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(40%_40%_at_50%_0%,_#22d3ee_0%,_transparent_60%),radial-gradient(40%_40%_at_0%_100%,_#a78bfa_0%,_transparent_60%),radial-gradient(35%_35%_at_100%_60%,_#fb7185_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Host your event on Utopia</h3>
              <p className="mt-2 max-w-2xl text-slate-200/90">Organisers get a modern dashboard to submit, manage and promote events with role-based access and approval flow.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-50">
              <Rocket className="h-4 w-4" /> Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
