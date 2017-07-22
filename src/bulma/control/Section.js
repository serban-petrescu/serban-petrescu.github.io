sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.Section", {
        metadata: {
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            },
            defaultAggregation: "content"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <section ui5ControlData={ oC } class="section" >
                {
                    (oC.getContent() || []).forEach(c => (
                        <ui5Control>{ c }</ui5Control>
                    ))
                }
                </section>
            );
        }
    });

});
