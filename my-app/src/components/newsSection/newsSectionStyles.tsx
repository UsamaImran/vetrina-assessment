import {
    GRAY_COLOR,
    PRIMARY_BLACK,
    PRIMARY_COLOR,
} from '../../constants/colors'
import { IStyles } from '../../types/globalTypes'

export const styles: IStyles = {
    newsSectionContainer: {
        margin: 2,
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '24px',
        boxShadow:
            '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 3,
    },
    halfWidth: { width: '50%' },
    link: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        cursor: 'pointer',
    },
    linkColor: {
        color: PRIMARY_COLOR,
        textDecoration: 'underline',
        marginRight: 2,
    },
    newsItemContainer: {
        display: 'flex',
        padding: '10px 0px',
        width: '50%',
        textAlign: 'left',
        marginBottom: 2,
    },
    image: {
        height: '100px',
        width: '100%',
    },
    newsItemInfoContainer: {
        marginLeft: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '70%',
        paddingRight: 2,
    },
    newsListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    imageContainer: {
        width: '30%',
    },
    newsCategory: {
        color: PRIMARY_COLOR,
    },
    estimation: {
        color: GRAY_COLOR,
        textDecoration: 'underline',
    },
    newsTitle: {
        color: PRIMARY_BLACK,
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: 1.3,
    },
}
