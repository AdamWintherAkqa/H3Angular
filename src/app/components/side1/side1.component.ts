import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side1',
  templateUrl: './side1.component.html',
  styleUrls: ['./side1.component.css']
})
export class Side1Component implements OnInit {

  authorId : number = 1;
  name : string = "Torben";
  age : number = 31;
  password : string = "123";
  isAlive : boolean = true;

  constructor() { } // Dependency Injection.

  ngOnInit(): void  // Svarer lidt til en start metode

  {
    console.log(this.list2)

  }
  myMethod()
    {
      console.log("myMethod")
    }
  myMethod2(variablenavn:string)
  {
    console.log("myMethod" + variablenavn)
  }
  myMethod3(variablenavn:boolean)
  {
    console.log(variablenavn)
  }

  myMethod4(variablenavn:number)
  {
    console.log(variablenavn)
  }
  myMethod5(variablenavn:boolean)
  {
    console.log(variablenavn ? "Ja" : "Nej")
  }

 list: number[] = [1, 2, 3];
 list2: number[] = [];

}
