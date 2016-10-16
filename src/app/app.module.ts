import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { FlashcardComponent } from './flashcard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    FlashcardComponent
  ],
  bootstrap: [ FlashcardComponent ]
})
export class AppModule { }
