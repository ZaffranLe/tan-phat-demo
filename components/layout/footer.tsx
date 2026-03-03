import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ebebf7]">
      <div className="flex flex-col items-start justify-between gap-y-6 p-5 md:flex-row md:gap-x-6 lg:px-16 xl:px-32">
        <div className="m-auto 2xl:m-0">
          <Link href="/">
            <Image
              src="logo/logo-vertical.png"
              alt="Ta Thi Logo Vertical"
              width={187}
              height={108}
              className="mx-auto"
            />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-x-6 md:mt-6">
            <div className="cursor-pointer rounded-xl p-2 hover:bg-gray-200">
              <Image
                src="icon/facebook.svg"
                alt="black filled facebook logo"
                width={11}
                height={20}
              />
            </div>
            <div className="cursor-pointer rounded-xl p-2 hover:bg-gray-200">
              <Image
                src="icon/instagram.svg"
                alt="black outlined instagram logo"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer rounded-xl p-2 hover:bg-gray-200">
              <Image src="icon/tiktok.svg" alt="black filled tiktok logo" width={17} height={20} />
            </div>
            <div className="cursor-pointer rounded-xl p-2 hover:bg-gray-200">
              <Image src="icon/x.svg" alt="black outlined x logo" width={22} height={20} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium md:text-xl xl:text-2xl">Dịch vụ</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-12 gap-y-3 md:gap-x-4 lg:grid-cols-2 2xl:gap-x-12">
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Phát triển phần mềm
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Phát triển Game
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Thiết kế App
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Bảo trì phần mềm
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Thiết kế website
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium md:text-xl xl:text-2xl">Giải pháp</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-12 gap-y-3 md:gap-x-4 lg:grid-cols-2 2xl:gap-x-12">
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Công nghệ giáo dục
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Bất động sản
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Công nghệ tài chính
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Thương mại điện tử
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Công nghệ y tế
              </Link>
            </div>
          </div>
        </div>
        {/* Placeholder div for layout */}
        <div />
      </div>
      <div className="p-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Ta Thi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
