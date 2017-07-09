sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "portfolio/model/models",
    "jquery.sap.global"
], function (Controller, Fragment, models, jQuery) {
    "use strict";

    return Controller.extend("portfolio.controller.Print", {

        /** Lifecycle initialization hook. */
        onInit: function () {
            var oView = this.getView(),
                i18n = models.createResourceModel();

            oView.setModel(i18n, "i18n");
            oView.setModel(models.createMainModel(i18n.getResourceBundle()));

        },

        /** Lifecycle post-rendering hook. */
        onAfterRendering: function () {
            this.byId("dlgPrint").open();
        },

        formatConcepts: function (aTechnologies) {
            var sResult,
                i;
            if (aTechnologies && aTechnologies[0]) {
                sResult = aTechnologies[0].name;
                for (i = 1; aTechnologies[i]; ++i) {
                    sResult += ", " + aTechnologies[i].name;
                }
                return sResult;
            } else {
                return "";
            }
        },

        onAfterDialogOpen: function () {
            jQuery(this.byId("dlgPrint").getDomRef()).css("display", "");
            window.print();
        },

        onRePrint: function () {
            window.print();
        },

        onClose: function () {
            window.close();
        }
    });

});
