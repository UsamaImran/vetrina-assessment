import { Badge, Box, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import bolt from '../../assets/images/bolt.svg'
import { AppBar, getIconStyle, styles } from './headerStyles'
import { ILayoutProps } from '../../types/globalTypes'

const { headerBody, appBarContainer, menuIcon } = styles

const Header: React.FC<ILayoutProps> = ({
    handleDrawer,
    open,
    selectedMenu,
}) => {
    return (
        <AppBar position="fixed" sx={appBarContainer} open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => handleDrawer(true)}
                    edge="start"
                    sx={getIconStyle(open)}
                >
                    <MenuIcon sx={menuIcon} />
                </IconButton>
                <Box sx={headerBody}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color={'black'}
                    >
                        {selectedMenu}
                    </Typography>
                    <Box className="flex">
                        <img src={bolt} className="mr-3" alt="bolt" />
                        <Badge color="error" badgeContent={2}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                color={'black'}
                            >
                                What's new
                            </Typography>
                        </Badge>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
