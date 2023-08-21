export class CustomFetch {
  readonly baseUrl: string;
  constructor() {
    this.baseUrl = import.meta.env.VITE_SEVER_URL;
  }
}