import { ButtonType, LanguageType, LanguageSelector as NPMLanguageSelector, toastState } from 'livingston-npm-components';
import { AVAILABLE_LANGUAGES } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectSelectedLanguageCode, setLanguageCode } from '@/store/reducers/languageSlice';
import { useTranslation } from '@/utils/hooks/useTranslation';
import { Dispatch, SetStateAction } from 'react';

type LanguageSelectorProps = {
    setSidebarVisible?: Dispatch<SetStateAction<boolean>>;
    isDesktop?: boolean;
};

export const LanguageSelector = ({ setSidebarVisible, isDesktop }: LanguageSelectorProps) => {
    const dispatch = useAppDispatch();
    const translate = useTranslation();

    const selectedLanguageCode = useAppSelector(selectSelectedLanguageCode);

    return (
        <NPMLanguageSelector
            languages={AVAILABLE_LANGUAGES}
            selectedLanguage={AVAILABLE_LANGUAGES.find((language) => language.code === selectedLanguageCode) || AVAILABLE_LANGUAGES[0]}
            setLanguage={async (selectedLanguageType: LanguageType) => {
                try {
                    dispatch(setLanguageCode(selectedLanguageType.code));

                    toastState.addToast({
                        message: translate('selectedLanguageSuccessfullyChanged', { languageCode: selectedLanguageType.code }),
                        type: 'success'
                    });

                    // Close sidebar on non-desktop devices after language change
                    if (setSidebarVisible && !isDesktop) {
                        setSidebarVisible(false);
                    }
                } catch (_error) {
                    toastState.addToast({
                        message: translate('selectedLanguageChangeFailed'),
                        type: 'error'
                    });
                }
            }}
            dropDownButton={{
                type: ButtonType.SecondaryWhite,
                width: 'full'
            }}
        />
    );
};
