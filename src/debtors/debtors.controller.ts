import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, ParseIntPipe } from '@nestjs/common';
import { DebtorsService } from './debtors.service';
import { CreateDebtorDto } from './dto/create-debtor.dto';
import { UpdateDebtorDto } from './dto/update-debtor.dto';
import { FindDebtorsDto } from './dto/find-debtors-dto';

@Controller('debtors')
export class DebtorsController {
  constructor(private readonly debtorsService: DebtorsService) {}

  @Get()
  find(@Query() dto: FindDebtorsDto) {
    return this.debtorsService.find(dto);
  }
  
  @Post()
  create(@Body() createDebtorDto: CreateDebtorDto) {
    return this.debtorsService.create(createDebtorDto);
  }

  @Put(':id')
  update(
    @Param('id', new ParseIntPipe()) 
    id: number, 
    @Body() updateDebtorDto: UpdateDebtorDto
  ) {
    return this.debtorsService.update(id, updateDebtorDto);
  }

  @Patch(':id')
  changeStatus(
    @Param('id', new ParseIntPipe()) 
    id: number
  ) {
    return this.debtorsService.updateStatus(id);
  }

  @Delete(':id')
  delete(
    @Param('id', new ParseIntPipe()) 
    id: number
  ) {    
    return this.debtorsService.delete(id);
  }
}
