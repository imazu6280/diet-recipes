import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";

const headerLogo = {
    logo: "DIET-RECIPES",
};

export const Header = () => {
    const { menuOpen }: SideMenuType = useMenu();

    return (
        <header className="sticky top-0 px-2">
            <div className="py-2 flex justify-end bg-white z-10 md:hidden">
                <Button isIcon={true} text="レシピを書く" />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <SearchInput isStyle={true} />
                </form>
                <Button isIcon={false} text="レシピを書く" />
                <div className="p-3 bg-slate-400"></div>
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <Button isIcon={false} text="レシピを書く" />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput isStyle={true} />
                    </form>
                    <div className="p-3 bg-slate-400" onClick={menuOpen}></div>
                </div>
            </div>
        </header>
    );
};
