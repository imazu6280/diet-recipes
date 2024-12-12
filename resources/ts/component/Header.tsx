import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const headerLogo = {
    logo: "DIET-RECIPES",
}

export const Header = () => {
    return (
        <>
            <div className="sticky top-0 py-2 flex justify-end bg-white z-10 md:hidden">
                <p className="py-2 px-4 mr-6 text-white bg-orange rounded-lg">
                    <FontAwesomeIcon icon={faPenToSquare} className="pr-2" />
                    レシピを書く
                </p>
            </div>
            <div className="sticky top-0 px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <input
                        type="text"
                        className="relative w-full p-2 pl-10 rounded-full border border-black before:content-search-icon before:absolute left-1"
                        placeholder="使いたい食材は？"
                    />
                </form>
                <p className="py-2 px-4 text-white bg-orange rounded-lg">
                    <FontAwesomeIcon icon={faPenToSquare} className="pr-2" />
                    レシピを書く
                </p>
                <div className="p-3 bg-slate-400"></div>
            </div>
            <div className="sticky top-0 px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <p className="px-4 py-2 text-center text-white bg-orange rounded-lg">
                        <FontAwesomeIcon icon={faPenToSquare} className="pr-2" />
                        レシピを書く
                    </p>
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <input
                            type="text"
                            className="relative w-full p-2 pl-10 rounded-full border border-black before:content-search-icon before:absolute left-1"
                            placeholder="使いたい食材は？"
                        />
                    </form>
                    <div className="p-3 bg-slate-400"></div>
                </div>
            </div>
        </>
    )
}
