'use client'

import { useParams } from 'next/navigation';
import {useGetProductByIdQuery} from "@/src/shared/api/productsApi";

export default function Product() {
  const params = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(params.id);


  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} руб.</p>
      <button>Добавить в корзину</button>
    </div>
  );
}