"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const furniture_scema_1 = require("./schemas/furniture.scema");
const mongoose = require("mongoose");
let FurnitureService = class FurnitureService {
    constructor(furnitureModel) {
        this.furnitureModel = furnitureModel;
    }
    async findAll() {
        const furniture = await this.furnitureModel.find();
        return furniture;
    }
    async create(furniture) {
        const res = await this.furnitureModel.create(furniture);
        return res;
    }
    async findById(id) {
        const furnitureOne = await this.furnitureModel.findById(id);
        return furnitureOne;
    }
    async updateById(id, furniture) {
        return await this.furnitureModel.findByIdAndUpdate(id, furniture, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.furnitureModel.findByIdAndDelete(id);
    }
};
exports.FurnitureService = FurnitureService;
exports.FurnitureService = FurnitureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(furniture_scema_1.Furniture.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], FurnitureService);
//# sourceMappingURL=furniture.service.js.map