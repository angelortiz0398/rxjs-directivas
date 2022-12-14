import { ReactiveModule } from './reactive/reactive.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeDirective } from './directives/theme.directive';
import { BtnDirective } from './directives/btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemeDirective,
    BtnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
