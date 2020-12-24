export let activate_plugin = (plugin) => {

	return new Promise((resolve, reject) => {
		// Activating plugin.
		let formData = new window.FormData();
		formData.append('action', 'gutenberg_templates_activate_plugin');
		formData.append('init', plugin.init);
		formData.append('security', GutenbergTemplatesVars._ajax_nonce);

		wp.apiFetch({
			url: GutenbergTemplatesVars.ajax_url,
			method: 'POST',
			body: formData,
		}).then((response) => {
			if (response.success) {
				resolve(response);
			} else {
				reject(response);
			}
		});
	});
};

export let install_plugin = (plugin) => {
	return new Promise((resolve, reject) => {
		// @see /wp-admin/js/updates.js
		wp.updates.queue.push({
			action: 'install-plugin', // Required action.
			data: {
				slug: plugin.slug,
				init: plugin.init,
				name: plugin.name,
				success: function (response) {
					resolve(response, plugin);
				},
				error: function (response) {
					reject(response, plugin);
				},
			},
		});

		// Required to set queue.
		wp.updates.queueChecker();
	});
};
