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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { BarcodeResponseDto } from '../models';
/**
 * UtilityApi - axios parameter creator
 * @export
 */
export declare const UtilityApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Update or create user data
     * @param {string} upc The UPC to create a barcode for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    utilityControllerGetBarcodeImage: (upc: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UtilityApi - functional programming interface
 * @export
 */
export declare const UtilityApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Update or create user data
     * @param {string} upc The UPC to create a barcode for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    utilityControllerGetBarcodeImage(upc: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BarcodeResponseDto>>>;
};
/**
 * UtilityApi - factory interface
 * @export
 */
export declare const UtilityApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Update or create user data
     * @param {string} upc The UPC to create a barcode for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    utilityControllerGetBarcodeImage(upc: string, options?: AxiosRequestConfig): Promise<AxiosResponse<BarcodeResponseDto>>;
};
/**
 * UtilityApi - object-oriented interface
 * @export
 * @class UtilityApi
 * @extends {BaseAPI}
 */
export declare class UtilityApi extends BaseAPI {
    /**
     *
     * @summary Update or create user data
     * @param {string} upc The UPC to create a barcode for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UtilityApi
     */
    utilityControllerGetBarcodeImage(upc: string, options?: AxiosRequestConfig): Promise<AxiosResponse<BarcodeResponseDto>>;
}
