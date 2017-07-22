sap.ui.define([
    "sap/ui/core/LayoutData"
], function(LayoutData) {

    return LayoutData.extend("portfolio.bulma.control.TileLayoutData", {
        metadata: {
            properties: {
                size: {type: "int", defaultValue: null},
                order: {type: "int", defaultValue: null}
            }
        }
    });

});
