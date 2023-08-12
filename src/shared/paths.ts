/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { join } from "path";

export const STATIC_DIR = /* @__PURE__ */ join(__dirname, "..", "..", "static");
export const VIEW_DIR = /* @__PURE__ */ join(STATIC_DIR, "views");
export const ICON_PATH = /* @__PURE__ */ join(STATIC_DIR, "icon.png");
