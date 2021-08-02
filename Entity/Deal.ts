import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('deals')
export class deal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date: number;

    @Column()
    amount: number;

    @Column()
    type: string;
}