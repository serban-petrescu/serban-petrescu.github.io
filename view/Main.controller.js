sap.ui.controller("portfolio.view.Main", {
	getGroupHeader : function (oGroup){
		return new sap.m.GroupHeaderListItem( {
			title: oGroup.key,
			upperCase: false
		} );
	},
	
	sendEmail: function(oEvent) {
		sap.m.URLHelper.triggerEmail(oEvent.getSource().getText());
	},
	
	callPhone: function(oEvent) {
		sap.m.URLHelper.triggerTel(oEvent.getSource().getText());
	},
	
	openGallery: function(oEvent) {
		var context = oEvent.getSource().getBindingContext();
		var i18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();
		if (!this.dialog) {
			this.dialog = new sap.m.Dialog({
				contentWidth: "100%",
				contentHeight: "100%",
				stretch: true,
				content: this.carousel = new sap.m.Carousel({
					"class": "sapUiContentPadding",
					pages: {
						path: "images",
						template: new sap.m.FlexBox({
							alignItems: "Center",
							justifyContent: "Center",
							direction: "Column",
							items: [
								new sap.m.Text({text: "{description}"}),
								new sap.m.Image({
									height: "90%",
									src: "{path}"
								})
							]
						})
					}
				}),
				beginButton: new sap.m.Button({
					text: i18n.getText("close"),
					press: jQuery.proxy(function () {
						this.dialog.close();
					}, this)
				})
			});
			this.getView().addDependent(this.dialog);
		}
		this.dialog.bindElement(context.getPath());
		this.dialog.setTitle(i18n.getText("galleryTitle", [context.getProperty("name")]));
		if (this.carousel) {
			var pages = this.carousel.getPages();
			if (pages && pages.length) {
				this.carousel.setActivePage(pages[0]);
			}
		}
		this.dialog.open();
	}
	
	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf portfolio.view.Main
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf portfolio.view.Main
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf portfolio.view.Main
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf portfolio.view.Main
	 */
	//	onExit: function() {
	//
	//	}

});