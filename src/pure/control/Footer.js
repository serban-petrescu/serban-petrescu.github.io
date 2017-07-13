sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.pure.control.Footer", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                }
            },
            aggregations: {
                links: {
                    type: "portfolio.pure.control.FooterLink"
                }
            },
            defaultAggregation: "links"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div class="footer l-box is-center" ui5ControlData={ oC }>
                    { oC.getText() }
                    {
                        (oC.getLinks() || []).forEach((oL, i) => (
                            <span>
                                { i !== 0 ? ", " : " " }
                                <ui5Control>{ oL }</ui5Control>
                            </span>
                        ))
                    }.
                </div>
            );
        }
    });

});
