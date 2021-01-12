import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

  @CreateDateColumn() //entity를 만들었을 때 자동으로 설정해주는 column
  @Field(type => Date)
  createAt: Date;

  @UpdateDateColumn()
  @Field(type => Date)
  updateAt: Date;
}
