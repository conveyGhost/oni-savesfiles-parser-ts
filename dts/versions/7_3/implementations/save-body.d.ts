import { DataReader, DataWriter } from "../../../binary-serializer";
import { Logger } from "../../../logging";
import { SaveBodyInstance, SaveGameHeaderInstance, GameSaveRootInstance, GameSettingsInstance, GameObjectManager, GameSaveDataInstance } from "../services";
import { GameSaveRoot, GameSettings, GameObjectPrefabs, GameSaveData, SaveBody } from "../interfaces";
export declare class SaveBodyInstanceImpl implements SaveBodyInstance {
    private _header;
    private _saveRoot;
    private _gameSettings;
    private _gameObjectManager;
    private _gameData;
    private _logger;
    static readonly SAVE_HEADER: string;
    static readonly CURRENT_VERSION_MAJOR: number;
    static readonly CURRENT_VERSION_MINOR: number;
    private _versionMinor;
    constructor(_header: SaveGameHeaderInstance, _saveRoot: GameSaveRootInstance, _gameSettings: GameSettingsInstance, _gameObjectManager: GameObjectManager, _gameData: GameSaveDataInstance, _logger?: Logger | undefined);
    readonly saveRoot: GameSaveRoot;
    readonly gameSettings: GameSettings;
    readonly versionMajor: number;
    readonly versionMinor: number;
    readonly gameObjects: GameObjectPrefabs;
    readonly gameData: GameSaveData;
    parse(reader: DataReader): void;
    write(writer: DataWriter): void;
    private _parseState(reader);
    private _writeState(writer);
    fromJSON(value: SaveBody): void;
    toJSON(): SaveBody;
}