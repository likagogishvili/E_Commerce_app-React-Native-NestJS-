import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { FurnitureService } from "./furniture.service";
import { Furniture } from "./schemas/furniture.scema";
@Controller("furniture")
export class FurnitureController {
  constructor(private furnitureService: FurnitureService) {}
  
  @Get()
  async getAllFurniture(): Promise<Furniture[]> {
    return this.furnitureService.findAll();
  }

  @HttpCode(204)
  @Post("create")
  async createFurniture(@Body() furnitureData: Furniture): Promise<Furniture> {
    return this.furnitureService.create(furnitureData);
  }

  @Get(":id")
  async getFurniture(
    @Param("id")
    id: string
  ): Promise<Furniture> {
    return this.furnitureService.findById(id);
  }

  @Put(":id")
  async updateFurniture(
    @Param("id")
    id: string,
    @Body() furnitureData: Furniture
  ): Promise<Furniture> {
    return this.furnitureService.updateById(id, furnitureData);
  }

  @Delete(":id")
  async deleteFurniture(
    @Param("id")
    id: string
  ): Promise<Furniture> {
    return this.furnitureService.deleteById(id);
  }
}
