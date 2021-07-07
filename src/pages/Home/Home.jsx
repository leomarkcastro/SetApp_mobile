import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { albumsOutline, fileTrayStackedOutline, constructOutline } from 'ionicons/icons';

import style from "./Home.module.css"

import Tutorials from '../Tutorials/Tutorials';
import BuildPC from '../BuildPC/BuildPC';
import Dashboard from '../Dashboard/Dashboard';

const Home = props => {

    return(
        <Route path={props.path}>

            <IonTabs>

                <IonRouterOutlet animated={true}>
                    <Route exact path="/home/tutorials" component={Tutorials}/>
                    <Route exact path="/home/build" component={BuildPC}/>
                    <Route exact path="/home/dashboard" component={Dashboard}/>
                    
                    < Redirect from="/home" to="/home/dashboard" exact/>
                </IonRouterOutlet>

                <IonTabBar slot="bottom" defaultValue="dash">


                    <IonTabButton tab="build" href="/home/build">
                        <IonIcon icon={constructOutline} />
                        <IonLabel>Build PC</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="dash" href="/home/dashboard">
                        <IonIcon icon={albumsOutline} />
                        <IonLabel>Dashboard</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="tutorials" href="/home/tutorials">
                        <IonIcon icon={fileTrayStackedOutline} />
                        <IonLabel>Tutorials</IonLabel>
                    </IonTabButton>

                </IonTabBar>

            </IonTabs>

        </Route>
    )
    
};

export default Home;
