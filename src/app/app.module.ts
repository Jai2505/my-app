import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChartsComponent } from './charts/charts.component';
import { ComponentComponent } from './component/component.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponentComponent } from './cart.component/cart.component.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { CardataComponent } from './cardata/cardata.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { ItemcartComponent } from './itemcart/itemcart.component';
import { SocialpostComponent } from './socialpost/socialpost.component';
import { MailinboxComponent } from './mailinbox/mailinbox.component';
import { IdcardComponent } from './idcard/idcard.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NavComponent } from './nav/nav.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ChartsComponent,
    ComponentComponent,
    LayoutsComponent,
    AboutComponent,
    DatabindingComponent,
    EventbindingComponent,
    CalculatorComponent,
    SquareComponent,
    RectangleComponent,
    EventRegistrationComponent,
    CartComponentComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    HighlightDirective,
    CardataComponent,
    AccountdetailsComponent,
    ItemcartComponent,
    SocialpostComponent,
    MailinboxComponent,
    IdcardComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    CartlistComponent,
    NavComponent,
    VehicleDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
