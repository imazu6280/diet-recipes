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
            width: {
                inner: "96%",
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
            },
            gridTemplateColumns: {
                "sidebar-column": "270px 1fr",
            },
            gridTemplateRows: {
                "sidebar-row": "100vh 1fr",
            },
            content: {
                "search-icon": '"\\f002"',
            },
        },
    },
    plugins: [],
}
