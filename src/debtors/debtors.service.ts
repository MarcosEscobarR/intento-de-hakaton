import { Injectable } from '@nestjs/common';
import {prisma} from "../prisma"
import { CreateDebtorDto } from './dto/create-debtor.dto';
import { FindDebtorsDto } from './dto/find-debtors-dto';
import { UpdateDebtorDto } from './dto/update-debtor.dto';

@Injectable()
export class DebtorsService {
  
  async create(dto: CreateDebtorDto ) {
    await prisma.debstors.create({
      data: {...dto}
    })
  }

  async find(dto: FindDebtorsDto) {
    return await prisma.debstors.findMany({
      where: {
        name: { contains: dto.name}
      }
    });
  }

  update(id: number, dto: UpdateDebtorDto) {
    return prisma.debstors.update({
      where: { id },
      data: { ...dto }
    })
  }

  updateStatus(id: number) {
    return prisma.debstors.update({
      where: { id },
      data: { paid_out: true },
      select: { id: true, paid_out: true }
    })
  }

  delete(id: number) {
    return prisma.debstors.delete({
      where: { id },
      select: { id: true }
    })
  }
}
