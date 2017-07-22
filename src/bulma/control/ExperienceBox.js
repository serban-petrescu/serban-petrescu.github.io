sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.ExperienceBox", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                period: {
                    type: "string"
                },
                description: {
                    type: "string"
                },
                icon: {
                    type: "string"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="box">
                    <article class="media">
                        <div class="media-left">
                            <span class="icon is-medium experience-icon">
                                <i class={["fa", "fa-" + oC.getIcon()]}></i>
                            </span>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{ oC.getTitle() }</strong>
                                    <br />
                                    <small>{ oC.getPeriod() }</small>
                                    <br />
                                    { oC.getDescription() }
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            );
        }
    });

});
