sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.ExperienceContainer", {
        metadata: {
            aggregations: {
                boxes: {
                    type: "portfolio.bulma.control.ExperienceBox",
                    multiple: true,
                    singularName: "box"
                }
            },
            defaultAggregation: "boxes"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="sapUiSmallMarginBottom">
                {
                    (oC.getBoxes() || []).forEach((b, i) => (
                        <div>
                            <div class={ {"sapUiSmallMarginTopBottom": i !== 0} }></div>
                            <ui5Control>{ b }</ui5Control>
                        </div>
                    ))
                }
                </div>
            );
        }
    });

});
