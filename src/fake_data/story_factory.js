// Use this to create a single story object
// whose values differ slightly based on the
// number you pass in.

module.exports = function storyFactory (salt) {
  return {
    link: 'http://' + salt + '.com',
    metrics: {
      internalImportance: salt % 100,
      sentiment: (salt + 70) % 100,
      focus: (salt + 50) % 100,
      controversy: (salt + 30) % 100,
      idiosyncracyCredit: salt + 23 % 100
    },
    id: salt,
    title: ['these', 'words', 'will', 'never', 'change']
  }
};
