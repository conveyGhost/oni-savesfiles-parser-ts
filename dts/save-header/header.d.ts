import { JsonObjectSerializable } from "../interfaces";
import { DataReader } from "../data-reader";
import { OniSaveHeader } from "./services";
export declare class OniSaveHeaderImpl implements OniSaveHeader, JsonObjectSerializable {
    private _buildVersion;
    private _headerVersion;
    private _isCompressed;
    private _gameData;
    readonly buildVersion: number;
    readonly headerVersion: number;
    readonly isCompressed: boolean;
    readonly gameData: object;
    parse(reader: DataReader): void;
    toJSON(): {
        buildVersion: number;
        headerVersion: number;
        isCompressed: boolean;
        gameData: object;
    };
}
