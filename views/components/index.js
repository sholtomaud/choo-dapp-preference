const Input = require('./input.js')
const ScreenplayTextarea = require('./screenplayTextarea.js')
const StoryEditor = require('./storyEditor.js')
const ScreenplayTitle = require('./screenplayTitle.js')
const TimeInput = require('./timeInput.js')
const MoneyInput = require('./moneyInput.js')

const input = new Input()
const screenplayTextarea = new ScreenplayTextarea()
const storyEditor = new StoryEditor()
const screenplayTitle = new ScreenplayTitle()
const timeInput = new TimeInput()
const moneyInput = new MoneyInput()

module.exports = {
  input: input,
  timeInput: timeInput,
  moneyInput: moneyInput,
  screenplayTextarea: screenplayTextarea,
  screenplayTitle: screenplayTitle,
  storyEditor: storyEditor
}
