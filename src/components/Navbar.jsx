import { useState } from 'react'
import { Menu, X, Sparkles, Bell, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Events', href: '#events' },
    { label: 'Team Finder', href: '#teams' },
    { label: 'Organise', href: '#organise' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Utopia</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-white transition">
              <Bell className="h-4 w-4" />
              Alerts
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-white" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-md px-3 py-2 text-slate-700 hover:bg-white">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm">Alerts</button>
                <button className="flex-1 rounded-md bg-slate-900 px-3 py-2 text-sm text-white">Sign in</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
