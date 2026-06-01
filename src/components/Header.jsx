'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container-x h-full flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0" aria-label="Studio Palomba - Home">
          <Image
            src="/images/paer-logo.png"
            alt="Studio Palomba"
            width={400}
            height={160}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    transparent
                      ? `text-white/90 hover:text-white ${active ? 'text-white' : ''}`
                      : `text-gray-700 hover:text-navy ${active ? 'text-navy' : ''}`
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href="tel:+393483112241"
            className={`btn-primary ${transparent ? 'btn-gold' : 'btn-navy'} text-sm px-5 py-2.5`}
          >
            <Phone size={16} />
            <span>Chiama ora</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md ${transparent ? 'text-white' : 'text-navy'}`}
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
          >
            <nav className="container-x py-4 flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'bg-navy/5 text-navy'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+393483112241"
                className="btn-primary btn-navy mt-3 w-full"
              >
                <Phone size={18} />
                <span>Chiama ora</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
