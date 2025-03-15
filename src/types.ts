export type Director = {
  name: string;
};
export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type Genre = {
  id: string;
  name: string;
  imageUrl: string;
};

export type GameQuery = {
  selectedGenre: string | null;
  selectedPlatform: string | undefined;
  searchTerm: string | null;
  sortTerm: string | null;
};

export type Platform ={
  id: number;
  slug: string;
  name: string;
}
