import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn() //entity를 만들었을 때 자동으로 설정해주는 column
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
