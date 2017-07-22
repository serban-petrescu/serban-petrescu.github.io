sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.SkillTable", {
        metadata: {
            properties: {
                skillHeader: {type: "string"},
                levelHeader: {type: "string"}
            },
            aggregations: {
                skills: {
                    type: "sap.ui.core.Item",
                    multiple: true
                }
            },
            defaultAggregation: "skills"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <table class="table is-striped" ui5ControlData={ oC }>
                    <thead>
                        <tr>
                            <th style="width: 50%">{ oC.getSkillHeader() }</th>
                            <th>{ oC.getLevelHeader() }</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        (oC.getSkills() || []).forEach(s => (
                            <tr>
                                <td>{ s.getKey() }</td>
                                <td>{ s.getText() }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            );
        }
    });

});
