'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import useVisibleObserverRef from '@/hooks/useVisibleObserverRef';
import clsx from 'clsx';

interface IService {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

const services: IService[] = [
  {
    image: 'icon/screens.svg',
    imageAlt: 'Pallet nhựa',
    title: 'Cung cấp Pallet nhựa',
    description:
      'Chuyên cung cấp Pallet nhựa cũ và mới đa dạng kích thước, chịu tải cao, phù hợp với mọi nhu cầu lưu kho và vận chuyển.',
  },
  {
    image: 'icon/digital.svg',
    imageAlt: 'Xe nâng tay',
    title: 'Thiết bị nâng hạ',
    description:
      'Cung cấp và bảo trì các loại xe nâng tay thấp, xe nâng tay cao chất lượng từ các thương hiệu uy tín, giá cả cạnh tranh.',
  },
  {
    image: 'icon/united.svg',
    imageAlt: 'Nhựa công nghiệp',
    title: 'Nhựa công nghiệp',
    description:
      'Phân phối rổ nhựa, sóng nhựa, thùng phuy, thùng IBC và các phụ kiện công nghiệp phục vụ sản xuất và logistics.',
  },
];

export default function OurServicesSection() {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <div
      id="services"
      className={clsx(
        'space-y-3 opacity-0 md:space-y-5 lg:px-20 xl:space-y-8 xl:px-36 2xl:space-y-12',
        isVisible && 'fade-in-top'
      )}
      ref={ref}
    >
      <h2 className="text-base font-medium md:text-xl xl:text-2xl 2xl:text-4xl">
        Dịch vụ của chúng tôi
      </h2>
      <p className="hidden text-base md:block xl:w-1/2 xl:text-lg 2xl:text-2xl">
        <b>Tân Phát</b> cung cấp giải pháp thiết bị công nghiệp toàn diện, chuyên sâu về Pallet nhựa, xe nâng và các sản phẩm hỗ trợ kho bãi, giúp doanh nghiệp tối ưu quy trình vận hành.
      </p>
      <div className="grid grid-cols-3 gap-x-6">
        {services.map((service, index) => (
          <Service service={service} key={index.toString()} />
        ))}
      </div>
    </div>
  );
}

interface IServiceProps {
  service: IService;
}

function Service({ service }: Readonly<IServiceProps>) {
  const { ref, isVisible } = useVisibleObserverRef();
  return (
    <div
      className={clsx(
        'space-y-2 text-center opacity-0 lg:space-y-8 xl:px-20',
        isVisible && 'fade-in-bottom'
      )}
      ref={ref}
    >
      <img src={service.image} alt={service.imageAlt} className="mx-auto h-28 lg:h-[180px]" />
      <h3 className="text-xs font-medium md:text-base xl:text-lg 2xl:text-2xl">{service.title}</h3>
      <p className="hidden text-lg lg:block xl:text-xl">{service.description}</p>
      <Button className="text-[8px] md:text-xs xl:text-base">
        Tìm hiểu thêm <FontAwesomeIcon icon={faAnglesRight} className="hidden md:inline-block" />
      </Button>
    </div>
  );
}
