/// <reference types="long" />
import { Vector3, Quaternion } from "../interfaces";
import { DataWriter } from "./interfaces";
export declare class ArrayDataWriter implements DataWriter {
    private _byteOffset;
    private _buffer;
    private _view;
    private _textEncoder;
    constructor();
    readonly position: number;
    writeByte(value: number): void;
    writeSByte(value: number): void;
    writeBytes(value: ArrayBufferView): void;
    writeUInt16(value: number): void;
    writeInt16(value: number): void;
    writeUInt32(value: number): void;
    writeInt32(value: number): void;
    writeUInt64(value: Long): void;
    writeInt64(value: Long): void;
    writeSingle(value: number): void;
    writeDouble(value: number): void;
    writeChars(value: string): void;
    writeKleiString(value: string | null): void;
    writeVector3(value: Vector3): void;
    writeQuaternion(value: Quaternion): void;
    getBytes(): ArrayBuffer;
    /**
     * Ensure there is enough room in the buffer to write
     * the specified amount of bytes.
     * @param length The number of bytes intending to be written.
     */
    private _ensureCanWrite(length);
    private _increaseBuffer(size);
}
