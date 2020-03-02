/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse, StrictHttpResponse  } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PlantPlant_get_address_contact_fleet } from '../models/plant-plant-_get-_address-_contact-_fleet';
import { PlantPlant_put_address_contact_fleet } from '../models/plant-plant-_put-_address-_contact-_fleet';
import { PlantPlant_only_label_fleets } from '../models/plant-plant-_only-_label-_fleets';
import { UpdatePlantFleetsDelta } from '../models/update-plant-fleets-delta';
@Injectable({
  providedIn: 'root',
})
class PlantService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `PlantService.GetPlantsByFleetPlantCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `label`:
   *
   * - `order[identifier]`:
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * @return Plant collection response
   */
  getPlantsByFleetPlantCollectionResponse(widgetId: string, params: PlantService.GetPlantsByFleetPlantCollectionParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    if (params.query && params.query.orderLabel != null) __params = __params.set('order[label]', params.query.orderLabel.toString());
    if (params.query && params.query.orderPlantSize != null) __params = __params.set('order[plantSize]', params.query.orderPlantSize.toString());
    if (params.query && params.query.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.query.orderFirmwareVersion.toString());
    if (params.query && params.query.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.query.orderDeviceFullName.toString());
    if (params.query && params.query.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.query.orderLastTransfer.toString());
    if (params.query && params.query.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.query.orderAddressPostalCode.toString());
    if (params.query && params.query.orderAddressCity != null) __params = __params.set('order[address.city]', params.query.orderAddressCity.toString());
    if (params.query && params.query.firmwareVersion != null) __params = __params.set('firmwareVersion', params.query.firmwareVersion.toString());
    if (params.query && params.query.deviceFullName != null) __params = __params.set('deviceFullName', params.query.deviceFullName.toString());
    if (params.query && params.query.identifier != null) __params = __params.set('identifier', params.query.identifier.toString());
    if (params.query && params.query.label != null) __params = __params.set('label', params.query.label.toString());
    if (params.query && params.query.orderIdentifier != null) __params = __params.set('order[identifier]', params.query.orderIdentifier.toString());
    if (params.query && params.query.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.query.plantSizeBetween.toString());
    if (params.query && params.query.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.query.plantSizeGt.toString());
    if (params.query && params.query.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.query.plantSizeGte.toString());
    if (params.query && params.query.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.query.plantSizeLt.toString());
    if (params.query && params.query.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.query.plantSizeLte.toString());
    if (params.query && params.query.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.query.lastTransferBefore.toString());
    if (params.query && params.query.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.query.lastTransferStrictlyBefore.toString());
    if (params.query && params.query.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.query.lastTransferAfter.toString());
    if (params.query && params.query.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.query.lastTransferStrictlyAfter.toString());
    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    if (params.query && params.query.searchOperator != null) __params = __params.set('searchOperator', params.query.searchOperator.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.GetPlantsByFleetPlantCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `label`:
   *
   * - `order[identifier]`:
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * @return Plant collection response
   */
  getPlantsByFleetPlantCollection(widgetId: string, params: PlantService.GetPlantsByFleetPlantCollectionParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.getPlantsByFleetPlantCollectionResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param plant The new Plant resource
   * @return Plant resource created
   */
  postPlantCollectionResponse(widgetId: string, plant?: PlantPlant_put_address_contact_fleet): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    __body = plant;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/plant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param plant The new Plant resource
   * @return Plant resource created
   */
  postPlantCollection(widgetId: string, plant?: PlantPlant_put_address_contact_fleet): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.postPlantCollectionResponse(widgetId, plant).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param id undefined
   * @return Plant resource response
   */
  getPlantItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plant/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Plant resource response
   */
  getPlantItem(widgetId: string, id: string): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.getPlantItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param params The `PlantService.PutPlantItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plant`: The updated Plant resource
   *
   * @return Plant resource updated
   */
  putPlantItemResponse(widgetId: string, params: PlantService.PutPlantItemParams): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.plant;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/plant/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param params The `PlantService.PutPlantItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plant`: The updated Plant resource
   *
   * @return Plant resource updated
   */
  putPlantItem(widgetId: string, params: PlantService.PutPlantItemParams): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.putPlantItemResponse(widgetId, params).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param id undefined
   */
  deletePlantItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/plant/${id}`,
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
  deletePlantItem(widgetId: string, id: string): __Observable<null> {
    return this.deletePlantItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Plant resource response
   */
  getOnlylabelandfleetsPlantItemResponse(widgetId: string, id: string): __Observable<__StrictHttpResponse<PlantPlant_only_label_fleets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plant/${id}/onlylabelandfleets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_only_label_fleets>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Plant resource response
   */
  getOnlylabelandfleetsPlantItem(widgetId: string, id: string): __Observable<PlantPlant_only_label_fleets> {
    return this.getOnlylabelandfleetsPlantItemResponse(widgetId, id).pipe(
      __map(_r => _r.body as PlantPlant_only_label_fleets)
    );
  }

  /**
   * @param params The `PlantService.GetPlantCollectionParams` containing the following parameters:
   *
   * - `label`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * @return Plant collection response
   */
  getPlantCollectionResponse(widgetId: string, params: PlantService.GetPlantCollectionParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);
    if (params.query && params.query.label != null) __params = __params.set('label', params.query.label.toString());
    if (params.query && params.query.orderLabel != null) __params = __params.set('order[label]', params.query.orderLabel.toString());
    if (params.query && params.query.orderPlantSize != null) __params = __params.set('order[plantSize]', params.query.orderPlantSize.toString());
    if (params.query && params.query.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.query.orderFirmwareVersion.toString());
    if (params.query && params.query.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.query.orderDeviceFullName.toString());
    if (params.query && params.query.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.query.orderLastTransfer.toString());
    if (params.query && params.query.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.query.orderAddressPostalCode.toString());
    if (params.query && params.query.orderAddressCity != null) __params = __params.set('order[address.city]', params.query.orderAddressCity.toString());
    if (params.query && params.query.firmwareVersion != null) __params = __params.set('firmwareVersion', params.query.firmwareVersion.toString());
    if (params.query && params.query.deviceFullName != null) __params = __params.set('deviceFullName', params.query.deviceFullName.toString());
    if (params.query && params.query.identifier != null) __params = __params.set('identifier', params.query.identifier.toString());
    if (params.query && params.query.orderIdentifier != null) __params = __params.set('order[identifier]', params.query.orderIdentifier.toString());
    if (params.query && params.query.searchOperator != null) __params = __params.set('searchOperator', params.query.searchOperator.toString());
    if (params.query && params.query.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.query.plantSizeBetween.toString());
    if (params.query && params.query.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.query.plantSizeGt.toString());
    if (params.query && params.query.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.query.plantSizeGte.toString());
    if (params.query && params.query.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.query.plantSizeLt.toString());
    if (params.query && params.query.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.query.plantSizeLte.toString());
    if (params.query && params.query.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.query.lastTransferBefore.toString());
    if (params.query && params.query.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.query.lastTransferStrictlyBefore.toString());
    if (params.query && params.query.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.query.lastTransferAfter.toString());
    if (params.query && params.query.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.query.lastTransferStrictlyAfter.toString());
    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.GetPlantCollectionParams` containing the following parameters:
   *
   * - `label`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * @return Plant collection response
   */
  getPlantCollection(widgetId: string, params: PlantService.GetPlantCollectionParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.getPlantCollectionResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param params The `PlantService.ApiPortalsFleetsPlantsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `order[label]`:
   *
   * - `order[identifier]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `identifier`:
   *
   * @return Plant collection response
   */
  apiPortalsFleetsPlantsGetSubresourceResponse(widgetId: string, params: PlantService.ApiPortalsFleetsPlantsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);


    if (params.query && params.query.orderLabel != null) __params = __params.set('order[label]', params.query.orderLabel.toString());
    if (params.query && params.query.orderIdentifier != null) __params = __params.set('order[identifier]', params.query.orderIdentifier.toString());
    if (params.query && params.query.orderPlantSize != null) __params = __params.set('order[plantSize]', params.query.orderPlantSize.toString());
    if (params.query && params.query.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.query.orderFirmwareVersion.toString());
    if (params.query && params.query.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.query.orderDeviceFullName.toString());
    if (params.query && params.query.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.query.orderLastTransfer.toString());
    if (params.query && params.query.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.query.orderAddressPostalCode.toString());
    if (params.query && params.query.orderAddressCity != null) __params = __params.set('order[address.city]', params.query.orderAddressCity.toString());
    if (params.query && params.query.firmwareVersion != null) __params = __params.set('firmwareVersion', params.query.firmwareVersion.toString());
    if (params.query && params.query.deviceFullName != null) __params = __params.set('deviceFullName', params.query.deviceFullName.toString());
    if (params.query && params.query.page != null) __params = __params.set('page', params.query.page.toString());
    if (params.query && params.query.label != null) __params = __params.set('label', params.query.label.toString());
    if (params.query && params.query.searchOperator != null) __params = __params.set('searchOperator', params.query.searchOperator.toString());
    if (params.query && params.query.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.query.plantSizeBetween.toString());
    if (params.query && params.query.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.query.plantSizeGt.toString());
    if (params.query && params.query.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.query.plantSizeGte.toString());
    if (params.query && params.query.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.query.plantSizeLt.toString());
    if (params.query && params.query.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.query.plantSizeLte.toString());
    if (params.query && params.query.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.query.lastTransferBefore.toString());
    if (params.query && params.query.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.query.lastTransferStrictlyBefore.toString());
    if (params.query && params.query.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.query.lastTransferAfter.toString());
    if (params.query && params.query.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.query.lastTransferStrictlyAfter.toString());
    if (params.query && params.query.identifier != null) __params = __params.set('identifier', params.query.identifier.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.ApiPortalsFleetsPlantsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `order[label]`:
   *
   * - `order[identifier]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `identifier`:
   *
   * @return Plant collection response
   */
  apiPortalsFleetsPlantsGetSubresource(widgetId: string, params: PlantService.ApiPortalsFleetsPlantsGetSubresourceParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.apiPortalsFleetsPlantsGetSubresourceResponse(widgetId, params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param params The `PlantService.PutPlantIdFleetsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plantFleetsDelta`:
   */
  putPlantIdFleetsDeltaResponse(widgetId: string, params: PlantService.PutPlantIdFleetsDeltaParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers = __headers.append('X-Sl-Widget-Id', widgetId);

    __body = params.plantFleetsDelta;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/plant/${params.id}/fleets-delta`,
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
   * @param params The `PlantService.PutPlantIdFleetsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plantFleetsDelta`:
   */
  putPlantIdFleetsDelta(widgetId: string, params: PlantService.PutPlantIdFleetsDeltaParams): __Observable<null> {
    return this.putPlantIdFleetsDeltaResponse(widgetId, params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PlantService {
  // GET

  /**
   * Parameters for getPlantsByFleetPlantCollection
   */
  export interface GetPlantsByFleetPlantCollectionParams {
    id: string;
    query?: {

      orderLabel?: string;
      orderPlantSize?: string;
      orderFirmwareVersion?: string;
      orderDeviceFullName?: string;
      orderLastTransfer?: string;
      orderAddressPostalCode?: string;
      orderAddressCity?: string;
      firmwareVersion?: string;
      deviceFullName?: string;
      identifier?: string;
      label?: string;
      orderIdentifier?: string;
      plantSizeBetween?: string;
      plantSizeGt?: string;
      plantSizeGte?: string;
      plantSizeLt?: string;
      plantSizeLte?: string;
      lastTransferBefore?: string;
      lastTransferStrictlyBefore?: string;
      lastTransferAfter?: string;
      lastTransferStrictlyAfter?: string;

    /**
     * The collection page number
     */
    page?: number;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
    }
  }
  // PUT

  /**
   * Parameters for putPlantItem
   */
  export interface PutPlantItemParams {
    id: string;
    /**
     * The updated Plant resource
     */
    plant?: PlantPlant_put_address_contact_fleet;
    query?: {


    }
  }
  // GET

  /**
   * Parameters for getPlantCollection
   */
  export interface GetPlantCollectionParams {

    query?: {
      label?: string;
      orderLabel?: string;
      orderPlantSize?: string;
      orderFirmwareVersion?: string;
      orderDeviceFullName?: string;
      orderLastTransfer?: string;
      orderAddressPostalCode?: string;
      orderAddressCity?: string;
      firmwareVersion?: string;
      deviceFullName?: string;
      identifier?: string;
      orderIdentifier?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
      plantSizeBetween?: string;
      plantSizeGt?: string;
      plantSizeGte?: string;
      plantSizeLt?: string;
      plantSizeLte?: string;
      lastTransferBefore?: string;
      lastTransferStrictlyBefore?: string;
      lastTransferAfter?: string;
      lastTransferStrictlyAfter?: string;

    /**
     * The collection page number
     */
    page?: number;
    }
  }
  // GET

  /**
   * Parameters for apiPortalsFleetsPlantsGetSubresource
   */
  export interface ApiPortalsFleetsPlantsGetSubresourceParams {
    id: string;    fleets: string;
    query?: {


      orderLabel?: string;
      orderIdentifier?: string;
      orderPlantSize?: string;
      orderFirmwareVersion?: string;
      orderDeviceFullName?: string;
      orderLastTransfer?: string;
      orderAddressPostalCode?: string;
      orderAddressCity?: string;
      firmwareVersion?: string;
      deviceFullName?: string;

    /**
     * The collection page number
     */
    page?: number;
      label?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
      plantSizeBetween?: string;
      plantSizeGt?: string;
      plantSizeGte?: string;
      plantSizeLt?: string;
      plantSizeLte?: string;
      lastTransferBefore?: string;
      lastTransferStrictlyBefore?: string;
      lastTransferAfter?: string;
      lastTransferStrictlyAfter?: string;
      identifier?: string;
    }
  }
  // PUT

  /**
   * Parameters for putPlantIdFleetsDelta
   */
  export interface PutPlantIdFleetsDeltaParams {
    id: string;    plantFleetsDelta?: UpdatePlantFleetsDelta;
    query?: {


    }
  }
}

export { PlantService }
