import React from "react";
import Home from 'containers/Home';
import Contact from 'containers/Contact'
import Tools from 'containers/Tools'
import Works from 'containers/Works'
import About from "containers/About";

export interface PageItem {
    title: string;
    to: string;
    component: React.ComponentType;
    btnText?: string;
}

export const homePageItem = {
    title: "HOME",
    to: "/",
    component: Home
};

export const aboutPageItem = {
    title: "ABOUT",
    to: "/about",
    component: About
};

export const workPageItem = {
    title: "WORKS",
    to: "/works",
    component: Works,
    btnText: `SEE MY WORKS`
};

export const toolsPageItem = {
    title: "tools",
    to: "/tools",
    component: Tools
};

export const contactsPageItem = {
    title: "CONTACT",
    to: "/contact",
    component: Contact,
    btnText: `SAY HELLO`,
};

export const pageItems: PageItem[] = [
    homePageItem,
    aboutPageItem,
    workPageItem,
    contactsPageItem,
]
