$(function(){
  var decimals=0;
  var selectedNumbers="";
  var selectedOperators=[];
  var currentNumber="";
  var currentNumString="";
  var $calculatorNumbers = $('.numbers');
  var $operators = $('.operators');
  var $solve = $('.solve');
  var $decimal = $('.decimal');
  var $negPos = $('.negPos');
  var negative = false;


  var working="";
  var $clear = $('.clear');

  var clear = function(){
    selectedNumbers="";
    currentNumber="";
    currentNumString="";
    selectedOperators=[];
    $('#working').text("");
    $('#answer').text("");
    decimals=0;
    negative=false;
  }

  var negPos = function(){
    if(negative==false){
    console.log("negPos");
    if(currentNumber.length>0){
      currentNumber='-'+currentNumber;
      currentNumString=currentNumString.substring(0, currentNumString.length-currentNumber.length-1);
      currentNumString+=currentNumber;
    }else{
      currentNumber+="-";
      currentNumString+=currentNumber;
    }
    $('#working').text(currentNumString);
    negative=true;
  }else{
    console.log("no double negatives");
  }
  }

  var pushOperators = function(){
      negative = false
      if(currentNumber.length>0){
        decimals=0;
        selectedNumbers+=(parseFloat(currentNumber)).toString();
        // selectedOperators.push($(this).text());
        selectedNumbers+=($(this).text());
        currentNumber="";
        currentNumString+=$(this).text();
        $('#working').text(currentNumString);
      }
    }

  var pushNumbers = function(){
    // console.log($(this).attr('class'));
      currentNumber+=$(this).text();
      currentNumString+=$(this).text();
      $('#working').text(currentNumString);
  }
  var pushDecimal = function(){
    if(decimals==0 && currentNumber.length==0){
      currentNumber+="0.";
      currentNumString+='0.';
      decimals++;
    }else if(decimals==0 && currentNumber.length>0){
      currentNumber+=".";
      currentNumString+='.';
      decimals++;
    }else{
      console.log("not adding 2 decimal poins");
    }
    $('#working').text(currentNumString);
  }

  var solve = function(){
    selectedNumbers+=(parseFloat(currentNumber)).toString();
    console.log(selectedNumbers);
    //console.log(selectedOperators);
    answer=eval(selectedNumbers);
    $('#answer').text(answer);
    currentNumber=answer.toString();
    currentNumString=answer.toString();
    selectedNumbers="";

  }
  $clear.on('click', clear);
  $calculatorNumbers.on('click', pushNumbers);
  $operators.on('click', pushOperators);
  $solve.on('click', solve);
  $decimal.on('click', pushDecimal);
  $negPos.on('click', negPos);



});
