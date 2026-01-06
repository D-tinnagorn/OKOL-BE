import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'Buy milk' })
  @IsString()
  title: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional() 
  completed?: boolean;

}
