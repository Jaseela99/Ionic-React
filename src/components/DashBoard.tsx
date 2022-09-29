import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonLabel,
  IonToolbar,
  IonText,
} from "@ionic/react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const users = useUserStore((state: any) => state.users);
  return (
    <IonCard>
      <IonToolbar color="primary">
        <IonCardTitle
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <IonText style={{ marginLeft: "2px" }}>Profile</IonText>
          <IonButton
            color="danger"
            style={{ marginRight: "2px" }}
            onClick={() => navigate("/")}
          >
            LogOut
          </IonButton>
        </IonCardTitle>
      </IonToolbar>
      <IonCardContent>
        {users?.map((user: any) => (
          <IonCard style={{ marginBottom: "4%", borderRadius: "10px" }}>
            <IonItem>
              <IonLabel>UserName:</IonLabel>
              {user?.name}
            </IonItem>
            <IonItem>
              <IonLabel>Email:</IonLabel>
              {user?.email}
            </IonItem>
            <IonItem>
              <IonLabel>Role:</IonLabel>
              {user?.role}
            </IonItem>
          </IonCard>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default DashBoard;
