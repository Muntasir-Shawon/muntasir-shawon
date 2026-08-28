import { useState } from "react";
import { Mail, Github, Instagram, MapPin, Copy, Check, Send, Sparkles, MessageSquare, ExternalLink, Radio, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { BatInsignia } from "./BatInsignia";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "muntasir.shawon78@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Encrypted frequency (email) copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all tactical fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Transmission received! Batcomputer uplink established.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bat-gold/10 border border-bat-gold/30 text-xs font-mono font-bold text-bat-gold">
            <Radio className="w-3.5 h-3.5 text-bat-gold animate-pulse" />
            <span>ESTABLISH SECURE BAT-UPLINK // 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Transmit <span className="text-gradient">Secure Transmission</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Whether you want to discuss AI/ML engineering, collaborate on software architectures, or connect regarding photography, the frequency is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="hud-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-bat-border tactical-border">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <BatInsignia size={18} className="text-bat-gold" />
                  <h3 className="text-lg font-orbitron font-bold text-slate-100">
                    Direct Channel
                  </h3>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Copy direct encrypted email channel to clipboard:
                </p>
              </div>

              {/* Copy Email Bar */}
              <div className="p-3.5 rounded-2xl bg-[#080A10] border border-bat-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-bat-gold/10 text-bat-gold shrink-0 border border-bat-gold/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#141724] hover:bg-[#1E2336] text-slate-300 hover:text-bat-gold transition-all shrink-0 active:scale-95 border border-bat-border hover:border-bat-gold/50"
                  title="Copy Channel"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-bat-gold" />
                  )}
                </button>
              </div>

              {/* Location & University Badges */}
              <div className="space-y-3 pt-2 text-left">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-2 rounded-xl bg-[#080A10] border border-bat-border text-bat-gold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-orbitron font-bold text-slate-200">Dhaka, Bangladesh</div>
                    <div className="text-[11px] font-mono text-slate-400">North South University (NSU)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-bat-border space-y-3 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  NETWORK NODES:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Muntasir-Shawon"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#080A10] hover:bg-[#121624] border border-bat-border hover:border-bat-gold/50 flex items-center justify-between text-xs font-mono text-slate-300 font-semibold transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-bat-gold" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href="https://www.instagram.com/muntasir_shawon"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#080A10] hover:bg-[#121624] border border-bat-border hover:border-bat-gold/50 flex items-center justify-between text-xs font-mono text-slate-300 font-semibold transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-bat-gold group-hover:text-amber-300" />
                      <span>Instagram</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="hud-panel rounded-3xl p-6 sm:p-8 border border-bat-border space-y-6 tactical-border text-left">
              <div className="space-y-1">
                <h3 className="text-xl font-orbitron font-bold text-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-bat-gold" />
                  <span>Transmit Intel</span>
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Transmit your inquiry directly through the WayneTech interface.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">
                      IDENTIFIER (NAME)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bruce Wayne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080A10] border border-bat-border text-sm font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-bat-gold focus:ring-1 focus:ring-bat-gold/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">
                      COMM CHANNEL (EMAIL)
                    </label>
                    <input
                      type="email"
                      placeholder="wayne@enterprises.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080A10] border border-bat-border text-sm font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-bat-gold focus:ring-1 focus:ring-bat-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">
                    TRANSMISSION PAYLOAD (MESSAGE)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Brief me on your vision, technical specs, or collaboration goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080A10] border border-bat-border text-sm font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-bat-gold focus:ring-1 focus:ring-bat-gold/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-[#06070a] bg-gradient-to-r from-bat-gold via-amber-400 to-bat-yellow hover:brightness-110 shadow-lg shadow-bat-gold/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "TRANSMITTING INTEL..." : "TRANSMIT PAYLOAD"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
