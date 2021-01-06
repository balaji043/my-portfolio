import { BrGitHub, BrLinkedIn } from "components/Icons";
import { IconType } from "react-icons/lib";

export interface SocialMedia {
    name: string;
    url: string;
    icon: IconType;
}

export const github: SocialMedia = {
    name: 'GitHub',
    url: 'https://github.com/balaji043',
    icon: BrGitHub
};

export const linkedin: SocialMedia = {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/balaji-ramasami-307aaa116/',
    icon: BrLinkedIn
};