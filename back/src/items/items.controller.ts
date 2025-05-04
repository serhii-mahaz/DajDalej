import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ItemsService } from './items.service';
  import { Prisma } from '../../generated/prisma';
  
  @Controller('items')
  export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
  
    @Post()
    create(@Body() data: Prisma.ItemCreateInput) {
      return this.itemsService.create(data);
    }
  
    @Get()
    findAll() {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.itemsService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Prisma.ItemUpdateInput) {
      return this.itemsService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemsService.remove(id);
    }
  }
  