import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  question1: string = '';
  questionFirst: boolean = true;
  question2: boolean = false;
  linguagem: string = '';
  ling1: string = '';
  ling2: string = '';
  question2answer: string = '';

  question3: boolean = false;
  answer3: string = '';

  answer4: boolean = false;
  text3: string = '';

  question4: boolean = false;
  answers: string[] = [];
  newAnswer: string = '';

  question5: boolean = false;
  question6: boolean = false;
  answer6: string = '';
  final: boolean = false;

  constructor() {}

  btnQuestion1() {
    if (this.question1 === 'Front-End') {
      this.linguagem = 'Front-end';
      this.ling1 = 'react';
      this.ling2 = 'vue';
    } else {
      this.linguagem = 'Back-end';
      this.ling1 = 'C++';
      this.ling2 = 'JAVA';
    }
    this.question2 = true;
  }

  btnQuestion2() {
    this.question3 = true;
  }

  btnQuestion3() {
    if (this.answer3 === 'fullstack') {
      this.text3 = 'se tornar um desenvolvedor Fullstack';
    } else {
      this.text3 = 'seguir se especializando na área escolhida';
    }
    this.answer4 = true;
    this.question4 = true;
  }

  btnQuestion4(answer: string) {
    this.answers.push(answer);
    this.question5 = true;
    this.question6 = true;
    this.newAnswer = '';
  }
  btnQuestion5() {
    if (this.answer6 === 'sim') {
      this.question5 = false;
      this.question6 = false;
    } else {
      this.final = true;
      this.questionFirst = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
    }
  }
}
