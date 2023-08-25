import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Furniture } from './schemas/furniture.scema';
import * as mongoose from 'mongoose';

@Injectable()
export class FurnitureService {
  constructor(
    @InjectModel(Furniture.name)
    private furnitureModel: mongoose.Model<Furniture>,
  ) {}

  async findAll(): Promise<Furniture[]> {
    const furniture = await this.furnitureModel.find();
    return furniture;
  }
  async create(furniture: Furniture): Promise<Furniture> {
    const res = await this.furnitureModel.create(furniture);
    return res;
  }

  async findById(id: string): Promise<Furniture> {
    const furnitureOne = await this.furnitureModel.findById(id);
    return furnitureOne;
  }

  async updateById(id: string, furniture: Furniture): Promise<Furniture> {
    return await this.furnitureModel.findByIdAndUpdate(id, furniture, {
      new: true,
      runValidators: true,
    });
  }
  async deleteById(id: string): Promise<Furniture> {
    return await this.furnitureModel.findByIdAndDelete(id);
  }
}
