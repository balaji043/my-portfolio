import { FC } from 'react'
import { Heading, Subtitle } from '../HomeHero/HomeHeroElements'
import { RecentWorksContainer, IntroSection, WorksWrapper } from './RecentWorksElements'
import WorksItem from 'components/WorkItem';

interface Props {

}

const recentWorksText = {
    heading: `Crafted with love`,
    subtitle: `These are a selection of my recent works`,
}

const RecentWorks: FC<Props> = (prop) => {
    return (
        <RecentWorksContainer>
            <IntroSection>
                <Heading>{recentWorksText.heading}</Heading>
                <Subtitle>{recentWorksText.subtitle}</Subtitle>
            </IntroSection>
            <WorksWrapper>
                <WorksItem />
                <WorksItem />
            </WorksWrapper>
        </RecentWorksContainer>
    )
}

export default RecentWorks
