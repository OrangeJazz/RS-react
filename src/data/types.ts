type BrandType = "Barbie" | "Pullip" | "Blythe" | "Iplehouse" | "Other";
type OutfitType = "full" | "only makeup" | "wig and makeup" | "none";
type DollType = "OOAK" | "BJD" | "antique" | "play" | "collection";

export interface Doll {
  id: number;
  name: string;
  rare: boolean;
  brand: BrandType;
  year: number;
  type: DollType;
  outfit: OutfitType;
  hight: number;
  img: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  image: string;
  dollTypes: Set<string>;
  rarity: boolean;
  dollBrand: string;
  promo: boolean;
}

export interface Item {
  id: string;
  birth_year: string;
  name: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  url: string;
  films: string[];
  species: string[];
  starships: string[];
}
