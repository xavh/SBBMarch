import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const JapanComponent = lazy(() => import('./market/japan'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.marketJP} component={JapanComponent} />
                <Route exact path={SLUGS.marketUS} render={() => <div>United States</div>} />
                <Route exact path={SLUGS.marketFR} render={() => <div>France</div>} />
                <Route exact path={SLUGS.marketTW} render={() => <div>Taiwan</div>} />
                <Route exact path={SLUGS.marketUK} render={() => <div>United Kingdom</div>} />
                <Route exact path={SLUGS.marketDE} render={() => <div>Germany</div>} />
                <Route exact path={SLUGS.marketIT} render={() => <div>Italy</div>} />
                <Route exact path={SLUGS.marketBE} render={() => <div>Belgium</div>} />
                <Route exact path={SLUGS.marketNL} render={() => <div>Netherlands</div>} />
                <Route exact path={SLUGS.marketES} render={() => <div>Spain</div>} />
                <Route exact path={SLUGS.marketCH} render={() => <div>Switzerland</div>} />

                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
