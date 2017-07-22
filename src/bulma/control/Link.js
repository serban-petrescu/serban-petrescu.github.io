sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.Link", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <a ui5ControlData={ oC } href={ oC.getHref() } >{ oC.getText() }</a>
            );
        }
    });

});
