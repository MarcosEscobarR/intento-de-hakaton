import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { DebtorsModule } from './debtors/debtors.module';

@Module({
  imports: [StoresModule, DebtorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
