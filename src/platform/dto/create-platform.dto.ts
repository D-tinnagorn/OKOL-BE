import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePlatformDto {
    @ApiProperty({example:''})
    @IsString()
    status: string;
}