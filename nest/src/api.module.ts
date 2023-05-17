import { Module } from '@nestjs/common';
import { TaskModule } from './module/Task.module';

const getModule = () => {
  const entities = [TaskModule];

  return {
    imports: entities,
    exports: entities,
    providers: [],
    controllers: [],
  };
};

@Module(getModule())
export class APIModule {}
