/**
 * For use in this package only.
 * Partial mirror of IFacepilePersona avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export interface IExampleFacepilePersona {
    imageUrl?: string;
    imageInitials?: string;
    initialsColor?: number;
    personaName?: string;
    onClick?: (ev: unknown, persona?: IExampleFacepilePersona) => void;
    data?: any;
}
/** @internal */
export declare const facepilePersonas: IExampleFacepilePersona[];
