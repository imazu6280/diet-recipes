import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.jsx",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            screens: {
                sm: { max: "560px" },
                tablet_md: { min: "561px", max: "768px" },
                md: { max: "768px" },
                tb: { max: "960px" },
            },
            width: {
                inner: "96%",
            },
            fontSize: {
                sideClamp: "clamp(14px, 1.5vw, 22px)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                orange: "#FF9933",
                gray: "#939290",
                beige: "#F8F6F2",
                white: "#FFFFFF",
                black: "#606060",
                red: "#F2907F",
                blue: "#73A3C1",
                green: "#A0BD4E",
                yellow: "#DBBD34",
                charcoal: "#CC903C",
            },
            boxShadow: {
                black: "0 1px 5px #0000001a",
            },
            backgroundImage: {
                "search-image": "url('/images/image01.png')",
                "footer-image": "url('/images/footer-image01.png')",
            },

            gridTemplateColumns: {
                "header-column": "1fr 40px",
                "header-tb-column": "140px 1fr 140px 24px",
                "sidebar-column": "clamp(120px, 20%, 270px) 1fr",
            },
        },
    },
    plugins: [],
}
