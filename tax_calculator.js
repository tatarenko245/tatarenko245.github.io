// Налоговый калькулятор для ФОП на Едином налоге
var sel=document.getElementById('sel'),
    button=document.getElementById('button');
    
    if (button !==null){
    button.addEventListener('click', function() {
        alert(sel.value);
            if (document.getElementById("sel").value=="Оберіть Вашу групу єдиного податку") {
                var out5="Оберіть Вашу групу єдиного податку";
                document.getElementById('out').innerHTML=out5;  
            }
            else if (document.getElementById("sel").value=="Група 1") {
            
                var out1="10% від прожиткового мінімума, що складає 210,20 грн.";
                document.getElementById('out').innerHTML =out1;
            }
            else if (document.getElementById("sel").value=="Група 2") {
                var out2="20% від мінімальної заробітної плати, що складає 944,60 грн.";
                document.getElementById('out').innerHTML=out2;
            }
            else if (document.getElementById('sel').value=="Група 3 без ПДВ") {
                var out3=prompt("Вкажіть суму Вашого доходу в грн.", "Потрібно ввести ціле число");
                out3=parseInt(out3);
                if (out3) {
                    document.getElementById("out").innerHTML=out3 *0.05;
                }
             }
            else if (document.getElementById("sel").value=="Група 3 з ПДВ") {
                var out4=prompt("Вкажіть суму Вашого доходу в грн.", "Потрібно ввести ціле число");
                out4=parseInt(out4);
                if (out4) {
                    document.getElementById("out").innerHTML=out4*0.03;
                }
            }
        
    })} ;