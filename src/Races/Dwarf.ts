import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _numberInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
  }

  public static createdRacesInstances(): number {
    this._numberInstances += 1;
    return this._numberInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;