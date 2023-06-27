(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("bluevariables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#3e59b5";
        variableStyle.colourSecondary = "#2142b4";
        variableStyle.colourTertiary = "#2142b4";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
