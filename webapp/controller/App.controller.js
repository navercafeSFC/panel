sap.ui.define([
    "sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (MessageToast, Controller) {
		"use strict";

		return Controller.extend("com.sfc.panel.controller.App", {
			onInit: function () {

            },
            
            onExpand : function() {
                const message1 = " expand=\".onExpand\"사용하면 App.controller.js > onExpand : function {} 함수를 실행 합니다. ";
			    MessageToast.show(message1);
            },

            onMessageToastPress : function() {
                const message2 = "안녕하세요. SAP Fiori Cafe(SFC) 입니다. 반갑습니다.\r\n press=\".onMessageToastPress\" 항목은 Button 컨트롤을 클릭 하였을때 이벤트가 발생 합니다.";
			    MessageToast.show(message2);
            }
		});
	});
