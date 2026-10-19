export interface Apartment {
  id: string;
  number: string;
  name: string;
  type: 'ground-basement' | 'ground-floor' | 'penthouse-duplex';
  typeLabel: string;
  bedrooms: number;
  bathrooms: number;
  totalArea: number; // m²
  interiorArea: number;
  terraceArea: number;
  solariumArea?: number;
  gardenArea?: number;
  floor: string;
  orientation: string;
  priceFrom: string;
  status: 'available' | 'reserved' | 'under-offer';
  image: string;
  features: string[];
}

export interface BenefitReason {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  caption: string;
}

export interface Amenity {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface InteractivePin {
  id: string;
  title: string;
  description: string;
  top: string;
  left: string;
}

export interface ProjectAccordionItem {
  id: string;
  title: string;
  content: string;
  partnerName?: string;
  logo?: string;
}
