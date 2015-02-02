module.exports = {
  history: function (req, res, next) {
    res.send('history');
  },

  stories: function (req, res, next) {
    res.send('stories!');
  }
}

