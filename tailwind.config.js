/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            colors: {
                purple: '#9B51E0',
                neutral: '#D7D7D7',
                gray: '#828282',
                grayLight: '#E2E2E2',
                main: '#1F1D2B',
                blue: '#3081ED',
                primary: '#fff',
                pink: '#FB37FF',
                lightBlue: '#18B2DE',
                lastGray: '#C4C4C4',
                caption: '#BCBCBC',
                line: '#F2F2F2',
            },
            backgroundImage: {
                featureGradient: 'linear-gradient(126deg, #9B51E0 0%, #3081ED 100%)',
                cardGradient: 'linear-gradient(139deg, rgba(58, 129, 191, 0.08) 0%, rgba(65, 48, 90, 0.08) 100%)',
            }
        },
    },
    plugins: [],
}