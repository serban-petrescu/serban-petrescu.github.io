sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.pure.control.Header", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                }
            },
            aggregations: {
                items: {
                    type: "portfolio.pure.control.MenuItem",
                    multiple: true
                }
            },
            defaultAggregation: "items"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div class="header" ui5ControlData={ oC }>
                    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                        <a class="pure-menu-heading" href="">{ oC.getTitle() }</a>
                        <ul class="pure-menu-list">
                        {
                            (oC.getItems() || []).forEach(item => (
                                <ui5Control>{ item }</ui5Control>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            );
        }
    });

});
