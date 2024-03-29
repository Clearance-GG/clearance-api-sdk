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

import { GeometryDto } from './geometry-dto';
import { PropertiesDto } from './properties-dto';
 /**
 * 
 *
 * @export
 * @interface PlaceDto
 */
export interface PlaceDto {

    /**
     * @type {GeometryDto}
     * @memberof PlaceDto
     */
    geometry: GeometryDto;

    /**
     * @type {PropertiesDto}
     * @memberof PlaceDto
     */
    properties: PropertiesDto;

    /**
     * @type {string}
     * @memberof PlaceDto
     * @example Feature
     */
    type: string;
}
