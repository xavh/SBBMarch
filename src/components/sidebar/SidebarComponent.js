import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';

import FLAGS from 'components/flags/allflags';
import {
    BEFlag,
    CAFlag,
    CHFlag,
    CNFlag,
    DEFlag,
    ESFlag,
    FRFlag,
    GBFlag,
    HKFlag,
    ITFlag,
    JPFlag,
    KRFlag,
    NLFlag,
    USFlag,
    TWFlag
} from 'components/flags/flags';

import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.market}
                items={[
                    SLUGS.marketJP,
                    SLUGS.marketUS,
                    SLUGS.marketFR,
                    SLUGS.marketTW,
                    SLUGS.marketUK,
                    SLUGS.marketDE,
                    SLUGS.marketIT,
                    SLUGS.marketBE,
                    SLUGS.marketNL,
                    SLUGS.marketES,
                    SLUGS.marketCH
                ]}
                title='E-CO Markets'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.marketJP}
                    title='Japan'
                    level={2}
                    icon={JPFlag}
                    onClick={() => onClick(SLUGS.marketJP)}
                />
                <MenuItem
                    id={SLUGS.marketUS}
                    title='United States'
                    level={2}
                    icon={USFlag}
                    onClick={() => onClick(SLUGS.marketUS)}
                />
                <MenuItem
                    id={SLUGS.marketFR}
                    title='France'
                    level={2}
                    icon={FRFlag}
                    onClick={() => onClick(SLUGS.marketFR)}
                />
                <MenuItem
                    id={SLUGS.marketTW}
                    title='Taiwan'
                    level={2}
                    icon={TWFlag}
                    onClick={() => onClick(SLUGS.marketTW)}
                />
                <MenuItem
                    id={SLUGS.marketUK}
                    title='United Kingdom'
                    level={2}
                    icon={GBFlag}
                    onClick={() => onClick(SLUGS.marketUK)}
                />
                <MenuItem
                    id={SLUGS.marketDE}
                    title='Germany'
                    level={2}
                    icon={DEFlag}
                    onClick={() => onClick(SLUGS.marketDE)}
                />
                <MenuItem
                    id={SLUGS.marketIT}
                    title='Italy'
                    level={2}
                    icon={ITFlag}
                    onClick={() => onClick(SLUGS.marketIT)}
                />
                <MenuItem
                    id={SLUGS.marketBE}
                    title='Belgium'
                    level={2}
                    icon={BEFlag}
                    onClick={() => onClick(SLUGS.marketBE)}
                />
                <MenuItem
                    id={SLUGS.marketNL}
                    title='Netherlands'
                    level={2}
                    icon={NLFlag}
                    onClick={() => onClick(SLUGS.marketNL)}
                />
                <MenuItem
                    id={SLUGS.marketES}
                    title='Spain'
                    level={2}
                    icon={ESFlag}
                    onClick={() => onClick(SLUGS.marketES)}
                />
                <MenuItem
                    id={SLUGS.marketCH}
                    title='Switzerland'
                    level={2}
                    icon={CHFlag}
                    onClick={() => onClick(SLUGS.marketCH)}
                />
            </MenuItem>
            <MenuItem title='NON E-CO Markets' icon={IconOverview} />

            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
