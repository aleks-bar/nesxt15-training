import { NextRequest, NextResponse } from 'next/server';
import {productsData} from "@/app/api/products/productsData";

export async function GET(request: NextRequest) {
  try {
    // Выполняем запрос к json-server
    const response = await fetch('http://json-server:4000/products');

    // Проверяем успешность запроса
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    // Получаем данные в формате JSON
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}