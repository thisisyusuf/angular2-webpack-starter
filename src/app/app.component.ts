import { Component } from '@angular/core';
import '../../public/css/styles.css';
import '../../public/css/styles2.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	imageLink:string;
	
	constructor(){
		this.imageLink="../../public/images/angular.png";
	}

	clickJquery(): void{
		$( "img" ).fadeToggle("slow");
	}
}