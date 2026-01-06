import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: '' })
  @IsString()
  status: string;

  @ApiProperty({ example: '' })
  @IsString()
  key: string;
}
