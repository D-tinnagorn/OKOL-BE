import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CheckPhoneNumberDto {
  @ApiProperty({ example: '' })
  @IsString()
  phone: string;
}
