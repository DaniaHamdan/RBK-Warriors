import { Component, OnInit } from '@angular/core';
import { QaService } from '../shared/qa.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css'],
  providers:[ QaService ]
})

export class QaComponent implements OnInit {

	q : Object[] = [];
	myVar : boolean = false ; 
	newEntry: any = {}; 
	newComment : any = {} ;
  constructor(private qaSevices : QaService) { }

  ngOnInit() {
  	this.getQuestions();
  }

  getQuestions() {
  	this.qaSevices.getQuestions().then((data) => {
  		data.forEach(q => {
  			q.show = false;
  		})
  		this.q = data;
  	});
  }

  addQ(name , q ){
  	if(name === undefined){
  		name = "visitor"
  	}
  	this.qaSevices.addQuestion({name : name , text : q}) ;
  	this.newEntry = {};
  	this.getQuestions();
  		alert('your question will be answered as soon as possible')
  }

  addC(qText , c) {
 	this.qaSevices.addComment({qText :qText , text : c });
 	setTimeout(() => this.getQuestions() , 500);
 	this.newComment = {} ;
  }


}
