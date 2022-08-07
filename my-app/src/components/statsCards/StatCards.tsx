import { Box } from '@mui/material'
import Card from '../card/Card'
import { statsArray } from './statCardsData'
import { styles } from './statCardsStyles'

const { statsCardsContainer } = styles

const StatCards = () => {
    return (
        <Box sx={statsCardsContainer}>
            {statsArray.map((cardItem, index) => (
                <Card key={index} {...cardItem} />
            ))}
        </Box>
    )
}

export default StatCards
