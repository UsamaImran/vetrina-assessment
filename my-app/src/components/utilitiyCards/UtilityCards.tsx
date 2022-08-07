import { Box } from '@mui/material'
import Card from '../card/Card'
import { utilityCardsData } from './utilityCardData'
import { styles } from './utilityCardsStyles'

const { utilityCardsContainer } = styles

const UtilityCards = () => {
    return (
        <Box sx={utilityCardsContainer}>
            {utilityCardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </Box>
    )
}

export default UtilityCards
