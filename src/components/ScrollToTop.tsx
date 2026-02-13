import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollToTop = () => {
            const container = document.querySelector<HTMLDivElement>('.main-stage-wrapper');

            if (container) {
                container.scrollTo({ top: 0 }); // smooth scroll CSS animation
            } else {
                // fallback on window scroll
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // Delay to wait page render (async content)
        const id = setTimeout(scrollToTop, 50);

        return () => clearTimeout(id);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
