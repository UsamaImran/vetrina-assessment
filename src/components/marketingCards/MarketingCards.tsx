import { Box } from '@mui/material'
import Card from '../card/Card'
import { marketingCardsData } from './marketingCardsData'
import { styles } from './marketingCardsStyles'
const { marketingCardsContainer } = styles
function MarketingCards() {
    return (
        <Box sx={marketingCardsContainer}>
            {marketingCardsData.map((cardItem, index) => (
                <Card key={index} {...cardItem} />
            ))}
        </Box>
    )
}

export default MarketingCards
