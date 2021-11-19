import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CatsModule, ConfigModule.register({ folder: './config' })],
})
export class AppModule {}
