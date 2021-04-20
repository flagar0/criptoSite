var alfa = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

var cifra = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
	['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', ],
	['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B',],
	['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', ],
	['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', ],
    ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', ],
	['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', ],
	['H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', ],
    ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ],
	['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', ],
	['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', ],
	['L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', ],
	['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', ],
	['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', ],
	['O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', ],
	['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', ],
	['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', ],
	['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', ],
	['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  ],
	['T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', ],
	['U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', ],
	['V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',],
	['W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', ],
	['X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', ],
	['Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', ],
	['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',]
];

var palavras;

function verLetra(entrada){
    var analise =  entrada.toLowerCase();
    for(a=0;a<26;a++){
        if(alfa.substring(a,(a+1))==analise){
            return a;
            break;
        }
    }
}

function Transformar(){
    if(document.getElementById('entrada').value != '' && document.getElementById('chave').value != ''){//comprovar
    var ent = document.getElementById('entrada').value;
    var key = document.getElementById('chave').value;
    palavra = ent.split(" ");
    var cripto ='';

    if(key.length<ent.length){
        var qtnFalta = ent.length-key.length;
        for(b=0;b<qtnFalta;b++){
            key = key+key.substring(b,(b+1));
        }
    }

    for(p=0;p<palavra.length;p++){
        if(cripto==''){
            cripto= Palavras(palavra[p],key);
        }else{
        cripto = cripto + ' ' + Palavras(palavra[p],key);
        }
    }
    
    document.getElementById('saida').innerHTML = cripto;
    document.getElementById('emp').innerHTML = 'Criptografia';
}else{
    alert('Digite um valor!');
}
}


function Palavras(ent,key){
    var final='';
    for(i=0;i<ent.length;i++){
        var letra1 =ent.substring(i,(i+1));
        var letra2 =key.substring(i,(i+1));
        if(((letra1.charCodeAt(0) >= 48 && letra1.charCodeAt(0) <= 57) || (letra1.charCodeAt(0) == 32))){
            if(final==''){
                final= letra1;
            }else{
            final= final+letra1;
            }
        }else{
            if(final==''){
                final= cifra[verLetra(letra1)][verLetra(letra2)];
            }else{
            final = final + cifra[verLetra(letra1)][verLetra(letra2)];
            }
        }
    }
    return final;
}

function desCripto(){
    if(document.getElementById('entrada').value != '' && document.getElementById('chave').value != ''){//comprovar
        var ent = document.getElementById('entrada').value;
        var key = document.getElementById('chave').value;
        palavra = ent.split(" ");
        var descripto ='';
    
        if(key.length<ent.length){
            var qtnFalta = ent.length-key.length;
            for(b=0;b<qtnFalta;b++){
                key = key+key.substring(b,(b+1));
            }
        }
    
        for(p=0;p<palavra.length;p++){
            if(descripto==''){
                descripto= Normal(palavra[p],key);
            }else{
            descripto = descripto + ' ' + Normal(palavra[p],key);
            }
        }
        
        document.getElementById('saida').innerHTML = descripto;
        document.getElementById('emp').innerHTML = 'Descriptografia';
    }else{
        alert('Digite um valor!');
    }
}

function Normal(var1,chav){
    var desfinal='';
    for(i=0;i<var1.length;i++){
        var letra3 =var1.substring(i,(i+1));
        var letra4 =chav.substring(i,(i+1));
        var local=0;
        var valor = verLetra(letra4);
        var valor2 = verLetra(letra3);

        for(n=0;n<26;n++){
            if(alfa.substring((n+valor),((n+valor)+1))==letra3.toLowerCase()){
                local = n;
                break;
            }
        }

        if(((letra3.charCodeAt(0) >= 48 && letra3.charCodeAt(0) <= 57) || (letra3.charCodeAt(0) == 32))){
            if(desfinal==''){
                desfinal= letra3;
            }else{
            desfinal= desfinal+letra3;
            }
        }else{
            if(desfinal==''){
                desfinal= cifra[local][0];
            }else{
            desfinal = desfinal + cifra[local][0];
            }
        }
}
return desfinal;
}