import { Injectable } from '@nestjs/common';
import {prisma} from "../prisma"
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { FindStoresDto } from './dto/find-stores-dto';

@Injectable()
export class StoresService {
  async find(dto: FindStoresDto) {
    return await prisma.stores.findMany({
      where: {
        name: { contains: dto.name}
      }
    });
  }
  
  async create(dto: CreateStoreDto) {
    return await prisma.stores.create({
      data: { ...dto },
      select: {id: true}
    })
  }

  update(id: number, dto: UpdateStoreDto) {
    return prisma.stores.update({
      where: { id },
      data: { ...dto }
    })
  }

  updateStatus(id: number) {
    return prisma.stores.update({
      where: { id },
      data: { enabled: false },
      select: { id: true, enabled: true }
    })
  }

  delete(id: number) {
    return prisma.stores.delete({
      where: { id },
      select: { id: true }
    })
  }
}
