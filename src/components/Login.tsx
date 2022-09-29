import React from "react";
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
  IonToolbar,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const Login = () => {
  const addUser = useUserStore((state) => state.addUser);
  const [name, setName] = React.useState<any>("");
  const [email, setEmail] = React.useState<any>("");
  const [role, setRole] = React.useState<any>("");
  const [password, setPassword] = React.useState<any>("");
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!name) return alert("userName required");
    if (!email) return alert("email required");
    if (!role) return alert("role required");
    if (!password) return alert("password required");
    console.log(name, "name");
    addUser({
      id: Math.ceil(Math.random() * 1000000),
      name: name,
      email: email,
      role: role,
      password: password,
    });
    present({ message: "loading..." });

    setTimeout(() => {
      navigate("/dashboard");
      dismiss();
    }, 1500);
  };
  return (
    <IonCard
      style={{
        textAlign: "center",
      }}
    >
      <IonToolbar color="primary">
        <IonTitle>User's Login</IonTitle>
      </IonToolbar>
      <form onSubmit={onSubmit} style={{ padding: "4%" }}>
        <IonCardContent style={{ padding: "4%" }} color="warning">
          <IonItem>
            <IonLabel position="floating">UserName:</IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e: any) => setName(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email:</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e: any) => setEmail(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Role:</IonLabel>
            <IonInput
              type="text"
              value={role}
              onIonChange={(e: any) => setRole(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password:</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e: any) => setPassword(e.target.value)}
            ></IonInput>
          </IonItem>
        </IonCardContent>
        <IonButton size="default" type="submit" color="success">
          Login
        </IonButton>
      </form>
    </IonCard>
  );
};

export default Login;
