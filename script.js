
$(document).ready(function(){
    
    alert('Vítejte u hry piškvorky!');
    var hrac1 = prompt('Zadejte jméno prvního hráče: ');
    var hrac2 = prompt('Zadejte jméno druhého hráče: ');
    var pat = 0;

    $('#zprava').html('Hraje ' + hrac1);
    /* 0 = 1. hrac; 1 = 2.hrac */ 
    var aktivniHrac = 0;
    
    /* 0 = prazdne pole; 1 = kolecko; 2 = krizek */
    var hraciPole = [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','','']
    ]

    var tick = function(){
        var table = [
            [$('#playground tr:eq(0) td:eq(0)'), $('#playground tr:eq(0) td:eq(1)'), $('#playground tr:eq(0) td:eq(2)'), $('#playground tr:eq(0) td:eq(3)'), $('#playground tr:eq(0) td:eq(4)'), $('#playground tr:eq(0) td:eq(5)')],
            [$('#playground tr:eq(1) td:eq(0)'), $('#playground tr:eq(1) td:eq(1)'), $('#playground tr:eq(1) td:eq(2)'), $('#playground tr:eq(1) td:eq(3)'), $('#playground tr:eq(1) td:eq(4)'), $('#playground tr:eq(1) td:eq(5)')],
            [$('#playground tr:eq(2) td:eq(0)'), $('#playground tr:eq(2) td:eq(1)'), $('#playground tr:eq(2) td:eq(2)'), $('#playground tr:eq(2) td:eq(3)'), $('#playground tr:eq(2) td:eq(4)'), $('#playground tr:eq(2) td:eq(5)')],
            [$('#playground tr:eq(3) td:eq(0)'), $('#playground tr:eq(3) td:eq(1)'), $('#playground tr:eq(3) td:eq(2)'), $('#playground tr:eq(3) td:eq(3)'), $('#playground tr:eq(3) td:eq(4)'), $('#playground tr:eq(3) td:eq(5)')],
            [$('#playground tr:eq(4) td:eq(0)'), $('#playground tr:eq(4) td:eq(1)'), $('#playground tr:eq(4) td:eq(2)'), $('#playground tr:eq(4) td:eq(3)'), $('#playground tr:eq(4) td:eq(4)'), $('#playground tr:eq(4) td:eq(5)')],
            [$('#playground tr:eq(5) td:eq(0)'), $('#playground tr:eq(5) td:eq(1)'), $('#playground tr:eq(5) td:eq(2)'), $('#playground tr:eq(5) td:eq(3)'), $('#playground tr:eq(5) td:eq(4)'), $('#playground tr:eq(5) td:eq(5)')]
        ];

        for(var i = 0; i<hraciPole.length; i++)
        {
            for(var k = 0; k<hraciPole.length; k++)
            {
                (table[i][k].html(hraciPole[i][k]))
            }
        }

    //hrac1
        //řádky
        for(var l = 0; l<hraciPole.length; l++)
        {
            for(var m = 0; m<6; m++)
            {
                if(hraciPole[l][m] == 'X' && hraciPole[l][m+1] == 'X' && hraciPole[l][m+2] == 'X' && hraciPole[l][m+3] == 'X' && hraciPole[l][m+4] == 'X'){
                    $(table[l][m]).css('color', 'yellow'); $(table[l][m+1]).css('color', 'yellow'); $(table[l][m+2]).css('color', 'yellow');$(table[l][m+3]).css('color', 'yellow');$(table[l][m+4]).css('color', 'yellow');
                    $('#zprava').hide();
                    setTimeout(function(){
                        $('#vyhra').html('Vyhrál ' + hrac1);
                        $('#playground').hide();
                        $('#newgame').show();
                    },2000);
                }
            }
        }

        //sloupce
        for(var n = 0; n<hraciPole.length; n++)
        {
            for(var o = 0; o<hraciPole.length-4; o++)
            {
                if(hraciPole[o][n] == 'X' && hraciPole[o+1][n] == 'X' && hraciPole[o+2][n] == 'X' && hraciPole[o+3][n] == 'X' && hraciPole[o+4][n] == 'X'){
                    $(table[o][n]).css('color', 'yellow'); $(table[o+1][n]).css('color', 'yellow'); $(table[o+2][n]).css('color', 'yellow'); $(table[o+3][n]).css('color', 'yellow');$(table[o+4][n]).css('color', 'yellow');
                    $('#zprava').hide();
                    setTimeout(function(){
                        $('#vyhra').html('Vyhrál ' + hrac1);
                        $('#playground').hide();
                        $('#newgame').show();
                    },2000);
                }
            }
        }


        //diagonály
        for(var p = 0; p<hraciPole.length-4; p++){
            
            for(var q = 0; q<hraciPole.length; q++){
                
                
                    if(hraciPole[p][q] == 'X' && hraciPole[p+1][q+1] == 'X' && hraciPole[p+2][q+2] == 'X' && hraciPole[p+3][q+3] == 'X' && hraciPole[p+4][q+4] == 'X'){
                        $(table[p][q]).css('color', 'yellow'); $(table[p+1][q+1]).css('color', 'yellow'); $(table[p+2][q+2]).css('color', 'yellow');$(table[p+3][q+3]).css('color', 'yellow');$(table[p+4][q+4]).css('color', 'yellow');
                        $('#zprava').hide();
                        setTimeout(function(){
                            $('#vyhra').html('Vyhrál ' + hrac1);
                            $('#playground').hide();
                            $('#newgame').show();
                        },2000);
                        }
                    
            }
        }

        for(var r = 0; r<hraciPole.length-4; r++){
            
            for(var s = 0; s<hraciPole.length; s++){
                
                
                    if(hraciPole[r][s] == 'X' && hraciPole[r+1][s-1] == 'X' && hraciPole[r+2][s-2] == 'X' && hraciPole[r+3][s-3] == 'X' && hraciPole[r+4][s-4] == 'X'){
                        $(table[r][s]).css('color', 'yellow'); $(table[r+1][s-1]).css('color', 'yellow'); $(table[r+2][s-2]).css('color', 'yellow');$(table[r+3][s-3]).css('color', 'yellow');$(table[r+4][s-4]).css('color', 'yellow');
                        $('#zprava').hide();
                        setTimeout(function(){
                            $('#vyhra').html('Vyhrál ' + hrac1);
                            $('#playground').hide();
                            $('#newgame').show();
                                },2000);
                        }
                    
            }
        }

     //hrac2
        //řádky
        for(var l = 0; l<hraciPole.length; l++)
        {
            for(var m = 0; m<hraciPole.length; m++)
            {
                if(hraciPole[l][m] == 'O' && hraciPole[l][m+1] == 'O' && hraciPole[l][m+2] == 'O' && hraciPole[l][m+3] == 'O' && hraciPole[l][m+4] == 'O'){
                    $(table[l][m]).css('color', 'red'); $(table[l][m+1]).css('color', 'red'); $(table[l][m+2]).css('color', 'red');$(table[l][m+3]).css('color', 'red');$(table[l][m+4]).css('color', 'red');
                    $('#zprava').hide();
                    setTimeout(function(){
                        $('#vyhra').html('Vyhrál ' + hrac2);
                        $('#playground').hide();
                        $('#newgame').show();
                    },2000);
                }
            }
        }

        //sloupce
        for(var n = 0; n<hraciPole.length; n++)
        {
            for(var o = 0; o<hraciPole.length-4; o++)
            {
                if(hraciPole[o][n] == 'O' && hraciPole[o+1][n] == 'O' && hraciPole[o+2][n] == 'O' && hraciPole[o+3][n] == 'O' && hraciPole[o+4][n] == 'O'){
                    $(table[o][n]).css('color', 'red'); $(table[o+1][n]).css('color', 'red'); $(table[o+2][n]).css('color', 'red'); $(table[o+3][n]).css('color', 'red');$(table[o+4][n]).css('color', 'red');
                    $('#zprava').hide();
                    setTimeout(function(){
                        $('#vyhra').html('Vyhrál ' + hrac2);
                        $('#playground').hide();
                        $('#newgame').show();
                    },2000);
                }
            }
        }


        //diagonály
        for(var p = 0; p<hraciPole.length-4; p++){
            
            for(var q = 0; q<hraciPole.length; q++){
                
                
                    if(hraciPole[p][q] == 'O' && hraciPole[p+1][q+1] == 'O' && hraciPole[p+2][q+2] == 'O' && hraciPole[p+3][q+3] == 'O' && hraciPole[p+4][q+4] == 'O'){
                            $(table[p][q]).css('color', 'red'); $(table[p+1][q+1]).css('color', 'red'); $(table[p+2][q+2]).css('color', 'red');$(table[p+3][q+3]).css('color', 'red');$(table[p+4][q+4]).css('color', 'red');
                            $('#zprava').hide();
                            setTimeout(function(){
                                $('#vyhra').html('Vyhrál ' + hrac2);
                                $('#playground').hide();
                                $('#newgame').show();
                            },2000);
                        }
                    
            }
        }

        for(var r = 0; r<hraciPole.length-4; r++){
            
            for(var s = 0; s<hraciPole.length; s++){
                
                
                    if(hraciPole[r][s] == 'O' && hraciPole[r+1][s-1] == 'O' && hraciPole[r+2][s-2] == 'O' && hraciPole[r+3][s-3] == 'O' && hraciPole[r+4][s-4] == 'O'){
                        $(table[r][s]).css('color', 'red'); $(table[r+1][s-1]).css('color', 'red'); $(table[r+2][s-2]).css('color', 'red');$(table[r+3][s-3]).css('color', 'red');$(table[r+4][s-4]).css('color', 'red');
                        $('#zprava').hide();
                        setTimeout(function(){
                            $('#vyhra').html('Vyhrál ' + hrac2);
                            $('#playground').hide();
                            $('#newgame').show();
                        },2000);
                        }
                    
            }
        }
     
        if($('#vyhra').html() == 'Vyhrál ' + hrac1 || $('#vyhra').html() == 'Vyhrál ' + hrac2){}
        else{
        for(var t = 0; t<hraciPole.length; t++)
        {
            for(var u = 0; u<hraciPole.length; u++)
            {
                if(hraciPole[t][u] != ''){
                    pat++;
                }
            }
        }

        if(pat == 36){
            document.getElementById('playground').style.color = 'red';
            $('#zprava').hide();
            setTimeout(function(){
                $('#vyhra').html('Remíza');
                $('#playground').hide();
                $('#newgame').show();
            },2000);
        }
        pat = 0;
        }

   
        console.log(hraciPole.length);
        

    }


    setInterval(function(){
        tick();
    },100);    

   //kliknutí
    $(document).on('click', function(element){
        var bunka = element.target.cellIndex;
        var radek = element.target.parentNode.rowIndex;
        $('#hrac1').html('Řádek: ' + radek);
        $('#hrac2').html('Buňka: ' + bunka);

        if(hraciPole[radek][bunka] === '' && aktivniHrac === 0)
        {
            hraciPole[radek][bunka] = 'X';
            aktivniHrac = 1;
            $('#zprava').html('Hraje ' + hrac2);
        }
        else if(hraciPole[radek][bunka] === '' && aktivniHrac === 1)
        {
            hraciPole[radek][bunka] = 'O';
            aktivniHrac = 0;
            $('#zprava').html('Hraje ' + hrac1);
        }
        
    })

    $('#newgame').click(function(){
        window.location.reload(20);
    })

})

 