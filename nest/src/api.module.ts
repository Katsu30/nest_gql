import { Module } from '@nestjs/common';
import { TaskModule } from './module/Task.module';
import { PrismaModule } from './module/Prisma.module';

const getModule = () => {
  const entities = [TaskModule, PrismaModule];

  return {
    imports: entities,
    exports: entities,
    providers: [],
    controllers: [],
  };
};

@Module(getModule())
export class APIModule {}
