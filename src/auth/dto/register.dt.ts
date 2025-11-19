import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ example: ["",""] })
  @IsOptional()
  @IsArray()
  social?: string[];
}
