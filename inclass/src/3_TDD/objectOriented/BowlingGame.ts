abstract class ScoreCalculator {
  private currentIndex: number;
  private pinsHistory: number[];

  constructor (currentIndex: number, pinsHistory: number[]) {
    this.currentIndex = currentIndex;
    this.pinsHistory = pinsHistory;
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }

  public getPinsHistory(): number[] {
    return this.pinsHistory;
  }

  public abstract getNextStartingIndex(): number;
  public abstract calculate(): number;
}

class NormalCalculator extends ScoreCalculator {
  public getNextStartingIndex(): number {
    return this.getCurrentIndex() + 2;
  }

  public calculate(): number {
    const INDEX = this.getCurrentIndex();
    const PINS = this.getPinsHistory();

    return PINS[INDEX] + PINS[INDEX+1];
  }
}

class SpareCalculator extends ScoreCalculator {
  public getNextStartingIndex(): number {
    return this.getCurrentIndex() + 2;
  }

  public calculate(): number {
    const INDEX = this.getCurrentIndex();
    const PINS = this.getPinsHistory();

    return PINS[INDEX] + PINS[INDEX+1] + PINS[INDEX+2];
  }
}

class StrikeCalculator extends ScoreCalculator {
  public getNextStartingIndex(): number {
    return this.getCurrentIndex() + 1;
  }

  public calculate(): number {
    const INDEX = this.getCurrentIndex();
    const PINS = this.getPinsHistory();

    return PINS[INDEX] + PINS[INDEX+1] + PINS[INDEX+2];
  }
}

class ScoreCalculatorFactory {
  public static getScoreCalculator(currentIndex: number, pinsHistory: number[]): ScoreCalculator {
    const MAX_PINS = 10;

    if (pinsHistory[currentIndex] == MAX_PINS) {
      return new StrikeCalculator(currentIndex, pinsHistory);
    } else if (pinsHistory[currentIndex] + pinsHistory[currentIndex+1] == MAX_PINS) {
      return new SpareCalculator(currentIndex, pinsHistory);
    } else {
      return new NormalCalculator(currentIndex, pinsHistory);
    }
  }
}

class ScoreManager {
  private pinsHistory: number[];

  constructor () {
    this.pinsHistory = [];
  }

  private getPinsHistory(): number[] {
    return this.pinsHistory;
  }

  public addRollToHistory(pins: number): void {
    this.getPinsHistory().push(pins);
  }

  public calculateFinalScore(): number {
    const HISTORY = this.getPinsHistory();
    const FRAMES = 10;
    let total = 0;
    let currentIndex = 0;

    for (let i = 0; i < FRAMES; i++) {
      const SCORE_CALCULATOR = ScoreCalculatorFactory.getScoreCalculator(currentIndex, HISTORY);
      total += SCORE_CALCULATOR.calculate();
      currentIndex = SCORE_CALCULATOR.getNextStartingIndex();
    }

    return total;
  }
}

export class BowlingGame {
  private score: ScoreManager;

  constructor() {
    this.score = new ScoreManager();
  }

  private getScore(): ScoreManager {
    return this.score;
  }

  public getFinalScore(): number {
    return this.getScore().calculateFinalScore();
  }

  public roll(pins: number): void {
    this.getScore().addRollToHistory(pins);
  }
}
