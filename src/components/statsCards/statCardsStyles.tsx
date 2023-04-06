import { GRAY_COLOR, PRIMARY_COLOR } from '../../constants/colors';
import { IStyles } from '../../types/globalTypes';

export const styles: IStyles = {
  statsCardsContainer: {
    display: 'flex',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRow: { display: 'flex', alignItems: 'center' },
  iconMargin: { marginRight: 2 },
  visitorCardBody: {},
  headerSubLabel: {
    color: GRAY_COLOR,
    cursor: 'pointer',
  },
  footerLabel: {
    color: PRIMARY_COLOR,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  orderCardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  cardWidth: {
    width: '50%',
  },
};
