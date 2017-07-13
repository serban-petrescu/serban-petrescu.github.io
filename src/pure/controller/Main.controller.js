sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jquery.sap.global"
], function (Controller, jQuery) {
    "use strict";

    return Controller.extend("portfolio.pure.controller.Main", {

        /** Lifecycle initialization hook. */
        onInit: function () {
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
         * Event handler for the press event of the action buttons from the download action sheet.
         * Downloads the CV..
         * @returns {void}
         */
        onDownloadActionPress: function () {
            const url = this.getView().getModel().getProperty("/downloads/0/url");
            window.open(url, "_blank");
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
            window.open(jQuery.sap.getModulePath("portfolio.print") + "/index.html", "_blank");
        }

    });

});
