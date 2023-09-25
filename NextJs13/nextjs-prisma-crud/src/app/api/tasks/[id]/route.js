import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET(req, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const taskUpdated = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(req, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
