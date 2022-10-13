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
