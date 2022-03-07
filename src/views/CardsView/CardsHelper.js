export const DEFAULT_CARD_TITLE = 'Custom Title'
export const DEFAULT_CARD_BODY = 'Custom body text'

export const generateBasicId = () =>
    Math.random().toString(16).substring(2, 10)

export const CARD_SETTINGS = {
    TITLE: 'title',
    BODY: 'body',
}

// default card object
export const DEFAULT_NEW_CARD = {
    id: generateBasicId(),
    title: '',
    titleSize: '36',
    titleColor: '#0E2748',
    body: '',
    bodySize: '16',
    bodyColor: '#4F4F4F',
    panelRadius: '16',
    panelColor: '#FFFFFF',
}



