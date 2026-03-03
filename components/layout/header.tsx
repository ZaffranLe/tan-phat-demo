'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  const [showFullHeader, setShowFullHeader] = useState(false);
  const [activeSection, setActiveSection] = useState<string>();
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowFullHeader(window.scrollY > window.innerHeight / 2);

      const sections = ['top', 'about', 'services', 'contact', 'hiring'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + 500 >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY >= lastScrollY ? true : currentScrollY < lastScrollY ? false : null;
      if (direction !== scrollingDown) {
        setScrollingDown(Boolean(direction));
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollingDown]);

  return (
    <header
      className={clsx(
        'fixed z-10 hidden w-full px-40 transition-all duration-500 md:block',
        !showFullHeader ? 'top-4' : 'top-0'
      )}
    >
      <nav
        className={clsx(
          'items-center gap-x-6 pl-8 text-center text-white transition-all duration-500 lg:justify-center',
          'absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2',
          showFullHeader
            ? 'w-full bg-black/80 p-4 md:justify-end'
            : 'w-4/5 rounded-full bg-black/60 p-2 md:justify-center lg:w-3/5 xl:w-1/2 2xl:w-2/5'
        )}
      >
        <Link
          href="#top"
          className={clsx(
            'absolute left-8 transition-all duration-500 xl:left-40',
            showFullHeader ? 'opacity-1 z-40' : 'z-40 -translate-x-full opacity-0'
          )}
        >
          <Image
            src="logo/logo-horizontal-light.png"
            width={129}
            height={37.4}
            alt="Logo of ta thi group with white color"
          />
        </Link>
        <Link href="#top" className="relative font-medium">
          Trang chủ
          <div
            className={clsx(
              'absolute -bottom-1 inline-block h-0.5 bg-white transition-all duration-500',
              activeSection === 'top' ? 'w-full' : 'w-0',
              (scrollingDown && activeSection === 'top') ||
                (!scrollingDown && activeSection !== 'top')
                ? 'left-0'
                : 'right-0'
            )}
          />
        </Link>
        <Link href="#about" className="relative font-medium">
          Về chúng tôi
          <div
            className={clsx(
              'absolute -bottom-1 inline-block h-0.5 bg-white transition-all duration-500',
              activeSection === 'about' ? 'w-full' : 'w-0',
              (scrollingDown && activeSection === 'about') ||
                (!scrollingDown && activeSection !== 'about')
                ? 'left-0'
                : 'right-0'
            )}
          />
        </Link>
        <Link href="#services" className="relative font-medium">
          Dịch vụ
          <div
            className={clsx(
              'absolute -bottom-1 inline-block h-0.5 bg-white transition-all duration-500',
              activeSection === 'services' ? 'w-full' : 'w-0',
              (scrollingDown && activeSection === 'services') ||
                (!scrollingDown && activeSection !== 'services')
                ? 'left-0'
                : 'right-0'
            )}
          />
        </Link>
        <Link href="#contact" className="relative font-medium">
          Liên hệ
          <div
            className={clsx(
              'absolute -bottom-1 inline-block h-0.5 bg-white transition-all duration-500',
              activeSection === 'contact' ? 'w-full' : 'w-0',
              (scrollingDown && activeSection === 'contact') ||
                (!scrollingDown && activeSection !== 'contact')
                ? 'left-0'
                : 'right-0'
            )}
          />
        </Link>
        <div className="rounded-full bg-white px-8 py-1">
          <Link href="#hiring" className="font-medium text-black">
            Tuyển dụng
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MobileHeader() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const onCloseSideMenu = () => {
    setOpenSideMenu(false);
  };
  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-black px-6 py-2.5 text-white md:hidden">
        <nav className="flex items-center justify-between">
          <Link href="#top">
            <Image
              src="logo/logo-horizontal-light.png"
              width={129}
              height={37.4}
              alt="Logo of ta thi group with white color"
            />
          </Link>
          <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setOpenSideMenu(true)} />
        </nav>
      </header>
      {openSideMenu &&
        createPortal(
          <div className="fixed inset-0 z-20 bg-black/60 md:invisible" onClick={onCloseSideMenu}>
            <div
              className="slide-in-left flex h-full w-fit flex-col gap-y-6 bg-black px-6 py-2.5 text-white !duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="#body" onClick={onCloseSideMenu}>
                <Image
                  src="logo/logo-horizontal-light.png"
                  width={129}
                  height={37.4}
                  alt="Logo of ta thi group with white color"
                />
              </Link>
              <Link href="#top" className="font-medium" onClick={onCloseSideMenu}>
                Trang chủ
              </Link>
              <Link href="#about" className="font-medium" onClick={onCloseSideMenu}>
                Về chúng tôi
              </Link>
              <Link href="#services" className="font-medium" onClick={onCloseSideMenu}>
                Dịch vụ
              </Link>
              <Link href="#contact" className="font-medium" onClick={onCloseSideMenu}>
                Liên hệ
              </Link>
              <div className="rounded-full bg-white px-8 py-1">
                <Link href="#hiring" className="font-medium text-black" onClick={onCloseSideMenu}>
                  Tuyển dụng
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
