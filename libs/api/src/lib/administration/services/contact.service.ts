/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactContact_address } from '../models/contact-contact-_address';
@Injectable({
  providedIn: 'root',
})
class ContactService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param contact The new Contact resource
   * @return Contact resource created
   */
  postContactCollectionResponse(widgetId: string, contact?: ContactContact_address): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    __body = contact;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param contact The new Contact resource
   * @return Contact resource created
   */
  postContactCollection(widgetId: string, contact?: ContactContact_address): __Observable<ContactContact_address> {
    return this.postContactCollectionResponse(widgetId, contact).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param id undefined
   * @return Contact resource response
   */
  getContactItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contact/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Contact resource response
   */
  getContactItem(widgetId: string, id: string): __Observable<ContactContact_address> {
    return this.getContactItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param params The `ContactService.PutContactItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contact`: The updated Contact resource
   *
   * @return Contact resource updated
   */
  putContactItemResponse(widgetId: string, params: ContactService.PutContactItemParams): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.contact;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/contact/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param params The `ContactService.PutContactItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contact`: The updated Contact resource
   *
   * @return Contact resource updated
   */
  putContactItem(widgetId: string, params: ContactService.PutContactItemParams): __Observable<ContactContact_address> {
    return this.putContactItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param id undefined
   */
  deleteContactItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/contact/${id}`,
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
  deleteContactItem(widgetId: string, id: string): __Observable<null> {
    return this.deleteContactItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param page The collection page number
   * @return Contact collection response
   */
  getContactCollectionResponse(widgetId: string, page?: number): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    if (page != null) __params = __params.set('page', page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param page The collection page number
   * @return Contact collection response
   */
  getContactCollection(widgetId: string, page?: number): __Observable<Array<ContactContact_address>> {
    return this.getContactCollectionResponse(widgetId, page).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiFleetsPlantsContactsGetSubresourceResponse(widgetId: string, params: ContactService.ApiFleetsPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);


    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/${params.plants}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiFleetsPlantsContactsGetSubresource(widgetId: string, params: ContactService.ApiFleetsPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiFleetsPlantsContactsGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPlantsContactsGetSubresourceResponse(widgetId: string, params: ContactService.ApiPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants/${params.id}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPlantsContactsGetSubresource(widgetId: string, params: ContactService.ApiPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiPlantsContactsGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPortalsFleetsPlantsContactsGetSubresourceResponse(widgetId: string, params: ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);



    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants/${params.plants}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPortalsFleetsPlantsContactsGetSubresource(widgetId: string, params: ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiPortalsFleetsPlantsContactsGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }
}

module ContactService {
  // PUT

  /**
   * Parameters for putContactItem
   */
  export interface PutContactItemParams {
    id: string;
    /**
     * The updated Contact resource
     */
    contact?: ContactContact_address;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for apiFleetsPlantsContactsGetSubresource
   */
  export interface ApiFleetsPlantsContactsGetSubresourceParams {
    id: string;    plants: string;
    query?: {



    /**
     * The collection page number
     */
    page?: number;
    }
  }
  // GET

  /**
   * Parameters for apiPlantsContactsGetSubresource
   */
  export interface ApiPlantsContactsGetSubresourceParams {
    id: string;
    query?: {


    /**
     * The collection page number
     */
    page?: number;
    }
  }
  // GET

  /**
   * Parameters for apiPortalsFleetsPlantsContactsGetSubresource
   */
  export interface ApiPortalsFleetsPlantsContactsGetSubresourceParams {
    id: string;    fleets: string;    plants: string;
    query?: {




    /**
     * The collection page number
     */
    page?: number;
    }
  }
}

export { ContactService }
