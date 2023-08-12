/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { BuildContext, BuildOptions, context } from "esbuild";

const isDev = process.argv.includes("--dev");

const CommonOpts: BuildOptions = {
    minify: !isDev,
    bundle: true,
    sourcemap: "linked",
    logLevel: "info"
};

const NodeCommonOpts: BuildOptions = {
    ...CommonOpts,
    format: "cjs",
    platform: "node",
    external: ["electron"],
    target: ["esnext"],
    define: {
        IS_DEV: JSON.stringify(isDev)
    }
};

const contexts = [] as BuildContext[];
async function createContext(options: BuildOptions) {
    contexts.push(await context(options));
}

await Promise.all([
    createContext({
        ...NodeCommonOpts,
        entryPoints: ["src/index.ts"],
        outfile: "dist/js/index.js",
        footer: { js: "//# sourceURL=VencordInstallerEntry" }
    }),
    createContext({
        ...NodeCommonOpts,
        entryPoints: ["src/gui/main/index.ts"],
        outfile: "dist/js/electronMain.js",
        footer: { js: "//# sourceURL=VencordInstallerMain" }
    }),
    createContext({
        ...NodeCommonOpts,
        entryPoints: ["src/gui/preload/index.ts"],
        outfile: "dist/js/electronPreload.js",
        footer: { js: "//# sourceURL=VencordInstallerPreload" }
    }),
    createContext({
        ...NodeCommonOpts,
        entryPoints: ["src/cli/index.ts"],
        outfile: "dist/js/cli.js",
        footer: { js: "//# sourceURL=VencordInstallerCli" }
    })
]);

const watch = process.argv.includes("--watch");

if (watch) {
    await Promise.all(contexts.map(ctx => ctx.watch()));
} else {
    await Promise.all(
        contexts.map(async ctx => {
            await ctx.rebuild();
            await ctx.dispose();
        })
    );
}
