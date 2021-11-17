var $scorm = 0;
var $contexMenu = 0;
var $finalizado = false;
var $finalizadoVisto = false;
var $avanceCerrado = 0;
var $totalPaginas = 3;
var $myCarousel = $("#contenidoM")
var $btnHome = $('[data-btn="home"]');
var $tituloArea
var $contenido = $(".contenido");
var $video;
var $videoAudio;
var lgNav;
var idioma;
var $pagActual = null;
var $videosJson;
var $subtNext;
var $inicioComenzar = $("#inicio .btnComenzar");
var $btnPrev=$(".carousel-control-prev");
var $btnNext=$(".carousel-control-next");
var $area = 0;
//var $this = $(this);
//var $btnSalir = $(".btnSalir");
//var $btnAyuda = $(".btnAyuda");
//var $dataTemaBG = $(".bg")
//var $contBody = $(".contBody")
//var $contenidoCentral = $(".contenidoCentral")
//var $contNivel2 = $(".contenido")
//var $cerrarNivel2 = $(".contNivel2 .cerrar")
//var $inicio = $(".inicio");
//var $ayuda = $(".ayuda");
//var $textModulo = $(".txtActivo")
//var $nModulo = $(".numM")
//var $tituloModulo = $(".tituloM")
//var $ayudaComenzar = $(".ayuda .btnComenzar");
//var $volverLocation = $(".inicio .btnVolverLocation");
//var $menu = $("#colMenu ul");
//var $btnPils = $(".btnPils");
//var $btnNivel2 = $('[data-pop="true"]');
//var $btnInfograf = $(".btnInfografia");
//var $btnReto = $(".btnReto");
//var $btnInfo = $(".btnInfo");

var $temaActual = null;
var $modActual = null;
var $modActualPill = null;
//var $moduloData = null;
var $dataValor;
//var $indicadores = $(".indicadores");
//var $indicadorLi = $(".indicadores li");
var $accesoContenido = $(".accesoContenido");
//var contador = 0;
var porcentaje = 0;
//var $modulosArray = ["trailer", "introducción", "Aproximación histórica a la emigración internacional de El Salvador", "Análisis de los flujos migratorios de salvadoreños hacia Norteamérica", "Perfil sociodemográfico de la población en Estados Unidos 2019"];
var $lessonStatus = "";
var $dataRecuperada
//var $lessonLocation = 0;
var $animadosArraySlide = [];


var $vistosArray = [];
//var $menuArray = [];
//var $infoAdicionalVisto = []
//var $MtrailerArray = [];
//var $MintroArray = [];
//var $MintroArrayPill = [];
//var $M1Array = [];
//var $M1ArrayPill = [];
//var $M2Array = [];
//var $M2ArrayPill = [];
//var $M3Array = [];
//var $M3ArrayPill = [];
//var $M4Array = [];
//var $M4ArrayPill = [];
//var $M5Array = [];
//var $M5ArrayPill = [];
var $CursoData = {}
$CursoData.Mvistos = $vistosArray;
//$CursoData.AdicVistos = $infoAdicionalVisto;
//$CursoData.Mi = {};
//$CursoData.Mi.m = $MintroArray;
//$CursoData.Mi.pill = $MintroArrayPill;
//$CursoData.M1 = {};
//$CursoData.M1.m = $M1Array;
//$CursoData.M1.pill = $M1ArrayPill;
//$CursoData.M2 = {};
//$CursoData.M2.m = $M2Array;
//$CursoData.M2.pill = $M2ArrayPill;
//$CursoData.M3 = {};
//$CursoData.M3.m = $M3Array;
//$CursoData.M3.pill = $M3ArrayPill;
//$CursoData.M4 = {};
//$CursoData.M4.m = $M4Array;
//$CursoData.M4.pill = $M4ArrayPill;
//$CursoData.M5 = {};
//$CursoData.M5.m = $M5Array;
//$CursoData.M5.pill = $M5ArrayPill;


function $sinScorm(){
	  $(".spinner-box").delay(2000).fadeOut("slow", function(){
				   $("#capaBlanca").fadeOut();
	  });
}
    //////////////////////////////////////////////// COMUNICACION SCORM ////////////////////////////////////////////////
	function $ejecutaScorm(){
		/*if($avanceCerrado == 0){
			$(".indicadores li").addClass("open");
		}*/
		//inicializaSCORM();
		if($scorm != 0){
		startTimer();
		console.log("$dataRecuperadaFUERA======="+JSON.stringify($dataRecuperada));
		$dataRecuperada = recuperaLMS();
		if($dataRecuperada != null){
			//$(".ayuda").hide();
			//$(".inicio").removeClass("d-none");
			//$(".esInicio").hide();
			   $(".spinner-box").delay(2000).fadeOut("slow", function(){
				   //$(".esInicio").fadeIn();
				   //$(".inicio .btnComenzar").fadeIn();
				   $(".inicio").fadeOut();
			   });
			//$lessonLocationR = doGetValue('cmi.core.lesson_location');
			//$lessonLocation = parseInt($lessonLocationR);
			//$pagActual = $lessonLocation;
			$temaActualLMS = doGetValue('cmi.core.lesson_location');
			$temaActual = parseInt($temaActualLMS);
			porcentajeLMS = doGetValue('cmi.core.score.raw');
			porcentaje = parseInt(porcentajeLMS)
			$lessonStatus = doGetValue('cmi.core.lesson_status');
			$vistosArray = $dataRecuperada.Mvistos;
			$infoAdicionalVisto = $dataRecuperada.AdicVistos;
			$MintroArray = $dataRecuperada.Mi.m
			$MintroArrayPill = $dataRecuperada.Mi.pill
			$M1Array = $dataRecuperada.M1.m
			$M1ArrayPill = $dataRecuperada.M1.pill
			$M2Array = $dataRecuperada.M2.m
			$M2ArrayPill = $dataRecuperada.M2.pill
			$M3Array = $dataRecuperada.M3.m
			$M3ArrayPill = $dataRecuperada.M3.pill
			$M4Array = $dataRecuperada.M4.m
			$M4ArrayPill = $dataRecuperada.M4.pill
			$M5Array = $dataRecuperada.M5.m
			$M5ArrayPill = $dataRecuperada.M5.pill
			$CursoData.Mvistos = $vistosArray;
			console.log("$dataRECUPERADA======="+JSON.stringify($dataRecuperada))
			console.log("$lessonLocationRECUPERADA======="+$temaActual)
			console.log("porcentajeRECUPERADA======="+porcentaje)
			console.log("$lessonStatusRECUPERADA======="+$lessonStatus);
						
			$.each($CursoData.Mvistos, function () {
				$pos = this;
				console.log("vistosPOS========="+$pos)
				$("#indicadores li[data-index="+($pos+1)+"]").removeClass("disabled");
				$("#indicadores li[data-index="+($pos+1)+"]").find("i").removeClass("icon-lock").addClass("icon-unlock");
			});	
		
			//actualizaPorciento();
			colocaTema();
			/*$.each(sdata.modVistos, function () {
				$posM = this;
				console.log("modulosPOS========="+$posM)
				$(".indice li[data-lista="+$posM+"]").removeClass("inactivo").addClass("activo")
				$(".indice li[data-lista="+$posM+"] i").text("lock_open");
			});*/
				   
			
		   }else{
			   iniciaDatos();
			   $lessonLocation = 0;
			    $(".spinner-box").delay(2000).fadeOut("slow", function(){
				   //$(".esInicio").fadeIn();
				   //$(".inicio .btnComenzar").fadeIn();
				   $(".inicio").fadeOut();
			   });
			 /*  $(".spinner-box").delay(2000).fadeOut("slow", function(){
				   $(".imgAyuda").fadeIn("slow", function(){
					   $(".ayuda .btnComenzar").fadeIn("slow");
				   });
			   });*/
		   }
			
		
		$(window).on("beforeunload pagebeforehide pagehide", function () {
			terminarSesion();
		});
			
	}/// FIN IF $SCORM != 0 ///
	}
	



    //////////////////////////////////////////////// COMUNICACION SCORM ////////////////////////////////////////////////	

    //////////////////////////////////////////////// REDIMENZIONAR ////////////////////////////////////////////////	

function redimensionaBTN(){
	var anchoSalir = $btnSalir.innerWidth();
	$btnSalir.height(anchoSalir);
	var anchoMenu = $("#colMenu ul li").innerWidth();
	$("#colMenu ul li").height(anchoMenu);
	$("#colMenu ul").css('margin-top',anchoSalir/2.25);
	console.log("anchoSalir======="+ anchoSalir);
	console.log("anchoMenu======="+ anchoMenu);
}

//redimensionaBTN();

/*window.onresize = function() {
    redimensionaBTN();
}*/

    //////////////////////////////////////////////// REDIMENZIONAR ////////////////////////////////////////////////	
//animacionesCSS
  function doAnimations(elems, close) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";
    $("*").animate({
      scrollTop: 0
    }, 500);
	 
    elems.each(function () {
		$cierra = close
		if($cierra == true){
			var $this = $(this),
				$animationType = $this.data("animation");
			$this.show();
		   }else{
			   var $this = $(this),
				$animationType = $this.data("animationclose");
		   }

		
		$this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
			if($cierra == false){
			   $this.hide();
			   }
      });
    });
  }

  function doAnimationsSlide(elemSlide) {
	  $animadosArraySlide.length = 0;
    $animadosPaginaSlide = elemSlide.length
	  console.log("ELEMENTOS A ANIMAR EN PAGINA >>>>>>>> " + $animadosPaginaSlide);
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";
	  
    elemSlide.each(function () {

      var $this = $(this),
		  $animationType = $this.data("animation");
		
		$this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
		
			if ($animadosArraySlide.indexOf($this) == -1) {
				$animadosArraySlide.push($this);
				console.log("ELEMENTOS ANIMADOS EN PAGINA >>>>>>>> " + $animadosArraySlide.length);

			}
			
			if ($animadosArraySlide.length == $animadosPaginaSlide) {
				$animadosArraySlide.length = 0;
				if($pagActual == $totalPaginas){
					paginaVista();
				   }else{
					   consultarObligatorios();
				   }
			}
		});
	});
	  	$(".animaGrafico").one("webkitAnimationEnd animationend", function(){
			$(this).addClass("d-none");
	})
  }





function flechasonoff(){
	$paginaActuanlN = parseInt($pagActual);
	console.log("$ PAGINA NIVEL ACTUAL==========="+$paginaActuanlN)
		if(($pagActual)> 1){
			  $btnPrev.removeClass("disabled opacidad-0");
			  //$movilPrev.removeClass("prevMuestra");
		  }else{
			  $btnPrev.addClass("disabled opacidad-0");
			  //$movilPrev.addClass("prevMuestra");
		  }
	
		if(($paginaActuanlN) == $totalPaginas){
			  $btnNext.addClass("disabled opacidad-0");
			  //$movilNext.addClass("nextMuestra");
		  }else{
			  $btnNext.removeClass("disabled opacidad-0");
			  //$movilNext.removeClass("nextMuestra");
		  }
}

function avance(){
	$animadosArray.length = 0;
	$ultimoVistoArray = ($vistosArray.length);
	console.log("$ultimoVistoArray ========="+$ultimoVistoArray)
	if($pagActual == $ultimoVistoArray){
		$btnNext.removeClass("btnInactivo animNext");
		//$movilNext.removeClass("nextInactivo");
		console.log("$pagActual == $ultimoVistoArray")
	}
	$nextPage = ($pagActual*1)+1;
	$nextPageString = $nextPage.toString();
	console.log("$nextPage ========="+$nextPage);
	console.log("$vistosArray ========="+$vistosArray);
	console.log("$nextPageindexOf ========="+$vistosArray.indexOf($nextPageString))
	
	if($vistosArray.indexOf($nextPageString) != -1){
		$btnNext.removeClass("btnInactivo");
		//$movilNext.removeClass("nextInactivo");
	}else{
		$btnNext.addClass("btnInactivo");
		//$movilNext.addClass("nextInactivo");
	}	
}

function retrocede(){
	$btnNext.removeClass("btnInactivo animNext").addClass("d-flex")
	//$movilNext.removeClass("nextInactivo");
}
////////// MODAL HIDE.BS //////////




function popFinalizado(){
	console.log("3____$FINALIZADO????????==== " + $finalizado);
	if(isMobile.any() || navigator.maxTouchPoints == 5){
		$(".contNivel2").fadeIn();
	}else{
		doAnimations($contNivel2, true);
	}
	$contNivel2.find(".moduloN2").text("");
	$contNivel2.find(".subTitulo").text("");
	$(".contBody").html('<div class="row m-5 justify-content-center align-content-center h-50"><h3 class="m-0"><strong>¡Enhorabuena!</strong></h3><div class="col-12 text-center mt-5"><p>Has finalizado el curso Modelo Específico de Recobros.</p><p>Ahora tienes que salir y acceder al test para evaluar lo aprendido en este curso. Y recuerda, siempre que lo desees puedes volver a entrar para revisar los conceptos.</p><p><strong>Gracias. ¡Hasta pronto!</strong></p></div></div>');
	$finalizadoVisto = true;
}

////////// POP 2 NIVEL //////////




////////// MENU //////////

function toogleMenu(){
	$("#colMenu").find("button").removeClass("visto");
	//mostramos o no el menu
	if($temaActual == 1){
		$menu.fadeOut();
		$textModulo.text("módulo 1");
		   $tituloModulo.text("Proceso histórico y tendencias de la migración salvadoreña a Estados Unidos")
		   $nModulo.text("");
		$accesoContenido.html("")
		$modActual = window["$MtrailerArray"];
	   }else if($temaActual == 2){
		   $textModulo.text("intro");
		   $menu.fadeIn();
		   $btnInfograf.parent("li").hide();
		   $btnReto.parent("li").hide();
		   $btnInfo.parent("li").fadeIn();
		   $tituloModulo.text("Proceso histórico y tendencias de la migración salvadoreña a Estados Unidos")
		   $nModulo.text("");
		   $accesoContenido.html("")
		   $modActual = window["$MintroArray"];
		   $modActualPill = window["$MintroArrayPill"];
	   }else if($temaActual >= 3){
		   $menu.fadeIn();
		   $btnInfograf.parent("li").fadeIn();
		   $btnReto.parent("li").fadeIn();
		   $btnInfo.parent("li").fadeIn();
		   $textModulo.text("capítulo");
		   numeroModuloActual = "0" + ($temaActual-2)
		   $nModulo.text(numeroModuloActual);
		   $accesoContenido.html("<span>Accede al Contenido</span>")
		   nombreModuloActual = $modulosArray[$temaActual-1]
		   $tituloModulo.text(nombreModuloActual);
		   $modActual = window["$M"+($temaActual - 2)+"Array"];
		   $modActualPill = window["$M"+($temaActual - 2)+"ArrayPill"];

	   }else if($temaActual == 0){
		   $menu.fadeOut();
	   }
	$contenidoCentral.one("webkitAnimationEnd animationend", function(){
		$contenidoCentral.removeClass("animate__backOutUp")
		$contenidoCentral.children("div").addClass("d-none");
		$contenidoCentral.attr("data-active", $temaActual);
		$('[data-contenido="'+$temaActual+'"]').removeClass("d-none");
		if($temaActual == 1){
			$contenidoCentral.find("div").show();
		}
		$contenidoCentral.addClass("animate__backInUp")
	});
}


function audioPlay(boton){
	$('#personaje').addClass("animando");
	
	console.log("EJECUTANDO FUNCION AUDIOPLAY")
	if($pagActual == 0){
		$pA = ($pagActual*1)+1;
	   }else{
		   $pA = ($pagActual*1);
	   }
	
	console.log("$pA = "+ $pA);
	console.log("$pagina[$pagActual].id"+$pagina[$pA-1].id);
	if($pagina[$pA-1].locs != 0){
		$('#audio'+$pA+'_1')[0].play();
		$("#cajaSubtitulos p").text($pagina[$pA-1].subt[0]);
		$("#cajaSubtitulos").fadeIn();
	}
	$('audio').on("ended", function(){
		if(!$('.contMenu').hasClass("activo")){
			$('#personaje').removeClass("animando");
			if($pagina[$pA-1].locs != 0){
				$actAudio = $(this).attr('id').slice(-1);
				$nextAudio = ($actAudio.slice(-1)*1)+1;
				console.log("$nextAudio"+$nextAudio);
				console.log("$pagina[$pagActual].id"+$pagina[$pA-1].id);
				console.log("$pagina[$pagActual].locs"+$pagina[$pA-1].locs);
				if($nextAudio <= $pagina[$pA-1].locs){
					console.log($pA +'_' + $nextAudio);
					$('#audio'+$pA+'_' + $nextAudio)[0].play();
					$('#personaje').addClass("animando");
					$("#cajaSubtitulos p").text($pagina[$pA-1].subt[$nextAudio-1])
				}else{
					$("#cajaSubtitulos").fadeOut();
					$("#cajaSubtitulos p").text("");
					$('#personaje').removeClass("animando");
					$('#personaje').fadeOut();
					if($pagActual == 1){
						$myCarousel.carousel('next');
					   }
					if($pagActual == 2){
						$("#menu").removeClass("disabled");
					   }
					if($pagActual == 3){
						$(".logosDespedida").fadeIn();
					   }
			}
		}
		   }else{
			   $("#cajaSubtitulos").fadeOut();
			   $("#cajaSubtitulos p").text("");
			   $("#cierreVideo").fadeIn();
			   $("#cierreVideo img, #cierreVideo .rombo").addClass("cerrado");
			   $("#controlesVideo").addClass("none");
			   $("#controlesVideo button").removeClass("icon-play_arrow icon-pause");
			   $(".tituloVideo p").removeClass("tituloVideoAnimado");
			   $('.icon-play').fadeIn();
			   $(".logosPoster").fadeIn();
			   setTimeout(detenerAudioVideo, 1000);
		   }

	});
}

function detenerAudioVideo(){
	$('audio').each(function(){
    	this.pause(); // Stop playing
    	this.currentTime = 0; // Reset time
		
	});
	
	$('video').each(function(){
    	this.pause(); // Stop playing
    	this.currentTime = 0; // Reset time
	});
	
	//$video.removeAttr("controls");
	$("#cajaSubtitulos").fadeOut();
	$("#cajaSubtitulos p").text("");
}



    //////////////////////////////////////////////// GENERA PAGINAS ////////////////////////////////////////////////	
var content = [];


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function esIOs(){
    return (
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i))
    );
}

function $recargarCarrousel(){
	console.log("$recargarCarrousel")
	  $myCarousel.carousel({
	  touch: false
  });

////////// SLID.BS //////////

$myCarousel.on("slid.bs.carousel", function(e) {
	console.log("slid.bs")
	console.log("slid.bse"+e);
	
		conocerIndex();
		flechasonoff();
	if($pagActual != 0){
		$('#personaje').fadeIn("slow", function(){
			audioPlay()
		});
		
		//setTimeout(function(){audioPlay();}, 400);
	}
		
		//nombraModulo();	
	if(isMobile.any() || navigator.maxTouchPoints == 5){
		consultarObligatorios();
	}

});
////////// SLIDE.BS //////////
$myCarousel.on("slide.bs.carousel", function(e) {
	console.log("slide.bs")
	if(isMobile.any() || navigator.maxTouchPoints == 5){
		
	}else{
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimationsSlide($animatingElems);
	}

  });
}



////////// FUNCION AVANCE //////////

function actualizaSuspend(){
	console.log("ACTUALIZA XCIENTO==========="+porcentaje);
	console.log("VISTOS ARRAY==========="+JSON.stringify($CursoData));
	console.log("TEMA ACTUAL LESSON LOCATION==========="+$temaActual);
	$sdataCompleto = JSON.stringify($CursoData).replace(/\"/g, '*');
	if(porcentaje >= 99){
		console.log("COMPLETED");
		$lessonStatus = "completed";
		if($finalizadoVisto == false){
			$finalizado = true;
		}
		
	}else{
		   console.log("INCOMPLETE");
		   $lessonStatus = "incomplete"
	   }
	if($scorm!=0){
		computeTime();
		guardaLMS($sdataCompleto, $temaActual, porcentaje, $lessonStatus)
	}else{
		console.log("///////////////// ACTUALIZA SEGUIMIENTO /////////////////")
		console.log($sdataCompleto)
	}
}

function $comprueboArray(){
	console.log("COMPROBANDO ARRAY_1");
	$.each($modActual, function () {
		$posM = this;
		console.log("COMPROBANDO ARRAY_2 >>>>>>>> $posM===" + $posM)
		console.log("modulosPOS========="+$posM);
		console.log("LARGO MODULO VISTO >>>>>>>>" + $modActual.length);
		$("#colMenu").find("button[data-valor="+$posM+"]").addClass("visto");
		console.log("VISTOS ARRAY_2==========="+JSON.stringify($CursoData));
		//$(".indice li[data-lista="+$posM+"] i").text("lock_open");
		comprueboMcompleto();
	});
	
}

function $comprueboArrayPill(){
	console.log("COMPROBANDO ARRAY PILL")
	$.each($modActualPill, function () {
		$posM = this;
		console.log("COMPROBANDO ARRAY PILL >>>>>>>> $posM===" + $posM)
		//$myCarousel.carousel($posM);
		$btnNext.removeClass("btnInactivo");
		$(".carousel-indicators").find("li[data-slide-to="+($posM-1)+"]").removeClass("inactivo").addClass("visto");
		$(".carousel-indicators").find("li[data-slide-to="+($posM)+"]").removeClass("inactivo");
		$("#"+$posM).find(".obligatorio").removeClass("obligatorio").addClass("visto")
		//consultarObligatorios();
	});
	
}

function actualizaPorciento(){
	//$valorTrailer = 10;
	//$valorModulo = 15;
	var $elementosVistos = $vistosArray.length;
	if(porcentaje < 100){
		porcentaje = (Math.round(($elementosVistos / $totalPaginas)*100));
	}
	   console.log("PORCENTAJE >>>>>>>>"+porcentaje);
        //porcentaje = (Math.round(($elementosVistos / $totalPaginas)*100));
        //$('.progress-value > div').text(porcentaje + "%");
        //var pct = ((100-porcentaje)/100)*c;
        //$('.progress').attr('data-percentage',porcentaje);
        //$circle.css({ strokeDashoffset: pct});
	   actualizaSuspend();
    }

function consultarObligatorios() {
			console.log("*******CONSULTO OBLIGATORIOS*******");
			console.log("ESTA PAGINA FUE VISTA? (si es -1 NO)====== "+ $modActualPill.indexOf($pagActual));
			console.log("PAGINA ACTUAL ====== "+ $pagActual)
			if($modActualPill.indexOf($pagActual) == -1){
				console.log("PAGINA VISTA!!!!!");
				var paginaObligatorios = $('div.active').find(".obligatorio");
			
			if (paginaObligatorios.length == 0) {
				if($pagActual != $totalPaginas){
					$(".carousel-control-next").removeClass("btnInactivo").addClass("animNext").one("webkitAnimationEnd animationend", function(){
					$(".carousel-control-next").removeClass("animNext").addClass("d-flex");
					});
					//$("footer.movil .next").removeClass("nextInactivo");
				}else{
					if($modActual.indexOf($dataValor) == -1){
						$modActual.push($dataValor);
					}
				}
	
				$modActualPill.push($pagActual);
				
				$(".carousel-indicators li[data-slide-to="+($pagActual - 1)+"]").addClass("visto");
				$(".carousel-indicators li[data-slide-to="+($pagActual)+"]").removeClass("inactivo");
				//actualizaPorciento();
			}
			   }else{
				   $(".carousel-control-next").removeClass("btnInactivo");
			   }
			//console.log("OBLIGATORIOS EN PAGINA >>>>>> "+paginaObligatorios.length)
			actualizaSuspend();
			console.log("ESTADO CURSO >>>>>>> " + JSON.stringify($CursoData))
			console.log("ESTADO ARRAY ACTUAL >>>>>>> " + $modActualPill)
	
		}

function paginaVista(){
	if($modActualPill.indexOf($pagActual) == -1){
		if($modActual.indexOf($dataValor) == -1){
			$modActual.push($dataValor);
		}
		$modActualPill.push($pagActual);
		$(".carousel-indicators li[data-slide-to="+($pagActual - 1)+"]").addClass("visto");
		$(".carousel-indicators li[data-slide-to="+($pagActual)+"]").removeClass("inactivo");
		actualizaSuspend();
	}
}




////////// LOCALIZO EN QUE PAGINA ESTOY //////////
function conocerIndex(){
	console.log("ESTOY CONOCIENDO CUAL ES LA PAGINA ACTUAL");
	//$temaActual = $("#bg").data("tema");
	//console.log("$temaActual======="+$temaActual);
	//$('#indicadores li[data-index="'+$temaActual+'"]').addClass("actual")
	// toogleMenu();
	$pagActual = $('.carousel-inner > div.active').attr("id");
	//$(".carousel-indicators li").removeClass("active");
	//$(".carousel-indicators li[data-slide-to="+($pagActual - 1)+"]").addClass("active");
	console.log("MODULO ACTUAL PILDORA >>>>>> "+$modActualPill);
	console.log("PAGINA ACTUAL ======== "+$pagActual);
	if(porcentaje > 1){
	   actualizaSuspend();
	}
	//actualizaSuspend();
}

function comprueboMcompleto(){
	console.log("*************COMPRUEBO MODULO COMPLETADO*************")
	if($temaActual==2){
		if($modActual.length == 1){
			if($vistosArray.indexOf($temaActual)==-1){
			   $vistosArray.push($temaActual);
				actualizaPorciento();
				nextModulo();
			   }
		   }
	}else if($temaActual >= 3){
		if($modActual.length == 1){
			console.log("*****MODULO " +$modActual + " LARGO " +$modActual.length+ "*************")
			if($vistosArray.indexOf($temaActual)==-1){
			   $vistosArray.push($temaActual);
				actualizaPorciento();
				nextModulo();
			   }
		   }
	}
	
}



//////////////////////////////////////////////// CARGA IDIOMA ////////////////////////////////////////////////

	function setIdioma(leng) {
				$vistosArray = []
			  var UrlnombreJson = "js/estructura_" + leng + ".json";
				var $largoIndice = []
				console.log("setIdioma==========="+leng);
				$src = "img/logoUSAID_"+leng+".png";
				$srcPoster = "img/poster_"+leng+".png";
				$(".logoUSAID").attr('src', $src);
				$(".logosDespedida").attr('src', $srcPoster);
				//$("video").attr('poster', $srcPoster);
			  $.getJSON(UrlnombreJson, function (estructuraJson) {
				  //console.log("json");
			    caso = estructuraJson.casos;
			    $tituloPrincipal = estructuraJson.tituloCurso;
			    $tituloTour = estructuraJson.generales[0].tituloTour;
			    $bienvenida = estructuraJson.generales[0].bienvenidaIntro;
			    document.title = $tituloTour;
			    $comenzar = estructuraJson.generales[0].btnComenzar;
			    $videosJson = estructuraJson.videos;



			    $(".idiomas li").removeClass("idiomaActivo");
			    $(".idiomas li.selecidioma_" + idioma).addClass("idiomaActivo");
				  console.log(">>>>>>>>>>>selecidioma_"+idioma)
			    //////////////////////////////////////////////// DENTRO IDIOMA INTRO////////////////////////////////////////////////
			    $("#inicio h2, header h2").text($tituloPrincipal);
				$("header h1").html($tituloTour + "<span id='area'></span>");
				$("#inicio h1").text($bienvenida);
			    $("#inicio .btnComenzar").text($comenzar)
				
				 //////////////////////////////////////////////// TITULOS AREAS ////////////////////////////////////////////////
				  $tituloArea01 = estructuraJson.generales[0].titulosArea[0]
				  $tituloArea02 = estructuraJson.generales[0].titulosArea[1]
				  $tituloArea03 = estructuraJson.generales[0].titulosArea[2]
				  $tituloArea = estructuraJson.generales[0].titulosArea
				  $(".pMenu01 > h3").text($tituloArea01);
				  $(".pMenu02 > h3").text($tituloArea02);
				  $(".pMenu03 > h3").text($tituloArea03);
				  
				  //////////////////////////////////////////////// AUDIOS ////////////////////////////////////////////////
				  $pagina = estructuraJson.paginas;
				  $.each($pagina, function (i, item) {
					  for(var x = 1; x <= item.locs ; x++){
					  	$('body').append('<audio src="media/'+ idioma +'/loc/locp'+ item.id + '_' + x +'.mp3" class="audio" id="audio'+item.id+'_'+x+'"></audio>')
					  }
				  });
				  
				  
				  for(var v = 1; v <= 3 ; v++){
					  var audio = $('#videoAudio0'+v)
					  	audio.attr('src','media/'+ idioma +'/video'+v+'.mp3')
					  }		

		
			  });//////JSON
			}//////SETIDIOMA
	
	
	$(".idiomas li").click(function(){
		$(".audio").remove();
		idioma = $(this).data("idioma");
		setIdioma(idioma);
	});


////////// INICIALIZA //////////
function comenzar(dato){
	
	

	
	if($contexMenu != 0){
		$(document).bind("contextmenu",function(e){
			return false;
		}); 
	}
	

	console.log("FUNCION COMENZAR")
	conocerIndex();
	
	$('.btnSalir').click(function(){
		//$(".modal-backdrop").fadeIn();
	});
	
	$('.salirsi').click(function(){
		cerrar();
	});
	
	$('.salirno, .cerrar').click(function(){
		$(".modal").modal('hide');
	});	
	
	function cerrar(){
		window.close();
		top.close();
	}

/*	$('*[data-toggle="modal"]').click(function(){
		$('<div class="modal-backdrop"></div>').appendTo('#contenedor');
		$(".modal-backdrop").fadeIn();
	});	*/

/*
$('#video').bind("timeupdate pause", function(){
	$tiempoVideo = $('#video').get(0).currentTime;
	console.log("ddddd")
	$tiempoCorte = 140.50
	if($vistosArray.indexOf($temaActual) == -1){
		if($tiempoVideo >= $tiempoCorte){
			nextModulo();
			$vistosArray.push($temaActual);
			comprueboMcompleto();
			actualizaPorciento();
		}
	}
});*/
	
	
/*$(".playVideo").click(function(){
	darlePlay($(this));
})

$('video').on("playing", function(){
	$(this).parent('.contieneVideo').find('i').removeClass("d-md-block");
	console.log("play video")
})


	
/*	$('button[data-toggle="modal"').click(function(){
		var $file = 'cont/p'+ $pagActual +'.html';
		var $target = $(this).data("target");
		var $titulo = $(this).data("titulo");
		var $contPop = $(this).data("contpop");
		$($target).find('.modal-body').empty();
		$($target).find('.modal-title').text($titulo);
		console.log("DATA_ESTA???========" + $contPop);
		if($contPop == undefined){
			$($target).find('.modal-body').load($file + ' #popContenido');
		   }else{
			$($target).find('.modal-body').load($file + ' #popContenido' + $contPop);
		   }
		
	});*/	
	

	
	$('#indicadores > li').click(function(){
		$contenidoCentral.addClass("animate__backOutUp");
/*		$("video").each(function(){
			this.pause();
			this.currentTime = 0;
		})*/
		var $tema = $(this).data("index");
		if($tema == 2){
			$contenidoCentral.parent('div').removeClass("mt-0 pt-5 offset-1 col-6 col-7").addClass("col-8 offset-0 mt-5");
			$("#colMenu").removeClass("offset-1").addClass("offset-0");
		   }else if($tema == 1){
			$contenidoCentral.parent('div').removeClass("offset-0 col-8 col-6 mt-5").addClass("col-7 offset-1 mt-0 pt-5");
			$("#colMenu").addClass("offset-1").removeClass("offset-0");
		   }else{
			    $contenidoCentral.parent('div').removeClass("col-8 col-7 offset-0").addClass("mt-5 pt-5 offset-1 col-6"); 
			 $("#colMenu").addClass("offset-1").removeClass("offset-0");
		   }
		console.log("$tema======"+$tema)
		$('#bg').attr('data-tema', $tema);
		$('#bg').data('tema', $tema);
		$('.actual').removeClass("actual")
		conocerIndex();
		$comprueboArray();
		$comprueboArrayinfo();
	});	
	

	
/*		$('[data-toggle="tooltip"]').tooltip({
			animation:true,
			trigger:"hover"
		})*/
}


$inicioComenzar.click(function(){
	$myCarousel.carousel(1);
	$('header').addClass("animate__backInDown").removeClass("d-none animate__backOutUp");
	//setTimeout(function(){audioPlay();}, 400);
	$sdataCompleto = JSON.stringify($CursoData);
	console.log("///////////////// SEGUIMIENTO /////////////////")
	console.log($sdataCompleto)
	detenerAudioVideo();
});

$btnHome.click(function(){
	if($(this).hasClass("btnHome")){
		$('header').removeClass("animate__backInDown").addClass("animate__backOutUp")
		$myCarousel.carousel(0);
		detenerAudioVideo();
		$('#personaje').removeClass("animando");
		$('#personaje').fadeOut();
		$("#menu").addClass("disabled");
		$vistosArray = [];
	}else{
		$('header button').toggleClass("btnHome btnBack");
		$('header button i').toggleClass("icon-home icon-back");
		$(".contenido").toggleClass("d-none");
		$('.contMenu').removeClass("activo");
		$("#area").text("");
		$video.get(0).pause();
		$video.get(0).currentTime = 0;
		$(".barraAvance").css('width', "0%");
		$video.addClass("d-none");
		//$video.get(0).load();
		$('.icon-play').fadeIn();
		detenerAudioVideo();
		$("#controlesVideo").addClass("none");
		if($vistosArray.length == $totalPaginas){
			$myCarousel.carousel('next');
		}
		$(".tituloVideo p").removeClass("tituloVideoAnimado");
		$("#cierreVideo").fadeOut();
		$(".logosPoster").delay(800).fadeOut("slow", function(){
		$(this).removeClass("animated backInDown delay-1s");
		$("#cierreVideo img, .rombo").removeClass("cerrado")
	});
	}
	
	$sdataCompleto = JSON.stringify($CursoData);
	console.log("///////////////// SEGUIMIENTO /////////////////")
	console.log($sdataCompleto);

});


$('.contMenu').click(function(){
	$(this).addClass("activo");
	$area = $(this).data("area");
	console.log("AREA="+ $area);
	console.log("AREA="+ $area*1);
	$bg = $(this).data("bg");
	$('header button i').toggleClass("icon-home icon-back");
	$('header button').toggleClass("btnHome btnBack");
	$video = $("#video0"+$area);
	$(".tituloVideo p").text($tituloArea[$area-1])
	$videoAudio = $("#videoAudio0"+$area);
	$video.removeClass("d-none");
	$video.addClass("animated backInDown delay-1s")
	$(".skew-image > div").removeClass('area1 area2 area3').addClass("area"+$area)
	$(".icon-play").addClass("animated flipInY delay-2s")
	$(".logosPoster").css("display","block").addClass("animated backInDown delay-1s");
	$(".contenido").toggleClass("d-none");
	$nombreArea = $(".pMenu0" + $area + " > h3").text();
	$("#area").text(" | " + $nombreArea);
});

function avanceVideo(video){
	//$video = video;
	$videoAudio.on("timeupdate", function(){
		var $largoN = $videoAudio.duration;
		var $actualN = $videoAudio.currentTime;
		var $porcentaje = this.currentTime * 100 / this.duration;
		_this = this;
		$video.parents("div").find(".barraAvance").css('width', $porcentaje + "%");
		//$playvisible = $video.currentTime;
	});
}




$('.icon-play').click(function(){
	//$video.attr('controls', 'controls')
	console.log(">>>>>>>>>>>>$video>>>>= "+$video)
	$video[0].play();
	//$videoAudio[0].load()
	$videoAudio[0].play();
	$subtNext = 0;
	$("#controlesVideo").removeClass("none");
	$("#controlesVideo button").addClass("icon-pause");
	$(".tituloVideo p").addClass("tituloVideoAnimado");
	if($vistosArray.indexOf($area)==-1){
		$vistosArray.push($area);
		actualizaPorciento();
		//nextModulo();
	}
	$("#cierreVideo").fadeOut();
	$(".logosPoster").delay(800).fadeOut("slow", function(){
		$(this).removeClass("animated backInDown delay-1s");
		$("#cierreVideo img, .rombo").removeClass("cerrado")
	});
	
});

$('button').click(function(){
	if($(this).hasClass("icon-play_arrow")){
		console.log("play_arrow")
		$video[0].play();
		$videoAudio[0].play();
		$("#controlesVideo button").toggleClass("icon-play_arrow icon-pause");

	   }else if($(this).hasClass("icon-pause")){
		   console.log("pause")
		   $video[0].pause();
		   $videoAudio[0].pause();
		   $("#controlesVideo button").toggleClass("icon-play_arrow icon-pause");
	   }
});



$('video').on("playing", function(){
	$('.icon-play').fadeOut();
	$("#cajaSubtitulos").fadeIn();
	$("#videobg")[0].volume = 0.25;
	$("#videobg")[0].play();
})

$('video').on("timeupdate", function(){
	//console.log("ID DEL VIDEO JSON="+ $videosJson[$area-1].id);
	console.log("AREA="+ $area);
	$tiempoActual = Math.round(this.currentTime);
	console.log("EL TIEMPO ACTUAL ES = " + $tiempoActual);
	if($area != 0){
		if($videosJson[$area-1].tiempos.indexOf($tiempoActual) >= 0){
			console.log("EL TIEMPO EXISTE = "+ $tiempoActual);
			console.log("SUBTNEXT = " + $subtNext);
			console.log("EL SUBT ES = "+ $videosJson[$area-1].subt[$subtNext]);
			$("#cajaSubtitulos p").text($videosJson[$area-1].subt[$subtNext]);
			$subtNext = $videosJson[$area-1].tiempos.indexOf($tiempoActual);
			console.log("SUBTNEXT ACTUALIZADO ES = " + $subtNext);
			}
		avanceVideo();
	}

	
})

/*$('video').on("ended", function(){
	$('.icon-play').fadeIn();
	//$video.removeAttr("controls");
	detenerAudioVideo();
	$("#controlesVideo").addClass("none");
	$("#controlesVideo button").removeClass("icon-play_arrow icon-pause");
	$(".tituloVideo p").removeClass("tituloVideoAnimado");
})*/



$('header img').click(function(){
	$myCarousel.carousel('next');
});





 
    //////////////////////////////////////////////// READY!!!!!!!! ////////////////////////////////////////////////	
	//////////////////////////////////////////////// LOADING ////////////////////////////////////////////////

$(".spinner-box").fadeIn();


$(document).ready(function () {
	
$("#video01")[0].pause();	
$("#video02")[0].pause();	
$("#video03")[0].pause();
//////////////////////////////////////////////// DETECTA EL IDIOMA ////////////////////////////////////////////////
	lgNav = navigator.language || navigator.userLanguage;
	idioma = lgNav.substring(0, 2);

	 console.log ("lgNav: " + lgNav);
	 console.log ("The language is: " + idioma);
	
/*	if(idioma === "es" || idioma === "pt"){
		
	}else{
		idioma = "en"
	}*/
	
	setIdioma(idioma);
	
	console.log ("The language is: " + idioma);
	
	
	 console.log("navigator.userAgent>>>>>> "+navigator.userAgent)
	 console.log("navigator.maxTouchPoints>>>>>> "+navigator.maxTouchPoints)
	comenzar();
   	//$cargarPaginas();
	if($scorm != 0){
		$ejecutaScorm();
	}else{
		$sinScorm();
	}
	
	$recargarCarrousel();
	
});
