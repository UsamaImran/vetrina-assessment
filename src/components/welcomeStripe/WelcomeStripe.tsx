import { Box, Typography } from '@mui/material';
import { EXTERNAL_LINK } from '../../constants/endpoints';
import ExternalLink from '../svgs/ExternalLink';
import { styles } from './welcomeStripeStyles';

const { linkContainer, linkText, welcomeStripeContainer, welcomeTitle } =
  styles;

const WelcomeStripe = () => {
  return (
    <Box sx={welcomeStripeContainer}>
      <Box>
        <Typography sx={welcomeTitle} variant='h4'>
          Welcome Mario!
        </Typography>
      </Box>
      <Box sx={linkContainer}>
        <a
          target={'_blank'}
          rel='noreferrer'
          href={`https://${EXTERNAL_LINK}`}
          style={linkContainer as React.CSSProperties}
        >
          <Typography variant='subtitle1' color='white' sx={linkText}>
            {EXTERNAL_LINK}
          </Typography>
          <ExternalLink color='white' />
        </a>
      </Box>
    </Box>
  );
};

export default WelcomeStripe;
