import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'UI / Web Design', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'UI / Web Design', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#09090B] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dramatic Headline & Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S BUILD SOMETHING GREAT</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                HAVE AN IDEA?
              </h2>
              <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-white bg-clip-text text-transparent tracking-tight leading-none">
                LET'S CREATE IT.
              </h2>
            </div>

            <p className="text-lg text-[#A1A1AA] font-light max-w-xl leading-relaxed">
              I'm open to freelance design projects, web development opportunities, full-time roles, and creative collaborations.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#17171C] border border-[#27272A] hover:border-[#8B5CF6]/50 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#71717A] uppercase block">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-display font-bold text-white text-base hover:text-[#8B5CF6] transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#17171C] border border-[#27272A] hover:border-[#3B82F6]/50 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#71717A] uppercase block">Phone / WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-display font-bold text-white text-base hover:text-[#3B82F6] transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#FAFAFA] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#0B66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#FAFAFA] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#FAFAFA]" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 md:p-10 rounded-3xl bg-[#17171C]/80 border border-[#27272A] shadow-2xl backdrop-blur-md">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-8 font-light">
                Fill out the brief form below and I'll respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">Message Delivered!</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Thank you for reaching out, Zeel will review your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090B] border border-[#27272A] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090B] border border-[#27272A] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Project Category</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090B] border border-[#27272A] text-white text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    >
                      <option value="UI / Web Design">UI / Web Design</option>
                      <option value="Graphic Design / Branding">Graphic Design / Branding</option>
                      <option value="Data Visualization">Data Visualization</option>
                      <option value="Freelance / Consultation">Freelance / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Project Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your goals, scope, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090B] border border-[#27272A] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-display font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-[#8B5CF6]/25 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
