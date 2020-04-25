import { Injectable } from '@angular/core';

interface PornResponse {
  count: number;
  start: number;
  per_page: number;
  page: number;
  time_ms: number;
  total_count: number;
  total_pages: number;
  videos: PornVideo[];
}

export interface PornVideo {
  id: string;
  title: string;
  keywords: string;
  views: number;
  rate: string;
  url: string;
  added: string;
  length_sec: number;
  length_min: string;
  embed: string;
  default_thumb: VideoThumb;
  thumbs: VideoThumb[];
}

export interface VideoThumb {
  size: string;
  width: number;
  height: number;
  src: string;
}

export enum Sorting {
  Latest = 'latest',
  Longest = 'longest',
  Shortest = 'shortest',
  TopRated = 'top-rated',
  MostPopular = 'most-popular',
  TopWeekly = 'top-weekly',
  TopMonthly = 'top-monthly'
}

export enum GayFilter {
  GeteroOnly = 0,
  GayAndGetero = 1,
  GayOnly = 2
}


@Injectable({
  providedIn: 'root'
})
export class PornsService {

  public porns: PornVideo[] = [];
  public isLoading = false;

  searchString = '';
  sorting: Sorting = Sorting.Latest;
  gayFilter: GayFilter = GayFilter.GeteroOnly;

  setSorting(sorting: Sorting) {
    this.sorting = sorting;
    this.getVideos();
  }

  setGayFilter(gayFilter: GayFilter) {
    this.gayFilter = gayFilter;
    this.getVideos();
  }

  setSearch(search: string) {
    this.searchString = search;
  }

  getVideos() {
    this.isLoading = true;
    fetch(`https://www.eporner.com/api/v2/video/search/?query=${this.searchString}&per_page=10&page=1&thumbsize=big&order=${this.sorting}&gay=${this.gayFilter}&lq=1&format=json`)
      .then(r => r.json())
      .then((data: PornResponse) => {
        this.porns = data.videos;
        this.isLoading = false;
      });
  }

  getPorn(id: string) {
    return this.porns.find(porn => porn.id === id);
  }

}
