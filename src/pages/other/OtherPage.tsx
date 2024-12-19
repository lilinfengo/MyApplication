import { IonApp, IonHeader, IonPage, IonTitle, IonToolbar ,IonButtons, IonBackButton, IonContent } from "@ionic/react";
import React from "react";
import '../other/OtherPage.css'
import { useLocation } from "react-router";

function OtherPage() {
    // 接受数据
    const location = useLocation()
    const valueRecedived = location.state as { name: string } | undefined
    // 判断是否有值
    const showBackButton = Boolean(valueRecedived)

    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='primary'>
                        <IonButtons slot="start">
                            {/* 有值显示按钮 */}
                            {showBackButton && (
                                <IonBackButton defaultHref="home"></IonBackButton>
                            )}
                        </IonButtons>
                        <IonTitle id="titleid">
                            Other page
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    {/* 有值显示数据, 无值显示no data */}
                    {valueRecedived ? (
                        <p>从home界面传值过来的</p>
                    ) : <p>no data </p>}
                </IonContent>
            </IonPage>
        </IonApp>
    )
}

export default OtherPage