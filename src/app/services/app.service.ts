import { Injectable } from '@angular/core';
import {
    CalendarSchedulerEvent,
    CalendarSchedulerEventStatus,
    CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    // server url accessing
    readonly APIurl = " http://127.0.0.1:8000"

    constructor(private http: HttpClient) { }

    // Reservations getting in database
    getReservation(): Observable<any[]> {
        return this.http.get<any[]>(this.APIurl + '/client_reserv/reservation/')
    }
    // Reservations adding in database
    addReservation(val: any) {
        return this.http.post(this.APIurl + '/client_reserv/reservation/', val)
    }
    addTimeSlot(val: any) {
        return this.http.post(this.APIurl + '/client_reserv/timeslot/', val)
    }

    // Saving and getting timeslot in localstorage database
    public getTimeSlots() {
        if (!localStorage.getItem("timeslot")) {
            localStorage.setItem("timeslot", "[]")
        }
        return JSON.parse(localStorage.getItem("timeslot"));;
    }



    public saveTimeSlot(name: String, email: String, timeslot: String) {
        // Convert String to Date
        let data = this.getTimeSlots();
        data.push({ name: name, email: email, timeslot: timeslot })
        localStorage.setItem("timeslot", JSON.stringify(data));
    }

    public clearTimeSlot(): void {
        localStorage.clear();
    }
    // Display the result on calendar
    getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
        var events = [];

        let data = this.getTimeSlots();
        console.log(data);

        for (var id = 0; id < data.length; id++) {
            let start = new Date(data[id]["timeslot"]);
            let end = new Date(start.getTime() + 3600000);
            events.push(<CalendarSchedulerEvent>{
                start: start,
                end: end,
                isClickable: false,
                draggable: true,
                isDisabled: false,
            })
        }


        return new Promise(resolve => setTimeout(() => resolve(events), 1000));
    }
}
