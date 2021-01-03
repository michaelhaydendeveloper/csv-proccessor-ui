import * as RNLocalize from "react-native-localize";

interface ITextItem {
    message: string
    description: string
}

interface IText {
    [index:string]:ITextItem
}

interface language {
    [index:string]:IText
}

class Default {
    text: language = {
        "en": {
            "welcomeTitle": {
                "message": "Welcome Message Here",
                "description": "Title of Welcome Section",
            },
            "welcomeMessage": {
                "message": "Welcome Message Here",
                "description": "Title of Welcome Section",
            },
            "hideModalButtonLabel": {
                "message": "Hide Modal",
                "description": "Title of Welcome Section",
            },
            "showModalButtonLabel": {
                "message": "Show Modal",
                "description": "Title of Welcome Section",
            },
        },
        "fr": {
            "welcomeTitle": {
                "message": "WE We hahaha hahaha",
                "description": "WE WE HA HAHAH HAA",
            },
            "welcomeMessage": {
                "message": "Welcome Message Here",
                "description": "Title of Welcome Section",
            },
            "hideModalButtonLabel": {
                "message": "Hide Modal",
                "description": "Title of Welcome Section",
            },
            "showModalButtonLabel": {
                "message": "Show Modal",
                "description": "Title of Welcome Section",
            },
        }
    };

    getLanguageKey(): string {
        const locals = RNLocalize.getLocales();
        return locals[0].languageCode || 'fr';
    }

    getSectionMessage(key: string): string {
        const languageKey = this.getLanguageKey();
        return this.text[languageKey][key].message;
    }

    getSectionDescription(key: string): string {
        const languageKey = this.getLanguageKey();
        return this.text[languageKey][key].description;
    }
}

export default Default;