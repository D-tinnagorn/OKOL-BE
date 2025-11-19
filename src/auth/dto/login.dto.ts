import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
