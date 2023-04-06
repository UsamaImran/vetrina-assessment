import React, { ReactElement, ReactNode } from 'react'

export interface IList<T> {
    items: T[]
    keyExtractor: (item: T, index?: number) => string
    render: (item: T, index?: number) => ReactNode | ReactElement
    listContainerStyles?: React.CSSProperties
    listItemStyles?: React.CSSProperties
}

const List = <T extends unknown>({
    items,
    keyExtractor,
    render,
    listContainerStyles,
    listItemStyles,
}: IList<T>) => {
    return (
        <div style={listContainerStyles}>
            {items?.map((item, index) => (
                <div key={keyExtractor(item)} style={listItemStyles}>
                    {render(item, index)}
                </div>
            ))}
        </div>
    )
}
export default List
