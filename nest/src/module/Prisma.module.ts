import { Module } from '@nestjs/common';
import { PrismaService } from '../services/Prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [],
})
export class PrismaModule {}
