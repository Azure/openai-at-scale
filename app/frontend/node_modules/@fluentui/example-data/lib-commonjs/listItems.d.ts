/** @internal */
export interface IExampleItem {
    thumbnail: string;
    key: string;
    name: string;
    description: string;
    color: string;
    shape: string;
    location: string;
    width: number;
    height: number;
}
/** @internal */
export declare function createListItems(count: number, startIndex?: number): IExampleItem[];
/**
 * For use in this package only.
 * Partial mirror of IGroup from DetailsList avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export interface IExampleGroup {
    count: number;
    key: string;
    name: string;
    startIndex: number;
    level?: number;
    isCollapsed?: boolean;
    children?: IExampleGroup[];
}
/** @internal */
export declare function createGroups(groupCount: number, groupDepth: number, startIndex: number, itemsPerGroup: number, level?: number, key?: string, isCollapsed?: boolean): IExampleGroup[];
/** @internal */
export declare function isGroupable(key: string): boolean;
