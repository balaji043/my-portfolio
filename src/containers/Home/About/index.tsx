import { FC } from 'react';
import "./About.scss"
import { aboutTexts } from 'utils';

const About: FC = () => {
    return (
        <div className="About">
            <div className="About__card">
                <div className="About__wrapper">
                    <div className="About__right-content-container">
                        <p className="About__title">
                            {aboutTexts.title}
                        </p>
                        <h1 className="About__name">
                            {aboutTexts.name}
                        </h1>
                        <p className="About__description">
                            {aboutTexts.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;