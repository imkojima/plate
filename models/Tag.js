var keystone = require('arch-keystone');
var transform = require('model-transform');

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true },
    reack: true,
});

Tag.add({
	name: { label: '標籤名稱', type: String, required: true, unique: true },
});

Tag.relationship({ ref: 'Post', refPath: 'tags' });

transform.toJSON(Tag);
Tag.register();
