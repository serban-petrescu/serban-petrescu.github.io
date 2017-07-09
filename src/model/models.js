sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/format/DateFormat",
    "jquery.sap.global",
    "./data"
], function (JSONModel, Device, ResourceModel, DateFormat, jQuery, data) {
    "use strict";

    /**
     * Calculate the age of a person based on the birthday.
     * @param	{Date}	oBirthday	The person's birthday.
     * @returns {int}	The age (in years).
     */
    var fnCalculateAge = function (oBirthday) {
        var iDiff = Date.now() - oBirthday.getTime();
        var oAgeDate = new Date(iDiff);
        return Math.abs(oAgeDate.getUTCFullYear() - 1970);
    };

    return {
        /**
         * Creates the i18n model. When using a component, this is done automatically.
         * @returns {ResourceModel} 	The i18n model.
         */
        createResourceModel: function () {
            return new ResourceModel({
                bundleUrl: jQuery.sap.getModulePath("portfolio") + "/i18n/i18n.properties"
            });
        },

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
            var oBirthday = new Date(1993, 8, 7),
                iAge = fnCalculateAge(oBirthday),
                oModel = new JSONModel(),
                oInternalFormat = DateFormat.getDateInstance({
                    pattern: "yyyyMMdd"
                }),
                oExternalFormat = DateFormat.getDateInstance({
                    style: "medium"
                }),
                sBase = jQuery.sap.getModulePath("portfolio"),
                fnReplacei18n = function (oObject) {
                    var sKey,
                        oResult;
                    if (typeof oObject === "string") {
                        if (oObject.indexOf("i18n>") === 0) {
                            return i18n.getText(oObject.substring(5));
                        }
                        if (oObject.indexOf("path>") === 0) {
                            return sBase + oObject.substring(5);
                        }
                        if (oObject.indexOf("date>") === 0) {
                            return oExternalFormat.format(oInternalFormat.parse(oObject.substring(5)));
                        }
                        return oObject;
                    }
                    if (oObject instanceof Array) {
                        oResult = [];
                        for (sKey = 0; sKey < oObject.length; ++sKey) {
                            oResult.push(fnReplacei18n(oObject[sKey]));
                        }
                        return oResult;
                    }
                    if (typeof oObject === "object") {
                        if (oObject.hasOwnProperty("_text")) {
                            return jQuery.sap.formatMessage(fnReplacei18n(oObject._text),
                                fnReplacei18n(oObject._params));
                        } else {
                            oResult = {};
                            for (sKey in oObject) {
                                oResult[sKey] = fnReplacei18n(oObject[sKey]);
                            }
                            return oResult;
                        }
                    }
                    return oObject;
                };

            var oDat = fnReplacei18n(data);
            oDat.age = i18n.getText("ageYears", [iAge]);
            oModel.setData(oDat);
            return oModel;
        }
    };

});
