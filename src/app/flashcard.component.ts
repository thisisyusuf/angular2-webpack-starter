import { Component } from '@angular/core';
import '../../public/css/flashcard.css';

@Component({
  selector: 'my-app',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {

	imageLink:string;
	
	constructor(){
		this.imageLink="../../public/images/angular.png";
	}

	clickJquery(): void{
		$( "img" ).fadeToggle("slow");
	}
}