/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { DiscordInstall } from "installer/types";
import { forPlatform } from "installer/utils";

import * as Darwin from "./darwin";
import * as Linux from "./linux";
import * as Windows from "./win32";

export interface PlatformCode {
    parseInstall(path: string, branch?: string): DiscordInstall | null;
    listInstalls(): DiscordInstall[];
    prepareForPatch(install: DiscordInstall): void;
}

export const Platform = forPlatform<PlatformCode>({
    win32: Windows,
    darwin: Darwin,
    linux: Linux
});
