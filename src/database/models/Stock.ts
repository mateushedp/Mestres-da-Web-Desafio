import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Product"

@Entity({name: "stock"})
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;

    @Column()
    quantity: number;
    
    @ManyToOne(type => Product, product => product.stocks, {
        onDelete: "CASCADE"
    })
    product: Product

}
