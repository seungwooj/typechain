declare function head<T>(arr: T[]): T;

declare function hasIn(obj: object, key: string): boolean;

declare function isBoolean<T>(param: T): boolean;

declare function toString<T>(param: T): string;

declare function split(val: string, seperator: object, limit: number): string[];

declare function hasPath(obj: object, path: string | string[]): boolean;

declare function filter<T>(arr: T[], predicate: Function): T[];

declare function every<T>(arr: T[], predicate: Function): boolean;

declare function map<T>(arr: T[], predicate: Function): T[];
