export class ProductSummary {
  id: number;
  name: string;
  description: string;
  targetMarket: Array<String>;
  stack: Array<String>;
}

export class ProductFilter {
  name: string;
  stack: Array<number>;
  targetMarket: Array<number>;
  size: any;
  page: any;
}
