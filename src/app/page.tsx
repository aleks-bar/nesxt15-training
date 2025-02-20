"use client"
import Link from 'next/link';
import {useGetProductsQuery} from "@/src/shared/api/productsApi";
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useRef} from "react";

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export default function Home() {
  const { data: products, isLoading } = useGetProductsQuery({});

  const renders = useRef(0)

  if (renders.current === 0) {
    const productsList = []

    for (let i = 0; i < 100; i++) {
      const newProduct = {
        id: uuidv4(),
        name: `Товар ${i}`,
        price: randomInteger(100, 500)
      }

      // fetch('http://localhost:4000/products', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json", // Указываем, что передаем JSON
      //   },
      //   body: JSON.stringify(newProduct)
      // })
    }
  }

  // useEffect(() => {
  //   if (renders.current === 0){
  //     renders.current = 1
  //
  //     fetch("http://localhost:4000/products").then(r => r.json()).then(r => {
  //       console.log(r)
  //     })
  //   }
  // }, [])

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