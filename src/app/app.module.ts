import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FlashcardComponent } from './flashcard.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    FlashcardComponent
  ],
  bootstrap: [ FlashcardComponent ]
})
export class AppModule { }
