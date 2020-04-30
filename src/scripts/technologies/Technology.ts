export default class Technology {

  name: string;
  img: any;
  isSkill: boolean;
  
  constructor(name : string, img : any = null, isSkill : boolean = false) {
    this.name = name;
    this.img = img;
    this.isSkill = isSkill;
  }
}