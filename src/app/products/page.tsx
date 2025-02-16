"use client"

import Link from 'next/link';
import {useGetProductsQuery} from "@/src/shared/api/productsApi";

export default function Products() {
  const { data: products, isLoading } = useGetProductsQuery({});

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Каталог</h1>
      <ul>
        {
          products?.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                {product.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}