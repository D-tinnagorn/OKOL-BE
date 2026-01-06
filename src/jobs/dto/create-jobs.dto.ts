import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsBoolean,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateJobsDto {
  @ApiProperty({ example: 'New Campaign' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Nike' })
  @IsString()
  brandName: string;

  @ApiProperty({ example: '2025-11-25T12:00:00.000Z' })
  @IsString()
  createTerm: string;

  @ApiProperty({ example: '2025-12-05T12:00:00.000Z' })
  @IsString()
  deadline: string;

  @ApiProperty({ example: 50000 })
  @IsInt()
  budget: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  form: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  seeding: boolean;

  @ApiProperty({ example: 'Full detail of the campaign' })
  @IsString()
  detail: string;

  @ApiProperty({ example: 'Storyline content goes here', required: false })
  @IsString()
  @IsOptional()
  storyLine?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  statusId: number;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'List of platform IDs',
  })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  platformIds: number[];

  @ApiProperty({ example: 12345678, required: false })
  @IsOptional()
  @IsInt()
  colorCode?: number;
}
