sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.MediaObject", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                src: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                icons: {
                    type: "portfolio.bulma.control.MediaObjectIcon",
                    multiple:true
                }
            },
            defaultAggregation: "icons"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <article ui5ControlData={ oC } class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src={ oC.getSrc() } />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                        {
                            (oC.getText() || "").split("\n").forEach(l => <p>{ l }</p> )
                        }
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                            {
                                (oC.getIcons() || []).forEach(i => (
                                    <ui5Control>{ i }</ui5Control>
                                ))
                            }
                            </div>
                        </nav>
                    </div>
                </article>
            );
        }
    });

});
