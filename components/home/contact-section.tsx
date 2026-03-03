'use client';
import useVisibleObserverRef from '@/hooks/useVisibleObserverRef';
import { Button } from '../ui';
import clsx from 'clsx';
export default function ContactSection() {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <div
      className={clsx('pb-10 opacity-0 lg:pb-16', isVisible && 'fade-in-bottom')}
      id="contact"
      ref={ref}
    >
      <div className="w-full rounded-xl bg-[#062943] px-4 py-6 text-white lg:relative lg:left-1/2 lg:w-2/3 lg:-translate-x-1/2 xl:w-1/2">
        <div className="flex flex-col justify-between gap-x-6 gap-y-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-base font-medium md:text-xl xl:text-2xl">Liên hệ với chúng tôi</h2>
            <p className="text-xs md:text-base xl:text-lg">Giải đáp thắc mắc và tư vấn giúp bạn</p>
          </div>
          <div className="flex justify-between rounded-full bg-white p-1 pl-3">
            <input
              className="border-0 text-base text-black outline-0 ring-0 xl:text-lg 2xl:text-2xl"
              placeholder="Nhập tin nhắn"
            />
            <Button className="rounded-full bg-[#062943] text-lg text-white md:px-10 xl:text-xl">
              Gửi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
