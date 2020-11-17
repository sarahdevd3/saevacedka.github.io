    var page0 = document.getElementById('page0');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var page4 = document.getElementById('page4');
    var page5 = document.getElementById('page5');
    var page6 = document.getElementById('page6');
    var page7 = document.getElementById('page7');
    var page8 = document.getElementById('page8');
    var page9 = document.getElementById('page9');
    var page10 = document.getElementById('page10');
    var page11 = document.getElementById('page11');
    var page12 = document.getElementById('page12');
    var page13 = document.getElementById('page13');
    var page14 = document.getElementById('page14');
    var pages = [page0, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14];
    var chrono = document.getElementById('chrono');
    var etat = 'start';
    var duree = 5; 
    var dureePause =3;
    var n = 1; //pour suivre le div en cours

    window.onload = init();
    function init(){
        chrono.value=duree;
        page0.style.display = "none";
        page1.style.display = "grid";
        page2.style.display ="none";
        page3.style.display ="none";
        page4.style.display ="none";
        page5.style.display ="none";
        page6.style.display ="none";
        page7.style.display ="none";
        page8.style.display ="none";
        page9.style.display ="none";
        page10.style.display ="none";
        page11.style.display ="none";
        page12.style.display ="none";
        page13.style.display ="none";
        page14.style.display ="none";

        setInterval(update,1000);
    }

    function pause(){
        if (etat=='start'){
            etat = 'pause';
        } else {
            etat = 'start';
        } 
    }
    
    function update(){
        if (etat=='start'){
            chrono.value-=1;
            if ((chrono.value>0) && (chrono.value<dureePause)){
                pages[n].style.display = "none";
                pages[0].style.display = "grid";
                }
            if ((chrono.value == 0) && (n<13)){
                pages[0].style.display = "none";
                pages[n].style.display = "none";
                pages[n+1].style.display = "grid";
                n+=1;
                chrono.value=duree;
                }
            if ((chrono.value == 0) && (n=13)){
                pages[0].style.display = "none";
                pages[n].style.display = "none";
                pages[14].style.display = "grid";
                pause();
                }
            }
        }

