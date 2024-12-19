import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ListPage from './pages/list/ListPage';
import SharePage from './pages/share/SharePage';
import SearchPage from './pages/search/SearchPage'
import OtherPage from './pages/other/OtherPage'

import { homeOutline, listCircle, shareOutline, searchCircle } from 'ionicons/icons'
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/anntherpage" render={() => <ListPage />} exact={true} />
          <Route path="/share" render={() => <SharePage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} />
          <Route path='/other' render={() => <OtherPage/>} exact={true}/>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href='/home'>
            <IonIcon icon={homeOutline}></IonIcon>
            Home
          </IonTabButton>
          <IonTabButton tab="anntherpage" href='/anntherpage'>
            <IonIcon icon={listCircle}></IonIcon>
            list
          </IonTabButton>
          <IonTabButton tab="share" href='/share'>
            <IonIcon icon={shareOutline}></IonIcon>
            share
          </IonTabButton>
          <IonTabButton tab="search" href='/search'>
            <IonIcon icon={searchCircle}></IonIcon>
            serach
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
