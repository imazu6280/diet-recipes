import React from "react"
import { createRoot } from "react-dom/client"
import { Sidebar } from "./component/Sidebar"
import { Top } from "./page/Top"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Footer } from "./component/Footer"

const container = document.getElementById("app")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="grid grid-cols-sidebar-column gap-2 items-start min-h-screen md:block">
                <Sidebar />

                <div className="pt-5 bg-white rounded-lg md:py-0 md:bg-beige">
                    <Header />
                    <div className="pl-4 pr-6">
                        <Routes>
                            <Route path="/" element={<Top />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
