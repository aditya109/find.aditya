import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "kumaraditya1096@gmail.com",
    href: "mailto:kumaraditya1096@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 93482 86941",
    href: "tel:+919348286941",
    color: "#7c3aed",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: "https://maps.google.com/?q=Bangalore,India",
    color: "#10b981",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/aditya109",
    href: "https://www.linkedin.com/in/aditya109/",
    color: "#0077b5",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/aditya109",
    href: "https://github.com/aditya109",
    color: "#a5b4fc",
  },
  {
    icon: <ExternalLink size={18} />,
    label: "Website",
    value: "aditya109.github.io/find.aditya",
    href: "https://aditya109.github.io/find.aditya/",
    color: "#f59e0b",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #07071a 0%, #06060f 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: "#10b981" }}
          >
            Get in Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Contact Me
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #10b981, #00d4ff)",
            }}
          />
          <p
            className="mt-4"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.9rem",
              maxWidth: "420px",
              margin: "1rem auto 0",
            }}
          >
            Open to new opportunities, collaborations, or just a chat about distributed systems and Go.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Links */}
          <div className="lg:col-span-2 space-y-3">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}25`,
                    color: link.color,
                  }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="truncate text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle size={48} style={{ color: "#10b981" }} />
                  <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", textAlign: "center" }}>
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.25)",
                    }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs mb-1.5"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) =>
                          (e.target.style.border = "1px solid rgba(0,212,255,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs mb-1.5"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) =>
                          (e.target.style.border = "1px solid rgba(0,212,255,0.4)")
                        }
                        onBlur={(e) =>
                          (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job opportunity / Collaboration / Hello"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "1px solid rgba(0,212,255,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me what you have in mind..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "1px solid rgba(0,212,255,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                      color: "#ffffff",
                      boxShadow: "0 4px 20px rgba(0,212,255,0.25)",
                    }}
                  >
                    {loading ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-20 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}
      >
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Aditya Kumar · Built with React &amp; Three.js
        </p>
      </div>
    </section>
  );
}
