sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device"
], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.FeedbackToast", {
        metadata: {
            properties: {
                intro: {
                    type: "string"
                },
                text: {
                    type: "string"
                }
            },
            events: {
                press: {}
            }
        },

        onAfterRendering: function () {
            this.$("link").on(Device.support.touch ? "tap" : "click", () => this.fireEvent("press", {}, true));
        },

        open: function(iTime) {
            this.$().fadeIn(500).delay(iTime || 2000).fadeOut(500);
        },

        close: function() {
            this.$().css("display", "none");
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="toast" style="display:none">
                    <div class="notification is-primary">
                        <span>{ oC.getIntro() + " " }</span>
                        <a id={ oC.getId() + "-link" } href="#">{ oC.getText() }</a>
                    </div>
                </div>
            );
        }
    });

});
