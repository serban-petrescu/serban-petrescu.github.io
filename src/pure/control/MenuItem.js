sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.pure.control.MenuItem", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                }
            },
            events: {
                press: {}
            }
        },

        onAfterRendering: function() {
            this.$("a").on("click", oEvent => {
                this.firePress();
                oEvent.preventDefault();
            });
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <li class="pure-menu-item" ui5ControlData={ oC }>
                    <a href="#" class="pure-menu-link" id={ oC.getId() + "-a" }>{ oC.getText() }</a>
                </li>
            );
        }
    });

});
