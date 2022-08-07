import { styled, Theme, CSSObject, SxProps } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import {
    DATA_TYPES,
    DRAWER_WIDTH as drawerWidth,
} from '../../constants/gobalConsts'
import { ISideMenu, IStyles } from '../../types/globalTypes'
import {
    PRIMARY_COLOR,
    LIGHT_BLUE,
    SECONDARY_GREEN,
} from '../../constants/colors'

export const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}))

export const getIcon = (menu: ISideMenu, color: string) =>
    typeof menu.icon === DATA_TYPES.STRING ? (
        <i className={`${menu.icon} mr-2`} style={{ color }} />
    ) : (
        <menu.icon className="mr-2" sx={{ color }} />
    )

export const getListItemStyles = (isCurrentSelected: boolean) =>
    ({
        display: 'block',
        borderLeft: isCurrentSelected ? `4px solid ${PRIMARY_COLOR}` : '',
        backgroundColor: isCurrentSelected ? LIGHT_BLUE : '',
    } as SxProps<Theme>)

export const getListItemTextStyles = (
    isCurrentSelected: boolean,
    open: boolean
) =>
    ({
        opacity: open ? 1 : 0,
        color: isCurrentSelected ? PRIMARY_COLOR : '',
        fontSize: '10px',
    } as SxProps<Theme>)

export const styles: IStyles = {
    drawerHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 0,
    },
    accordion: { boxShadow: 'none' },
    innerBox: { display: 'flex', alignItems: 'center' },
    divider: { marginTop: 5, marginBottom: 5 },
    selectContainer: {
        marginTop: '100px',
        width: '100%',
        height: '90px',
        paddingRight: 3,
        marginLeft: 3,
    },
    selectStyles: {
        border: '1px solid rgba(10, 37, 64, 0.24)',
        borderRadius: '4px',
        width: '80%',
        textAlign: 'center',
        padding: '9px 12px 9px 2px',
        paddingRight: '100px',
    },
    badge: {
        '& .MuiBadge-badge': {
            color: 'white',
            backgroundColor: SECONDARY_GREEN,
        },
    },
}
