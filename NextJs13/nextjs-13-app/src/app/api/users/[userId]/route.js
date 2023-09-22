import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  console.log(searchParams.get('nombre'));
  console.log(searchParams.get('apellido'));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
  );
  const data = await res.json();
  return NextResponse.json(data);
}
