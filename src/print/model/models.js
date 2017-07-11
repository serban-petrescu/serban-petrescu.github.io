sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/json/JSONModel",
    "jquery.sap.global",
    "./data"
], function (ResourceModel, JSONModel, jQuery, data) {
    "use strict";

    return {
        /**
         * Builds the main model.
         * @param	{ResourceBundle}	i18n	The resource bundle of the i18n model.
         * @returns {JSONModel}			The main model.
         */
        createMainModel: function (i18n) {
            return new JSONModel(data(i18n));
        }
    };

});
