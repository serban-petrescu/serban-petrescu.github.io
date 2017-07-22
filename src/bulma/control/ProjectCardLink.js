sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device"
], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ProjectCardLink", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI",
                    defaultValue: ""
                }
            },
            events: {
                press: {}
            }
        },

        onAfterRendering: function() {
            this.$().on(Device.support.touch ? "tap" : "click", () => this.fireEvent("press", {}, true));
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <a ui5ControlData={ oC } href={ oC.getHref() } class="card-footer-item" target="_blank">{ oC.getText() }</a>
            );
        }
    });

});
