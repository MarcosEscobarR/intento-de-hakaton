import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { FindStoresDto } from './dto/find-stores-dto';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  find(@Query() dto: FindStoresDto) {
    return this.storesService.find(dto);
  }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Put(':id')
  update(
    @Param('id', new ParseIntPipe()) 
    id: number, 
    @Body() updateDebtorDto: UpdateStoreDto
  ) {
    return this.storesService.update(id, updateDebtorDto);
  }

  @Patch(':id')
  changeStatus(
    @Param('id', new ParseIntPipe()) 
    id: number
  ) {
    return this.storesService.updateStatus(id);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.storesService.delete(id);
  }
}
