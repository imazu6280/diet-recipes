import defaultTheme from "tailwindcss/defaultTheme";

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
                pc_sm: { min: "769px", max: "1200px" },
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
                red: "rgba(254,70,58,1)",
                orange: "#FF9933",
                gray: "#939290",
                white_gray: "rgb(236 235 233)",
                beige: "#F8F6F2",
                white: "#FFFFFF",
                black: "#606060",
                "gray-opacity": "rgba(74, 74, 74, 0.7)",
            },
            borderWidth: {
                1: "1px",
            },
            boxShadow: {
                black: "0 1px 5px #0000001a",
                modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            },
            borderRadius: {
                modal: "0.25rem",
            },
            backgroundImage: {
                "search-image": "url('/images/image01.png')",
                "footer-image": "url('/images/footer-image01.png')",
            },
            gridTemplateColumns: {
                "header-column": "1fr 40px",
                "header-tb-column": "140px 1fr 160px 24px",
                "sidebar-column": "clamp(120px, 20%, 270px) 1fr",
                "show-column": "min(35%, 300px) 1fr",
                "create-ingredient-column": "24px 2fr 1fr 24px",
                "list-column": "160px 1fr",
                "wrapper-column": "1fr minmax(auto, 30%)",
                "search-column": "1fr minmax(auto, 30%)",
            },
            aspectRatio: {
                "5/4": "5 / 4",
            },
            animation: {
                "slide-in-right":
                    "slide-in-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both",
                "slide-out-right":
                    "slide-out-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "slide-out-right": {
                    "0%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "translateX(100%)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".triangle-up": {
                    width: "0",
                    height: "0",
                    "border-left": "2rem solid transparent",
                    "border-right": "2rem solid transparent",
                    "border-bottom": "4rem solid #007bff",
                },
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
