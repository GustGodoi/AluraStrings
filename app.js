// Um pouco mais sobre Strings

// Cadeia de caracteres em array
const fruta = "banana";
// ["b",a"","n","a","n","a"]

// Função de um objeto string
// charAt() => retorna o caractere em específico da string
console.log("alura".charAt(3));

// Notação de Colchetes => retorna o caractere em específico da string
const palavra = "Alura";
console.log(palavra[0]);

// indexOf() => retorna a posição de determinado caracter dentro da string, 
// a primeira que encontrar
const palavra1 = "Alura";
console.log(palavra.indexOf("a"));

// toUpperCase() & toLowerCase() => tudo maiuculo ou minusculo

// substring() => busca um trecho da string e retorna
let frase = "mergulhando em tecnologia.";
console.log(frase.substr(0,11));

// slice() => mesma coisa que o substring
let frase1 = "mergulhando em tecnologia.";
console.log(frase.slice(0,11));

// replace => substitui um trecho da string por outro
let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));

// split() quebra strings em mais string utilizando certos caracteres como marcadores
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

// trim() remove espaços no início ou final da string
let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com