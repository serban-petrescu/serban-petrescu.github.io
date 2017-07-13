sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.pure.control.Splash", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                subtitle: {
                    type: "string"
                },
                linkText: {
                    type: "string"
                },
                linkHref: {
                    type: "sap.ui.core.URI"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div class="splash-container" ui5ControlData={ oC }>
                    <div class="splash">
                        <h1 class="splash-head">{ oC.getTitle() }</h1>
                        <p class="splash-subhead">{ oC.getSubtitle() }</p>
                        <p>
                            <a href={ oC.getLinkHref() } class="pure-button pure-button-primary">{ oC.getLinkText() }</a>
                        </p>
                    </div>
                </div>
            );
        }
    });

});
