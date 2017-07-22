sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.ProjectCard", {
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
                difficultyState: {
                    type: "sap.ui.core.ValueState",
                    defaultValue: "None"
                },
                difficultyText: {
                    type: "string"
                }
            },
            aggregations: {
                topics: {
                    type: "sap.ui.core.Item",
                    multiple: true
                },
                links: {
                    type: "portfolio.bulma.control.ProjectCardLink",
                    multiple: true
                }
            }
        },

        renderer: function (oRm, oC) {
            const hasVisibleChild = c => !!c.find(c => c.getVisible());

            const stateToTagClasses = s => ({
                "tag": true,
                "is-primary": s === "None",
                "is-success": s === "Success",
                "is-warning": s === "Warning",
                "is-danger": s === "Error",
                "very-small-margin": true
            });

            oRm.render(
                <div ui5ControlData={ oC } class="card">
                    <header class="card-header">
                        <p class="card-header-title">{ oC.getTitle() }</p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <em><small>{ oC.getPeriod() }</small></em>
                            <br />
                            <p class="sapUiTinyMarginTopBottom">
                                { oC.getDescription() }
                            </p>
                            <span class={ stateToTagClasses(oC.getDifficultyState()) }>{ oC.getDifficultyText() }</span>
                            {
                                (oC.getTopics() || []).forEach(t => (
                                    <span class="very-small-margin tag is-primary">
                                        { t.getText() }
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    {
                        oC.getLinks() && hasVisibleChild(oC.getLinks()) &&
                        <footer class="card-footer">
                        {
                            oC.getLinks().forEach(c => <ui5Control>{ c }</ui5Control>)
                        }
                        </footer>
                    }
                </div>
            );
        }
    });

});
