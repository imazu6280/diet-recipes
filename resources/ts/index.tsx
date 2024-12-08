import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App" // <- 追加
import { Sidebar } from "./component/Sidebar"
import { Top } from "./Top"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"

const container = document.getElementById("app")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="grid grid-cols-sidebar-column grid-rows-sidebar-row gap-2 h-screen">
                <Sidebar />
                <div className="h-min pl-4 pr-6 py-5 bg-white rounded-lg">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Top />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
