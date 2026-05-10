import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/certifications", label: "Certifications" },
  { to: "/publications", label: "Publications" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] px-5 md:px-8 min-[1920px]:px-12 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          aditya<span className="text-aurora">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-muted-foreground hover:text-foreground"
              activeProps={{
                className:
                  "px-4 py-1.5 text-sm rounded-full bg-primary/15 text-primary",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden glass rounded-full p-2"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-5 glass rounded-2xl p-3 flex flex-col gap-1 animate-fade-in">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-2 rounded-xl text-sm text-muted-foreground"
              activeProps={{
                className:
                  "px-4 py-2 rounded-xl text-sm bg-primary/15 text-primary",
              }}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] px-5 md:px-8 min-[1920px]:px-12 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Aditya. Built with care & shaders.</p>
        <p className="font-display">
          <span className="text-aurora">find.aditya</span> v2
        </p>
      </div>
    </footer>
  );
}
