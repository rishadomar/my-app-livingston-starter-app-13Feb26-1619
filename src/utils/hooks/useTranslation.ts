import { useTranslationsQuery } from '@/store/api/translationsApi';
import { useAppSelector } from '@/store/hooks';
import { LanguageCode } from 'livingston-npm-components';
import { useCallback } from 'react';

interface UseTranslationOptions {
    substitutions?: (string | number)[];
    languageCode?: LanguageCode;
}

export type TranslateFunction = (key: string, options?: UseTranslationOptions) => string;

export const useTranslation = (): TranslateFunction => {
    const { selectedLanguageCode } = useAppSelector((state) => state.language);
    const { data } = useTranslationsQuery({ languageCode: selectedLanguageCode });

    const translate = useCallback(
        (key: string, options: UseTranslationOptions = {}) => {
            const { substitutions = [] } = options;

            let languageCode = selectedLanguageCode;
            if (options.languageCode) {
                languageCode = options.languageCode;
            }

            try {
                if (!data || (languageCode !== 'en' && languageCode !== 'fr' && languageCode !== 'es')) {
                    return key;
                }

                // Get the specific translation for the key
                const translatedPhrase = data[languageCode][key];
                if (!translatedPhrase) {
                    return `Untranslated: [${key}]`;
                }

                // If we have substitutions, replace the placeholders
                if (substitutions.length > 0) {
                    return translatedPhrase.trim().replace(/{(\d+)}/g, (match, index) => substitutions[index]?.toString() || match);
                }

                // Return the trimmed translation
                return translatedPhrase.trim();
            } catch (error) {
                console.error('Translation error:', error);
                return `Error: [${key}]`;
            }
        },
        [data, selectedLanguageCode]
    );

    return translate;
};
