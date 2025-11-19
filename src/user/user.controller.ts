import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CheckUsernameDto } from './dto/check-user.dto';
import { CheckPhoneNumberDto } from './dto/check-phone.sto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('check-user')
  async checkUsername(@Body() checkUSerDto: CheckUsernameDto) {
    return this.userService.checkTakenUsername(checkUSerDto.username);
  }

  @Post('check-phone')
  async checkPhoneNumber(@Body() checkPhoneNumber: CheckPhoneNumberDto) {
    return this.userService.checkPhoneNumber(checkPhoneNumber.phone);
  }
}
