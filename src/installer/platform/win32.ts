/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { existsSync, readdirSync } from "fs";
import { Branch, DiscordInstall } from "installer/types";
import { guessBranch, isDirectory, objectEntries } from "installer/utils";
import { join } from "path";

const Names = {
    stable: "Discord",
    ptb: "DiscordPTB",
    canary: "DiscordCanary",
    dev: "DiscordDevelopment"
};

export function parseInstall(path: string, branch?: Branch): DiscordInstall | null {
    const entries = readdirSync(path);

    const appDirs = entries.filter(e => e.startsWith("app-") && existsSync(join(path, e, "resources")));
    const latestApp = appDirs.sort().pop();

    if (!latestApp) return null;

    const resourcesPath = join(path, latestApp, "resources");
    return {
        branch: branch ?? guessBranch(path),
        basePath: path,
        resourcesPath,
        isFlatpak: false,
        isPatched: isDirectory(join(resourcesPath, "app.asar"))
    };
}

export function listInstalls(): DiscordInstall[] {
    const installs = [] as DiscordInstall[];

    const localAppData = process.env.LOCALAPPDATA;
    if (!localAppData) throw new Error("LOCALAPPDATA is not set");

    for (const [branch, dirname] of objectEntries(Names)) {
        const path = join(localAppData, dirname);
        try {
            const install = parseInstall(path, branch);
            if (install) installs.push(install);
        } catch {}
    }

    return installs;
}

export function prepareForPatch(install: DiscordInstall) {}
