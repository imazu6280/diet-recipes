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
            padding: {
                "72px": "72px",
                "2-auto": "0 2%",
            },
            margin: {
                "2-auto": "0 2%",
            },
            fontSize: {
                "34px": "34px",
                sideClamp: "clamp(14px, 1.8vw, 22px)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                orange: "#FF9933",
                gray: "#939290",
                white_gray: "rgb(236 235 233)",
                beige: "#F8F6F2",
                white: "#FFFFFF",
                black: "#606060",
            },
            borderWidth: {
                1: "1px",
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
                "show-column": "300px 1fr",
            },
        },
    },
    plugins: [],
}
