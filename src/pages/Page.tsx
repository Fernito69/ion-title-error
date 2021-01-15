import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import Page2 from './Page2';

const Page: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => setShowModal(true)}>Show modal</IonButton>
        <IonModal isOpen={showModal}>
          <Page2 setShowModal={setShowModal}/>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Page;
