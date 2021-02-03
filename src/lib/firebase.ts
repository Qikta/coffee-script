import * as firebase from "firebase/app";
import "firebase/firestore";
import Constants from "expo-constants";
/* interface */
import { Drip } from "../type/drip";
import { Script } from "../type/script"

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase)
}

export const getDrip = async () => {
  try {
    const snapshot = await firebase.firestore().collection("drip").get();
    const drips = snapshot.docs.map((doc) => doc.data() as Drip);

    return drips;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getScript = async () => {
  try {
    const snapshot = await firebase.firestore().collection("script").get();
    const scripts = snapshot.docs.map((doc) => doc.data() as Script);

    return scripts;
  } catch (err) {
    console.log(err);
    return [];
  }
};


