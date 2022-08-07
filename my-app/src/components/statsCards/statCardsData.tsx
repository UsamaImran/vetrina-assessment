import { Box, Typography } from '@mui/material'
import { styles } from './statCardsStyles'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import { ICard, IStyles } from '../../types/globalTypes'
import { GRAY_COLOR } from '../../constants/colors'

const {
    header,
    headerRow,
    iconMargin,
    visitorCardBody,
    headerSubLabel,
    footerLabel,
    orderCardRow,
    cardWidth,
} = styles
export const statsArray: ICard[] = [
    {
        header: (
            <Box sx={header}>
                <Box sx={headerRow}>
                    <RemoveRedEyeOutlinedIcon sx={iconMargin} />
                    <Typography variant="h6">Visitors</Typography>
                </Box>
                <Box sx={{ ...headerRow, ...headerSubLabel } as IStyles}>
                    <Typography variant="subtitle2">This Month</Typography>
                    <KeyboardArrowDownOutlinedIcon />
                </Box>
            </Box>
        ),
        body: (
            <Box sx={header}>
                <Typography variant="h4" sx={visitorCardBody}>
                    1824
                </Typography>
            </Box>
        ),
        footer: (
            <Box sx={header}>
                <Box sx={headerRow}>
                    <Typography variant="subtitle2" sx={footerLabel}>
                        Do you want more visits? Contact us!
                    </Typography>
                    <ArrowForwardOutlinedIcon
                        sx={{
                            ...footerLabel,
                            fontSize: 20,
                            marginLeft: 1,
                        }}
                    />
                </Box>
            </Box>
        ),
        cardContainerStyles: cardWidth,
    },
    {
        header: (
            <Box sx={header}>
                <Box sx={headerRow}>
                    <FormatListBulletedOutlinedIcon sx={iconMargin} />
                    <Typography variant="h6">Orders</Typography>
                </Box>
                <Box sx={{ ...headerRow, ...headerSubLabel } as IStyles}>
                    <Typography variant="subtitle2">This Month</Typography>
                    <KeyboardArrowDownOutlinedIcon />
                </Box>
            </Box>
        ),
        body: (
            <Box>
                <Box sx={orderCardRow}>
                    <Typography variant="subtitle1" color={GRAY_COLOR}>
                        Orders received:
                    </Typography>
                    <Typography>156</Typography>
                </Box>
                <Box sx={orderCardRow}>
                    <Typography variant="subtitle1" color={GRAY_COLOR}>
                        Earnings:
                    </Typography>
                    <Typography>
                        {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'EUR',
                        }).format(189324)}
                    </Typography>
                </Box>
            </Box>
        ),
        footer: (
            <Box sx={header}>
                <Box sx={headerRow}>
                    <Typography variant="subtitle2" sx={footerLabel}>
                        10 free tips to increase your sales
                    </Typography>
                </Box>
            </Box>
        ),
        cardContainerStyles: cardWidth,
    },
]
