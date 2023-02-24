import Race from './Race';

class Dwarf extends Race {
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
  }
  
  public createdRacesInstances(): number;
}

export default Dwarf;