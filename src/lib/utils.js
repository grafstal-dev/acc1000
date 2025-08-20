export function handleAnchorClick(e, anchorId) {
    e.preventDefault();
    const homeRoute = '/';
    const currentRoute = window.location.hash.slice(1) || homeRoute;

    const scrollToAnchor = () => {
        setTimeout(() => {
            const element = document.getElementById(anchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, currentRoute === homeRoute ? 0 : 100);
    };

    if (currentRoute !== homeRoute) {
        window.location.hash = homeRoute;
    }
    scrollToAnchor();
}

src/components Directory
