import { Box, Card as MuiCard } from '@mui/material'
import { ICard, IStyles } from '../../types/globalTypes'
import { styles } from './cardStyles'

const { cardContainer, cardElementsWrapper } = styles

const Card: React.FC<ICard> = ({
    header,
    body,
    footer,
    cardContainerStyles,
}) => {
    return (
        <MuiCard
            sx={{ ...cardContainer, ...cardContainerStyles } as IStyles}
        >
            <Box sx={cardElementsWrapper}>
                <Box>{header}</Box>
                <Box>{body}</Box>
                <Box>{footer}</Box>
            </Box>
        </MuiCard>
    )
}

export default Card
