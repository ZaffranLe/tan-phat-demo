'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'Tất cả',
  'Pallet Nhựa',
  'Xe Nâng Tay',
  'Rổ Nhựa - Sọt Nhựa',
  'Thùng Phuy - Thùng IBC',
];

const products = [
  {
    id: 1,
    name: 'Pallet Nhựa Một Mặt 1200x1000x150mm',
    category: 'Pallet Nhựa',
    image: '/products/pallet-blue.png',
    price: 'Liên hệ',
    tag: 'Bán chạy',
  },
  {
    id: 2,
    name: 'Xe Nâng Tay Thấp 3000kg - Càng Rộng',
    category: 'Xe Nâng Tay',
    image: '/products/truck-orange.png',
    price: 'Liên hệ',
    tag: 'Mới',
  },
  {
    id: 3,
    name: 'Pallet Nhựa Chân Cốc 1200x1000x140mm',
    category: 'Pallet Nhựa',
    image: '/products/pallet-blue.png',
    price: 'Liên hệ',
  },
  {
    id: 4,
    name: 'Xe Nâng Tay Cao 1500kg - Cao 1.6m',
    category: 'Xe Nâng Tay',
    image: '/products/truck-orange.png',
    price: 'Liên hệ',
  },
  {
    id: 5,
    name: 'Rổ Nhựa Công Nghiệp Có Bánh Xe',
    category: 'Rổ Nhựa - Sọt Nhựa',
    image: '/products/baskets.png',
    price: 'Liên hệ',
  },
  {
    id: 6,
    name: 'Thùng Phuy Sắt 220 Lít Nắp Mở',
    category: 'Thùng Phuy - Thùng IBC',
    image: '/products/baskets.png', // Placeholder
    price: 'Liên hệ',
  },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredProducts = activeCategory === 'Tất cả'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 overflow-hidden" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#00204D] dark:text-white tracking-tight italic">
              SẢN PHẨM <span className="text-[#062943]">CỦA CHÚNG TÔI</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#062943] mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Chuyên cung cấp đa dạng các loại Pallet nhựa cũ & mới, xe nâng tay và các thiết bị công nghiệp chất lượng cao, đáp ứng mọi nhu cầu kho bãi.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                  activeCategory === category 
                  ? 'bg-[#062943] hover:bg-[#D11A21] border-none text-white' 
                  : 'hover:border-[#062943] hover:text-[#062943]'
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-full flex flex-col relative">
                  <div className="relative h-72 overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    {product.tag && (
                      <Badge className="absolute top-5 left-5 bg-[#062943] hover:bg-[#D11A21] text-white font-bold px-4 py-1 rounded-full shadow-lg">
                        {product.tag}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-xs font-bold text-[#062943] uppercase tracking-widest bg-blue-50 dark:bg-red-950/30 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#00204D] dark:text-white line-clamp-2 group-hover:text-[#062943] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100 dark:border-zinc-800">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Giá bán</p>
                        <span className="text-[#062943] font-extrabold text-2xl tracking-tight">{product.price}</span>
                      </div>
                      <Button 
                        variant="link" 
                        className="text-[#00204D] dark:text-gray-300 font-bold p-0 group-hover:text-[#062943] flex items-center gap-2"
                      >
                        Chi tiết
                        <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-[#062943] group-hover:text-white transition-all duration-300">
                          →
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
