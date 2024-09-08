const display=document.getElementById("screen");
function my(input){
    display.value+=input;
}
function tneb(){
        if(display.value>=0 && display.value<=100){
            out='Free';
            document.getElementById("result").innerHTML="Amount:"+out;
        }
        else if(display.value>100 && display.value<=200){
            b=display.value-100;
            out=(b)*2.35;
            document.getElementById("result").innerHTML="0-100 units: Free";
            document.getElementById("result").innerHTML=b +" units" +" : " +out;
            document.getElementById("result").innerHTML="Amount: Rs"+out;
        }
        else if(display.value>=201 && display.value<=400){
            b=display.value-100;
            a=b-100;
            out=(100*2.35)+(a*4.70);
            document.getElementById("result").innerHTML="Amount: Rs."+out;

        }
        else if(display.value>=401 && display.value<=500){
            b=display.value-100;
            a=b-300;
            out=(100*2.35)+(200*4.7)+(a*6.3);
            document.getElementById("result").innerHTML="Amount: Rs."+out;
        }
        else if(display.value>=501 && display.value<=600){
            b=display.value-100;
            a=b-400
            out=(a*8.4)+(300*4.7)+(100*6.3);
            document.getElementById("result").innerHTML="Amount: Rs."+out;
        }
        else if(display.value>=601 && display.value<=800){
            b=display.value-100;
            a=b-500;
            out=(100*8.4)+(300*4.7)+(100*6.3)+(a*9.45);
            document.getElementById("result").innerHTML="Amount: Rs."+out;
        }
        else if(display.value>=801 && display.value<=1000){
            b=display.value-100;
            a=b-700;
            out=(100*8.4)+(300*4.7)+(100*6.3)+(200*9.45)+(a*10.5);
            document.getElementById("result").innerHTML="Amount: Rs."+out;
        }
        else{
            b=display.value-100;
            a=b-900;
            out=(100*8.4)+(300*4.7)+(100*6.3)+(200*9.45)+(200*10.5)+(a*11.55);
            document.getElementById("result").innerHTML="Amount: Rs."+out;

        }
}