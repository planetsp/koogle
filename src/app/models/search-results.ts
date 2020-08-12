import {Result} from './result';

export interface SearchResults {
  results: Array<Result>;
  milliseconds: number;
  searchType: string;
}
