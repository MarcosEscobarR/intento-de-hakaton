import { Injectable } from '@nestjs/common';
import {prisma} from "../prisma"
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  async create(dto: CreateStoreDto ) {
    return await prisma.stores.create({
      data: {...dto}
    })
  }

  findAll() {
    return `This action returns all stores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
