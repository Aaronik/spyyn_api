module.exports = {
  history: function (req, res, next) {
  	var jid = req.params.jid;

    res.send('history for journal #' + jid);
  },

  stories: function (req, res, next) {
  	var id = req.params.id;

    res.send('story ' + id);
  }
}

