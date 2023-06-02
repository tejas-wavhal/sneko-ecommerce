export type Category = {
  data: CategoryDatum[];
  meta: Meta;
}

export type CategoryDatum = {
  id:         number;
  attributes: CategoryAttributes;
}

export type CategoryAttributes = {
  name:        string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  products:    Products;
}

export type Products = {
  data: ProductsDatum[];
}

export type ProductsDatum = {
  id:         number;
  attributes: FluffyAttributes;
}

export type FluffyAttributes = {
  name:           string;
  subtitle:       Subtitle;
  price:          number;
  description:    string;
  size:           SizeClass;
  original_price: number;
  slug:           string;
  createdAt:      Date;
  updatedAt:      Date;
  publishedAt:    Date;
}

export type SizeClass = {
  data: SizeDatum[];
}

export type SizeDatum = {
  size:    SizeEnum;
  enabled: boolean;
}

export type SizeEnum = "UK 6" | "UK 6.5" | "UK 7" | "UK 7.5" | "UK 8" | "UK 8.5" | "UK 9" | "UK 9.5" | "UK 10" | "UK 10.5" | "UK 11" | "UK 11.5";

export type Subtitle = "Men's Shoes" | "Men's Basketball Shoes" | "Shoe";

export type Meta = {
  pagination: Pagination;
}

export type Pagination = {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
