// abstract class
// class에 대한 청사진을 제공
// 직접 instance생성은 불가
// extend만 가능
abstract class User {
  constructor(
    // public: 접근 - class 외부O / class내부O / 상속class 내부O
    // private: 접근 - class 외부X / class내부O / 상속class 내부X
    // protected: 접근 - class 외부X / class내부O / 상속class 내부O
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickName);
  }
}

const nico = new Player("jang", "seungwoo", "aaron");
nico.getNickName();
nico.getFullName();
