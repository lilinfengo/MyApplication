import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import '../list/ListPage.css'
import SliderComponent from '../../utils/SliderComponent'

function ListPage() {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle id="textcenter">
                        ListPage
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <SliderComponent></SliderComponent>
            </IonContent>
        </IonPage>
    )
}

export default ListPage