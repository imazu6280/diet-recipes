import { SearchInput } from "./SearchInput"
import { Button } from "./Button"

const headerLogo = {
    logo: "DIET-RECIPES",
}

export const Header = () => {
    return (
        <header className="px-2">
            <div className="sticky top-0 py-2 flex justify-end bg-white z-10 md:hidden">
                <Button isIcon={true} text="レシピを書く" />
            </div>
            <div className="sticky top-0 px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <SearchInput isStyle={true} />
                <Button isIcon={false} text="レシピを書く" />
                <div className="p-3 bg-slate-400"></div>
            </div>
            <div className="sticky top-0 px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <Button isIcon={false} text="レシピを書く" />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <SearchInput isStyle={true} />
                    <div className="p-3 bg-slate-400"></div>
                </div>
            </div>
        </header>
    )
}
