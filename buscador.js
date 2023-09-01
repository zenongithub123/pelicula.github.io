const form = document.getElementById('form');



const array = [

 	mario = {
 	title: 'Mario Bros',
 	autor: 'Breack Parket'
 },

 	spiderman = {
 		title : 'spiderman 1',
 		Creador : 'Stan Lee y Steve Ditko',
 		Fecha_de_Estreno : 'Fecha de estreno: 15 de mayo de 2002',
 	},

 	spidermanMove = {
 		title : 'the Amazing Spiderman',
 		Direccion : 'Marc Webb',
 		Produccion : 'Avi Arad Matt Tolmach Laura Ziskin',
 		Fecha_de_Estreno : '3 de julio de 2012'
 	}

];




// ENVIO DE LOS DATOS

form.addEventListener('submit',(e) => {
	e.preventDefault();
	
	
		resultado.innerHTML = ('BUSCANDO RESPUESTA.....');



		
		

		function Mout (Peliculas){
			if(input.value === ''){
				
				alert('Nada en la busqueda');
				resultado.innerHTML = `<h1 class="error"> UPPS... ERROR EN LA BUSQUEDA NO ENCONTRADO</h1>`;
			}
		
	


			if(input.value === `mario bros` || (input.value === 'mario') || (input.value === 'Mario') || (input.value === 'Mario bros') || (input.value === 'mario bros la pelicula') || (input.value === 'Mario bros la pelicula')) {
				
					resultado.innerHTML = `
									<h1 class="titulo">Mario Bros</h1>
									<img src="img/mario2.jpg" class="mario" id="img"></img>
									`;
					console.log(mario, resultado);
					return mario;
			}

			if(input.value === 'spiderman' || (input.value === 'Spiderman') || (input.value === 'El hombre araña') || (input.value === 'el hombre araña') || (input.value === 'Spiderma') || (input.value === 'spiderma')){
				
				resultado.innerHTML = `
									<h1>Spiderman</h1>

									<img src="img/spiderman.jpg" class="mario" id="img"></img>
									<img src="img/spiderman2.jpg" class="mario" id="img"></img>
									
									
									`;
				console.log(spidermanMove, spiderman);
				console.log(resultado); 



			}




			else{
					resultado.innerHTML = `<h1 class="error"> UPPS... ERROR EN LA BUSQUEDA NO ENCONTRADO</h1>`;

			}

		

		}
			setTimeout(Mout, 3000);



			
		
	


});


