import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  // private _name: string,
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
    Mage._numberInstances += 1;
    return Mage._numberInstances;
  }
}

export default Mage;