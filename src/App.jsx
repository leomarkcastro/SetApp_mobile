import React, { useEffect } from 'react'

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import Home from './pages/Home/Home';
import Initializer from './pages/Initializers/Initializer';
import BuildPage from './pages/BuildPage/BuildPage';
import PickPage from './pages/PickPage/PickPage';
import Article_BSOD from './pages/Article-BSOD/Article-BSOD';

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

import './flickity.css'

/* Theme variables */
import './theme/variables.css';
import Article from './pages/Article/Article';
import BSOD_Solution from './pages/BSOD_Solution/BSOD_Solution';


import hardwareback from './utility/HardwareBack/HardwareBack';

const App = () => {

  useEffect(() => {
      hardwareback()
  }, []);

  return (
    <IonApp>
        <IonReactRouter>

          <IonRouterOutlet>

            <Home path="/home"/>

            <Route exact path="/init" component={Initializer} />
            <Route exact path="/build" component={BuildPage} />
            <Route exact path="/pick/:whatComp/:target/:targetindex" component={PickPage} />
            <Route exact path="/article/sp/bsod" component={Article_BSOD} />
            <Route exact path="/article/sp/bsod/solution" component={BSOD_Solution} />
            <Route exact path="/article/:article_index" component={Article} />

            <Redirect from="/" to="/init" exact/>

          </IonRouterOutlet>

        </IonReactRouter>
    </IonApp>
  )

}

export default App;
