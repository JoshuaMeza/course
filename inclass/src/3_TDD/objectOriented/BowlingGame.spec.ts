import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  it("should make a roll", () => {
    expect(game.roll(0)).toBeUndefined();
  });

  it("should play an all zeros game", () => {
    repeatThrow(20, 0, game);

    expect(game.getFinalScore()).toBe(0);
  });

  it("should play an all ones game", () => {
    repeatThrow(20, 1, game);

    expect(game.getFinalScore()).toBe(20);
  });

  it("should play one spare", () => {
    repeatThrow(2, 5, game);
    repeatThrow(1, 3, game);
    repeatThrow(17, 0, game);

    expect(game.getFinalScore()).toBe(16);
  });

  it("should play one strike", () => {
    repeatThrow(1, 10, game);
    repeatThrow(2, 2, game);
    repeatThrow(16, 0, game);

    expect(game.getFinalScore()).toBe(18);
  });

  it("should play a perfect game", () => {
    repeatThrow(12, 10, game);

    expect(game.getFinalScore()).toBe(300);
  });
});

function repeatThrow(rolls: number, pins: number, game: BowlingGame) {
  for (let index = 0; index < rolls; index++) {
    game.roll(pins);
  }
}
