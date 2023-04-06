import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Badge,
} from '@mui/material';
import React, { useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { SIDEBAR_MENUS } from '../../constants/gobalConsts';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ILayoutProps, ISideMenu } from '../../types/globalTypes';

import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerHeader,
  getIcon,
  getListItemStyles,
  getListItemTextStyles,
  styles,
} from './sidebarStyles';
import { LIGHT_BLUE, PRIMARY_COLOR } from '../../constants/colors';

const {
  drawerHeader,
  accordion,
  innerBox,
  divider,
  selectContainer,
  selectStyles,
  badge,
} = styles;

const Sidebar: React.FC<ILayoutProps> = ({
  open,
  handleDrawer,
  selectedMenu,
  setSelectedMenu,
}) => {
  const router = useNavigate();

  const renderSideBarMenus = useCallback(
    (menus: ISideMenu[], key = 'initial') => {
      return (
        <Box>
          <List key={key}>
            {menus.map((menu) => {
              const isCurrentSelected = selectedMenu === menu.title;

              return (
                <>
                  <ListItem
                    key={menu.id}
                    disablePadding
                    sx={getListItemStyles(isCurrentSelected)}
                    onClick={() => {
                      setSelectedMenu(menu.title);
                      router(menu.route);
                    }}
                  >
                    {!menu.hasChildren ? (
                      <ListItemButton>
                        {getIconAndText(menu, isCurrentSelected, open)}
                      </ListItemButton>
                    ) : (
                      <Accordion sx={accordion} key={menu.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Box sx={innerBox}>
                            {getIconAndText(menu, isCurrentSelected, open)}
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            backgroundColor: LIGHT_BLUE,
                          }}
                        >
                          {renderSideBarMenus(menu.children, menu.id)}
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </ListItem>
                  {menu.hasSeparator && <Divider sx={divider} />}
                </>
              );
            })}
          </List>
        </Box>
      );
    },
    [open, router, setSelectedMenu, selectedMenu]
  );
  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader sx={drawerHeader}>
        <img src={logo} alt='logo' />
        <IconButton onClick={() => handleDrawer(false)}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Box>
        <Box>{renderSideBarMenus(SIDEBAR_MENUS)}</Box>
        <Box sx={selectContainer}>
          <Typography variant='subtitle1'>Select your shop</Typography>
          <select style={selectStyles as React.CSSProperties}>
            <option style={{ color: '#233B53' }}>Usama</option>
            <option style={{ color: '#233B53' }}>Hamza</option>
          </select>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

const getIconAndText = (
  menu: ISideMenu,
  isCurrentSelected: boolean,
  open: boolean
) => (
  <>
    {getIcon(menu, isCurrentSelected ? PRIMARY_COLOR : '')}
    <ListItemText
      primary={menu.title}
      sx={getListItemTextStyles(isCurrentSelected, open)}
    />

    {menu.badgeValue > 0 && <Badge sx={badge} badgeContent={menu.badgeValue} />}
  </>
);
