import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private board: Array<Board> = [];
  private bno = 0;

  /**
   * 다음은 게시판을 생성한다.
   * @param createBoardDto : dto 클래스
   */
  create(createBoardDto: CreateBoardDto) {
    this.board.push({ bno: ++this.bno, ...createBoardDto });
  }

  /**
   * 게시판 전체 출력
   */
  findAll() {
    return [...this.board];
  }

  /**
   * 다음은, 해당 게시판 인덱스 찾는다.
   * @param bno : 인덱스 번호
   */
  findOne(bno: number) {
    const found = this.board.find((b) => b.bno === bno);
    if (!found) throw new NotFoundException();
    return found;
  }

  /**
   * 다음은 게시판을 수정한다.
   * @param bno : 인덱스번호
   * @param updateBoardDto : 필요 dto
   */
  update(bno: number, updateBoardDto: UpdateBoardDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const found = this.board.find((b) => b.bno === bno);
    this.remove(bno);
    this.board.push({ ...found, ...updateBoardDto });
  }

  /**
   * 게시판 삭제
   * @param bno : 삭제할 게시판 번호
   */
  remove(bno: number) {
    this.findOne(bno);
    this.board = this.board.filter((b) => b.bno !== bno);
  }
}
