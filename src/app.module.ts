// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
// import { UsersModule } from './tasks/tasks.module';
// import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
// import { SubtasksModule } from './subtasks/subtasks.module';
// import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [
    PrismaModule,
    // UsersModule,
    // CategoriesModule,
    TasksModule,
    // SubtasksModule,
    // LabelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
