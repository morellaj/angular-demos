import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomePageComponent } from './components/some-page/some-page.component';
import { GetPersonButtonComponent } from './components/some-page/get-person-button/get-person-button.component';
import { IterateIdButtonComponent } from './components/some-page/iterate-id-button/iterate-id-button.component';

@NgModule({
  declarations: [AppComponent, SomePageComponent, GetPersonButtonComponent, IterateIdButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
