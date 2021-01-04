import Default from '../default';

test('getLanguageKey()', () => {
    const defaultIntl = new Default();
    const languageKey = defaultIntl.getLanguageKey();
    expect(languageKey).toBe('en');
});

test('getSectionMessage()', () => {
    const defaultIntl = new Default();
    const languageKey = defaultIntl.getLanguageKey();
    const welcomeTitle = defaultIntl.getSectionMessage('welcomeTitle');
    expect(welcomeTitle).toBe(defaultIntl.text[languageKey]['welcomeTitle'].message);
});

test('getSectionDescription()', () => {
    const defaultIntl = new Default();
    const languageKey = defaultIntl.getLanguageKey();
    const welcomeTitle = defaultIntl.getSectionDescription('welcomeTitle');
    expect(welcomeTitle).toBe(defaultIntl.text[languageKey]['welcomeTitle'].description);
});
