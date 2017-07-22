sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.NavBarButton", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                tooltip: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                },
                icon: {
                    type: "string"
                },
                target: {
                    type: "string",
                    defaultValue: "_blank"
                },
                primary: {
                    type: "boolean",
                    defaultValue: false
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <p class="control" ui5ControlData={ oC }>
                    <a class={ {button: true, "is-primary": oC.getPrimary(), "is-outlined": true } }
                        title={ oC.getTooltip() } href={ oC.getHref() } target={ oC.getTarget() }>
                        <span class="icon">
                            <i class={ ["fa", "fa-" + oC.getIcon()] }></i>
                        </span>
                        {
                            oC.getText() && <span>{ oC.getText() }</span>
                        }
                    </a>
                </p>
            );
        }
    });

});
