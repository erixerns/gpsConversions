

/*
Formats:
DMS
DMM
DD


Conversions:
DMS to DD
D + (M/60)+(S/3600) = DD

DMS to DMM
D and (M/60) + (S/3600)

DD to DMM
Degrees = Interger of DD
Minutes = Decimal of DD * 60

DD to DMS
Degrees = integer of DD
Minutes = decimal of DD*60
Seconds = DEcimal of Minutes*60
*/

var conversions = {
  "DMStoDD": DMStoDD,
  "DMStoDMM": DMStoDMM,
  "DDtoDMM": DDtoDMM,
  "DDtoDMS": DDtoDMS
};

var dd;

var di
var mi
var si

var ddi;

var dropdown;

function setup(){
  createCanvas(600, 600);

  dropdown = createSelect(); 
  dropdown.option('Degree, Minutes, Seconds to Decimal Degree','DMStoDD');
  dropdown.option('Degree, Minutes, Seconds to Decimal Minutes','DMStoDMM');
  dropdown.option('Decimal Degrees to Decimal Minutes','DDtoDMM');
  dropdown.option('Decimal Degrees to Degree, Minutes, Seconds','DDtoDMS');
  dropdown.position(150,50);

  dropdown.changed(getConversion);

  option = dropdown.value();
  // Make all inputs and set their positions
  di = createInput("0",text);
  mi = createInput("0",text);
  si = createInput("0",text);
  ddi= createInput("0", text);
  di.position(200, 100);
  mi.position(200, 150);
  si.position(200, 200);
  ddi.position(200, 100);

  hideAll();
}

function draw(){
  background(0);
  conversions[option]();
}

function DMStoDD(D, M, S){
  di.show();
  mi.show();
  si.show();
  fill(255);
  text("Degree: ", 80, 105);
  text("Minutes: ", 80, 155);
  text("Seconds: ", 80, 205);
  D = parseInt(di.value());
  M = parseInt(mi.value());
  S = parseInt(si.value());
  DD = D + M/60 + S/3600;
  DD = Math.floor(DD*100)/100;      // Convert to 2 decimals
  text("Decimal Degree: "+DD, 400, 100);

  text(`Example: 45° 46' 52"`, 200, 300);
}


function DMStoDMM(D, M, S){
  di.show();
  mi.show();
  si.show();
  fill(255);
  text("Degree: ", 80, 105);
  text("Minutes: ", 80, 155);
  text("Seconds: ", 80, 205);
  D = parseInt(di.value());
  M = parseInt(mi.value()/60) + parseInt(si.value()/3600);
  M = Math.floor(M*100)/100;      // Convert to 2 decimals
  // return [D, M/60+S/3600];
  text("Degree: " + D, 400, 105);
  text("Minutes: " + M, 400, 155);

  text(`Example: 45° 46' 52"`, 200, 300);
}

function DDtoDMM(DD){
  ddi.show();
  DD = parseFloat(ddi.value());
  text("Degree: ", 80, 105);
  D = Math.floor(DD)
  M = (DD-Math.floor(DD))*60;
  M = Math.floor(M*100)/100;      // Convert to 2 decimals
  text("Degree: " + D, 400, 105);
  text("Minutes: " + M, 400, 155);

  text(`Example: 45.7811111°`, 200, 300);
}

function DDtoDMS(DD){
  ddi.show();
  text("Degree: ", 80, 105);
  DD = parseFloat(ddi.value());
  
  D=Math.floor(DD);
  M=Math.floor(DD-Math.floor(DD)*60);
  S=(Math.floor(DD-Math.floor(DD)*60)-(DD-Math.floor(DD)*60))*60;
  M = Math.floor(M*100)/100;      // Convert to 2 decimals
  S = Math.floor(S*100)/100;      // Convert to 2 decimals

  text("Degree: " + D, 400, 105);
  text("Minutes: " + M, 400, 155);
  text("Seconds: " + S, 400, 205);

  text(`Example: 45.7811111°`, 200, 300);
}

function inputFunction(){
  console.log("Typing: "+this.value());
}


function hideAll(){
  di.hide();
  mi.hide();
  si.hide();
  ddi.hide();
}

function getConversion(){
  hideAll();
  option = dropdown.value();
  console.log(option);
}