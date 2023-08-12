/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { contextBridge } from "electron";

import { Native } from "./Native";

contextBridge.exposeInMainWorld("Native", Native);
