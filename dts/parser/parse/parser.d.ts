import { DataReader } from "../../binary-serializer";
export declare type ParseIterator<T> = IterableIterator<any>;
export declare type ParseInterceptor = (value: any) => any;
export declare function parse<T>(reader: DataReader, readParser: ParseIterator<T>, interceptor?: ParseInterceptor): T;
