import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function WrapInBrowserRouter({children}: {children: ReactNode}){
    return (<BrowserRouter>{children}</BrowserRouter>)
}