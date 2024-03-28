import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'oracle',
          host: 'localhost',
          port: 1521,
          username: 'botutn',
          password: '0988188838',
          serviceName: 'XEPDB1',
          entities: ["src/entities/**/*.entity{.ts,.js}"],
          synchronize: true,
        })
      ]
})
export class ConectionModule {}
