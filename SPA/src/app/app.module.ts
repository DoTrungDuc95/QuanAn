import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CongthucComponent } from './congthuc/congthuc.component';
import { DanhsachcongthucComponent } from './congthuc/danhsachcongthuc/danhsachcongthuc.component';
import { CongthucchitietComponent } from './congthuc/congthucchitiet/congthucchitiet.component';
import { CongthucitemComponent } from './congthuc/danhsachcongthuc/congthucitem/congthucitem.component';
import { QuananComponent } from './quanan/quanan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CongthucComponent,
    DanhsachcongthucComponent,
    CongthucchitietComponent,
    CongthucitemComponent,
    QuananComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
