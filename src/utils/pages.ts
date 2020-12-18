import React from "react";
import Home from 'containers/Home';
import Contact from 'containers/Contact'
import Portfolio from 'containers/Portfolio'
import Tools from 'containers/Tools'
import Works from 'containers/Works'

export interface PageItem {
    title: string;
    to: string;
    component: React.ComponentType;
}


export const pages: PageItem[] = [
    {
        title: "home",
        to: "/",
        component: Home
    },
    {
        title: "works",
        to: "/works",
        component: Works
    },
    {
        title: "portfolio",
        to: "/portfolio",
        component: Portfolio
    },
    {
        title: "tools",
        to: "/tools",
        component: Tools
    },
    {
        title: "contact",
        to: "/contact",
        component: Contact
    },
]

export const getPathTitle = (location: string) => {
    return pages.find(e => e.to === location)?.title;
}