let keystone = require('../node_modules/keystone');
let Types = keystone.Field.Types;

let Entry = new keystone.List('Entry');

Entry.add({
	title: { type: Types.Text, min: 10, max: 20, required: true, initial: false },
	content: {
		type: Types.Text,
		min: 10,
		max: 2000,
		required: true,
		initial: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});

Entry.register();
