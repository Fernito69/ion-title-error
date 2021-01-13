import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>It produces an error on iOS!</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Page;
