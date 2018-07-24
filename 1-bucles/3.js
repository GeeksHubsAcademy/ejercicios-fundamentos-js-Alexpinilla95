let caracterInicial = (texto) => {
    // Aquí tu código.  Desde aquí:
		    if ((typeof texto === 'string') && (texto != ('')) &&(parseInt(texto)=='NaN')) {
	
			document.write(texto.charAt(0));
		
		
			}
			else if (texto === ''){
				
			document.write("Debo ser ejecutada con un string no vacío");
				
			}
			else if parseInt(texto)!='NaN'{
				
			document.write("Debo ser ejecutada con un string");
			
			}
    // Hasta aquí.
}

var texto = prompt("introduce una string");
caracterInicial(texto);// JavaScript Document