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
  IonCheckbox,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const Login = () => {
  const addUser = useUserStore((state) => state.addUser);
  const [name, setName] = React.useState<any>("");
  const [email, setEmail] = React.useState<any>("");
  const [role, setRole] = React.useState<any>({frontend:false,backend:false});
  const [preferredRole, setPreferredRole] = React.useState<any>([]);
  const [password, setPassword] = React.useState<any>("");
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  console.log(preferredRole)
  const checkBoxHandler=(e:any)=>{
    if(e.target.value==="frontend"){
      // role.frontend =e.detail.checked
      setRole({frontend:e.detail.checked})
    }
    if(e.target.value==="backend"){
      // role.backend =e.detail.checked
      setRole({backend:e.detail.checked})
    }
    if (e.detail.checked === true) {
      setPreferredRole((prev: any) => {
        if (!prev.includes(e.detail.value)) {
          return [...prev, e.detail.value];
        }
        return prev;
      });
    }
    if (e.detail.checked === false) {
      const newVal = preferredRole.filter((val: any) => val !== e.detail.value);
      setPreferredRole(newVal);
    }
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!name) return alert("userName required");
    if (!email) return alert("email required");
    if (!role) return alert("role required");
    if (!password) return alert("password required");
    addUser({
      id: Math.ceil(Math.random() * 1000000),
      name: name,
      email: email,
      role: preferredRole,
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
            <IonLabel>Role:</IonLabel>
            <IonCheckbox
            value="frontend"
            checked={preferredRole.indexOf("frontend")>-1 || role.frontend}
            onIonChange={checkBoxHandler}
            style={{marginRight:"1%"}}/>
            <IonLabel>Front-End</IonLabel>
            <IonCheckbox
            value="backend"
            checked={preferredRole.indexOf("backend")>-1 || role.backend}
            onIonChange={checkBoxHandler}
            style={{marginRight:"1%"}}/>
            <IonLabel>Back-End</IonLabel>
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
