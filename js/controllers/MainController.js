app.controller('MainController', ['$scope', '$location',  function($scope, $location){

	$scope.muebles = [];
	$scope.titulo = "";

	// $scope.titulo="Halls";

	var absUrl = $location.absUrl();
	var tipo = absUrl.substr(1).split('=')[1];


	var cocinasNortia = [
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen1.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen2.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen3.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen4.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen22.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/cocinasNortia/Imagen33.jpg"
		}
	];

	var livingComedorNortia = [
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen1.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen2.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen3.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen4.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen5.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen6.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen7.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen8.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen9.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen10.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen11.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen12.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen13.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen14.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen77.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen667.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/livingComedorNortia/Imagen99.jpg"
		}
	];

	var mueblesTvNortia = [
		{
				nombre: "",
				imagenUrl: "img/mueblesTvNortia/Imagen5.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/mueblesTvNortia/Imagen6.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/mueblesTvNortia/Imagen7.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/mueblesTvNortia/Imagen8.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/mueblesTvNortia/Imagen9.jpg"
		}
	];

	var sillonesRespaldosNortia = [
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen39.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen40.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen41.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen42.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen43.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen44.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen45.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen46.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen47.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen48.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen49.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen50.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen51.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen52.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen53.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen54.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen55.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen56.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen57.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen58.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen59.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen60.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen61.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen62.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen63.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen64.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/sillonesRespaldosNortia/Imagen65.jpg"
		}
	];

	var vestidoresNortia = [
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen9.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen10.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen11.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen12.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen13.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen14.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen15.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen16.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen17.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen18.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen19.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen20.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen21.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen22.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen23.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen24.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen25.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen26.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen27.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen28.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen29.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen30.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen31.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen32.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen33.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen34.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen35.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen36.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen37.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen38.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/vestidoresNortia/Imagen39.jpg"
		}
	];

	var aMedida = [
		{
				nombre: "",
				imagenUrl: "img/aMedida/Imagen46.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/aMedida/Imagen8.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/aMedida/Imagen10.jpg"
		},
		{
				nombre: "",
				imagenUrl: "img/aMedida/Imagen4.jpg"
		}
	];

	switch (tipo) {
		case "1":
			$scope.muebles = cocinasNortia;
			$scope.titulo = "Cocinas";
			break;
		case "2":
			$scope.muebles = livingComedorNortia;
			$scope.titulo = "Living Comedor";
			break;
		case "3":
			$scope.muebles = mueblesTvNortia;
			$scope.titulo = "Muebles TV";
			break;
		case "4":
			$scope.muebles = sillonesRespaldosNortia;
			$scope.titulo = "Sillones y Respaldos";
			break;
		case "5":
			$scope.muebles = vestidoresNortia;
			$scope.titulo = "Vestidores";
			break;
		case "6":
			$scope.muebles = aMedida;
			$scope.titulo = "A Medida";
			break;
		default:
			console.log("error en opciones...");
			break;

	}

}]);
