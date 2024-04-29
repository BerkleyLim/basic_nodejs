import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardService {
  // private board: Array<Board> = [];
  // private bno = 0;
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  /**
   * 다음은 게시판을 생성한다.
   * @param createBoardDto : dto 클래스
   */
  async create(createBoardDto: CreateBoardDto): Promise<void> {
    // this.board.push({ bno: ++this.bno, ...createBoardDto });
    await this.boardRepository.save(createBoardDto);
  }

  /**
   * 게시판 전체 출력
   */
  findAll(): Promise<Board[]> {
    // return [...this.board];
    return this.boardRepository.find();
  }

  /**
   * 다음은, 해당 게시판 인덱스 찾는다.
   * @param bno : 인덱스 번호
   */
  findOne(bno: number): Promise<Board | null> {
    // const found = this.board.find((b) => b.bno === bno);
    // if (!found) throw new NotFoundException();
    // return found;
    return this.boardRepository.findOne({
      where: { bno },
    });
  }

  /**
   * 다음은 게시판을 수정한다.
   * @param bno : 인덱스번호
   * @param updateBoardDto : 필요 dto
   */
  async update(bno: number, updateBoardDto: UpdateBoardDto): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const found = this.board.find((b) => b.bno === bno);
    // this.remove(bno);
    // this.board.push({ ...found, ...updateBoardDto });
    await this.boardRepository.update(bno, updateBoardDto);
  }

  /**
   * 게시판 삭제
   * @param bno : 삭제할 게시판 번호
   */
  async remove(bno: number): Promise<void> {
    // this.findOne(bno);
    // this.board = this.board.filter((b) => b.bno !== bno);
    await this.boardRepository.delete(bno);
  }
}
