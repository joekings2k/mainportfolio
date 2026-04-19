import { motion } from "framer-motion";
import MagneticiIcons from "../about/_shared/framerMagnetic";

const EMAIL = "collincity111@gmail.com";

const SOCIALS = [
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Github", href: "https://github.com/joekings2k" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const Contact = () => {
  return (
    <footer className="bg-black text-white min-h-screen flex flex-col justify-between px-[6rem] py-20">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
          Get in touch
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-[6rem] font-extrabold leading-none mb-10"
        >
          Let's build <br /> something together.
        </motion.h2>

        <MagneticiIcons>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block text-3xl underline underline-offset-8 decoration-1 hover:decoration-2"
          >
            {EMAIL}
          </a>
        </MagneticiIcons>
      </div>

      <div className="mt-20 flex flex-col gap-10">
        <div className="flex flex-wrap gap-8">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:opacity-60 transition-opacity"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex justify-between items-end pt-10 border-t border-white/10 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Jonathan Ogbeide</p>
          <p>Built with React, Vite & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
