import { BACKGROUND_GRAY } from '../../constants/colors'
import { IStyles } from '../../types/globalTypes'

export const styles: IStyles = {
    layoutContainer: { display: 'flex' },
    childrenContainer: {
        flexGrow: 1,
        marginTop: '4rem',
        backgroundColor: BACKGROUND_GRAY,
    },
}
