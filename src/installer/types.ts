/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

export const Branches = ["stable", "canary", "ptb", "dev"] as const;
export type Branch = (typeof Branches)[number];

export interface DiscordInstall {
    branch: Branch;
    basePath: string;
    resourcesPath: string;
    isPatched: boolean;
    isFlatpak: boolean;
}
