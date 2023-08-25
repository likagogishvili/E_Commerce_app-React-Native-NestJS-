"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureModule = void 0;
const common_1 = require("@nestjs/common");
const furniture_controller_1 = require("./furniture.controller");
const furniture_service_1 = require("./furniture.service");
const mongoose_1 = require("@nestjs/mongoose");
const furniture_scema_1 = require("./schemas/furniture.scema");
let FurnitureModule = class FurnitureModule {
};
exports.FurnitureModule = FurnitureModule;
exports.FurnitureModule = FurnitureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Furniture', schema: furniture_scema_1.FurnitureSchema }]),
        ],
        controllers: [furniture_controller_1.FurnitureController],
        providers: [furniture_service_1.FurnitureService],
    })
], FurnitureModule);
//# sourceMappingURL=furniture.module.js.map