import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardataComponent } from './cardata/cardata.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponentComponent } from './cart.component/cart.component.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ChartsComponent } from './charts/charts.component';
import { ComponentComponent } from './component/component.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { IdcardComponent } from './idcard/idcard.component';
import { ItemcartComponent } from './itemcart/itemcart.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { MailinboxComponent } from './mailinbox/mailinbox.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SocialpostComponent } from './socialpost/socialpost.component';
import { SquareComponent } from './square/square.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate:[AuthGuard],
    children: [
      { path: 'layouts', component: LayoutsComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'component', component: ComponentComponent },
      { path: 'about', component: AboutComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'eventbinding', component: EventbindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'event-registration', component: EventRegistrationComponent },
      { path: 'cart.component', component: CartComponentComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'gpay', component: GpayComponent },
      { path: 'cardata', component: CardataComponent },
      { path: 'accountdetails', component: AccountdetailsComponent },
      { path: 'itemcart', component: ItemcartComponent },
      { path: 'socialpost', component: SocialpostComponent },
      { path: 'mailinbox', component: MailinboxComponent },
      { path: 'idcard', component: IdcardComponent },
      {path: 'create-vehicle', component:CreateVehicleComponent, canDeactivate:[NotifyGuard]},
      {path: 'create-user', component:CreateUserComponent},
      {path:'parent', component:ParentComponent},
      {path:'product', component:ProductComponent},
      {path: 'cartlist', component:CartlistComponent},
      {path: 'nav', component:NavComponent},
      {path:'vehicle-details/:id', component:VehicleDetailsComponent}
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
