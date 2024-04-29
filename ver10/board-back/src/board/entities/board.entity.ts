import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class Board {
  @PrimaryGeneratedColumn()
  bno: number;

  @Column()
  // @Column({ type: 'varchar' })
  title: string;

  @Column()
  // @Column({ type: 'text' })
  contents: string;
}
