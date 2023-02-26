import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _magic: EnergyType;
  private static _numberInstances = 0;

  constructor(name: string) {
    super(name);
    this._magic = 'stamina';
  }

  override get energyType(): EnergyType {
    return this._magic;
  }

  static createdArchetypeInstances(): number {
    Warrior._numberInstances += 1;
    return Warrior._numberInstances;
  }
}

export default Warrior;