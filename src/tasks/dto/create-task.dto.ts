// src/tasks/dto/create-task.dto.ts

import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  categoryId?: string;

  @IsOptional()
  userId?: string;

  /**
   * Se quiser vincular etiquetas na hora de criar a tarefa:
   * Exemplo: ["labelId1", "labelId2"]
   */
  @IsOptional()
  labelIds?: string[];
}
