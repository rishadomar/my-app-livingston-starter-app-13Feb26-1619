import { Dispatch, SetStateAction } from 'react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/utils/hooks/useTranslation';

type SidebarFooterProps = {
    setSidebarVisible: Dispatch<SetStateAction<boolean>>;
    isDesktop: boolean;
};

const SidebarFooter = ({ setSidebarVisible, isDesktop }: SidebarFooterProps) => {
    const translate = useTranslation();
    return (
        <div className='p-3'>
            <small className='text-white fw-medium'>{translate('preferredLanguage')}</small>
            <div className='mt-2'>
                <LanguageSelector setSidebarVisible={setSidebarVisible} isDesktop={isDesktop} />
            </div>
        </div>
    );
};
export default SidebarFooter;
