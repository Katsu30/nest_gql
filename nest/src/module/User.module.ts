import { Module } from '@nestjs/common';
import { PrismaModule } from './Prisma.module';
import { UserResolver } from 'src/resolvers/user.resolver';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
