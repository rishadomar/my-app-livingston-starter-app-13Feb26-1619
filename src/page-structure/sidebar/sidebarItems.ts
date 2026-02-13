import { faHouseChimney, faQuestionCircle, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type TranslateFunction = (key: string) => string;

export const getSidebarItems = (translate: TranslateFunction) => [
    {
        id: 'dashboard',
        icon: faHouseChimney as IconDefinition,
        label: translate('dashboardTitle'),
        path: '/dashboard'
    },
    {
        id: 'support',
        icon: faQuestionCircle as IconDefinition,
        label: translate('supportLabel'),
        path: '/support',
        subItems: [
            {
                id: 'contactUs',
                label: 'Contact us',
                path: '#',
                url: 'https://www.livingstonintl.com/contact-us/#client-service',
                farRightIcon: faExternalLink
            },
            {
                id: 'faqs',
                label: 'FAQs',
                path: '/faqs'
            }
        ]
    }
];
