import { FC } from 'react'
import { RecentWorksContainer, Heading, Subtitle,IntroSection, WorksWrapper } from './RecentWorksElements'
import WorksItem from 'components/WorkItem';

interface Props {

}

const recentWorksText = {
    heading: `Crafted with love.`,
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
