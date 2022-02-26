export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-47B6G4QXBN', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}