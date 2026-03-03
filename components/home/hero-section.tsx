'use client';
import useVisibleObserverRef from '@/hooks/useVisibleObserverRef';
import clsx from 'clsx';

export default function HeroSection() {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <section
      className="relative h-44 w-full md:h-96 lg:h-[500px] xl:h-[700px] 2xl:h-screen"
      id="hero"
    >
      <div
        className={clsx(
          'absolute left-5 top-1/2 opacity-0 lg:left-16 xl:left-20',
          isVisible && 'fade-in-left'
        )}
        ref={ref}
      >
        <img
          src="logo/logo-full.png"
          alt="Tân Phát Logo"
          className="w-1/2 -translate-y-1/2 lg:m-0 xl:w-full"
        />
      </div>
      <img
        src="cover/hero.png"
        alt="A meeting with 4 members"
        className="absolute right-0 top-0 h-full"
      />
    </section>
  );
}
