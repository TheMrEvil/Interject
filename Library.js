InterjectCardName = "Interject";
Interjecttext = ''


function createIfNoNotepadCard() {
    if (!storyCards.find(sc => sc.title === InterjectCardName)) {
        addStoryCard(InterjectCardName, 'None.', InterjectCardName)

        // Set up the card properties
        const InterjectCard = storyCards.find(sc => sc.title === InterjectCardName)
        InterjectCard.description = '--- how to use--\nanything typed in interject will be given to the ai then cleared\n\n-- - github-- -\nhttps://github.com/TheMrEvil/Interject'
        InterjectCard.entry = ''
        return
    }
}
function ICC(text) {
    createIfNoNotepadCard()
    InterjectCard = storyCards.find(sc => sc.title === InterjectCardName)
    if (InterjectCard.entry != '') {
        text += '<SYSTEM MESSAGE> Please keep in mind: ' + InterjectCard.entry + '</SYSTEM MESSAGE>'
        console.log('InterjectCard entry:', InterjectCard.entry)
    }
    InterjectCard.entry = ''
    return { text }
}