import React, { useState } from 'react';
import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {personCircle,helpCircle, chevronUpCircle, document, colorPalette, globe} from 'ionicons/icons';
import {useHistory} from 'react-router-dom'

const Home: React.FC = () => {
  // 设置值
  const [valuePass] = useState<string>('Some value')
  const history = useHistory();

  const handleButtonClick = () => {
    history.push({
      pathname:'/other',
      state: valuePass
    });
  }
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="primary">
          <IonTitle id='title'>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton id = "textlowcase" color="dark" fill="solid">
            <IonIcon slot='start' icon={personCircle}></IonIcon>
            persen
          </IonButton>
        <IonButton id='textlowcase'>
          header
          <IonIcon slot='end' icon={helpCircle}></IonIcon>
        </IonButton>

        <h1>
          Page One
        </h1>
        <p>
          Navigate to the next page to see the back button.
        </p>
      
        <IonButton id='textlowcase' routerDirection='back' href='/other' onClick={handleButtonClick}>Navigate</IonButton>

        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side='top'>
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
