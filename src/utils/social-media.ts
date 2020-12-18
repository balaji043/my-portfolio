import { IconType } from "components";
import { SocialMedia } from "types";


export const facebook: SocialMedia = {
  name: 'facebook',
  icon: IconType.menu,
  url: '',
};

export const github: SocialMedia = {
  name: 'github',
  icon: IconType.github,
  url: 'https://github.com/balaji043',
};

export const linkedin: SocialMedia = {
  name: 'linkedin',
  icon: IconType.linkedin,
  url: 'https://www.linkedin.com/in/balaji-ramasami-307aaa116/',
};

export const socialMedias: SocialMedia[] = [
  github,
  linkedin
]
