"use client"

import Link from 'next/link';
import {useGetProductsQuery} from "@/src/shared/api/productsApi";

export default function Home() {
  const { data: products, isLoading } = useGetProductsQuery({});

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Главная страница</h1>
      <ul>
        <li>
          <Link href={`/products`}>Каталог</Link>
          <Link href={`/cart`}>Корзина</Link>
        </li>
      </ul>
    </div>
  );
}