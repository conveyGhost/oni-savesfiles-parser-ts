"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reportProgress(message) {
    return {
        type: "progress",
        isMeta: true,
        message
    };
}
exports.reportProgress = reportProgress;
function progressReporter(onProgress) {
    return (instruction) => {
        if (instruction && instruction.type === "progress") {
            onProgress(instruction.message);
        }
        return instruction;
    };
}
exports.progressReporter = progressReporter;
//# sourceMappingURL=index.js.map