import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('insert/board')
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get('select/list')
  findAll() {
    return this.boardService.findAll();
  }

  @Get('select/list/:bno')
  findOne(@Param('bno') bno: number) {
    return this.boardService.findOne(+bno);
  }

  // @Patch(':bno')
  @Post('update/board')
  update(@Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+updateBoardDto.bno, updateBoardDto);
  }

  // @Delete(':bno')
  @Post('delete/board')
  remove(@Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.remove(+updateBoardDto.bno);
  }
}
