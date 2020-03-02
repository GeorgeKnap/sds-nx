/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Location } from '../models/location';
@Injectable({
  providedIn: 'root',
})
class LocationService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `LocationService.GetFleetLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getFleetLocationCollectionResponse(widgetId: string, params: LocationService.GetFleetLocationCollectionParams): __Observable<__StrictHttpResponse<Array<Location>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Location>>;
      })
    );
  }
  /**
   * @param params The `LocationService.GetFleetLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getFleetLocationCollection(widgetId: string, params: LocationService.GetFleetLocationCollectionParams): __Observable<Array<Location>> {
    return this.getFleetLocationCollectionResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<Location>)
    );
  }

  /**
   * @param id undefined
   * @return Location resource response
   */
  getLocationItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<Location>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/locations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Location>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Location resource response
   */
  getLocationItem(widgetId: string, id: string): __Observable<Location> {
    return this.getLocationItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as Location)
    );
  }

  /**
   * @param params The `LocationService.PutLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `location`: The updated Location resource
   *
   * @return Location resource updated
   */
  putLocationItemResponse(widgetId: string, params: LocationService.PutLocationItemParams): __Observable<__StrictHttpResponse<Location>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.location;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/locations/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Location>;
      })
    );
  }
  /**
   * @param params The `LocationService.PutLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `location`: The updated Location resource
   *
   * @return Location resource updated
   */
  putLocationItem(widgetId: string, params: LocationService.PutLocationItemParams): __Observable<Location> {
    return this.putLocationItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as Location)
    );
  }

  /**
   * @param id undefined
   */
  deleteLocationItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/locations/${id}`,
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
  deleteLocationItem(widgetId: string, id: string): __Observable<null> {
    return this.deleteLocationItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `LocationService.GetPortalLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getPortalLocationCollectionResponse(widgetId: string, params: LocationService.GetPortalLocationCollectionParams): __Observable<__StrictHttpResponse<Array<Location>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portal/plants/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Location>>;
      })
    );
  }
  /**
   * @param params The `LocationService.GetPortalLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getPortalLocationCollection(widgetId: string, params: LocationService.GetPortalLocationCollectionParams): __Observable<Array<Location>> {
    return this.getPortalLocationCollectionResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<Location>)
    );
  }
}

module LocationService {
  // GET

  /**
   * Parameters for getFleetLocationCollection
   */
  export interface GetFleetLocationCollectionParams {
    id: string;
    query?: {


    /**
     * The collection page number
     */
    page?: number;
    }
  }
  // PUT

  /**
   * Parameters for putLocationItem
   */
  export interface PutLocationItemParams {
    id: string;
    /**
     * The updated Location resource
     */
    location?: Location;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for getPortalLocationCollection
   */
  export interface GetPortalLocationCollectionParams {
    id: string;
    query?: {


    /**
     * The collection page number
     */
    page?: number;
    }
  }
}

export { LocationService }
