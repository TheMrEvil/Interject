InterjectCardName = "Interject";
Interjecttext = ''

function createIfNoNotepadCard() {
    if (!storyCards.find(sc => sc.title === InterjectCardName)) {
        addStoryCard(InterjectCardName, 'None.', InterjectCardName)

        // Set up the card properties
        const InterjectCard = storyCards.find(sc => sc.title === STMR_CARD_NAME)
        InterjectCard.description = '
---how to use--\nanything typed in interject will be given to the ai then cleared\n\n---github---\n'

        '
    }
}
function ICC(text) {
    createIfNoNotepadCard()
    if (InterjectCard.entry != '') {
        text += '<SYSTEM MESSAGE> Please keep in mind: ' + InterjectCard.entry + '</SYSTEM MESSAGE>'
    }
    InterjectCard.entry = ''
    return { text }
}