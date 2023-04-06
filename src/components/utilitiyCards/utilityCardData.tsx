import { Box, Button, Typography } from '@mui/material';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import { styles } from './utilityCardsStyles';
import { ICard, IStyles } from '../../types/globalTypes';
import star from '../../assets/images/star.svg';
import person from '../../assets/images/person.svg';
import React from 'react';
import { PRIMARY_GREEN } from '../../constants/colors';

const {
  customCardColor,
  rotateIcon,
  header,
  headerRow,
  footerLabel,
  cardWidth,
  marketFigure,
  utilitySection,
  imgStyle,
  customFooterLabel,
  button,
} = styles;

export const utilityCardsData: ICard[] = [
  {
    header: (
      <Box sx={header}>
        <Box sx={headerRow}>
          <BuildOutlinedIcon sx={rotateIcon} />
          <Typography variant='h6' sx={{ marginLeft: 1 }}>
            Configure your shop
          </Typography>
        </Box>
      </Box>
    ),
    body: (
      <Box>
        <Box>
          <Typography sx={marketFigure} variant='h4'>
            45%
          </Typography>
          <Typography sx={marketFigure} variant='subtitle2'>
            completed
          </Typography>
        </Box>
        <Box sx={utilitySection}>
          <Typography>
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </Box>
      </Box>
    ),
    footer: (
      <Box sx={header}>
        <Box sx={headerRow}>
          <Typography variant='subtitle2' sx={footerLabel}>
            Complete the Setup!
          </Typography>

          <ArrowForwardOutlinedIcon
            sx={{ ...footerLabel, fontSize: 20, marginLeft: 1 }}
          />
        </Box>
      </Box>
    ),
    cardContainerStyles: { ...cardWidth, height: '300px' },
  },
  {
    header: (
      <Box sx={headerRow}>
        <img
          src={star}
          alt='star'
          width={25}
          style={imgStyle as React.CSSProperties}
        />
        <Typography variant='h6' sx={{ paddingTop: 0.5, marginLeft: 1 }}>
          Trustpilot
        </Typography>
      </Box>
    ),
    body: (
      <Box>
        <Typography color={'white'} variant='subtitle1'>
          Show us your love by leaving a &nbsp;
          <span style={{ color: PRIMARY_GREEN }}> positive</span>
          &nbsp; review on trust pilot and receive the extension of
          <b> 50 additional products</b>
        </Typography>
      </Box>
    ),
    footer: (
      <Box sx={header}>
        <Box sx={headerRow}>
          <Typography variant='subtitle2' sx={customFooterLabel}>
            Write a review on Trustpilot
          </Typography>

          <ArrowForwardOutlinedIcon
            sx={{
              ...customFooterLabel,
              fontSize: 20,
              marginLeft: 1,
            }}
          />
        </Box>
      </Box>
    ),
    cardContainerStyles: {
      ...customCardColor,
      ...cardWidth,
    } as IStyles,
  },
  {
    header: (
      <Box sx={headerRow}>
        <PeopleOutlinedIcon sx={imgStyle} />
        <Typography variant='h6'>Invite Friend</Typography>
      </Box>
    ),
    body: (
      <Box>
        <Typography>
          <b style={{ color: PRIMARY_GREEN }}>Receive 50 products</b>
          &nbsp; by inviting a friend who subscribes to a plan. Your friend will
          receive a 30% discount coupon valid for any plan.
        </Typography>
      </Box>
    ),
    footer: (
      <Box sx={headerRow}>
        <Typography variant='subtitle2' sx={footerLabel}>
          Start inviting friends!
        </Typography>
        <ArrowForwardOutlinedIcon
          sx={{ ...footerLabel, fontSize: 20, marginLeft: 1 }}
        />
      </Box>
    ),
    cardContainerStyles: cardWidth,
  },
  {
    header: (
      <Box sx={headerRow}>
        <HeadsetOutlinedIcon sx={imgStyle} />
        <Typography variant='h6'>Customer support</Typography>
      </Box>
    ),
    body: (
      <Box sx={headerRow}>
        <img
          src={person}
          alt='person'
          style={imgStyle as React.CSSProperties}
        />
        <Typography sx={{ marginLeft: 2 }}>
          Simone is here to help you.
        </Typography>
      </Box>
    ),
    footer: (
      <Button size='large' sx={button}>
        Contact Us
      </Button>
    ),
    cardContainerStyles: cardWidth,
  },
];
