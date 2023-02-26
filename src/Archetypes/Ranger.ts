import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
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
    Ranger._numberInstances += 1;
    return Ranger._numberInstances;
  }
}

export default Ranger;