sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.TileContainer", {
        metadata: {
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            },
            defaultAggregation: "content"
        },

        getContentWithLayout: function() {
            const fnIfNull = (v, d) => !v ? d : v;
            const fnByOrder = (c1, c2) => c1.order - c2.order;
            const fnToObject = (oC, iIndex) => {
                const oData = oC.getLayoutData();
                if (oData) {
                    return {
                        control: oC,
                        order: fnIfNull(oData.getOrder(), iIndex),
                        size: fnIfNull(oData.getSize(), 4)
                    };
                } else {
                    return {
                        control: oC,
                        order: iIndex,
                        size: 4
                    };
                }
            };
            return (this.getContent() || []).map(fnToObject).sort(fnByOrder);
        },

        getContentAsRows: function() {
            const aResult = [];
            const oObjects = this.getContentWithLayout();
            const mVisited = Object.create(null);
            const fnBuildRow = i => {
                let iSum = oObjects[i].size;
                const aRow = [oObjects[i]];
                mVisited[i] = true;
                for (let j = i + 1; j < oObjects.length && iSum < 12; ++j) {
                    if (iSum + oObjects[j].size <= 12 && !mVisited[j]) {
                        iSum += oObjects[j].size;
                        aRow.push(oObjects[j]);
                        mVisited[j] = true;
                    }
                }
                if (iSum < 12) {
                    let iRest = 12 - iSum;
                    const iOldSum = iSum;
                    for (let j = 0; j < aRow.length; ++j) {
                        let iInc = Math.floor(iRest * aRow[j].size / iOldSum);
                        iSum += iInc;
                        aRow[j].size += iInc;
                    }
                }
                if (iSum < 12) {
                    aRow[0].size += 12 - iSum;
                }
                return aRow;
            };
            for (let i = 0; i < oObjects.length; ++i) {
                if (!mVisited[i]) {
                    aResult.push(fnBuildRow(i));
                }
            }
            return aResult;
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="tile is-ancestor is-vertical">
                {
                    oC.getContentAsRows().forEach(aCells => (
                        <div class="tile is-12">
                        {
                            aCells.forEach(oCell => (
                                <div class={ ["tile", "padding", "is-" + oCell.size, "is-child"] }>
                                    <ui5Control>{ oCell.control }</ui5Control>
                                </div>
                            ))
                        }
                        </div>
                    ))
                }
                </div>
            );
        }
    });

});
