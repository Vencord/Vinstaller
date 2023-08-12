/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { lstatSync } from "fs";
import { logDebug } from "shared/log";

import { Branches } from "./types";

export function guessBranch(name: string) {
    name = name.toLowerCase();
    return Branches.find(b => name.endsWith(b)) ?? "stable";
}

export function isDirectory(path: string) {
    try {
        const stats = lstatSync(path);
        const isDir = stats.isDirectory();
        logDebug("Checking if", path, "is a directory:", isDir);
        return isDir;
    } catch (e) {
        logDebug("Failed to check if", path, "is a directory:", e);
        return false;
    }
}

export function objectEntries<T extends object>(obj: T) {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
}

export function forPlatform<T>(obj: Record<"win32" | "darwin" | "linux", T>): T {
    return obj[process.platform];
}
