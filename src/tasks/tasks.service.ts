// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const { labelIds, ...data } = createTaskDto;

    // Cria a task associando as labels, se houverem
    return this.prisma.task.create({
      data: {
        ...data,
        labels: labelIds
          ? {
              connect: labelIds.map((labelId) => ({ id: labelId })),
            }
          : undefined,
      },
      include: {
        labels: true,
        category: true,
        subtasks: true,
      },
    });
  }

  async findAll() {
    return this.prisma.task.findMany({
      include: {
        labels: true,
        category: true,
        subtasks: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
      include: {
        labels: true,
        category: true,
        subtasks: true,
      },
    });
  }
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const { labelIds, ...data } = updateTaskDto;

    return this.prisma.task.update({
      where: { id },
      data: {
        ...data,
        labels: labelIds
          ? {
              // Se precisar redefinir as labels, utilize "set"
              set: labelIds.map((labelId) => ({ id: labelId })),
            }
          : undefined,
      },
      include: {
        labels: true,
        category: true,
        subtasks: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
