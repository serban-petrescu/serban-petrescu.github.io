sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.MediaObjectIcon", {
        metadata: {
            properties: {
                src: {
                    type: "sap.ui.core.URI"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <a ui5ControlData={ oC } class="level-item" href={ oC.getHref() }>
                    <img class="image is-16x16" src={ oC.getSrc() } />
                </a>
            );
        }
    });

});
