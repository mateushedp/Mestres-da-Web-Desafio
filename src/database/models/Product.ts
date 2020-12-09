import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Stock } from "./Stock"

@Entity({name: "products"})
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column("decimal", { precision: 7, scale: 2 })
    price: number;
    
    @OneToMany(type => Stock, stock => stock.product)
    stocks: Stock[];

}
