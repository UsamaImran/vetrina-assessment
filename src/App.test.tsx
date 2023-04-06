import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { SIDEBAR_MENUS } from '../src/constants/gobalConsts'
import App from './App'
import { ISideMenu } from './types/globalTypes'

test('Check whether header has the text', () => {
    render(<App />)
    const linkElement = screen.getByText(/What's new/i)
    expect(linkElement).toBeInTheDocument()
})

test('Check whether screen has Welcome Message', () => {
    render(<App />)
    const linkElement = screen.getByText(/Welcome/i)
    expect(linkElement).toBeInTheDocument()
})

test('check select menu', () => {
    render(<App />)
    const select = screen.getByText(/Select your shop/i)
    expect(select).toBeInTheDocument()
})

const testSideBarMenus = (menusList: ISideMenu[]) => {
    menusList.forEach((menu) => {
        test(`check menu item: ${menu.title}`, () => {
            render(<App />)
            const textMenu = screen.queryAllByText(
                new RegExp('\\b' + menu.title + '\\b')
            )

            expect(textMenu[0]).toBeInTheDocument()
        })
    })
}

testSideBarMenus(SIDEBAR_MENUS)
