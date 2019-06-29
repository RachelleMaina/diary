let keystone = require('../../node_modules/keystone');
let Entry = keystone.list('Entry');

//List Entry
exports.list = (req, res) => {
	Entry.model.find((err, items) => {
		if (err) return res.json({ err: err });
		res.json({
			entry: items
		});
	});
};

// Get Entry by ID
exports.get = (req, res) => {
	Entry.model.findById(req.params.id).exec((err, item) => {
		if (err) return res.json({ err: err });
		res.json({
			entry: item
		});
	});
};

// Create an Entry

exports.create = (req, res) => {
	let item = new Entry.model(),
		data = req.method == 'POST' ? req.body : req.query;
	item.getUpdateHandler(req).process(data, err => {
		if (err) return res.json({ err: err });
		res.json({
			entry: item
		});
	});
};

// Patch Entry by ID
exports.update = (req, res) => {
	Entry.model.findById(req.params.id).exec((err, item) => {
		if (err) return res.json({ err: err });
		if (!item) return res.json({ err: 'not found' });
		let data = req.method == 'PUT' ? req.body : req.query;
		item.getUpdateHandler(req).process(data, err => {
			if (err) return res.json({ err: err });
			res.json({
				entry: item
			});
		});
	});
};

// Delete Entry by ID
exports.remove = (req, res) => {
	Entry.model.findById(req.params.id).exec((err, item) => {
		if (err) return res.json({ dberr: err });
		if (!item) return res.json({ err: 'not found' });
		item.remove(err => {
			if (err) return res.json({ dberr: err });
			return res.json({
				success: true
			});
		});
	});
};
