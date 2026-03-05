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
              alt="Tân Phát Logo Vertical"
              width={187}
              height={108}
              className="mx-auto"
            />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-x-6 md:mt-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="cursor-pointer rounded-xl p-2 hover:bg-gray-200"
            >
              <Image
                src="icon/facebook.svg"
                alt="black filled facebook logo"
                width={11}
                height={20}
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="cursor-pointer rounded-xl p-2 hover:bg-gray-200"
            >
              <Image
                src="icon/instagram.svg"
                alt="black outlined instagram logo"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="cursor-pointer rounded-xl p-2 hover:bg-gray-200"
            >
              <Image src="icon/tiktok.svg" alt="black filled tiktok logo" width={17} height={20} />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              className="cursor-pointer rounded-xl p-2 hover:bg-gray-200"
            >
              <Image src="icon/x.svg" alt="black outlined x logo" width={22} height={20} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium md:text-xl xl:text-2xl">Sản phẩm</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-12 gap-y-3 md:gap-x-4">
            <div>
              <Link
                href="#products"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Pallet Nhựa
              </Link>
            </div>
            <div>
              <Link
                href="#products"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Xe Nâng Tay
              </Link>
            </div>
            <div>
              <Link
                href="#products"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Rổ Nhựa - Sọt Nhựa
              </Link>
            </div>
            <div>
              <Link
                href="#products"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Thùng Phuy - Thùng IBC
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium md:text-xl xl:text-2xl">Về chúng tôi</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-12 gap-y-3 md:gap-x-4">
            <div>
              <Link
                href="#about"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Giới thiệu
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Hỗ trợ khách hàng
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Chính sách bảo hành
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-xs font-semibold hover:underline md:text-base xl:text-lg"
              >
                Quy định đổi trả
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium md:text-xl xl:text-2xl">Liên hệ</h2>
          <div className="mt-5 space-y-3">
            <p className="text-xs font-semibold md:text-base xl:text-lg">
              Hotline/Zalo: <Link href="https://zalo.me/0829093384" target="_blank" className="hover:underline text-[#062943]">0829 093 384</Link>
            </p>
            <p className="text-xs font-semibold md:text-base xl:text-lg">
              Email: contact@tanphat.vn
            </p>
            <p className="max-w-[300px] text-xs font-semibold md:text-base xl:text-lg">
              Địa chỉ: 123 Đường Phúc Diễn, Xuân Phương, Nam Từ Liêm, Hà Nội
            </p>
            <Link
              href="https://zalo.me/0829093384"
              target="_blank"
              className="inline-block rounded-full bg-[#062943] px-6 py-2 text-xs font-bold text-white transition-all hover:bg-[#D11A21] md:text-base"
            >
              Liên hệ qua Zalo
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Tân Phát. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
