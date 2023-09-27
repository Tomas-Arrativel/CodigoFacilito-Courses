import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  const task = await prisma.task.findFirst({
    where: { id: Number(params.id) },
  });

  return NextResponse.json(task);
}

export async function PUT(req: Request, { params }: Params) {
  const data = await req.json();
  const editTask = await prisma.task.update({
    where: { id: Number(params.id) },
    data: data,
  });
  return NextResponse.json(editTask);
}

export async function DELETE(req: Request, { params }: Params) {
  const delTask = await prisma.task.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(delTask);
}
