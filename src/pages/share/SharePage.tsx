import { IonApp, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import '../share/SharePage.css'

function SharePage() {
    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar color={"primary"}>
                        <IonTitle id="titleid">
                            share page
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonPage>
        </IonApp>
    )
}

export default SharePage