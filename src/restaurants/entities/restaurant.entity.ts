import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true }) //abstract는 직접 쓰는게 아니라 어떤 것으로 확장 시킨다는 의미
@ObjectType() //자동으로 shema를 빌드하기 위해 사용하는 graphql decorator
@Entity() //TypeOrm
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

  @Field(type => String)
  @Column()
  @IsString()
  @Length(4, 10)
  name: string;

  @Field(type => Boolean, { defaultValue: true }) //graphql check
  @Column({ default: true }) //database check
  @IsOptional() //validation
  @IsBoolean()
  isVegan: boolean;

  @Field(type => String, { defaultValue: 'GangNam' })
  @Column()
  @IsString()
  address: string;

  @Field(type => String)
  @Column()
  @IsString()
  ownersName: string;

  @Field(type => String)
  @Column()
  @IsString()
  categoryName: string;
}
