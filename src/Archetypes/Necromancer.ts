import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _magic: EnergyType;
  private static _numberInstances = 0;

  constructor(name: string) {
    super(name);
    this._magic = 'mana';
  }

  override get energyType(): EnergyType {
    return this._magic;
  }

  static createdArchetypeInstances(): number {
    Necromancer._numberInstances += 1;
    return Necromancer._numberInstances;
  }
}

export default Necromancer;