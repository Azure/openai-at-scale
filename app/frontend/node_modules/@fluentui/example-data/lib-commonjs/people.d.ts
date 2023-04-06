/**
 * For use in this package only.
 * Partial mirror of IExtendedPersonaProps avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export interface IExampleExtendedPersonaProps {
    imageUrl?: string;
    imageInitials?: string;
    text?: string;
    secondaryText?: string;
    tertiaryText?: string;
    optionalText?: string;
    presence?: number;
    isValid: boolean;
    canExpand?: boolean;
}
/** Sample people and groups @internal */
export declare const people: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];
/** @internal */
export declare const mru: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];
/** @internal */
export declare const groupOne: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];
/** @internal */
export declare const groupTwo: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];
