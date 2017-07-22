sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device"
], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ModalFeedbackForm", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                submitText: {
                    type: "string"
                },
                ratingLabel: {
                    type: "string"
                },
                areaLabel: {
                    type: "string"
                },
                ratingValue: {
                    type: "int",
                    defaultValue: 0
                },
                areaValue: {
                    type: "string",
                    defaultValue: ""
                },
                open: {
                    type: "boolean",
                    defaultValue: false
                }
            },
            events: {
                submit: {}
            }
        },

        onAfterRendering: function() {
            const sPress = Device.support.touch ? "tap" : "click";
            this.$().find(".delete").on(sPress, () => this.close());
            this.$().find(".rating-star").on(sPress, e => {
                this.setRatingValue(parseInt(e.currentTarget.getAttribute("data-index"), 10));
                return false;
            });
            this.$().find("textarea").change(e => this.setProperty("areaValue", e.target.value, true));
            this.$("submit").on(sPress, () => this.fireEvent("submit", {}, true))
        },

        open: function() {
            this.setOpen(true);
        },

        close: function() {
            this.setOpen(false);
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class={ { "modal": true, "is-active": oC.getOpen() } }>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">{ oC.getTitle() }</p>
                            <button class="delete"></button>
                        </header>
                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label">{ oC.getRatingLabel() }</label>
                                <div class="control">
                                {
                                    [1, 2, 3, 4, 5].forEach(iIndex => (
                                        <a href="#" class="is-primary rating-star" data-index={ iIndex }>
                                        <span class="icon">
                                            <i class={ ["fa", "fa-" + (iIndex > oC.getRatingValue() ? "star-o" : "star") ] }>
                                            </i>
                                        </span>
                                        </a>
                                    ))
                                }
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">{ oC.getAreaLabel() }</label>
                                <div class="control">
                                    <textarea class="textarea feedback-area" rows="3">{ oC.getAreaValue() }</textarea>
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot" style="justify-content:flex-end">
                            <a class="button is-primary" id={ oC.getId() + "-submit" }
                                {...(oC.getRatingValue() === 0 ? {disabled: "disabled"} : {})}>
                                { oC.getSubmitText() }
                            </a>
                        </footer>
                    </div>
                </div>
            );
        }
    });

});
