/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Address } from '../models/address';
import { AddressAddress } from '../models/address-address';
@Injectable({
  providedIn: 'root',
})
class AddressService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param address The new Address resource
   * @return Address resource created
   */
  postAddressCollectionResponse(widgetId: string, address?: AddressAddress): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    __body = address;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param address The new Address resource
   * @return Address resource created
   */
  postAddressCollection(widgetId: string, address?: AddressAddress): __Observable<Address> {
    return this.postAddressCollectionResponse(widgetId, address).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param id undefined
   * @return Address resource response
   */
  getAddressItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/address/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Address resource response
   */
  getAddressItem(widgetId: string, id: string): __Observable<Address> {
    return this.getAddressItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.PutAddressItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `address`: The updated Address resource
   *
   * @return Address resource updated
   */
  putAddressItemResponse(widgetId: string, params: AddressService.PutAddressItemParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.address;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/address/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.PutAddressItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `address`: The updated Address resource
   *
   * @return Address resource updated
   */
  putAddressItem(widgetId: string, params: AddressService.PutAddressItemParams): __Observable<Address> {
    return this.putAddressItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param id undefined
   */
  deleteAddressItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/address/${id}`,
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
  deleteAddressItem(widgetId: string, id: string): __Observable<null> {
    return this.deleteAddressItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param page The collection page number
   * @return Address collection response
   */
  getAddressCollectionResponse(widgetId: string, page?: number): __Observable<__StrictHttpResponse<Array<Address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    if (page != null) __params = __params.set('page', page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/addresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Address>>;
      })
    );
  }
  /**
   * @param page The collection page number
   * @return Address collection response
   */
  getAddressCollection(widgetId: string, page?: number): __Observable<Array<Address>> {
    return this.getAddressCollectionResponse(widgetId, page).pipe(
      __map(_r => _r.body as Array<Address>)
    );
  }

  /**
   * @param id undefined
   * @return Address resource response
   */
  apiContactsAddressGetSubresourceResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts/${id}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Address resource response
   */
  apiContactsAddressGetSubresource(widgetId: string, id: string): __Observable<Address> {
    return this.apiContactsAddressGetSubresourceResponse(widgetId, id).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiFleetsPlantsContactsAddressGetSubresourceResponse(widgetId: string, params: AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/${params.plants}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiFleetsPlantsContactsAddressGetSubresource(widgetId: string, params: AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiFleetsPlantsContactsAddressGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPlantsContactsAddressGetSubresourceResponse(widgetId: string, params: AddressService.ApiPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants/${params.id}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPlantsContactsAddressGetSubresource(widgetId: string, params: AddressService.ApiPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiPlantsContactsAddressGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPortalsFleetsPlantsContactsAddressGetSubresourceResponse(widgetId: string, params: AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);




    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants/${params.plants}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPortalsFleetsPlantsContactsAddressGetSubresource(widgetId: string, params: AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiPortalsFleetsPlantsContactsAddressGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.VerifyAddressAddressItemParams` containing the following parameters:
   *
   * - `street`:
   *
   * - `houseNumber`:
   *
   * - `postalCode`:
   *
   * - `city`:
   *
   * - `country`:
   *
   * @return verified response contains the geo coordinates
   */
  verifyAddressAddressItemResponse(widgetId: string, params: AddressService.VerifyAddressAddressItemParams): __Observable<__StrictHttpResponse<{latitude?: string, longitude?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    if (params.query && params.query.street != null) __params = __params.set('street', params.query.street.toString());
    if (params.query && params.query.houseNumber != null) __params = __params.set('houseNumber', params.query.houseNumber.toString());
    if (params.query && params.query.postalCode != null) __params = __params.set('postalCode', params.query.postalCode.toString());
    if (params.query && params.query.city != null) __params = __params.set('city', params.query.city.toString());
    if (params.query && params.query.country != null) __params = __params.set('country', params.query.country.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/verifyaddress`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{latitude?: string, longitude?: string}>;
      })
    );
  }
  /**
   * @param params The `AddressService.VerifyAddressAddressItemParams` containing the following parameters:
   *
   * - `street`:
   *
   * - `houseNumber`:
   *
   * - `postalCode`:
   *
   * - `city`:
   *
   * - `country`:
   *
   * @return verified response contains the geo coordinates
   */
  verifyAddressAddressItem(widgetId: string, params: AddressService.VerifyAddressAddressItemParams): __Observable<{latitude?: string, longitude?: string}> {
    return this.verifyAddressAddressItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as {latitude?: string, longitude?: string})
    );
  }
}

module AddressService {
  // PUT

  /**
   * Parameters for putAddressItem
   */
  export interface PutAddressItemParams {
    id: string;
    /**
     * The updated Address resource
     */
    address?: AddressAddress;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for apiFleetsPlantsContactsAddressGetSubresource
   */
  export interface ApiFleetsPlantsContactsAddressGetSubresourceParams {
    id: string;    plants: string;    contacts: string;
    query?: {



    }
  }
  // GET

  /**
   * Parameters for apiPlantsContactsAddressGetSubresource
   */
  export interface ApiPlantsContactsAddressGetSubresourceParams {
    id: string;    contacts: string;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for apiPortalsFleetsPlantsContactsAddressGetSubresource
   */
  export interface ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams {
    id: string;    fleets: string;    plants: string;    contacts: string;
    query?: {




    }
  }
  // GET

  /**
   * Parameters for verifyAddressAddressItem
   */
  export interface VerifyAddressAddressItemParams {

    query?: {
      street?: string;
      houseNumber?: string;
      postalCode?: string;
      city?: string;
      country?: string;
    }
  }
}

export { AddressService }
