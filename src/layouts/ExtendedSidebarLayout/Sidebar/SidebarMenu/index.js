import {
  ListSubheader,
  Box,
  List,
  styled,
  ListItem,
  Button
} from '@mui/material';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { useTranslation } from 'react-i18next';
import { NavLink as RouterLink } from 'react-router-dom';
import menuItems from './items';
import { SearchBar } from './SearchBar';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  margin-top:${theme.spacing(1)};
  .MuiList-root {
    padding: ${theme.spacing(1)};
    margin-top:${theme.spacing(1.5)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }

        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }

          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${theme.colors.primary.main};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.Mui-active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu({ open }) {
  const { t } = useTranslation();
  const { closeSidebar } = useContext(SidebarContext);
  return (
    <>
      {menuItems.map((section) => (
        <MenuWrapper key={section.heading}>
          <SearchBar open={open} />
          <SubMenuWrapper>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  {t(section.heading)}
                </ListSubheader>
              }
            >
              {section.items[0].items.map((d) => {
                return (
                  <ListItem component="div" key={d.name}>
                    <Button
                      disableRipple
                      activeClassName="Mui-active"
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={d.link}
                      startIcon={d.bicon}
                    >
                      {open ? d.name : ''}
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </SubMenuWrapper>
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;
