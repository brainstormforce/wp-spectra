/**
 * Common js file for timeline.
 */
 


window.addEventListener(
    'load', function () {	

	var x = document.getElementsByClassName("uagb-timeline__widget")

	console.log(document.getElementsByClassName("uagb-timeline__widget").length)

	for( var i = 0; i <= document.getElementsByClassName("uagb-timeline__widget").length; i++){
		console.log(document.getElementsByClassName("uagb-timeline__widget")[i])
		if( i % 2 == 0 ){
			console.log("even"+i)
			document.getElementsByClassName("uagb-timeline__widget")[i].classList.remove("uagb-timeline__right").classList.add("uagb-timeline__left")
		}else{
			console.log("odd"+i)
			document.getElementsByClassName("uagb-timeline__widget")[i].classList.remove("uagb-timeline__left").classList.add("uagb-timeline__right")
		}
	}

});