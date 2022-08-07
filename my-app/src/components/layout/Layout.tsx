import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { styles } from './layoutStyles'
import { SIDEBAR_MENUS } from '../../constants/gobalConsts'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { ILayout, ILayoutProps } from '../../types/globalTypes'

const { layoutContainer, childrenContainer } = styles

const Layout: React.FC<ILayout> = ({ children }) => {
    const theme = useTheme()
    const [open, setOpen] = React.useState(true)
    const [selectedMenu, setSelectedMenu] = React.useState(
        SIDEBAR_MENUS[0].title
    )

    const handleDrawer = (value: boolean) => setOpen(value)

    const layoutElementProps: ILayoutProps = {
        theme,
        open,
        handleDrawer,
        selectedMenu,
        setSelectedMenu,
    }

    return (
        <Box sx={layoutContainer}>
            <CssBaseline />
            <Header {...layoutElementProps} />
            <Sidebar {...layoutElementProps} />
            <Box component="main" sx={childrenContainer}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
