// Copyright (c) 2018, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Email Template', {
	refresh: function(frm) {
		frm.set_query("default_doctype", "defaults", () => {
			return {
				filters: {
					istable: 0
				}
			}
		})
	}
});
