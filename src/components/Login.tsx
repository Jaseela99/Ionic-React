import {
  IonCard,
  IonItem,
  IonLabel,
  IonTitle,
  IonInput,
  IonCardContent,
  IonButton,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submitted");
    await present({ message: "loading..." });
    setTimeout(() => {
      dismiss();
      navigate("/dashboard");
    }, 1500);
  };
  return (
    <IonCard style={{ textAlign: "center" }}>
      <IonTitle>Login</IonTitle>
      <form onSubmit={onSubmit}>
        <IonCardContent>
          <IonItem>
            <IonLabel position="stacked">Email:</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password:</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
        </IonCardContent>
        <IonButton expand="block" type="submit" color="secondary">
          Login
        </IonButton>
      </form>
    </IonCard>
  );
};

export default Login;
