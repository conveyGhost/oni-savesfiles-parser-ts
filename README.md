# oni-save-parser

Parses and writes save data from Oxygen Not Included.  Supports NodeJS and (eventually) Web.

Currently under development

## Game Compatibility

This should work for all save files up to the Rancher Update (save file version 7.3).

## Library Compatibility

This project makes use of some ES6 constructs such as Symbols, and a few nodejs libraries.
The most intrusive external dependency is on node's builtin zlib module.  This should be shimmed on the web
using something like [browserify-zlib](https://www.npmjs.com/package/browserify-zlib).

A webpack build will be produced and included later on.

## Current Progress

Data can be loaded by ```parseOniSave(source: ArrayBuffer)```, and the data written out using ```writeOniSave(save: OniSave): ArrayBuffer```.
Brand new saves cannot be created, as the world data format is not understood.  This data is preserved as-is when a save is parsed then re-written.

The save file and all templated data objects are loaded.
This includes most of the interesting stuff, like duplicant stats, building attributes, and so on.
Some information is still not parsed, such as the general world map and some specific data for a few of
the more esoteric game objects.


## Still to do
- Typedefs for the json-format save data (```OniSave.toJSON()```).
- Handle the special-case manual-parse data used by a few of the game object types.
- Better error handling: Errors should be specific error classes that describe the state of the parser and
    provide more details on why and where the error happened.
- Webpack build.

## Example usage

```
const {
    parseOniSave,
    writeOniSave
} = require("oni-save-parser");

const fileData = readFileSync("./test-data/Rancher-Test.sav");

const saveData = parseOniSave(fileData.buffer);

const minions = saveData.body.gameState.gameObjects.get("Minion");
for(let minion of minions) {
    // Change every minion to 1/3 the size.
    minion["scale"]["x"] = 0.3;
    minion["scale"]["y"] = 0.3;
    minion["scale"]["z"] = 0.3;

    // Set all attribute levels to 100.
    const attrBehavior = minion["behaviors"].find(x => x["name"] === "Klei.AI.AttributeLevels");
    const levels = attrBehavior["parsedData"].saveLoadLevels;
    levels.forEach(x => x["level"] = 100);
}

const writeData = writeOniSave(saveData);
writeFileSync("./test-data/writeback.sav", new Uint8Array(writeData));
```


## Design

This library makes use of dependency injection.  Mostly to provide an easy way to swap out save file
components as new versions make breaking changes, but really because I wanted to test my IoC library.
Objects dealing with save data are scoped under the root OniSaveData for the load, allowing
easy access to things like the logger or type template deserializer wherever they may be needed.

## Future Plans

I intend to eventually make an in-browser save editor that works on the files locally.  Maybe.  If I get to it.