import { FurnitureService } from "./furniture.service";
import { Furniture } from "./schemas/furniture.scema";
export declare class FurnitureController {
    private furnitureService;
    constructor(furnitureService: FurnitureService);
    getAllFurniture(): Promise<Furniture[]>;
    createFurniture(furnitureData: Furniture): Promise<Furniture>;
    getFurniture(id: string): Promise<Furniture>;
    updateFurniture(id: string, furnitureData: Furniture): Promise<Furniture>;
    deleteFurniture(id: string): Promise<Furniture>;
}
