var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var AUX = 0;

var vet = [];

if (A > B)  
    {
        AUX = A;
        A = B;
        B = AUX;
    }

    var range = B - A; 

    var soma = 0

for (var i = 0; i < range - 1 ; i++)
    {   
        A = A + 1;

        if (A % 2 != 0)
            {
                vet[i] = A;  
            }
        else
            {
                vet[i] = 0;
            }    
         
        soma = soma + vet[i];
    }

console.log(soma);
