import { Box, Typography } from '@mui/material'
import { ICard, IStyles } from '../../types/globalTypes'
import { styles } from './marketingCardsStyles'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import device from '../../assets/images/Device.svg'
import playStore from '../../assets/images/playStore.svg'
import appleStore from '../../assets/images/appleStore.svg'
import newApp from '../../assets/images/newApp.svg'
import domain from '../../assets/images/domain.svg'
import React from 'react'

const {
    cardWidth,
    orangeBackground,
    orangeCardContainer,
    sectionWidth,
    showMore,
    showMoreSection,
    iconStyle,
    orangeCardContent,
    imgDevice,
    headerRow,
    marginLeft,
    footerLabel,
    header,
    domainCard,
    productCard,
    domainCardBody,
} = styles

export const marketingCardsData: ICard[] = [
    {
        header: (
            <Box sx={orangeCardContainer}>
                <Box sx={sectionWidth}>
                    <Typography
                        variant="h6"
                        color="white"
                        sx={orangeCardContent}
                    >
                        Sell your products on your exclusive APP published
                        on the stores
                    </Typography>
                    <Box sx={showMoreSection}>
                        <Typography
                            variant="subtitle2"
                            color="white"
                            sx={showMore}
                        >
                            Show More
                        </Typography>
                        <ArrowForwardOutlinedIcon sx={iconStyle} />
                    </Box>
                </Box>

                <Box sx={sectionWidth}>
                    <img
                        src={device}
                        alt="device"
                        style={imgDevice as React.CSSProperties}
                    />
                </Box>
            </Box>
        ),
        footer: (
            <Box sx={orangeCardContainer}>
                <Box sx={sectionWidth}>
                    <img
                        src={appleStore}
                        alt="appleStore"
                        style={{ width: '80%' }}
                    />
                </Box>
                <Box sx={sectionWidth}>
                    <img
                        src={playStore}
                        style={{ width: '90%', marginLeft: 10 }}
                        alt="playStore"
                    />
                </Box>
            </Box>
        ),
        cardContainerStyles: {
            ...cardWidth,
            ...orangeBackground,
        } as IStyles,
    },
    {
        header: (
            <Box sx={headerRow}>
                <img src={newApp} alt="newApp" />
                <Typography variant="h6" sx={marginLeft}>
                    Extensions Marketplace
                </Typography>
            </Box>
        ),
        body: (
            <Box sx={domainCardBody}>
                <Box>
                    <Box sx={domainCard}>
                        <img src={domain} alt="domain" />
                    </Box>
                    <Typography variant="subtitle1">
                        Connect your own domain
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                    <Box sx={productCard}>
                        <Typography variant="h4" color="white">
                            +50
                        </Typography>
                        <Typography variant="h6" color="white">
                            Prodotti
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ marginLeft: 5 }}>
                        50 Additional Products
                    </Typography>
                </Box>
            </Box>
        ),
        footer: (
            <Box sx={header}>
                <Box sx={headerRow}>
                    <Typography variant="subtitle2" sx={footerLabel}>
                        Discover all extensions
                    </Typography>

                    <ArrowForwardOutlinedIcon
                        sx={{ ...footerLabel, fontSize: 20, marginLeft: 1 }}
                    />
                </Box>
            </Box>
        ),
        cardContainerStyles: { ...cardWidth, paddingRight: 0 },
    },
]
