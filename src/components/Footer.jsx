import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm text-slate-600">© 2025 Utopia. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-slate-900"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
