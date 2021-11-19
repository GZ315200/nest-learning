import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule.register({ folder: './config' })],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {
  constructor(private readonly catsServices: CatsService){}
}
