sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "jquery.sap.global"
], function (Controller, Fragment, jQuery) {
    "use strict";

    return Controller.extend("portfolio.print.controller.Print", {
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
