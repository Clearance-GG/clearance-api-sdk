/* tslint:disable */
/* eslint-disable */
/**
 * Clearance API
 * Clearance.gg API docs for all the bots and monitors
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MapQuestResultDto } from './map-quest-result-dto';
import { StoreHoursDto } from './store-hours-dto';
 /**
 * 
 *
 * @export
 * @interface HDStoreDto
 */
export interface HDStoreDto {

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    storeId: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    name: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    address: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    addressLine2?: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    city: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    state: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    zipcode: string;

    /**
     * @type {number}
     * @memberof HDStoreDto
     */
    lat: number;

    /**
     * @type {number}
     * @memberof HDStoreDto
     */
    lng: number;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    phoneNumber: string;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    proPhoneNumber?: string;

    /**
     * @type {StoreHoursDto}
     * @memberof HDStoreDto
     */
    hours: StoreHoursDto;

    /**
     * @type {string}
     * @memberof HDStoreDto
     */
    url: string;

    /**
     * @type {MapQuestResultDto}
     * @memberof HDStoreDto
     */
    mapquestData?: MapQuestResultDto;

    /**
     * @type {any}
     * @memberof HDStoreDto
     */
    dataDump?: any;

    /**
     * @type {Date}
     * @memberof HDStoreDto
     */
    createdAt: Date;
}