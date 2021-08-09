'use strict';

let time=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let store=[];

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

  function Store (location, minC, maxC, avgCookie){
  this.location = location;
  this.minC = minC;
  this.maxC = maxC;
  this.avgCookie = avgCookie;
  this.avgCookiePerH = [];
  this.custPerHour = [];
  this.total = 0;
  store.push(this)  
}
Store.prototype.getcustPerHour= function(){
   let min = Math.ceil(this.minC);
  let  max = Math.floor(this.maxC);
    
    for (let i=0; i < time.length; i++){
        
        this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min))  
    }
    
  };


  Store.prototype.getavgCookiePerH= function(){
    for (let i=0; i<time.length; i++){
      let salesPerHour= Math.ceil(this.custPerHour[i] * this.avgCookie);
      this.avgCookiePerH.push(salesPerHour);
      this.total = this.total + salesPerHour;
    }
  };
     Store.prototype.render = function () {
         let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = `${this.location}`;
    for (let i=0; i < time.length; i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `${this.avgCookiePerH[i]}`;
     }
    let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.total; 
}
       
   
    
    function createTableHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
     
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';
     

        for (let p = 0; p <= time.length-1; p++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = `${time[p]}`;
     
        }


        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Store Total';
    }
     
    createTableHeader();
     
    function createTableFooter(){
        
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);
        thEl20.textContent = "total";
     
        let totalT =0;
        
        for(let f = 0 ; f < time.length; f++){
            let total = 0;
             
            for(let k = 0 ; k < store.length; k++){
                total = total + store[k].avgCookiePerH[f];
                totalT = totalT + store[k].avgCookiePerH[f];
     
        }
         
    let thEl10 = document.createElement('td');
        trEl.appendChild(thEl10);
        thEl10.textContent = total;
    }
    let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = totalT;
    };


    let s1 = new Store ('seatlle', 23, 65,6.3)
    let s2 = new Store ('Tokyo', 3, 24,1.2)
    let s3 = new Store ('Dubai', 11, 38,3.7)
    let s4 = new Store ('Paris', 20, 38,2.3)
    let s5 = new Store ('Lima', 2, 16,4.6)

    s1.getcustPerHour();
    s1.getavgCookiePerH();
    s1.render()

    s2.getcustPerHour();
    s2.getavgCookiePerH();
    s2.render()

    s3.getcustPerHour();
    s3.getavgCookiePerH();
    s3.render()

    s4.getcustPerHour();
    s4.getavgCookiePerH();
    s4.render()

    s5.getcustPerHour();
    s5.getavgCookiePerH();
    s5.render()
    createTableFooter();