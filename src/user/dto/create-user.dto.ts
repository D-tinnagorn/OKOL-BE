import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '' })
  @IsString()
  username: string;
  @ApiProperty({ example: '' })
  @IsString()
  @MinLength(6)
  password: string;
  @ApiProperty({ example: '' })
  @IsString()
  phone: string;
  @ApiProperty({ example: ["",""] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  social?: string[];
}
