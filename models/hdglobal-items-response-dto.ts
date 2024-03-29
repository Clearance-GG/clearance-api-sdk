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

import { HDGlobalItemDto } from './hdglobal-item-dto';
import { HDGlobalItemsStatsDto } from './hdglobal-items-stats-dto';
 /**
 * 
 *
 * @export
 * @interface HDGlobalItemsResponseDto
 */
export interface HDGlobalItemsResponseDto {

    /**
     * Total number of items available matching the filters
     *
     * @type {number}
     * @memberof HDGlobalItemsResponseDto
     */
    totalCount: number;

    /**
     * Array of HD Global Items
     *
     * @type {Array<HDGlobalItemDto>}
     * @memberof HDGlobalItemsResponseDto
     */
    items: Array<HDGlobalItemDto>;

    /**
     * Statistics related to the item across all stores
     *
     * @type {HDGlobalItemsStatsDto}
     * @memberof HDGlobalItemsResponseDto
     */
    stats: HDGlobalItemsStatsDto;
}
