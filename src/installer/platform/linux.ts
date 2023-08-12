/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { Branch, DiscordInstall } from "installer/types";

export function parseInstall(path: string, branch?: Branch): DiscordInstall | null {
    return null;
}

export function listInstalls(): DiscordInstall[] {
    return [];
}

export function prepareForPatch(install: DiscordInstall) {}
