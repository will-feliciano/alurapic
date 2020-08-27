import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { LoginGuard } from "../core/auth/login.guard";

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [ LoginGuard ],
        children: [
            { 
                path: '', 
                component: SignInComponent,                 
            },
            {
                path: 'signup',
                component: SignUpComponent
            },
        ] 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }