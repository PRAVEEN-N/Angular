import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Subscribe {
    onSubscribe() {
        alert('You are subscribed');
    }
}