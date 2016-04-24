declare module Normalizr {
    export class Schema {
        constructor(name: String, options: any)
        public getKey(): any
        public define(schema: any): void
        public getIdAttribute(): any
    }
    export function arrayOf(schema: any, options?: any);
    export function normalize(obj: Object, schema: any);
}

declare module 'normalizr' {
    export = Normalizr
}