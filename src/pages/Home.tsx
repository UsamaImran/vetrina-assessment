import { Box } from '@mui/material'
import MarketingCards from '../components/marketingCards/MarketingCards'
import NewsSection from '../components/newsSection/NewsSection'
import StatCards from '../components/statsCards/StatCards'
import UtilityCards from '../components/utilitiyCards/UtilityCards'
import WelcomeStripe from '../components/welcomeStripe/WelcomeStripe'
import { styles } from './homeStyles'

const { cardsContainer, homeContainer, leftContainer, rightContainer } =
    styles

function Home() {
    return (
        <Box>
            <Box sx={homeContainer}>
                <WelcomeStripe />
            </Box>
            <Box sx={cardsContainer}>
                <Box sx={leftContainer}>
                    <StatCards />
                    <MarketingCards />
                    <NewsSection />
                </Box>
                <Box sx={rightContainer}>
                    <UtilityCards />
                </Box>
            </Box>
        </Box>
    )
}

export default Home
