import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Post('/native')
  nativeCreate(@Res() res: Response) {
    console.log('res => ', res)
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll() {
    return this.catsService.findAllCats();
  }

  @Get('async')
  async asyncFindAll(): Promise<any[]> {
    return [];
  }

  @Get('obs')
  observeFindAll(): Observable<any[]> {
    return of([])
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
