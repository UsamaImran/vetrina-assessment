import { SvgIconTypeMap, SxProps, Theme } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface ISideMenu {
    id: string
    title: string
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | string
    hasChildren: boolean
    children: ISideMenu[]
    isExpanded: boolean
    isSelected: boolean
    badgeValue: number
    hasSeparator?: boolean
    route: string
}

export interface IStyles {
    [key: string]: SxProps<Theme>
}

export interface INewsCardItem {
    id: number | string
    title: string
    category: string
    img: string
}

export interface IExternalLink {
    width?: string
    height?: string
    color?: string
}

export interface ICard {
    header?: JSX.Element
    body?: JSX.Element
    footer?: JSX.Element
    cardContainerStyles?: SxProps<Theme>
}

export interface ILayout {
    children: React.ReactNode | JSX.Element
}

export interface ILayoutProps {
    theme?: Theme
    handleDrawer: (val: boolean) => void
    open: boolean
    selectedMenu: string
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>
}
