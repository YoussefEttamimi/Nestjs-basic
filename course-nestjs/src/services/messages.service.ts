import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/entity/messages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messagesRepository: Repository<Messages>,
  ) {}

  async findAll(): Promise<Messages[]> {
    return await this.messagesRepository.find();
  }

  async create(message: Messages): Promise<Messages> {
    return await this.messagesRepository.save(message);
  }

  async update(message: Messages): Promise<Messages> {
    return await this.messagesRepository.save(message);
  }

  async delete(id: number): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}
