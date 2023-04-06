export interface HashedClassNameParts {
    property: string;
    value: string;
    selectors: string[];
    media: string;
    layer: string;
    support: string;
}
export declare function hashClassName({ media, layer, property, selectors, support, value }: HashedClassNameParts): string;
