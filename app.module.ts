import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2GifPreview } from './lib/ng2GifPreview';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Ng2GifPreview],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
