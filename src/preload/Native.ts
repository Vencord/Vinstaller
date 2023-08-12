/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { IpcEvents } from "shared/ipcEvents";

import { invoke } from "./typedIpc";

export const Native = {
    listDirs: () => invoke<string[]>(IpcEvents.LIST_DIRS)
};
