import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private board: Array<Board> = [];
  private bno = 0;

  create(createBoardDto: CreateBoardDto) {
    this.board.push({ bno: ++this.bno, ...createBoardDto });
  }

  findAll() {
    return [...this.board];
  }

  /**
   * 주어진 id에 부합하는 데이터가 없는 경우 NotFoundException 예외 던짐
   * @param id
   */
  findOne(bno: number) {
    const found = this.board.find((b) => b.bno === bno);
    if (!found) throw new NotFoundException();
    return found;
  }

  update(bno: number, updateBoardDto: UpdateBoardDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const found = this.board.find((b) => b.bno === bno);
    this.remove(bno);
    this.board.push({ ...found, ...updateBoardDto });
  }

  remove(bno: number) {
    this.findOne(bno);
    this.board = this.board.filter((b) => b.bno !== bno);
  }
}
