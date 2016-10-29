export declare class TypeaheadMatch {
    readonly item: any;
    readonly value: string;
    private header;
    constructor(item: any, value?: string, header?: boolean);
    isHeader(): boolean;
    toString(): string;
}
