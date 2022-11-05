import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationAppComponent } from "./registration-app/registration-app.component";
import { SchedulerAppComponent } from "./scheduler-app/scheduler-app.component";


const routes: Routes = [
    {
        path: 'scheduler',
        component: SchedulerAppComponent
    },
    {
        path: 'registration',
        component: RegistrationAppComponent
    },
    {
        path: '',
        redirectTo: 'scheduler',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}