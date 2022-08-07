import { Theme } from '@emotion/react'
import { styled, SxProps } from '@mui/material'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { PRIMARY_BLACK } from '../../constants/colors'
import { DRAWER_WIDTH as drawerWidth } from '../../constants/gobalConsts'
import { IStyles } from '../../types/globalTypes'
import MuiAppBar from '@mui/material/AppBar'

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

export const getIconStyle = (open: boolean) =>
    ({
        marginRight: 5,
        ...(open && { display: 'none' }),
    } as SxProps<Theme>)

export const styles: IStyles = {
    appBarContainer: {
        backgroundColor: 'white',
        boxShadow: 'none',
        paddingLeft: 0,
        paddingRight: 4,
    },
    headerBody: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    menuIcon: {
        color: PRIMARY_BLACK,
    },
    image: {
        marginRight: 3,
    },
}
