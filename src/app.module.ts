import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // take url, execute the function
  providers: [],
})
export class AppModule {}
