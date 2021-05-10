export class Product {
  //   id: string;
  //   title: string;
  //   description: string;
  //   price: string;
  //   constructor(id: string, title: string, description: string, price: string) {
  //     this.id = id;
  //     this.title = title;
  //     this.description = description;
  //     this.price = price;
  //   }

  // ======== nest js equivalent(just add accessor) ========

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
