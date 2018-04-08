/// <reference types="long" />
import Long from "long";
import { Vector3, Quaternion } from "../../interfaces";
import { DataReader } from "./interfaces";
export declare class ArrayDataReader implements DataReader {
    private _buffer;
    private _view;
    private _byteOffset;
    private _stringDecoder;
    constructor(buffer: ArrayBuffer);
    readonly position: number;
    readByte(): number;
    readSByte(): number;
    readBytes(length: number): ArrayBuffer;
    viewBytes(length: number): ArrayBufferView;
    readAllBytes(): ArrayBuffer;
    viewAllBytes(): Uint8Array;
    readUInt16(): number;
    readInt16(): number;
    readUInt32(): number;
    readInt32(): number;
    readUInt64(): Long;
    readInt64(): Long;
    readSingle(): number;
    readDouble(): number;
    readChars(length: number): string;
    readKleiString(): string | null;
    readVector3(): Vector3;
    readQuaternion(): Quaternion;
    skipBytes(length: number): void;
    private _checkCanRead(length);
}
