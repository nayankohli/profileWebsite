/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeSlideIn: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-slide': 'fadeSlideIn 1s ease-in-out forwards',
                'fade-slide-delayed': 'fadeSlideIn 1.5s ease-in-out forwards',
            },
        },
    },
    plugins: [],
};


