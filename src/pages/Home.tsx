import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>        
        <IonItem routerLink={"/page"}>Go to next page...</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
