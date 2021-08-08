'use strict'


let time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let Seattle = {
    location : `Seattle`,
    minC : 23,
    maxC : 65,
    avgCookie : 6.3,
    custN:[],
    sales:[],
    total: 0,
    random: function(min ,max){
        min = Math.ceil(this.minC);
        max = Math.floor(this.maxC);
        for(let i = 0 ; i < time.length; i++){
        this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
    
     }
 
    },

    calculate: function(){
        for(let i = 0; i < time.length; i++ ){
            this.sales.push(this.custN[i] * this.avgCookie);
            this.total += this.sales[i];
        
        }
        },
        
        render: function(){
        let conatiner = document.getElementById('container');
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for(let i = 0; i < time.length ; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time[i]} : ${this.sales[i]}`
        
        
        }
        let total= document.createElement('li');
        ulEl.appendChild(total);
        total.textContent= `total: ${this.total}`
        }
        }
        Seattle.random(23 , 65);
        Seattle.calculate();
        Seattle.render();
        
        let Tokyo = {
            location : 'Tokyo',
            minC : 3,
            maxC : 24,
            AvgCookie :  1.2,
            custN:[],
            sales:[],
            total: 0,
        
            random: function(min ,max){
                min = Math.ceil(this.minC);
                max = Math.floor(this.maxC);
                for(let i = 0 ; i < time.length; i++){
                this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
             }
            
            },
            
            
            calculate: function(){
            for(let i = 0; i < time.length; i++ ){
                this.sales.push(this.custN[i] * this.avgCookie);
                this.total += this.sales[i];
            
            }
            },
            
            render: function(){
            let conatiner = document.getElementById('container');
            let ulELement = document.createElement('ul');
            conatiner.appendChild(ulELement);
            for(let i = 0; i < time.length ; i++){
                let liELement = document.createElement('li');
                ulELement.appendChild(liELement);
                liELement.textContent = time[i] +" : "+ this.sales[i];
            
        }
        let total= document.createElement('li');
        ulELement.appendChild(total);
          total.textContent= `total: ${this.total}`
        
            }
        }
        Tokyo.random(3 , 24);
        Tokyo.calculate();
        Tokyo.render();
        
        let Dubai = {
            location : 'Dubai',
            minC : 11,
            maxC : 38,
            avgCookie : 3.7,
            custN:[],
            sales:[],
            total: 0,
        
        
          random: function(min ,max){
            min = Math.ceil(this.minC);
            max = Math.floor(this.maxC);
            for(let i = 0 ; i < time.length; i++){
            this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
        
         }
        
        },
        
        
        calculate: function(){
        for(let i = 0; i < time.length; i++ ){
            this.sales.push(this.custN[i] * this.avgCookie);
            this.total += this.sales[i];
        
        }
        },
        
        render: function(){
        let conatiner = document.getElementById('container');
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for(let i = 0; i < time.length ; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time[i]} : ${this.sales[i]}`
        }
        
        let total= document.createElement('li');
        ulEl.appendChild(total);
        total.textContent= `total: ${this.total}`
        }
        }
        Dubai.random(11 , 38);
        Dubai.calculate();
        Dubai.render();
        
        let Paris = {
            location : 'Paris',
            minC: 20,
            maxC: 38,
            avgCookie: 2.3,
            custN:[],
            sales:[],
            total: 0,
        
        
          random: function(min ,max){
            min = Math.ceil(this.minC);
            max = Math.floor(this.maxC);
            for(let i = 0 ; i < time.length; i++){
            this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
        
             }
            
            },
            
            
            calculate: function(){
            for(let i = 0; i < time.length; i++ ){
                this.sales.push(this.custN[i] * this.avgCookie);
                this.total += this.sales[i];
            
            }
            },
            
            render: function(){
            let conatiner = document.getElementById('container');
            let ulEl = document.createElement('ul');
            conatiner.appendChild(ulEl);
            for(let i = 0; i < time.length ; i++){
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${time[i]} : ${this.sales[i]}`
        
            }
            let total= document.createElement('li');
           ulEl.appendChild(total);   
           total.textContent= `total: ${this.total}`
          }
        }
        Paris.random(20 , 38);
        Paris.calculate();
        Paris.render();
        
        let Lima = {
            location : 'Lima',
            minC : 2,
            maxC : 16,
            avgCookie : 4.6,
            custN:[],
            sales:[],
            total: 0,
        
        
            random: function(min ,max){
                min = Math.ceil(this.minC);
                max = Math.floor(this.maxC);
                for(let i = 0 ; i < time.length; i++){
                this.sales.push(Math.floor(Math.random() * (max - min + 1) + min)); 
             }
            
            
            },
            
            
            calculate: function(){
            for(let i = 0; i < time.length; i++ ){
                this.sales.push(this.custN[i] * this.avgCookie);
                this.total += this.sales[i];
            
            }
            },
            
            render: function(){
            let conatiner = document.getElementById('container');
            let ulEl = document.createElement('ul');
            conatiner.appendChild(ulEl);
            for(let i = 0; i < time.length ; i++){
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${time[i]} : ${this.sales[i]}`
        }
        let total= document.createElement('li');
        ulEl.appendChild(total);
        total.textContent= `total: ${this.total}`
            }
        }
        Lima.random(2 , 16);
        Lima.calculate();
        Lima.render();
