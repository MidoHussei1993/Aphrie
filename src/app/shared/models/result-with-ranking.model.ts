// uset to recive all type of api with pagination
export class ResultWithPage<T> {
    data: T;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    ad: Advertis;
}
type Advertis ={
    company: string,
    url: string,
    text: string
}