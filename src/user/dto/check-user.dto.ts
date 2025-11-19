import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CheckUsernameDto {
  @ApiProperty({ example: '' })
  @IsString()
  username: string;
}
