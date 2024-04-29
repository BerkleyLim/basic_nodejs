import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':bno')
  findOne(@Param('bno') bno: number) {
    return this.boardService.findOne(+bno);
  }

  @Patch(':bno')
  update(@Param('bno') bno: number, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+bno, updateBoardDto);
  }

  @Delete(':bno')
  remove(@Param('bno') bno: number) {
    return this.boardService.remove(+bno);
  }
}
