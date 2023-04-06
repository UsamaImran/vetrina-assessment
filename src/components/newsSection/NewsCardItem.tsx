import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { INewsCardItem } from '../../types/globalTypes'
import { styles } from './newsSectionStyles'

const {
    newsItemContainer,
    image,
    newsItemInfoContainer,
    imageContainer,
    newsCategory,
    estimation,
    newsTitle,
} = styles

const NewsCardItem: React.FC<INewsCardItem> = ({
    title,
    category,
    img,
    id,
}) => {
    return (
        <Box sx={newsItemContainer}>
            <Box sx={imageContainer}>
                <img
                    src={img}
                    style={image as React.CSSProperties}
                    alt="img"
                />
            </Box>
            <Box sx={newsItemInfoContainer}>
                <Typography sx={newsCategory} variant="subtitle2">
                    {category}
                </Typography>
                <Typography variant="h6" sx={newsTitle}>
                    {title}
                </Typography>
                <Typography sx={estimation} variant="subtitle2">
                    Estimated Reading: {id} min
                </Typography>
            </Box>
        </Box>
    )
}

export default NewsCardItem
