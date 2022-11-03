import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Register } from './models/register';
import { AppService } from '../services/app.service';
import {
  CalendarSchedulerEvent,
  CalendarSchedulerEventStatus,
  CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';


@Component({
  selector: 'app-registration-app',
  templateUrl: './registration-app.component.html',
  styleUrls: ['./registration-app.component.css']
})
export class RegistrationAppComponent implements OnInit {

  title: string = 'Repair Workshop Project Scheduler';

  registerForm!: FormGroup;
  urlRegex!: RegExp;

  model: Register;

  public eventsServices = [];

  registering: any;

  constructor(private router?: Router, private route?: ActivatedRoute, private formBuilder?: FormBuilder, private servicedata?: AppService) { }
  data: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.data = params.data;
    }
    )
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],

    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.router.url);


    //Date getting traitement
    const str = this.router.url;
    const timeslot = str.slice(
      str.indexOf('%') + 3,
      str.lastIndexOf('%'),
    );

    console.log(timeslot)
    this.servicedata.saveTimeSlot(this.registerForm.value["name"], this.registerForm.value["email"], timeslot);

    // Create new object reservation
    this.model = new Register(this.registerForm.value.name, this.registerForm.value.email, timeslot, "false");
    console.log(this.model);


  }

  addOneHourTodate(date: Date, hour: number): Date {
    hour = 1;
    return new Date(new Date(date).setHours(date.getHours() + hour));

  }

  addNewRegistering(item: CalendarSchedulerEvent) {
    const actions: CalendarSchedulerEventAction[] = []
  }

}
