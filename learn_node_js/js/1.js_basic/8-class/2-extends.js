// extend olish

class Salomlashish {
    constructor(ism) {
        this.ism = ism;
    }

    tanishtirish() {
        return this.ism + "ning o'qish joyi "
    }
}


class Malumot extends Salomlashish {
  constructor(ism, univer) {
    super(ism);
    this.univer = univer;
  }
  xabar() {
    return this.tanishtirish() + this.univer;
  }
}

let talaba = new Malumot("Sunnat", "TATU");

// console.log(talaba.xabar())
