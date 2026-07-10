'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import type { Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 font-semibold text-white">
            {product.slug === 'gohighlevel' ? (
              <Image src="/unnamed.jpg" alt={`${product.name} logo`} width={48} height={48} className="h-full w-full object-cover" />
            ) : product.slug === 'hostinger' ? (
              <Image src="/0x0.png" alt={`${product.name} logo`} width={48} height={48} className="h-full w-full object-cover" />
            ) : (
              product.name.charAt(0)
            )}
          </div>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
            {product.category}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-amber-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={`${product.slug}-${index}`} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 font-medium text-slate-600 dark:text-slate-400">{product.rating}</span>
        </div>

        <div className="mt-6 text-sm font-semibold text-slate-950 dark:text-white">Starting at {product.price}</div>

        <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${product.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
