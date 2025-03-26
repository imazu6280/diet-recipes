import React from "react";
import { createRoot } from "react-dom/client";
import { Top } from "./page/Top";
import { Sidebar } from "./component/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { RecipeDetail } from "./page/RecipeDetail";
import { RecipeCreate } from "./page/RecipeCreate";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RecipeEdit } from "./page/RecipeEdit";
import { RecipeList } from "./page/RecipeList";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div className="grid grid-cols-sidebar-column gap-2 items-start min-h-screen md:block">
                    <Sidebar />
                    <div className="bg-white rounded-lg md:py-0 md:bg-beige">
                        <Header />
                        <div className="pl-4 pr-6 md:px-0">
                            <Routes>
                                <Route path="/" element={<Top />} />
                                <Route
                                    path="/show/:id"
                                    element={<RecipeDetail />}
                                />
                                <Route
                                    path="/create"
                                    element={<RecipeCreate />}
                                />
                                <Route
                                    path="/edit/:id"
                                    element={<RecipeEdit />}
                                />
                                <Route
                                    path="/recipes"
                                    element={<RecipeList />}
                                />
                                <Route
                                    path="/recipes/favorites"
                                    element={<RecipeList />}
                                />
                                <Route
                                    path="/recipes/category/:id"
                                    element={<RecipeList />}
                                />
                                <Route
                                    path="/recipes/category/:id/favorites"
                                    element={<RecipeList />}
                                />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
