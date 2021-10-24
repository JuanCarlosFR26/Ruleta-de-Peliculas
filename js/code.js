function random(n) {
    //numero al azar entre 1 y el número de películas
    return(Math.floor(Math.random() * n + 1));
}

//Guardamos las imagenes de las películas en un array: 
var cambia_imagen = new Array();
cambia_imagen[0] = "img/9.jpg";
cambia_imagen[1] = "img/9songs.jpg";
cambia_imagen[2] = "img/aladdin.jpg";
cambia_imagen[3] = "img/amelie.jpg";
cambia_imagen[4] = "img/amorDrogas.jpg";
cambia_imagen[5] = "img/anastasia.jpg";
cambia_imagen[6] = "img/anillos.jpg";
cambia_imagen[7] = "img/bartok.jpg";
cambia_imagen[8] = "img/bh6.jpg";
cambia_imagen[9] = "img/big_fish.jpg";
cambia_imagen[10] = "img/brave.jpg";
cambia_imagen[11] = "img/calle.jpg";
cambia_imagen[12] = "img/charlie.jpeg";
cambia_imagen[13] = "img/cuerpos.jpeg";
cambia_imagen[14] = "img/doubtfire.jpg";
cambia_imagen[15] = "img/dragon.jpg";
cambia_imagen[16] = "img/emperador.jpg";
cambia_imagen[17] = "img/espada.jpg";
cambia_imagen[18] = "img/flipped.jpg";
cambia_imagen[19] = "img/hocus.jpg";
cambia_imagen[20] = "img/hp.jpg";
cambia_imagen[21] = "img/hunting.jpg";
cambia_imagen[22] = "img/increibles.jpg";
cambia_imagen[23] = "img/inside.jpg";
cambia_imagen[24] = "img/jack.jpg";
cambia_imagen[25] = "img/jorobado.jpg";
cambia_imagen[26] = "img/lago.jpg";
cambia_imagen[27] = "img/love.jpg";
cambia_imagen[28] = "img/marvel.jpg";
cambia_imagen[29] = "img/masAlla.jpg";
cambia_imagen[30] = "img/noviaCadaver.jpg";
cambia_imagen[31] = "img/nymphomaniac.jpg";
cambia_imagen[32] = "img/one.jpg";
cambia_imagen[33] = "img/piratas.jpg";
cambia_imagen[34] = "img/queen.jpg";
cambia_imagen[35] = "img/romance.jpg";
cambia_imagen[36] = "img/rouge.jpg";
cambia_imagen[37] = "img/scream.jpg";
cambia_imagen[38] = "img/shortbus.jpg";
cambia_imagen[39] = "img/shrek.jpg";
cambia_imagen[40] = "img/soñadores.png";
cambia_imagen[41] = "img/stitch.jpg";
cambia_imagen[42] = "img/swimming.jpg";
cambia_imagen[43] = "img/tangled.jpg";
cambia_imagen[44] = "img/tiempo.jpg";
cambia_imagen[45] = "img/up.jpg";
cambia_imagen[46] = "img/vaiana.jpg";
cambia_imagen[47] = "img/warren.jpg";
cambia_imagen[48] = "img/wturn.jpg";
cambia_imagen[49] = "img/xmen.jpg";



function cambiar() {
    document.getElementById("ia").src = cambia_imagen[random(49)-1];
}