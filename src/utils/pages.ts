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

export const homePageItem = {
    title: "home",
    to: "/",
    component: Home
};
export const workPageItem = {
    title: "works",
    to: "/works",
    component: Works
};
export const portfolioPageItem = {
    title: "portfolio",
    to: "/portfolio",
    component: Portfolio
};
export const toolsPageItem = {
    title: "tools",
    to: "/tools",
    component: Tools
};
export const contactsPageItem = {
    title: "contact",
    to: "/contact",
    component: Contact
};




export const pages: PageItem[] = [
    homePageItem,
    workPageItem,
    portfolioPageItem,
    toolsPageItem,
    contactsPageItem,
]
