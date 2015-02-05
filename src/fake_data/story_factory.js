// Use this to create a single story object
// whose values differ slightly based on the
// number you pass in.

module.exports = function storyFactory (distinguishingNum) {
  return {
    link: 'http://' + distinguishingNum + '.com',
    metrics: {
      internalImportance: distinguishingNum % 100,
      sentiment: (distinguishingNum + 70) % 100,
      focus: (distinguishingNum + 50) % 100,
      controversy: (distinguishingNum + 30) % 100,
      idiosyncracyCredit: distinguishingNum + 23 % 100
    },
    id: distinguishingNum,
    title: ['these', 'words', 'will', 'never', 'change']
  }
};
