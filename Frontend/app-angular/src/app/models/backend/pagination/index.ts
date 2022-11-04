export interface Pagination{
  pageIndex: number;
  pageSize: number;
  // search: string | null;
  // sort: number | null;
  count: number;
  pageCount: number;
  data: any[];
}
