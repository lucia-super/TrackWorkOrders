/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/ibso/trackworkorders/trackworkorders/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
