sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device",
    "jquery.sap.global"
], function (Control, Device, jQuery) {

    return Control.extend("portfolio.bulma.control.NavBar", {
        metadata: {
            properties: {
                brandText: {
                    type: "string"
                },
                active: {
                    type: "boolean",
                    defaultValue: false
                }
            },
            aggregations: {
                startItems: {type: "sap.ui.core.Control", multiple: true},
                endItems: {type: "sap.ui.core.Control", multiple: true}
            }
        },

        onAfterRendering: function() {
            this.$("burger").on(Device.support.touch ? "tap" : "click", () => this.setActive(!this.getActive()));
            this.$("menu").find("a").on(Device.support.touch ? "tap" : "click", () => {
                jQuery.sap.delayedCall(100, null, () => this.setActive(false));
                return true;
            });
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <nav class="navbar fixed" ui5ControlData={ oC }>
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <span>{ oC.getBrandText().toUpperCase() }</span>
                        </a>

                        <div class={{ "navbar-burger": true, "burger": true, "is-active": oC.getActive() }}
                            id={ oC.getId() + "-burger" }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id={ oC.getId() + "-menu" } class={ {"navbar-menu": true, "is-active": oC.getActive() }}>
                        <div class="navbar-start">
                        {
                            (oC.getStartItems() || []).forEach(i => (
                                <ui5Control>{ i }</ui5Control>
                            ))
                        }
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="field is-grouped">
                                {
                                    (oC.getEndItems() || []).forEach(i => (
                                        <ui5Control>{ i }</ui5Control>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            );
        }
    });

});
