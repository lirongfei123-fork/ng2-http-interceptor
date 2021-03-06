import {
  Request,
  Response
} from "@angular/http";
import {Observable} from "rxjs";
export interface IHttpInterceptor {
  before?(request: Request): Request|Observable<Request>;
  after?(res: Observable<Response>): Observable<any> ;
}