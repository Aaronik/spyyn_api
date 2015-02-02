var storyFactory = require('./story_factory');

module.exports = function (storyId) {
	return storyFactory(storyId);
}