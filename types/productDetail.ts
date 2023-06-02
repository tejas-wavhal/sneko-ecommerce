export type ProductDetail = {
  id:         number;
  attributes: ProductDetailAttributes;
}

export type ProductDetailAttributes = {
  name:           string;
  subtitle:       string;
  price:          number;
  description:    string;
  size:           Size;
  original_price: number;
  slug:           string;
  createdAt:      Date;
  updatedAt:      Date;
  publishedAt:    Date;
  image:          Image;
  thumbnail:      Thumbnail;
  categories:     Categories;
}

export type Categories = {
  data: CategoriesDatum[];
}

export type CategoriesDatum = {
  id:         number;
  attributes: PurpleAttributes;
}

export type PurpleAttributes = {
  name:        string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export type Image = {
  data: ImageDatum[];
}

export type ImageDatum = {
  id:         number;
  attributes: FluffyAttributes;
}

export type FluffyAttributes = {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           PurpleFormats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: ProviderMetadata;
  createdAt:         Date;
  updatedAt:         Date;
}

export type EXT = ".webp";

export type PurpleFormats = {
  large:     Small;
  small:     Small;
  medium:    Small;
  thumbnail: Small;
}

export type Small = {
  ext:               EXT;
  url:               string;
  hash:              string;
  mime:              MIME;
  name:              string;
  path:              null;
  size:              number;
  width:             number;
  height:            number;
  provider_metadata: ProviderMetadata;
}

export type MIME = "image/webp";

export type ProviderMetadata = {
  public_id:     string;
  resource_type: ResourceType;
}

export type ResourceType = "image";

export type Size = {
  data: SizeDatum[];
}

export type SizeDatum = {
  size:    string;
  enabled: boolean;
}

export type Thumbnail = {
  data: Data;
}

export type Data = {
  id:         number;
  attributes: DataAttributes;
}

export type DataAttributes = {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           FluffyFormats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: ProviderMetadata;
  createdAt:         Date;
  updatedAt:         Date;
}

export type FluffyFormats = {
  small:     Small;
  thumbnail: Small;
}
