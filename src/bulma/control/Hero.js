sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.Hero", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                subtitle: {
                    type: "string"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <section ui5ControlData={ oC } class="hero is-fullheight is-primary">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <h1 class="title">
                                { oC.getTitle() }
                            </h1>
                            <h2 class="subtitle">
                                { oC.getSubtitle() }
                            </h2>
                        </div>
                    </div>
                </section>
            );
        }
    });

});
