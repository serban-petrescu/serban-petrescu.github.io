sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.Title", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                },
                level: {
                    type: "int",
                    defaultValue: 4
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <h4 id={ oC.getName() || oC.getId() } class={ ["title", "is-" + oC.getLevel() ] } >{ oC.getText() }</h4>
            );
        }
    });

});
