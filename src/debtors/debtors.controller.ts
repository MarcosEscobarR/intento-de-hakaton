import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { DebtorsService } from './debtors.service';
import { CreateDebtorDto } from './dto/create-debtor.dto';
import { UpdateDebtorDto } from './dto/update-debtor.dto';
import { FindDebtorsDto } from './dto/find-debtors-dto';

@Controller('debtors')
export class DebtorsController {
  constructor(private readonly debtorsService: DebtorsService) {}

  @Post()
  create(@Body() createDebtorDto: CreateDebtorDto) {
    return this.debtorsService.create(createDebtorDto);
  }

  @Get()
  find(@Query() dto: FindDebtorsDto) {
    return this.debtorsService.find(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDebtorDto: UpdateDebtorDto) {
    return this.debtorsService.update(id, updateDebtorDto);
  }

  @Patch(':id')
  changeStatus(@Param('id') id: string) {
    return this.debtorsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {    
    return this.debtorsService.delete(id);
  }
}
