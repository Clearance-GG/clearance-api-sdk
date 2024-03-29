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
import { AuthDTO } from '../models';
import { SignInResponse } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export declare const AuthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Sign in a user
     * @param {AuthDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn: (body: AuthDTO, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AuthApi - functional programming interface
 * @export
 */
export declare const AuthApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Sign in a user
     * @param {AuthDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(body: AuthDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignInResponse>>>;
};
/**
 * AuthApi - factory interface
 * @export
 */
export declare const AuthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Sign in a user
     * @param {AuthDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(body: AuthDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponse>>;
};
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export declare class AuthApi extends BaseAPI {
    /**
     *
     * @summary Sign in a user
     * @param {AuthDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerSignIn(body: AuthDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponse>>;
}
