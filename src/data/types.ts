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

export interface PeopleItem {
  id: string;
  birth_year: string;
  name: string;
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

export interface StarshipsItem {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  url: string;
}

export interface PlanetsItem {
  id: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  url: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  image: FileList;
  date: string;
  dollType: string[];
  rare: boolean;
  favBrand: string;
  promoPermission: boolean;
}
