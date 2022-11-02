export interface Pagination{
  pageIndex: number | null;
  pageSize: number | null;
  search: string | null;
  sort: number | null;
  count: number;
  pageCount: number;
  data: any[];
}
