import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({ example: 'Buy milk' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
