import {
  DARK_BLUE,
  PRIMARY_COLOR,
  ORANGE,
  PRIMARY_GREEN,
} from '../../constants/colors';
import { IStyles } from '../../types/globalTypes';

export const styles: IStyles = {
  utilityCardsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRow: { display: 'flex', alignItems: 'center' },
  customCardColor: { backgroundColor: DARK_BLUE, color: 'white' },
  rotateIcon: {
    transform: 'rotate(90deg)',
    marginRight: 1,
  },
  footerLabel: {
    color: PRIMARY_COLOR,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  cardWidth: {
    width: '100%',
  },
  marketFigure: {
    color: ORANGE,
  },
  utilitySection: {
    marginTop: 2,
  },

  customColorHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  imgStyle: { marginRight: 2 },
  customFooterLabel: {
    color: PRIMARY_GREEN,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: '168px',
    height: '50px',
    color: 'white',
    textTransform: 'none',
  },
};
