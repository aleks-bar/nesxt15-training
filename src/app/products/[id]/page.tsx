'use client'

import { useParams } from 'next/navigation';
import {useGetProductByIdQuery} from "@/src/shared/api/productsApi";

export default function Product() {
  const params = useParams();
  const { data: products, isLoading, isError } = useGetProductByIdQuery(params.id);

  console.log(products)

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>{products[0].name}</h1>
      <p>{products[0].price} руб.</p>
      <button>Добавить в корзину</button>
    </div>
  );
}