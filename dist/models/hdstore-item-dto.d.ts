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
* @interface HDStoreItemDto
*/
export interface HDStoreItemDto {
    /**
     * Unique identifier for the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    itemId: string;
    /**
     * SKU specific to the store
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    storeSku?: string;
    /**
     * SKU used internally or by the backend system
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    backendSku?: string;
    /**
     * Model number of the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    modelNumber?: string;
    /**
     * Universal Product Code
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    upc?: string;
    /**
     * Brand of the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    brand?: string;
    /**
     * Name of the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    name: string;
    /**
     * URL to the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    url: string;
    /**
     * Manufacturer's Suggested Retail Price
     *
     * @type {number}
     * @memberof HDStoreItemDto
     */
    msrp: number;
    /**
     * URL to the image of the item
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    image: string;
    /**
     * Store ID where the item is sold
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    storeId?: string;
    /**
     * Price of the item in the specific store
     *
     * @type {number}
     * @memberof HDStoreItemDto
     */
    price?: number;
    /**
     * Inventory count of the item in the specific store
     *
     * @type {number}
     * @memberof HDStoreItemDto
     */
    inventory?: number;
    /**
     * Location in the store
     *
     * @type {string}
     * @memberof HDStoreItemDto
     */
    location?: string;
    /**
     * Indicates if the item is on clearance in the specific store
     *
     * @type {boolean}
     * @memberof HDStoreItemDto
     */
    isClearance?: boolean;
    /**
     * Clearance price of the item in the specific store
     *
     * @type {number}
     * @memberof HDStoreItemDto
     */
    clearancePrice?: number;
    /**
     * List of category names the item belongs to
     *
     * @type {Array<string>}
     * @memberof HDStoreItemDto
     */
    itemCategories?: Array<string>;
}