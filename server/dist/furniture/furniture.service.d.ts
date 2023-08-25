import { Furniture } from './schemas/furniture.scema';
import * as mongoose from 'mongoose';
export declare class FurnitureService {
    private furnitureModel;
    constructor(furnitureModel: mongoose.Model<Furniture>);
    findAll(): Promise<Furniture[]>;
    create(furniture: Furniture): Promise<Furniture>;
    findById(id: string): Promise<Furniture>;
    updateById(id: string, furniture: Furniture): Promise<Furniture>;
    deleteById(id: string): Promise<Furniture>;
}
