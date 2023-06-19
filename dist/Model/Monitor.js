"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
class Monitor {
    constructor(rover) {
        this.rover = rover;
    }
    operation(...commands) {
        commands.forEach(command => command());
    }
}
exports.Monitor = Monitor;
