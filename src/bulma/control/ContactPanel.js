sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("portfolio.bulma.control.ContactPanel", {
        metadata: {
            properties: {
                address: {
                    type: "string"
                },
                addressLabel: {
                    type: "string"
                },
                email: {
                    type: "string"
                },
                emailLabel: {
                    type: "string"
                },
                phone: {
                    type: "string"
                },
                phoneLabel: {
                    type: "string"
                },
                accountsLabel: {
                    type: "string"
                },
            },
            aggregations: {
                accounts: {
                    type: "portfolio.bulma.control.Link",
                    multiple: true
                }
            },
            defaultAggregation: "accounts"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="container is-fluid" class="contact-container">
                    <div class="contact-row">
                        <div class="contact-cel">{ oC.getAddressLabel() }:</div>
                        <div class="contact-cell-dummy"></div>
                        <div class="contact-cel">{ oC.getAddress() }</div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-cel">{ oC.getEmailLabel() }:</div>
                        <div class="contact-cell-dummy"></div>
                        <div class="contact-cel">
                            <a href={ "mailto:" + oC.getEmail() }>{ oC.getEmail() }</a>
                        </div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-cel">{ oC.getPhoneLabel() }:</div>
                        <div class="contact-cell-dummy"></div>
                        <div class="contact-cel">
                            <a href={ "tel:" + oC.getPhone() }>{ oC.getPhone() }</a>
                        </div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-cel">{ oC.getAccountsLabel() }:</div>
                        <div class="contact-cell-dummy"></div>
                        <div class="contact-cel">
                        {
                            (oC.getAccounts() || []).forEach((oL, i) => (
                                <span>
                                    { i !== 0 ? ", " : " " }
                                    <ui5Control>{ oL }</ui5Control>
                                </span>
                            ))
                        }
                        </div>
                    </div>
                </div>
            );
        }
    });

});
