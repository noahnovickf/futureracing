'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Delay event listener setup to avoid race conditions
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className="window"
          style={{
            position: 'absolute',
            bottom: '35px',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            gap: '4px',
            minWidth: '140px',
            zIndex: 1000,
          }}
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/meet-the-team', label: 'Meet the Team' },
            { href: '/sponsors', label: 'Sponsors' },
            { href: '/news', label: 'News' },
            { href: '/gallery', label: 'Gallery' },
            {
              href: '/calendar',
              label: 'Calendar (coming soon)',
              disabled: true,
            },
          ].map(({ href, label, disabled }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? styles.activeLink : ''}
              style={{
                padding: '8px 5px',
                borderRadius: '3px',
                color: disabled ? 'grey' : '',
                cursor: disabled ? 'not-allowed' : '',
                pointerEvents: disabled ? 'none' : 'auto',
              }}
              aria-disabled={disabled}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <div className={`window ${styles.footer}`}>
        <button
          ref={buttonRef}
          className="default"
          onClick={() => setIsOpen((prev) => !prev)} // Toggle state correctly
        >
          <Image
            src="/FutureLogo.png"
            alt="Future Racing Logo"
            width={50}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        </button>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            fontSize: 'large',
            justifyContent: 'center',
          }}
        >
          Get 5% off most items at Dunbar with the code FUTURE&F
        </div>
      </div>
    </>
  );
};

export default Footer;
