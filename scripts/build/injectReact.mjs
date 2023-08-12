/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

export const VencordFragment = /* #__PURE__*/ Symbol.for("react.fragment");
export let VencordCreateElement = (...args) =>
    (VencordCreateElement = Vencord.Webpack.Common.React.createElement)(...args);
