import { IonButton, IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';

interface Props {
  setShowModal: Function;
}

const Page2: React.FC<Props> = ({setShowModal}) => {
  return (
    <IonPage>      
      <IonContent>
        <IonButton onClick={() => setShowModal(false)}>Hide modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
