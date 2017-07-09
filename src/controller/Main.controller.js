sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jquery.sap.global"
], function (Controller, jQuery) {
    "use strict";

    return Controller.extend("portfolio.controller.Main", {

        /** Lifecycle initialization hook. */
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            this.byId("dlgGallery").addStyleClass(this.getOwnerComponent().getContentDensityClass());
            this.byId("acsDownloads").addStyleClass(this.getOwnerComponent().getContentDensityClass());

            jQuery.sap.delayedCall(1500, null, function () {
                jQuery("#overlay").fadeOut(1000);
            });
        },

        /**
         * Event handler for the press event of the social icons.
         * Opens the corresponding link.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        onIconPress: function (oEvent) {
            window.open(oEvent.getSource().getBindingContext().getProperty("href"), "_blank");
        },

        /**
         * Event handler for the press event of the download button of the main view.
         * Downloads the CV.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        onDownloadPress: function (oEvent) {
            var oModel = this.getView().getModel();
            if (oModel.getProperty("/downloads/1") !== undefined) {
                this.byId("acsDownloads").openBy(oEvent.getSource());
            } else {
                window.open(oModel.getProperty("/downloads/0/url"), "_blank");
            }
        },

        /**
         * Event handler for the press event of the action buttons from the download action sheet.
         * Downloads the CV.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        onDownloadActionPress: function (oEvent) {
            window.open(oEvent.getSource().getBindingContext().getProperty("url"), "_blank");
        },

        /**
         * Event handler for the press event of the email links.
         * Triggers an email action.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        sendEmail: function (oEvent) {
            sap.m.URLHelper.triggerEmail(oEvent.getSource().getText());
        },

        /**
         * Event handler for the press event of the phone links.
         * Triggers a phone call action.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        callPhone: function (oEvent) {
            sap.m.URLHelper.triggerTel(oEvent.getSource().getText());
        },

        /**
         * Event handler for the press event of the photo gallery links.
         * Opens the photo gallery dialog.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        openGallery: function (oEvent) {
            var sPath = oEvent.getSource().getBindingContext().getPath(),
                oDialog = this.byId("dlgGallery"),
                oCarousel = this.byId("crsGallery"),
                aPages = oCarousel.getPages();

            oDialog.bindElement(sPath);
            if (aPages && aPages.length) {
                oCarousel.setActivePage(aPages[0]);
            }

            oDialog.open();
        },

        /** Event handler for the press event of the close button (gallery dialog). Closes the dialog. */
        onGalleryClose: function () {
            this.byId("dlgGallery").close();
        },

        /**
         * Formats the gallery title string.
         * @param	{string}	sText	The text with placeholders.
         * @param	{string}	sName	The name of the project.
         * @returns {string}	The formatted string.
         */
        formatGalleryTitle: function (sText, sName) {
            return jQuery.sap.formatMessage(sText, [sName]);
        },

        /**
         * Event handler for the link button press event. Opens a project link.
         * @param	{Event}	oEvent	The event object.
         * @returns {void}
         */
        openLink: function (oEvent) {
            window.open(oEvent.getSource().getBindingContext().getProperty("link"), "_blank");
        },

        /** Event handler for the press event of the print button. Opens the print page. */
        onPrintPress: function () {
            window.open("print.html", "_blank");
        }

    });

});
