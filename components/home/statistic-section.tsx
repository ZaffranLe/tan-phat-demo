'use client';
import useVisibleObserverRef from '@/hooks/useVisibleObserverRef';
import clsx from 'clsx';
import Image from 'next/image';
export default function StatisticSection() {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <div
      className={clsx(
        'space-y-3 opacity-0 md:space-y-5 lg:px-20 xl:space-y-8 xl:px-36 2xl:space-y-12',
        isVisible && 'fade-in-top'
      )}
      ref={ref}
    >
      <h2 className="text-base font-medium md:text-xl xl:text-2xl 2xl:text-4xl">
        Với hơn 1000+ khách hàng tin tưởng.
        <br />
        Chúng tôi cam kết chất lượng và sự tận tâm hàng đầu.
      </h2>
      <p className="text-xs md:text-base xl:text-lg 2xl:text-2xl">
        <b>Tân Phát</b> tự hào mang đến các sản phẩm Pallet và thiết bị nâng hạ cho hàng nghìn doanh nghiệp trên khắp cả nước. Chúng tôi luôn nỗ lực không ngừng để cung cấp những sản phẩm chất lượng nhất với giá thành tối ưu, giúp khách hàng giải quyết bài toán vận hành kho bãi hiệu quả.
      </p>
      <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-4 lg:p-2 lg:shadow-lg">
        <div className="flex items-center gap-x-5">
          <Image
            src="icon/circle-check.svg"
            alt="dark blue circle with white check mark"
            width={48}
            height={48}
            className="h-8 w-8 lg:h-12 lg:w-12"
          />
          <div>
            <p className="text-base font-semibold md:text-xl xl:text-2xl">5000+</p>
            <p className="text-xs md:text-base xl:text-lg">Sản phẩm cung ứng</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <Image
            src="icon/profile.svg"
            alt="dark blue profile paper with blank lines as placeholder"
            width={48}
            height={48}
            className="h-8 w-8 lg:h-12 lg:w-12"
          />
          <div>
            <p className="text-base font-semibold md:text-xl xl:text-2xl">1000+</p>
            <p className="text-xs md:text-base xl:text-lg">Khách hàng hài lòng</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <Image
            src="icon/application.svg"
            alt="four dark blue squares as a big square"
            width={48}
            height={48}
            className="h-8 w-8 lg:h-12 lg:w-12"
          />
          <div>
            <p className="text-base font-semibold md:text-xl xl:text-2xl">10+</p>
            <p className="text-xs md:text-base xl:text-lg">Năm kinh nghiệm</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <Image
            src="icon/users.svg"
            alt="two users with dark blue background color"
            width={48}
            height={48}
            className="h-8 w-8 lg:h-12 lg:w-12"
          />
          <div>
            <p className="text-base font-semibold md:text-xl xl:text-2xl">50+</p>
            <p className="text-xs md:text-base xl:text-lg">Đối tác chiến lược</p>
          </div>
        </div>
      </div>
    </div>
  );
}
