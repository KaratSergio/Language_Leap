export interface PriceFilter {
  min: number | null;
  max: number | null;
}

export interface FiltersState {
  language: string | null;
  level: string | null;
  price: PriceFilter;
}
