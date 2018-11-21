Vue.component('app-icon',{
	template: '<span :class="icon"></span>',
	props: ['img'],
	computed:{
		icon: function(){
			return 'glyphicon glyphicon-'+this.img;
		}
	}
}),

/*Vue.component('check',{
	template:'<div class="custom-control custom-checkbox mb-3"><input class="custom-control-input" :id="param" type="checkbox" :v-model="model"/><label class="custom-control-label" :for="param"><span>{{my}}</span></label></div>',
	props:['param','model','my'],

}),*/

new Vue({
	el: '#proyectoVue',
	data: {
		cantidad: 0,
		Aceptados: 0,
		Rechazados: 0,
		Nombre: true,
		Apellido: true,
		Email: true,
		Ciudad: false,
		Titulo: false,
		Genero: true,
		clientes: null,
		names: ''
	},
	methods: {
		getCliente: function(){
			axios
			.get('https://randomuser.me/api/?results='+this.cantidad)
			.then(response =>{
			this.clientes=response.data.results;
			})
		},

		ClienteAceptar: function(posicion){
			this.Aceptados++;
			this.clientes.splice(posicion,1);

		},

		ClienteRechazar: function(posicion){
			this.Rechazados++;
			this.clientes.splice(posicion,1);
		},

	},
	computed: {
		filtrar: function(){
      	if(this.clientes!=null){
      		return this.clientes.filter(cliente => {
        	return cliente.name.first.toLowerCase().includes(this.names.toLowerCase()) +cliente.name.last.toLowerCase().includes(this.names.toLowerCase());
        	console.log(cliente);
      		});
      	}else{
      		console.log('');
      	}
    	}
  	}
		
})
