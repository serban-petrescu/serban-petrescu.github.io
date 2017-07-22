sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.Footer", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                icon: {
                    type: "string",
                    defaultValue: "github"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                links: {
                    type: "portfolio.bulma.control.Link"
                }
            },
            defaultAggregation: "links"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <footer ui5ControlData={ oC } class="footer">
                    <div class="container">
                        <div class="content has-text-centered">
                        <p>
                            { oC.getText() }
                            {
                                (oC.getLinks() || []).forEach((oL, i) => (
                                    <span>
                                        { i !== 0 ? ", " : " " }
                                        <ui5Control>{ oL }</ui5Control>
                                    </span>
                                ))
                            }.
                        </p>
                        <p>
                            <a class="icon" href={ oC.getHref() }>
                                <i class={ ["fa", "fa-" + oC.getIcon()] }></i>
                            </a>
                        </p>
                        </div>
                    </div>
                </footer>
            );
        }
    });

});
