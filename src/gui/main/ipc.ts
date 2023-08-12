/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { ipcMain } from "electron";
import { Platform } from "installer/platform";
import { IpcEvents } from "shared/ipcEvents";
import { logDebug } from "shared/log";

ipcMain.on(IpcEvents.LIST_INSTALLS, e => {
    const installs = Platform.listInstalls();
    logDebug("listInstalls():", installs);
    e.returnValue = installs;
});
