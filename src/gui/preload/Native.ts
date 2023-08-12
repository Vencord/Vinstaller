/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import type { DiscordInstall } from "installer/types";
import { IpcEvents } from "shared/ipcEvents";

import { sendSync } from "./typedIpc";

export const Native = {
    listInstalls: () => sendSync<DiscordInstall[]>(IpcEvents.LIST_INSTALLS)
};
