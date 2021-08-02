import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Deal')
export class Deal {
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