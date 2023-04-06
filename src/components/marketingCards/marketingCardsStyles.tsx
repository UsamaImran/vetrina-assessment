import { ORANGE, PRIMARY_COLOR, PRIMARY_GREEN } from '../../constants/colors';
import { IStyles } from '../../types/globalTypes';

export const styles: IStyles = {
  marketingCardsContainer: {
    display: 'flex',
    width: '100%',
  },
  cardWidth: {
    width: '50%',
    height: '350px',
  },
  orangeBackground: { backgroundColor: ORANGE },
  orangeCardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionWidth: {
    width: '50%',
  },
  showMore: {
    textDecoration: 'underline',
  },
  showMoreSection: { display: 'flex ' },
  iconStyle: { color: 'white', fontSize: '20px', marginLeft: 1 },
  orangeCardContent: {
    fontSize: '22px',
    fontWeight: 500,
    marginTop: 2,
  },
  imgDevice: {
    marginLeft: 'auto',
  },
  headerRow: { display: 'flex', alignItems: 'center' },
  marginLeft: { marginLeft: 2 },
  footerLabel: {
    color: PRIMARY_COLOR,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  domainCard: {
    backgroundColor: ORANGE,
    width: '162px',
    height: '164px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  productCard: {
    backgroundColor: PRIMARY_GREEN,
    width: '162px',
    height: '164px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    overflowX: 'hidden',
    marginLeft: 5,
    flexDirection: 'column',
  },
  domainCardBody: { display: 'flex', justifyContent: 'space-between' },
};
