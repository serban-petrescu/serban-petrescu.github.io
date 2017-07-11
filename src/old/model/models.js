sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "jquery.sap.global",
    "./data"
], function (JSONModel, Device, jQuery, data) {
    "use strict";

    return {
        /**
         * Builds the device json model.
         * @returns {JSONModel}	The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

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
