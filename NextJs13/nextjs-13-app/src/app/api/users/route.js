import { NextResponse } from 'next/server';

export async function GET() {
  //Exctract params
  //Query database
  //Communicate with other services
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req) {
  const { nombre, apellido } = await req.json();
  console.log(nombre, apellido);

  return NextResponse.json({
    message: 'Mandando datos!',
  });
}

export function PUT() {
  return NextResponse.json({
    message: 'Editando datos!',
  });
}

export function DELETE() {
  return NextResponse.json({
    message: 'Borrando datos!',
  });
}
