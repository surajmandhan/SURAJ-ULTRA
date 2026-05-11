"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/backgrounds/dot-pattern";
import { Input, Textarea } from "./ui/Input";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";

const Contact = ({ social_handle }: { social_handle: any[] }) => {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const socialIcons: any = {
    Facebook: <Facebook size={20} />,
    Twitter: <Twitter size={20} />,
    Instagram: <Instagram size={20} />,
    LinkedIn: <Linkedin size={20} />,
  };

  return (
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden" id="contact">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-20",
        )}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <Transition viewport={{ once: true }}>
            <SectionHeading className="mb-8">
              <SlideIn className="text-white/40 block">{t('title1')}</SlideIn>
              <SlideIn className="text-white block">{t('title2')}</SlideIn>
            </SectionHeading>
            <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t('info.email')}</h4>
                  <p className="text-zinc-500">{t('info.email_value')}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t('info.address')}</h4>
                  <p className="text-zinc-500">{t('info.address_value')}</p>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-white font-bold mb-6">{t('info.social')}</h4>
                <div className="flex gap-4">
                  {social_handle.map((handle) => (
                    <a
                      key={handle._id}
                      href={handle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
                    >
                      {socialIcons[handle.platform] || <Facebook size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Transition>

          {/* Right Side: Form */}
          <Transition transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Send size={120} className="rotate-12" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest pl-2">{t('form.name')}</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest pl-2">{t('form.email')}</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest pl-2">{t('form.subject')}</label>
                  <Input placeholder="Project Inquiry" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest pl-2">{t('form.message')}</label>
                  <Textarea placeholder={t('form.message')} className="min-h-[150px]" required />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 disabled:opacity-50 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  {status === "sending" ? t('form.sending') : t('form.send')}
                  <Send size={20} />
                </button>

                {status === "success" && (
                  <p className="text-green-500 text-center font-bold animate-bounce mt-4">
                    {t('form.success')}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center font-bold mt-4">
                    {t('form.error')}
                  </p>
                )}
              </form>
            </div>
          </Transition>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-24 border-t border-white/5 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-white rounded-xl grid place-items-center text-black font-bold text-xl">U</div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">UltraTechHub</span>
          </div>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} UltraTechHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
