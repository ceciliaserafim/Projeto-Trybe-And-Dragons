abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  set dexterity(value: number) {
    this._dexterity = value;
  }

  // createdRacesInstances(): number {

  // };
}

export default Race;