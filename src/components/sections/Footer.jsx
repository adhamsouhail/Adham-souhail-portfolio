import Icon from '@/components/ui/Icon';
import { meta } from '@/data/meta';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const socialIcons = [
  { name: 'behance', label: 'Behance', href: meta.socialLinks?.behance || '#' },
  { name: 'linkedin', label: 'LinkedIn', href: meta.socialLinks?.linkedin || '#' },
  { name: 'instagram', label: 'Instagram', href: meta.socialLinks?.instagram || '#' },
  { name: 'whatsapp', label: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark border-t-[3px] border-accent pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Column 1 — Brand */}
          <div>
            <a href="#" className="text-xl font-bold text-white mb-3 inline-block">
              {meta.siteName}<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-[#AAAAAA] mb-2 font-medium">{meta.siteTagline}</p>
            <p className="text-sm text-[#666666] leading-relaxed max-w-[260px]">
              Digital design studio specializing in UI/UX, brand identity, and social media systems that grow businesses.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#666666] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#666666] mb-5">
              Connect
            </h3>
            <div className="flex gap-3 mb-5">
              {socialIcons.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#AAAAAA] hover:text-accent hover:bg-[#2A2A2A] hover:scale-110 transition-all duration-200"
                >
                  <Icon name={s.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${meta.email}`}
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-150"
            >
              {meta.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333333] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} {meta.siteName}. All rights reserved.
          </p>
          <p className="text-xs text-[#666666]">{meta.siteTagline}</p>
        </div>
      </div>
    </footer>
  );
}
