export type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  description: string;
};

export type Screenshot = {
  id: number;
  image: string;
};

export type Trailer = {
  id: number;
  name: string;
  preview: string;
}
