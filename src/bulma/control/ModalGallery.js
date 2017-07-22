sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device"
], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ModalGallery", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                previousButtonText: {
                    type: "string"
                },
                nextButtonText: {
                    type: "string"
                },
                open: {
                    type: "boolean",
                    defaultValue: false
                },
                activeItem: {
                    type: "int",
                    defaultValue: 0
                }
            },
            aggregations: {
                items: {
                    type: "portfolio.bulma.control.GalleryItem",
                    multiple: true
                }
            },
            defaultAggregation: "items"
        },

        onAfterRendering: function() {
            const sPress = Device.support.touch ? "tap" : "click";
            this.$().find(".delete").on(sPress, () => this.close());
            this.$().find(".pagination-previous, .gallery-item-left")
                .on(sPress, () => this.setActiveItem(this.getActiveItem() - 1));
            this.$().find(".pagination-next, .gallery-item-right")
                .on(sPress, () => this.setActiveItem(this.getActiveItem() + 1));
            this.$().find(".pagination-link").on(sPress, oEvent => {
                this.setActiveItem(parseInt(oEvent.target.getAttribute("data-index"), 10));
            });
            this.$().find(".gallery-item").on("swipeleft", () => this.setActiveItem(this.getActiveItem() + 1));
            this.$().find(".gallery-item").on("swiperight", () => this.setActiveItem(this.getActiveItem() - 1));
        },

        setActiveItem: function (iItem) {
            if (iItem < 0) {
                this.setProperty("activeItem", 0);
            } else if (this.getItems() && this.getItems().length <= iItem) {
                this.setProperty("activeItem", this.getItems().length - 1);
            } else {
                this.setProperty("activeItem", iItem);
            }
        },

        open: function() {
            this.setActiveItem(0);
            this.setOpen(true);
        },

        close: function() {
            this.setOpen(false);
        },

        renderer: function (oRm, oC) {
            const fnPrevDisabled = () => (oC.getActiveItem() === 0 ? {disabled: "disabled"} : {});
            const fnNextDisabled = () => (oC.getActiveItem() === oC.getItems().length - 1 ? {disabled:"disabled"} : {});
            const oActiveItem = oC.getItems() ? oC.getItems()[oC.getActiveItem()] : undefined;

            oRm.render(
                <div ui5ControlData={ oC } class={ { "modal": true, "is-active": oC.getOpen() } }>
                    <div class="modal-background"></div>
                    <div class="modal-card gallery-card">
                        <header class="modal-card-head is-hidden-mobile">
                            <p class="modal-card-title">{ oC.getTitle() }</p>
                            <button class="delete"></button>
                        </header>
                        {
                            oActiveItem &&
                            <section class="modal-card-body gallery-item" style={{
                                "background-image": "url(" + oActiveItem.getSrc() + ")"
                            }}>
                                <button class="delete is-hidden-tablet gallery-item-close"></button>
                            </section>
                        }
                        {
                            oActiveItem &&
                            <div class="notification gallery-item-description is-primary">
                                <a class="is-primary is-hidden-tablet gallery-item-left"
                                    style={{display: oC.getActiveItem() === 0 ? "none" : "intial"}}>
                                    <span class="icon"><i class="fa fa-arrow-circle-left"></i></span>
                                </a>
                                <div class="gallery-item-text">{ oActiveItem.getText() }</div>
                                <a class="is-primary is-hidden-tablet gallery-item-right"
                                    style={{display: oC.getActiveItem() === oC.getItems().length - 1 ? "none" : "intial"}}>
                                    <span class="icon"><i class="fa fa-arrow-circle-right"></i></span>
                                </a>
                            </div>
                        }
                        {
                            oC.getItems() && oC.getItems().length > 1 &&
                            <footer class="modal-card-foot is-hidden-touch">
                                <nav class="pagination is-centered is-fullwidth">
                                    <a class="pagination-previous" {... fnPrevDisabled()}>
                                        { oC.getPreviousButtonText() }
                                    </a>
                                    <a class="pagination-next" {... fnNextDisabled()}>
                                        { oC.getNextButtonText() }
                                    </a>
                                    <ul class="pagination-list">
                                    {
                                        oC.getItems().forEach((oItem, iIndex) => (
                                            <li>
                                                <a class={ {
                                                    "pagination-link": true,
                                                    "is-current": iIndex === oC.getActiveItem()
                                                } } data-index={ iIndex }>
                                                    { iIndex + 1 }
                                                </a>
                                            </li>
                                        ))
                                    }
                                    </ul>
                                </nav>
                            </footer>
                        }
                    </div>
                </div>
            );
        }
    });

});
