import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
      /*para crear variable de entorno */
      ConfigModule.forRoot(),

    /*para hacer la conexion a la bd mongo */
    // MongooseModule.forRoot('mongodb://localhost:27017'),

    /*creando la conexion a la bd mongo pero con variables de entorno*/
    MongooseModule.forRoot(process.env.MONGO_URI, {dbName: process.env.MONGO_DB_NAME}),

    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(){
    console.log(process.env)
  }

}
