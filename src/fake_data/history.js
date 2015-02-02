var _ 						= require('lodash'),
		storyFactory 	= require('./story_factory');

module.exports = function (journalId) {
	var histories = [];
	
	_.times(journalId, function (i) {
		histories.push(storyFactory(i));
	})

	return histories;
};