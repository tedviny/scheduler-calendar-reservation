import { Injectable } from '@angular/core';
import {
    CalendarSchedulerEvent,
    CalendarSchedulerEventStatus,
    CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';

@Injectable()
export class AppService {

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

    getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
        var events = [];

        let data = this.getTimeSlots();
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
