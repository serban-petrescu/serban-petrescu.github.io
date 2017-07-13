sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.pure.control.FooterLink", {
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
                <a href={ oC.getHref() } class="pure-link" ui5ControlData={ oC } >{ oC.getText() }</a>
            );
        }
    });

});
