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
 * @interface DiscordIdDto
 */
export interface DiscordIdDto {

    /**
     * @type {string}
     * @memberof DiscordIdDto
     */
    type: string;

    /**
     * @type {number}
     * @memberof DiscordIdDto
     */
    amount?: number;

    /**
     * @type {number}
     * @memberof DiscordIdDto
     */
    tweetAmount?: number;

    /**
     * @type {number}
     * @memberof DiscordIdDto
     */
    maxMultiplier?: number;

    /**
     * @type {Array<string>}
     * @memberof DiscordIdDto
     */
    emojis?: Array<string>;

    /**
     * @type {boolean}
     * @memberof DiscordIdDto
     */
    image?: boolean;

    /**
     * @type {boolean}
     * @memberof DiscordIdDto
     */
    video?: boolean;

    /**
     * @type {Array<string>}
     * @memberof DiscordIdDto
     */
    defaultReactions?: Array<string>;

    /**
     * @type {boolean}
     * @memberof DiscordIdDto
     */
    reactionsEnabled?: boolean;

    /**
     * @type {number}
     * @memberof DiscordIdDto
     */
    reactionPoints?: number;
}
