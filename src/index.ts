/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { spawnSync } from "child_process";
import { join } from "path";

// TODO
const isCli = false;

console.log(process.argv);
if (isCli) {
    // TODO figure out if this works correctly
    spawnSync(process.argv[0], [join(__dirname, "cli.js"), ...process.argv.slice(2)], {
        env: {
            ...process.env,
            ELECTRON_RUN_AS_NODE: "1"
        },
        stdio: "inherit"
    });
    process.exit(0);
} else {
    require(join(__dirname, "electronMain.js"));
}
