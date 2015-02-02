var story = require('../fake_data/story'),
		history = require('../fake_data/history');

module.exports = {
  history: function (req, res, next) {
  	var journalId = req.params.journalId;
  	var histories = history(journalId);

    res.send(histories);
  },

  stories: function (req, res, next) {
  	var storyId = req.params.storyId;

  	res.send(story(storyId));
  }
}

