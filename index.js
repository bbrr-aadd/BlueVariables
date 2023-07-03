(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("bluevariables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#0362fc";
        variableStyle.colourSecondary = "#0362fc";
        variableStyle.colourTertiary = "#0362fc";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
