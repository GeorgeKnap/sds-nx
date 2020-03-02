/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PortalPortal_get } from '../models/portal-portal-_get';
import { PortalBa29ce51395d99f6a874d88de3e68258Portal_set } from '../models/portal-ba-29ce-51395d-99f-6a-874d-88de-3e-68258portal-_set';
@Injectable({
  providedIn: 'root',
})
class PortalService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param portal The new Portal resource
   * @return Portal resource created
   */
  postPortalCollectionResponse(widgetId: string, portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    __body = portal;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/portal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param portal The new Portal resource
   * @return Portal resource created
   */
  postPortalCollection(widgetId: string, portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set): __Observable<PortalPortal_get> {
    return this.postPortalCollectionResponse(widgetId, portal).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param id undefined
   * @return Portal resource response
   */
  getPortalItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portal/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Portal resource response
   */
  getPortalItem(widgetId: string, id: string): __Observable<PortalPortal_get> {
    return this.getPortalItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param params The `PortalService.PutPortalItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `portal`: The updated Portal resource
   *
   * @return Portal resource updated
   */
  putPortalItemResponse(widgetId: string, params: PortalService.PutPortalItemParams): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.portal;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/portal/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param params The `PortalService.PutPortalItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `portal`: The updated Portal resource
   *
   * @return Portal resource updated
   */
  putPortalItem(widgetId: string, params: PortalService.PutPortalItemParams): __Observable<PortalPortal_get> {
    return this.putPortalItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param id undefined
   */
  deletePortalItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/portal/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deletePortalItem(widgetId: string, id: string): __Observable<null> {
    return this.deletePortalItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `PortalService.GetPortalCollectionParams` containing the following parameters:
   *
   * - `order[name]`:
   *
   * - `order[sdsDebitorNumber]`:
   *
   * - `order[domain]`:
   *
   * - `page`: The collection page number
   *
   * @return Portal collection response
   */
  getPortalCollectionResponse(widgetId: string, params: PortalService.GetPortalCollectionParams): __Observable<__StrictHttpResponse<Array<PortalPortal_get>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    if (params.query && params.query.orderName != null) __params = __params.set('order[name]', params.query.orderName.toString());
    if (params.query && params.query.orderSdsDebitorNumber != null) __params = __params.set('order[sdsDebitorNumber]', params.query.orderSdsDebitorNumber.toString());
    if (params.query && params.query.orderDomain != null) __params = __params.set('order[domain]', params.query.orderDomain.toString());
    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PortalPortal_get>>;
      })
    );
  }
  /**
   * @param params The `PortalService.GetPortalCollectionParams` containing the following parameters:
   *
   * - `order[name]`:
   *
   * - `order[sdsDebitorNumber]`:
   *
   * - `order[domain]`:
   *
   * - `page`: The collection page number
   *
   * @return Portal collection response
   */
  getPortalCollection(widgetId: string, params: PortalService.GetPortalCollectionParams): __Observable<Array<PortalPortal_get>> {
    return this.getPortalCollectionResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<PortalPortal_get>)
    );
  }
}

module PortalService {
  // PUT

  /**
   * Parameters for putPortalItem
   */
  export interface PutPortalItemParams {
    id: string;
    /**
     * The updated Portal resource
     */
    portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for getPortalCollection
   */
  export interface GetPortalCollectionParams {

    query?: {
      orderName?: string;
      orderSdsDebitorNumber?: string;
      orderDomain?: string;

    /**
     * The collection page number
     */
    page?: number;
    }
  }
}

export { PortalService }
