import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

export default function hardwareback(){

  if (Capacitor.isNativePlatform()) {

    App.addListener("backButton", (e) => {
      
      if (window.location.pathname === "/") {
        // Show A Confirm Box For User to exit app or not
        let ans = window.confirm("Exit Application?");
        if (ans) {
          App.exitApp();
        } 

      } else if (window.location.pathname === "/home/dashboard") {
        // Show A Confirm Box For User to exit app or not
        let ans = window.confirm("Exit Application?");
        if (ans) {
          App.exitApp();
        } 
        e.preventDefault()
        e.stopPropagation();
      } 

    });

  }

}
