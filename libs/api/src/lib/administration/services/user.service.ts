/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FFuFUser } from '../models/ffu-fuser';
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getUserAuthEndpointsResponse(widgetId: string, ): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/auth/endpoints`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }  getUserAuthEndpoints(widgetId: string, ): __Observable<any> {
    return this.getUserAuthEndpointsResponse(widgetId, ).pipe(
      __map(_r => _r.body as any)
    );
  }
  getUserResponse(widgetId: string, ): __Observable<__StrictHttpResponse<FFuFUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FFuFUser>;
      })
    );
  }  getUser(widgetId: string, ): __Observable<FFuFUser> {
    return this.getUserResponse(widgetId, ).pipe(
      __map(_r => _r.body as FFuFUser)
    );
  }
}

module UserService {
}

export { UserService }
