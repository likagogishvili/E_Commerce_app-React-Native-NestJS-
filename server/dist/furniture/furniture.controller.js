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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureController = void 0;
const common_1 = require("@nestjs/common");
const furniture_service_1 = require("./furniture.service");
const furniture_scema_1 = require("./schemas/furniture.scema");
let FurnitureController = class FurnitureController {
    constructor(furnitureService) {
        this.furnitureService = furnitureService;
    }
    async getAllFurniture() {
        return this.furnitureService.findAll();
    }
    async createFurniture(furnitureData) {
        return this.furnitureService.create(furnitureData);
    }
    async getFurniture(id) {
        return this.furnitureService.findById(id);
    }
    async updateFurniture(id, furnitureData) {
        return this.furnitureService.updateById(id, furnitureData);
    }
    async deleteFurniture(id) {
        return this.furnitureService.deleteById(id);
    }
};
exports.FurnitureController = FurnitureController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FurnitureController.prototype, "getAllFurniture", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [furniture_scema_1.Furniture]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], FurnitureController.prototype, "createFurniture", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], FurnitureController.prototype, "getFurniture", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, furniture_scema_1.Furniture]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], FurnitureController.prototype, "updateFurniture", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], FurnitureController.prototype, "deleteFurniture", null);
exports.FurnitureController = FurnitureController = __decorate([
    (0, common_1.Controller)('furniture'),
    __metadata("design:paramtypes", [furniture_service_1.FurnitureService])
], FurnitureController);
//# sourceMappingURL=furniture.controller.js.map