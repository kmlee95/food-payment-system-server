import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])], //typeormmodule이 특정 feature을 import할수있게해줌-Restaurant(forFeature)
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
