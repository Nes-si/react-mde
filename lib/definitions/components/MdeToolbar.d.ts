/// <reference types="react" />
import * as React from "react";
import { Command } from "../types";
export interface MdeToolbarProps {
    commands: Command[][];
    onCommand: (command: Command) => void;
    readOnly: boolean;
}
export declare const MdeToolbar: React.SFC<MdeToolbarProps>;
