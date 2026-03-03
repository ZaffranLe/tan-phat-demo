'use client';
import { Button } from '../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import useVisibleObserverRef from '@/hooks/useVisibleObserverRef';
import clsx from 'clsx';

export default function AboutSection() {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <div
      id="about"
      className={clsx(
        'space-y-3 opacity-0 md:space-y-5 lg:px-20 xl:space-y-8 xl:px-36 2xl:space-y-12',
        isVisible && 'fade-in-top'
      )}
      ref={ref}
    >
      <h2 className="text-base font-medium md:text-xl xl:text-2xl 2xl:text-4xl">
        Về chúng tôi - Giải pháp kho bãi toàn diện
      </h2>
      <p className="text-xs md:text-base xl:w-1/2 xl:text-lg 2xl:text-2xl">
        Chúng tôi cung cấp các giải pháp tối ưu về Pallet và thiết bị nâng hạ, giúp doanh nghiệp vận hành kho bãi hiệu quả và tiết kiệm chi phí.
      </p>
      <div className="flex flex-col gap-x-10 gap-y-3 md:flex-row xl:gap-x-20">
        <img src="cover/about.png" alt="Ta Thi Logo" className="h-full w-full md:w-1/2 xl:w-full" />
        <div className="flex flex-col gap-y-3 xl:pb-16">
          <p className="text-xs md:text-base xl:text-lg 2xl:text-2xl">
            Với nhiều năm kinh nghiệm trong ngành nhựa và thiết bị công nghiệp, chúng tôi tự hào là đơn vị uy tín chuyên cung cấp Pallet nhựa cũ & mới, xe nâng tay và các sản phẩm nhựa công nghiệp chất lượng cao.
          </p>
          <p className="text-xs md:text-base xl:text-lg 2xl:text-2xl">
            Sứ mệnh của chúng tôi là mang lại những sản phẩm bền bỉ, giá cả cạnh tranh và dịch vụ chuyên nghiệp nhất, đồng hành cùng sự phát triển bền vững của khách hàng.
          </p>
          <div>
            <Button className="text-xs md:text-base xl:text-lg 2xl:text-2xl">
              Tìm hiểu thêm <FontAwesomeIcon icon={faAnglesRight} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
