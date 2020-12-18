import React, { FC } from 'react';
import "./HomeHero.scss"
import DeveloperActivity from 'assets/svgs/developer_activity.svg';
import { SocialMediaIcon } from 'components';
import { socialMedias } from 'utils/social-media';
import { homeHeroTexts } from 'utils';


const HomeHero: FC = () => {

    const renderSocialMediaLinks = () =>
        socialMedias.map((socialMedia) => (
            <SocialMediaIcon className="HomeHero__SocialMediaLink" iconSize={30} key={socialMedia.name} socialMedia={socialMedia} />
        ));

    return (
        <div className='HomeHero'>
            <div className='HomeHero__wrapper'>
                <div className='HomeHero__left'>
                    <div className="HomeHero__left-content-container">
                        <h1 className="HomeHero__title">{homeHeroTexts.title}</h1>
                        <h2 className="HomeHero__subtitle">
                            {homeHeroTexts.subtitle}
                        </h2>
                        <div className="HomeHero__social-media-links">{renderSocialMediaLinks()}</div>
                    </div>
                </div>
                <div className="HomeHero__right">
                    <img alt="hero" className="HomeHero__image" src={DeveloperActivity} />
                </div>
            </div>
        </div>
    );
}

export default HomeHero;