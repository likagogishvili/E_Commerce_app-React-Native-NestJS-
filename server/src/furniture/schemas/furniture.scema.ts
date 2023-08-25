import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Furniture {
  @Prop()
  title: string;
  @Prop()
  supplier: string;
  @Prop()
  imageURL: string;
  @Prop()
  description: string;
  @Prop()
  product_location: string;
}

export const FurnitureSchema = SchemaFactory.createForClass(Furniture);
