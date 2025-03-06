export type Director = {
  name: string;
};
export type Genre = {
    name: string;
}
export interface Movie {
  directors: Director[];
  image: string;
  imdbRating: string;
  link: string;
  releasePeriod: string;
  starsList: Genre[];
  timeline: string;
  title: string;
}