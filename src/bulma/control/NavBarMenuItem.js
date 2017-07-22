sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.NavBarMenuItem", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                items: {
                    type: "portfolio.bulma.control.NavBarMenuItem",
                    multiple: true
                }
            },
            defaultAggregation: "items"
        },

        renderer: function (oRm, oC) {
            if (oC.getItems() && oC.getItems().length) {
                oRm.render(
                    <div ui5ControlData={ oC } class="navbar-item has-dropdown is-hoverable" >
                        <a class="navbar-link" href={ oC.getHref() }>{ oC.getText() }</a>
                        <div class="navbar-dropdown">
                        {
                            oC.getItems().forEach(item => (
                                <ui5Control>{ item }</ui5Control>
                            ))
                        }
                        </div>
                    </div>
                );
            } else {
                oRm.render(
                    <a ui5ControlData={ oC } class="navbar-item" href={ oC.getHref() }>{ oC.getText() }</a>
                );
            }
        }
    });

});
