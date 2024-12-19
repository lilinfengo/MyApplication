import { IonApp, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

function SearchPage() {
    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar color={"primary"}>
                        <IonTitle id="titleid">
                            search page
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                
            </IonPage>
        </IonApp>
    )
}

export default SearchPage