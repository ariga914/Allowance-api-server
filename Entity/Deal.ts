import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('deals')
export class Deal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    date: string;

    @Column()
    amount: number;

    @Column()
    type: string;
}