sap.ui.define([
    "sap/ui/core/Element"
], function (Element) {

    return Element.extend("portfolio.bulma.control.GalleryItem", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                src: {
                    type: "sap.ui.core.URI"
                }
            }
        }
    });

});
