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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { LeaderboardEntryDto } from '../models';
import { UpdateSuccessDTO } from '../models';
import { UserDto } from '../models';
/**
 * SuccessApi - axios parameter creator
 * @export
 */
export const SuccessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Update or create success points for a user
         * @param {UpdateSuccessDTO} body The points and related info to update/create
         * @param {string} userId The ID of the user to update/create points for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        successControllerCreate: async (body: UpdateSuccessDTO, userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling successControllerCreate.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling successControllerCreate.');
            }
            const localVarPath = `/success/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Find success data for a specific user
         * @param {string} userId The ID of the user to find
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        successControllerFindOne: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling successControllerFindOne.');
            }
            const localVarPath = `/success/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the leaderboard for a guild
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        successControllerLeaderboard: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/success/leaderboard`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SuccessApi - functional programming interface
 * @export
 */
export const SuccessApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Update or create success points for a user
         * @param {UpdateSuccessDTO} body The points and related info to update/create
         * @param {string} userId The ID of the user to update/create points for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerCreate(body: UpdateSuccessDTO, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SuccessApiAxiosParamCreator(configuration).successControllerCreate(body, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Find success data for a specific user
         * @param {string} userId The ID of the user to find
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerFindOne(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserDto>>> {
            const localVarAxiosArgs = await SuccessApiAxiosParamCreator(configuration).successControllerFindOne(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the leaderboard for a guild
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerLeaderboard(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<LeaderboardEntryDto>>>> {
            const localVarAxiosArgs = await SuccessApiAxiosParamCreator(configuration).successControllerLeaderboard(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SuccessApi - factory interface
 * @export
 */
export const SuccessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Update or create success points for a user
         * @param {UpdateSuccessDTO} body The points and related info to update/create
         * @param {string} userId The ID of the user to update/create points for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerCreate(body: UpdateSuccessDTO, userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SuccessApiFp(configuration).successControllerCreate(body, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Find success data for a specific user
         * @param {string} userId The ID of the user to find
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerFindOne(userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<UserDto>> {
            return SuccessApiFp(configuration).successControllerFindOne(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the leaderboard for a guild
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async successControllerLeaderboard(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<LeaderboardEntryDto>>> {
            return SuccessApiFp(configuration).successControllerLeaderboard(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SuccessApi - object-oriented interface
 * @export
 * @class SuccessApi
 * @extends {BaseAPI}
 */
export class SuccessApi extends BaseAPI {
    /**
     * 
     * @summary Update or create success points for a user
     * @param {UpdateSuccessDTO} body The points and related info to update/create
     * @param {string} userId The ID of the user to update/create points for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuccessApi
     */
    public async successControllerCreate(body: UpdateSuccessDTO, userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SuccessApiFp(this.configuration).successControllerCreate(body, userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Find success data for a specific user
     * @param {string} userId The ID of the user to find
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuccessApi
     */
    public async successControllerFindOne(userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserDto>> {
        return SuccessApiFp(this.configuration).successControllerFindOne(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get the leaderboard for a guild
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuccessApi
     */
    public async successControllerLeaderboard(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<LeaderboardEntryDto>>> {
        return SuccessApiFp(this.configuration).successControllerLeaderboard(options).then((request) => request(this.axios, this.basePath));
    }
}