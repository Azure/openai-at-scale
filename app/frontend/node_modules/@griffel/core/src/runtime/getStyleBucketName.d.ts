import { StyleBucketName } from '../types';
/**
 * Gets the bucket depending on the pseudo.
 *
 * Input:
 *
 * ```
 * ":hover"
 * ":focus:hover"
 * ```
 *
 * Output:
 *
 * ```
 * "h"
 * "f"
 * ```
 *
 * @internal
 */
export declare function getStyleBucketName(selectors: string[], layer: string, media: string, support: string): StyleBucketName;
