/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

const { platform } = require("os");

alert("obviously this js file will be exploded but just to test node integration you are on " + platform());
