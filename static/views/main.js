/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

document.getElementById("app").innerHTML = Native.listInstalls()
    .map(i => `<p>${i.branch}: ${i.basePath}${i.isPatched ? " [PATCHED]" : ""}</p>`)
    .join("\n");
