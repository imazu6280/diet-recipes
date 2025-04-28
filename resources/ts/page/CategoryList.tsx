import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../component/Button";
import { SearchInput } from "../component/SearchInput";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { useRecipeList } from "../hooks/useRecipeList";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFavoriteTab } from "../redux/favoriteTabSlice";

export const CategoryList = () => {
    const { open, toggleSearchOpen } = useMenu();
    const {
        categoryData,
        inputValue,
        handleSearchChange,
        handleResetChange,
        handleSearchSubmit,
        getCategoryList,
    } = useRecipeList();
    const swiperRef = useRef(null);

    const navigate = useNavigate();
    const { id } = useParams();

    const isFavoriteTab = useSelector(
        (state: RootState) => state.favoriteTab.isFavoriteTab
    );

    const dispatch = useDispatch();

    return (
        <div className="mx-auto pc_lg:w-inner pc_lg:max-w-wrapper">
            <ul className="flex md:w-full md:grid md:grid-cols-2 md:bg-white md:text-center md:shadow-gray">
                <li
                    className={`p-4 ${
                        !isFavoriteTab && "font-bold border-b-2 border-orange"
                    }`}
                    onClick={() => {
                        if (isFavoriteTab) {
                            dispatch(setFavoriteTab(false));
                            getCategoryList();
                            navigate(`/recipes/category/${id}`);
                        }
                    }}
                >
                    新着
                </li>
                <li
                    className={`p-4 ${
                        isFavoriteTab && "font-bold border-b-2 border-orange"
                    }`}
                    onClick={() => {
                        if (!isFavoriteTab) {
                            dispatch(setFavoriteTab(true));
                            getCategoryList();
                            navigate(`/recipes/category/${id}/favorites`);
                        }
                    }}
                >
                    お気に入り
                </li>
            </ul>
            <h2 className="pt-4 text-2xl md:hidden">
                <strong className="pr-1">
                    {categoryData.categoryName.name}
                </strong>
                レシピ
                {isFavoriteTab ? (
                    <span className="pl-1 text-xl text-gray">
                        ({categoryData.categoryFavoriteList.length})
                    </span>
                ) : (
                    <span className="pl-1 text-xl text-gray">
                        ({categoryData.categoryList.length})
                    </span>
                )}
            </h2>
            <div className="grid grid-cols-wrapper-column gap-x-6 pt-4 text-xl md:block md:w-inner md:mx-auto">
                <div className="flex flex-col gap-y-4">
                    {categoryData.categoryFavoriteList.length !== 0 &&
                        !isFavoriteTab && (
                            <div className="flex flex-col gap-y-4">
                                <p>
                                    お気に入りの「
                                    {categoryData.categoryName.name}
                                    」レシピ
                                </p>
                                <div className="relative w-full">
                                    <Swiper
                                        ref={swiperRef}
                                        modules={[Navigation]}
                                        navigation={{
                                            nextEl: ".button-next",
                                            prevEl: ".button-prev",
                                        }}
                                        pagination={{ clickable: true }}
                                        spaceBetween={5}
                                        slidesPerView="auto"
                                        slidesPerGroup={1}
                                    >
                                        {categoryData.categoryFavoriteList.map(
                                            (item) => (
                                                <SwiperSlide
                                                    key={item.id}
                                                    style={{
                                                        backgroundImage: `url(${item.thumbnail})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition:
                                                            "center",
                                                        maxWidth: "160px",
                                                        height: "120px",
                                                    }}
                                                >
                                                    <Link
                                                        to={`/show/${item.id}`}
                                                        style={{
                                                            display: "block",
                                                            width: "100%",
                                                            height: "100%",
                                                        }}
                                                    />
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                    <div className="button-prev absolute top-1/2 -translate-y-1/2 -left-3 md:-left-1 bg-black opacity-75 text-white w-7 h-7 rounded-full flex items-center justify-center z-40 hover:bg-black hover:opacity-90 after:text-lg after:text-white after:font-bold">
                                        <img src="/images/prev.svg" alt="" />
                                    </div>
                                    <div className="button-next absolute top-1/2 -translate-y-1/2 -right-3 md:-right-1 bg-black opacity-75 text-white w-7 h-7 rounded-full flex items-center justify-center z-40 hover:bg-black hover:opacity-90 after:text-lg after:text-white after:font-bold">
                                        <img src="/images/next.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        )}

                    <div className="justify-between hidden md:flex">
                        <h2 className="pt-4 text-2xl">
                            <strong className="pr-1">
                                {categoryData.categoryName.name}
                            </strong>
                            レシピ
                            <span className="pl-1 text-xl">
                                ({categoryData.categoryList.length})
                            </span>
                        </h2>
                        <Button
                            alt="絞り込み検索"
                            text="絞り込み検索"
                            color={buttonColors.gray}
                            width="w-40"
                            type="button"
                            toggleSearchOpen={toggleSearchOpen}
                        />
                    </div>
                    {isFavoriteTab
                        ? categoryData.categoryFavoriteList.map((item) => (
                              <Link to={`/show/${item.id}`} key={item.id}>
                                  <div className="grid grid-cols-list-column grid-desktop rounded-md shadow-black md:grid-cols-md-list-column md:grid-mobile md:bg-white">
                                      <div
                                          className="grid-image bg-cover bg-center bg-no-repeat"
                                          style={{
                                              backgroundImage: `url(${item.thumbnail})`,
                                          }}
                                      ></div>
                                      <div className="grid-content flex flex-col gap-y-3 p-4">
                                          <h3 className="text-xl font-semibold">
                                              {item.name}
                                          </h3>
                                          <ul className="flex gap-x-1 text-sm">
                                              {item.ingredients.map(
                                                  (ingredient) => (
                                                      <li key={ingredient.id}>
                                                          ・{ingredient.name}
                                                      </li>
                                                  )
                                              )}
                                          </ul>

                                          <div className="flex gap-x-1">
                                              <img
                                                  src="/images/people.svg"
                                                  alt=""
                                              />
                                              <p className="text-sm">2人前</p>
                                          </div>
                                          <p className="pt-1 text-sm">
                                              コメント
                                          </p>
                                      </div>
                                  </div>
                              </Link>
                          ))
                        : categoryData.categoryList.map((item) => (
                              <Link to={`/show/${item.id}`} key={item.id}>
                                  <div className="grid grid-cols-list-column grid-desktop rounded-md shadow-black md:grid-cols-md-list-column md:grid-mobile md:bg-white">
                                      <div
                                          className="grid-image bg-cover bg-center bg-no-repeat"
                                          style={{
                                              backgroundImage: `url(${item.thumbnail})`,
                                          }}
                                      ></div>
                                      <div className="grid-content flex flex-col gap-y-3 p-4">
                                          <h3 className="text-xl font-semibold">
                                              {item.name}
                                          </h3>
                                          <ul className="flex gap-x-1 text-sm">
                                              {item.ingredients.map(
                                                  (ingredient) => (
                                                      <li key={ingredient.id}>
                                                          ・{ingredient.name}
                                                      </li>
                                                  )
                                              )}
                                          </ul>

                                          <div className="flex gap-x-1">
                                              <img
                                                  src="/images/people.svg"
                                                  alt=""
                                              />
                                              <p className="text-sm">2人前</p>
                                          </div>
                                          <p className="pt-1 text-sm">
                                              コメント
                                          </p>
                                      </div>
                                  </div>
                              </Link>
                          ))}
                </div>
                <div className="sticky top-20 flex flex-col gap-4 h-fit overflow-visible md:hidden">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">絞り込み機能</h3>
                        <button
                            onClick={handleResetChange}
                            className="text-base text-gray"
                        >
                            リセットする
                        </button>
                    </div>

                    <form
                        id="filter-search"
                        action=""
                        className="flex flex-col gap-y-4"
                        onSubmit={(e) => handleSearchSubmit(e, inputValue)}
                    >
                        <SearchInput
                            isStyle={false}
                            id="filter-search"
                            type="text"
                            top="top-1/4"
                            width="w-full"
                            value={inputValue}
                            handleSearchChange={handleSearchChange}
                        />
                        <Button
                            isIcon=""
                            alt=""
                            text="検索"
                            color={buttonColors.bgOrange}
                            width="w-20"
                            type="submit"
                            formId="filter-search"
                        />
                    </form>
                </div>
            </div>
            {open.searchOpen && (
                <div
                    className="flex justify-center items-center inset-0 fixed z-50 bg-gray-opacity"
                    onClick={toggleSearchOpen}
                >
                    <div
                        className="w-inner px-4 py-10 bg-beige z-60 rounded-md shadow-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form
                            action=""
                            id="sort"
                            onSubmit={(e) => {
                                dispatch(setFavoriteTab(false));
                                handleSearchSubmit(e, inputValue);
                                toggleSearchOpen();
                            }}
                            className="flex flex-col gap-y-6 w-inner mx-auto"
                        >
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">
                                    <span className="pr-1">
                                        {categoryData.categoryName.name}
                                    </span>
                                    の絞り込み
                                </h3>
                                <p
                                    onClick={handleResetChange}
                                    className="text-base text-gray"
                                >
                                    リセットする
                                </p>
                            </div>
                            <SearchInput
                                isStyle={false}
                                id="search"
                                type="text"
                                top="top-1/4"
                                width="w-full"
                                value={inputValue}
                                handleSearchChange={handleSearchChange}
                            />
                            <Button
                                alt="絞り込み検索"
                                text="絞り込み検索"
                                color={buttonColors.bgOrange}
                                width="w-40 mx-auto"
                                type="submit"
                                formId="sort"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
