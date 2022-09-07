export interface BeerRecipe {
  id: number,
  name: string,
  tagline?: string,
  first_brewed?: Date,
  description?: string,
  image_url?: string;
  ingredients?: string;
  contributed_by?: string;
}
