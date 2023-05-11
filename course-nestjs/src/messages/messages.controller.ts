import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { MessageDto } from 'src/dto/messageDto';
import { MessagesService } from 'src/services/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private _menssagesServices: MessagesService) {}
  @Post()
  create(@Body() message: MessageDto, @Res() response) {
    this._menssagesServices
      .create(message)
      .then((res) => {
        response.status(201).send(res);
      })
      .catch((err) => {
        response.status(400).send(err);
      });
  }

  @Get()
  getAll() {
    return this._menssagesServices.findAll();
  }
  @Put(':id')
  update(@Body() message: MessageDto) {
    return this._menssagesServices.update(message);
  }
  @Delete(':id')
  remove(@Body() message: MessageDto) {
    return this._menssagesServices.delete(message.id);
  }
}
