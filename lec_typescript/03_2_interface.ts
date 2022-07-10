type Sports = "Football" | "Basketball" | "Volleyball";
type Team = "ManU" | "Inter" | "Liverpool";
type Nationality = "Korea" | "Japan" | "China";
type Wage = number;
type Seasons = "SS" | "FW";

// interface : object의 shape을 정의하는 용도로만 사용
// type vs interface : type쪽이 더 사용되는 scope가 다양함
// abstract class 와 역할이 겹치지만 interface가 더 알기 쉽다. (class의 청사진 제공)
// abstract class는 extend해서 사용하지만, interface는 implement해서 사용
// JS에는 implement가 없기 때문에, JS로 compile시 abstract class보다 interface쪽이 더 light
type Player1 = {
  nickname: string;
  team: Team;
  natl: Nationality;
};

interface SportsPlayer {
  firstName: string;
  lastName: string;
  nickName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface WorkMan {
  team: Team;
  readonly natl: Nationality;
}

// interface는 class처럼 extend해서 사용이 가능하다
// interface SoccerPlayer extends SportsPlayer {}

// 동일한 이름의 interface를 선언하면, 알아서 합쳐준다.

// interface를 implement해서 class에 사용할 때 -> public으로만 사용 가능.
// interface도 type처럼 사용이 가능
class SoccerPlayer implements SportsPlayer, WorkMan {
  constructor(
    public firstName: string,
    public lastName: string,
    public nickName: string,
    public team: Team,
    public natl: Nationality
  ) {}
  sayHi(name: string) {
    return `Hi ${name}. My name is ${this.fullName()} and you can call me ${
      this.nickName
    }`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
