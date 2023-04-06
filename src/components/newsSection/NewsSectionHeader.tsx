import { Box, Typography } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { styles } from './newsSectionStyles';
import { IStyles } from '../../types/globalTypes';
import ExternalLink from '../svgs/ExternalLink';
import { PRIMARY_COLOR } from '../../constants/colors';

const { titleContainer, link: linkStyle, halfWidth, linkColor } = styles;
function NewsSectionHeader() {
  return (
    <Box sx={titleContainer}>
      <Box sx={{ ...titleContainer, ...halfWidth } as IStyles}>
        <ArticleOutlinedIcon />
        <Typography variant='h6' sx={{ marginLeft: 2 }}>
          Latest news
        </Typography>
      </Box>
      <Box sx={{ ...linkStyle, ...halfWidth } as IStyles}>
        <Typography variant='subtitle2' sx={linkColor}>
          Visit our blog
        </Typography>
        <ExternalLink color={PRIMARY_COLOR} />
      </Box>
    </Box>
  );
}

export default NewsSectionHeader;
