class Car {
    constructor(brand) {
        this.carname = brand;
    }

    static showCar() {     // static method
        return "I have a car"
    }
}
// let myCar = new Car()

// console.log(Car.showCar())



class Car {
  constructor(brand) {
    this.carname = brand;
  }

  static showCar(name) {
    // static method
    return "I have a car " + name.carname;
  }
}
let myCar = new Car('BMW')

// console.log(Car.showCar(myCar));


class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(firstArticle, secondeArticle) {
        return firstArticle.date - secondeArticle.date;
    }
}

let article = [
    new Article('Javascript', new Date("2021, 1, 10")),
    new Article('NodeJS', new Date("2021, 11, 20")),
    new Article('ReactJs', new Date("2021, 3, 15"))
]
// let myArticle = article.sort(Article.compare)
article.sort(Article.compare).forEach(item => 
//    console.log(item.title)
)
// myArticle.forEach(item => console.log(item.title))
