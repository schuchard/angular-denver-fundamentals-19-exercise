import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupSelectorComponent } from './group-selector/group-selector.component';
import { GroupDisplayComponent } from './group-display/group-display.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, GroupSelectorComponent, GroupDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
