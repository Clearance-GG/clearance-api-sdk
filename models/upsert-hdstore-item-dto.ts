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

 /**
 * 
 *
 * @export
 * @interface UpsertHDStoreItemDto
 */
export interface UpsertHDStoreItemDto {

    /**
     * Item ID that is being updated
     *
     * @type {string}
     * @memberof UpsertHDStoreItemDto
     */
    itemId: string;

    /**
     * Store SKU for the item that is being updated
     *
     * @type {string}
     * @memberof UpsertHDStoreItemDto
     */
    storeSku?: string;

    /**
     * Price of the item in the store
     *
     * @type {number}
     * @memberof UpsertHDStoreItemDto
     */
    price?: number;

    /**
     * How many items are in stock
     *
     * @type {number}
     * @memberof UpsertHDStoreItemDto
     */
    inventory?: number;

    /**
     * Whether the item is on clearance
     *
     * @type {boolean}
     * @memberof UpsertHDStoreItemDto
     */
    isClearance?: boolean;

    /**
     * Clearance price instore
     *
     * @type {number}
     * @memberof UpsertHDStoreItemDto
     */
    clearancePrice?: number;

    /**
     * Location of the item in the store
     *
     * @type {string}
     * @memberof UpsertHDStoreItemDto
     */
    location?: string;
}
