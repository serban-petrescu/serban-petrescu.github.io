sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.ResponsiveDualContainer", {
        metadata: {
            aggregations: {
                first: {
                    type: "sap.ui.core.Control",
                    multiple: true
                },
                second: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="columns">
                    <div class="column is-half">
                    {
                        (oC.getFirst() || []).forEach(c => <ui5Control>{ c }</ui5Control>)
                    }
                    </div>
                    <div class="column is-half">
                    {
                        (oC.getSecond() || []).forEach(c => <ui5Control>{ c }</ui5Control>)
                    }
                    </div>
                </div>
            );
        }
    });

});
