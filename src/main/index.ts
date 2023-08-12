/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import "./ipc";

import { app } from "electron";

import { createMainWindow } from "./mainWindow";

// Fix DevTools context menus https://github.com/electron/electron/issues/38790
app.commandLine.appendSwitch("disable-features", "WidgetLayering");

app.whenReady().then(async () => {
    if (process.platform === "win32") app.setAppUserModelId("dev.vencord.installer");

    createMainWindow();
});

app.on("window-all-closed", () => {
    app.quit();
});
