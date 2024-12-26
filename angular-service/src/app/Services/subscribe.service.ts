import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"// If we define like this no need to provide this in appModule.ts
})
export class Subscribe {
    onSubscribe() {
        alert('You are subscribed');
    }
}