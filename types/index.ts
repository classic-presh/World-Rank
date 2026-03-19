export type Country = {
  area: number;

  flags: {
    png: string;
    svg: string;
    alt?: string;
  };

  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };

  population: number;
  region: string;
  unMember: boolean;
  independent: boolean;
  cca3: string;
};

export type Filters = {
  sortBy: string;
  status: string;
  searchQuery: string;
  selectedRegions: string[];
};

export type CountryInfo = {
  population: number;
  area: number;
  capital: string[];
  subregion: string;
  languages: Record<string, string>;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  continents: string[];
  currencies: Record<
    string,
    {
      symbol: string;
      name: string;
    }
  >;
  borders: string[];
  cca3: string;
};
