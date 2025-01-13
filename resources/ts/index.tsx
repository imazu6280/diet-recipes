import React from "react";
import { createRoot } from "react-dom/client";
import { Sidebar } from "./component/Sidebar";
import { Top } from "./page/Top";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { RecipeDetail } from "./page/RecipeDetail";
import { RecipeCreate } from "./page/RecipeCreate";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="grid grid-cols-sidebar-column gap-2 items-start min-h-screen md:block">
                <Sidebar />

                <div className="bg-white rounded-lg md:py-0 md:bg-beige">
                    <Header />
                    <div className="pl-4 pr-6 tb:px-0">
                        <Routes>
                            <Route path="/" element={<Top />} />
                            <Route
                                path="/show/:id"
                                element={<RecipeDetail />}
                            />
                            <Route path="/create" element={<RecipeCreate />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
