//COMPROBAR HORA

const fechaHora = new Date();
const dia = fechaHora.getDate().toString().padStart(2, "0");
const mes = (fechaHora.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaHora.getFullYear();
const hora = fechaHora.getHours().toString().padStart(2, "0");
const minutos = fechaHora.getMinutes().toString().padStart(2, "0");

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaSemana = diasSemana[fechaHora.getDay()];

const felizLunes = document.getElementById("feliz-lunes");
felizLunes.innerHTML = `¡Feliz ${diaSemana}! Hoy es ${dia}-${mes}-${anio} y son las ${hora}:${minutos}`;


// CONTADOR


// Obtener la fecha actual y la fecha del regalo
var fechaRegalo = new Date("08-22-2023");
var fechaActual = new Date();

// Calcular la diferencia entre las fechas
var diferencia = fechaRegalo.getTime() - fechaActual.getTime();

// Calcular la cantidad de días, horas y minutos restantes
var diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
var horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

// Mostrar el contador en el banner
var contadorBanner = document.createElement("p");
contadorBanner.innerHTML = "Quedan " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos para tu regalo";
document.querySelector(".banner").appendChild(contadorBanner);

// Actualizar el contador cada segundo
setInterval(function() {
  // Obtener la fecha actual
  fechaActual = new Date();
  
  // Calcular la diferencia entre las fechas
  diferencia = fechaRegalo.getTime() - fechaActual.getTime();
  
  // Calcular la cantidad de días, horas y minutos restantes
  diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  
  // Actualizar el texto del contador
  contadorBanner.innerHTML = "Quedan " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos para tu regalo";
}, 1000);





//BARRA PROGRESO

const startDate = new Date("2023-04-20");
const endDate = new Date("2023-08-22");
const progressIndicator = document.querySelector(".progress-bar-indicator");
const progressBar = document.querySelector(".progress-bar");

function updateProgressBar() {
  const currentDate = new Date();
  const progress = (currentDate - startDate) / (endDate - startDate) * 100;
  progressBar.style.width = `${progress}%`;
  progressIndicator.textContent = `${Math.round(progress)}%`;
}

updateProgressBar();
setInterval(updateProgressBar, 1000 * 60 * 60 * 24);




















window.CP && (window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 60000);
var source = "😀,😃,😄,😁,😆,😅,🤣,😂,🙂,🙃,😉,😊,😇,🥰,😍,🤩,😘,😗,☺,😚,😙,🥲,😋,😛,😜,🤪,😝,🤑,🤗,🤭,🤫,🤔,🤐,🤨,😐,😑,😶,😶‍🌫️,😏,😒,🙄,😬,😮‍💨,🤥,😌,😔,😪,🤤,😴,😷,🤒,🤕,🤢,🤮,🤧,🥵,🥶,🥴,😵,😵‍💫,🤯,🤠,🥳,🥸,😎,🤓,🧐,😕,😟,🙁,☹,😮,😯,😲,😳,🥺,😦,😧,😨,😰,😥,😢,😭,😱,😖,😣,😞,😓,😩,😫,🥱,😤,😡,😠,🤬,😈,👿,💀,☠,💩,🤡,👹,👺,👻,👽,👾,🤖,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🙈,🙉,🙊,💋,💌,💘,💝,💖,💗,💓,💞,💕,💟,❣,💔,❤️‍🔥,❤️‍🩹,❤,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💯,💢,💥,💫,💦,💨,🕳,💣,💬,👁️‍🗨️,🗨,🗯,💭,💤,👋,🤚,🖐,✋,🖖,👌,🤌,🤏,✌,🤞,🤟,🤘,🤙,👈,👉,👆,🖕,👇,☝,👍,👎,✊,👊,🤛,🤜,👏,🙌,👐,🤲,🤝,🙏,✍,💅,🤳,💪,🦾,🦿,🦵,🦶,👂,🦻,👃,🧠,🫀,🫁,🦷,🦴,👀,👁,👅,👄,👶,🧒,👦,👧,🧑,👱,👨,🧔,🧔‍♂️,🧔‍♀️,👨‍🦰,👨‍🦱,👨‍🦳,👨‍🦲,👩,👩‍🦰,🧑‍🦰,👩‍🦱,🧑‍🦱,👩‍🦳,🧑‍🦳,👩‍🦲,🧑‍🦲,👱‍♀️,👱‍♂️,🧓,👴,👵,🙍,🙍‍♂️,🙍‍♀️,🙎,🙎‍♂️,🙎‍♀️,🙅,🙅‍♂️,🙅‍♀️,🙆,🙆‍♂️,🙆‍♀️,💁,💁‍♂️,💁‍♀️,🙋,🙋‍♂️,🙋‍♀️,🧏,🧏‍♂️,🧏‍♀️,🙇,🙇‍♂️,🙇‍♀️,🤦,🤦‍♂️,🤦‍♀️,🤷,🤷‍♂️,🤷‍♀️,🧑‍⚕️,👨‍⚕️,👩‍⚕️,🧑‍🎓,👨‍🎓,👩‍🎓,🧑‍🏫,👨‍🏫,👩‍🏫,🧑‍⚖️,👨‍⚖️,👩‍⚖️,🧑‍🌾,👨‍🌾,👩‍🌾,🧑‍🍳,👨‍🍳,👩‍🍳,🧑‍🔧,👨‍🔧,👩‍🔧,🧑‍🏭,👨‍🏭,👩‍🏭,🧑‍💼,👨‍💼,👩‍💼,🧑‍🔬,👨‍🔬,👩‍🔬,🧑‍💻,👨‍💻,👩‍💻,🧑‍🎤,👨‍🎤,👩‍🎤,🧑‍🎨,👨‍🎨,👩‍🎨,🧑‍✈️,👨‍✈️,👩‍✈️,🧑‍🚀,👨‍🚀,👩‍🚀,🧑‍🚒,👨‍🚒,👩‍🚒,👮,👮‍♂️,👮‍♀️,🕵,🕵️‍♂️,🕵️‍♀️,💂,💂‍♂️,💂‍♀️,🥷,👷,👷‍♂️,👷‍♀️,🤴,👸,👳,👳‍♂️,👳‍♀️,👲,🧕,🤵,🤵‍♂️,🤵‍♀️,👰,👰‍♂️,👰‍♀️,🤰,🤱,👩‍🍼,👨‍🍼,🧑‍🍼,👼,🎅,🤶,🧑‍🎄,🦸,🦸‍♂️,🦸‍♀️,🦹,🦹‍♂️,🦹‍♀️,🧙,🧙‍♂️,🧙‍♀️,🧚,🧚‍♂️,🧚‍♀️,🧛,🧛‍♂️,🧛‍♀️,🧜,🧜‍♂️,🧜‍♀️,🧝,🧝‍♂️,🧝‍♀️,🧞,🧞‍♂️,🧞‍♀️,🧟,🧟‍♂️,🧟‍♀️,💆,💆‍♂️,💆‍♀️,💇,💇‍♂️,💇‍♀️,🚶,🚶‍♂️,🚶‍♀️,🧍,🧍‍♂️,🧍‍♀️,🧎,🧎‍♂️,🧎‍♀️,🧑‍🦯,👨‍🦯,👩‍🦯,🧑‍🦼,👨‍🦼,👩‍🦼,🧑‍🦽,👨‍🦽,👩‍🦽,🏃,🏃‍♂️,🏃‍♀️,💃,🕺,🕴,👯,👯‍♂️,👯‍♀️,🧖,🧖‍♂️,🧖‍♀️,🧗,🧗‍♂️,🧗‍♀️,🤺,🏇,⛷,🏂,🏌,🏌️‍♂️,🏌️‍♀️,🏄,🏄‍♂️,🏄‍♀️,🚣,🚣‍♂️,🚣‍♀️,🏊,🏊‍♂️,🏊‍♀️,⛹,⛹️‍♂️,⛹️‍♀️,🏋,🏋️‍♂️,🏋️‍♀️,🚴,🚴‍♂️,🚴‍♀️,🚵,🚵‍♂️,🚵‍♀️,🤸,🤸‍♂️,🤸‍♀️,🤼,🤼‍♂️,🤼‍♀️,🤽,🤽‍♂️,🤽‍♀️,🤾,🤾‍♂️,🤾‍♀️,🤹,🤹‍♂️,🤹‍♀️,🧘,🧘‍♂️,🧘‍♀️,🛀,🛌,🧑‍🤝‍🧑,👭,👫,👬,💏,👩‍❤️‍💋‍👨,👨‍❤️‍💋‍👨,👩‍❤️‍💋‍👩,💑,👩‍❤️‍👨,👨‍❤️‍👨,👩‍❤️‍👩,👪,👨‍👩‍👦,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👦,👨‍👦‍👦,👨‍👧,👨‍👧‍👦,👨‍👧‍👧,👩‍👦,👩‍👦‍👦,👩‍👧,👩‍👧‍👦,👩‍👧‍👧,🗣,👤,👥,🫂,👣,🦰,🦱,🦳,🦲,🐵,🐒,🦍,🦧,🐶,🐕,🦮,🐕‍🦺,🐩,🐺,🦊,🦝,🐱,🐈,🐈‍⬛,🦁,🐯,🐅,🐆,🐴,🐎,🦄,🦓,🦌,🦬,🐮,🐂,🐃,🐄,🐷,🐖,🐗,🐽,🐏,🐑,🐐,🐪,🐫,🦙,🦒,🐘,🦣,🦏,🦛,🐭,🐁,🐀,🐹,🐰,🐇,🐿,🦫,🦔,🦇,🐻,🐻‍❄️,🐨,🐼,🦥,🦦,🦨,🦘,🦡,🐾,🦃,🐔,🐓,🐣,🐤,🐥,🐦,🐧,🕊,🦅,🦆,🦢,🦉,🦤,🪶,🦩,🦚,🦜,🐸,🐊,🐢,🦎,🐍,🐲,🐉,🦕,🦖,🐳,🐋,🐬,🦭,🐟,🐠,🐡,🦈,🐙,🐚,🐌,🦋,🐛,🐜,🐝,🪲,🐞,🦗,🪳,🕷,🕸,🦂,🦟,🪰,🪱,🦠,💐,🌸,💮,🏵,🌹,🥀,🌺,🌻,🌼,🌷,🌱,🪴,🌲,🌳,🌴,🌵,🌾,🌿,☘,🍀,🍁,🍂,🍃,🍇,🍈,🍉,🍊,🍋,🍌,🍍,🥭,🍎,🍏,🍐,🍑,🍒,🍓,🫐,🥝,🍅,🫒,🥥,🥑,🍆,🥔,🥕,🌽,🌶,🫑,🥒,🥬,🥦,🧄,🧅,🍄,🥜,🌰,🍞,🥐,🥖,🫓,🥨,🥯,🥞,🧇,🧀,🍖,🍗,🥩,🥓,🍔,🍟,🍕,🌭,🥪,🌮,🌯,🫔,🥙,🧆,🥚,🍳,🥘,🍲,🫕,🥣,🥗,🍿,🧈,🧂,🥫,🍱,🍘,🍙,🍚,🍛,🍜,🍝,🍠,🍢,🍣,🍤,🍥,🥮,🍡,🥟,🥠,🥡,🦀,🦞,🦐,🦑,🦪,🍦,🍧,🍨,🍩,🍪,🎂,🍰,🧁,🥧,🍫,🍬,🍭,🍮,🍯,🍼,🥛,☕,🫖,🍵,🍶,🍾,🍷,🍸,🍹,🍺,🍻,🥂,🥃,🥤,🧋,🧃,🧉,🧊,🥢,🍽,🍴,🥄,🔪,🏺,🌍,🌎,🌏,🌐,🗺,🗾,🧭,🏔,⛰,🌋,🗻,🏕,🏖,🏜,🏝,🏞,🏟,🏛,🏗,🧱,🪨,🪵,🛖,🏘,🏚,🏠,🏡,🏢,🏣,🏤,🏥,🏦,🏨,🏩,🏪,🏫,🏬,🏭,🏯,🏰,💒,🗼,🗽,⛪,🕌,🛕,🕍,⛩,🕋,⛲,⛺,🌁,🌃,🏙,🌄,🌅,🌆,🌇,🌉,♨,🎠,🎡,🎢,💈,🎪,🚂,🚃,🚄,🚅,🚆,🚇,🚈,🚉,🚊,🚝,🚞,🚋,🚌,🚍,🚎,🚐,🚑,🚒,🚓,🚔,🚕,🚖,🚗,🚘,🚙,🛻,🚚,🚛,🚜,🏎,🏍,🛵,🦽,🦼,🛺,🚲,🛴,🛹,🛼,🚏,🛣,🛤,🛢,⛽,🚨,🚥,🚦,🛑,🚧,⚓,⛵,🛶,🚤,🛳,⛴,🛥,🚢,✈,🛩,🛫,🛬,🪂,💺,🚁,🚟,🚠,🚡,🛰,🚀,🛸,🛎,🧳,⌛,⏳,⌚,⏰,⏱,⏲,🕰,🕛,🕧,🕐,🕜,🕑,🕝,🕒,🕞,🕓,🕟,🕔,🕠,🕕,🕡,🕖,🕢,🕗,🕣,🕘,🕤,🕙,🕥,🕚,🕦,🌑,🌒,🌓,🌔,🌕,🌖,🌗,🌘,🌙,🌚,🌛,🌜,🌡,☀,🌝,🌞,🪐,⭐,🌟,🌠,🌌,☁,⛅,⛈,🌤,🌥,🌦,🌧,🌨,🌩,🌪,🌫,🌬,🌀,🌈,🌂,☂,☔,⛱,⚡,❄,☃,⛄,☄,🔥,💧,🌊,🎃,🎄,🎆,🎇,🧨,✨,🎈,🎉,🎊,🎋,🎍,🎎,🎏,🎐,🎑,🧧,🎀,🎁,🎗,🎟,🎫,🎖,🏆,🏅,🥇,🥈,🥉,⚽,⚾,🥎,🏀,🏐,🏈,🏉,🎾,🥏,🎳,🏏,🏑,🏒,🥍,🏓,🏸,🥊,🥋,🥅,⛳,⛸,🎣,🤿,🎽,🎿,🛷,🥌,🎯,🪀,🪁,🎱,🔮,🪄,🧿,🎮,🕹,🎰,🎲,🧩,🧸,🪅,🪆,♠,♥,♦,♣,♟,🃏,🀄,🎴,🎭,🖼,🎨,🧵,🪡,🧶,🪢,👓,🕶,🥽,🥼,🦺,👔,👕,👖,🧣,🧤,🧥,🧦,👗,👘,🥻,🩱,🩲,🩳,👙,👚,👛,👜,👝,🛍,🎒,🩴,👞,👟,🥾,🥿,👠,👡,🩰,👢,👑,👒,🎩,🎓,🧢,🪖,⛑,📿,💄,💍,💎,🔇,🔈,🔉,🔊,📢,📣,📯,🔔,🔕,🎼,🎵,🎶,🎙,🎚,🎛,🎤,🎧,📻,🎷,🪗,🎸,🎹,🎺,🎻,🪕,🥁,🪘,📱,📲,☎,📞,📟,📠,🔋,🔌,💻,🖥,🖨,⌨,🖱,🖲,💽,💾,💿,📀,🧮,🎥,🎞,📽,🎬,📺,📷,📸,📹,📼,🔍,🔎,🕯,💡,🔦,🏮,🪔,📔,📕,📖,📗,📘,📙,📚,📓,📒,📃,📜,📄,📰,🗞,📑,🔖,🏷,💰,🪙,💴,💵,💶,💷,💸,💳,🧾,💹,✉,📧,📨,📩,📤,📥,📦,📫,📪,📬,📭,📮,🗳,✏,✒,🖋,🖊,🖌,🖍,📝,💼,📁,📂,🗂,📅,📆,🗒,🗓,📇,📈,📉,📊,📋,📌,📍,📎,🖇,📏,📐,✂,🗃,🗄,🗑,🔒,🔓,🔏,🔐,🔑,🗝,🔨,🪓,⛏,⚒,🛠,🗡,⚔,🔫,🪃,🏹,🛡,🪚,🔧,🪛,🔩,⚙,🗜,⚖,🦯,🔗,⛓,🪝,🧰,🧲,🪜,⚗,🧪,🧫,🧬,🔬,🔭,📡,💉,🩸,💊,🩹,🩺,🚪,🛗,🪞,🪟,🛏,🛋,🪑,🚽,🪠,🚿,🛁,🪤,🪒,🧴,🧷,🧹,🧺,🧻,🪣,🧼,🪥,🧽,🧯,🛒,🚬,⚰,🪦,⚱,🗿,🪧,🏧,🚮,🚰,♿,🚹,🚺,🚻,🚼,🚾,🛂,🛃,🛄,🛅,⚠,🚸,⛔,🚫,🚳,🚭,🚯,🚱,🚷,📵,🔞,☢,☣,⬆,↗,➡,↘,⬇,↙,⬅,↖,↕,↔,↩,↪,⤴,⤵,🔃,🔄,🔙,🔚,🔛,🔜,🔝,🛐,⚛,🕉,✡,☸,☯,✝,☦,☪,☮,🕎,🔯,♈,♉,♊,♋,♌,♍,♎,♏,♐,♑,♒,♓,⛎,🔀,🔁,🔂,▶,⏩,⏭,⏯,◀,⏪,⏮,🔼,⏫,🔽,⏬,⏸,⏹,⏺,⏏,🎦,🔅,🔆,📶,📳,📴,♀,♂,⚧,✖,➕,➖,➗,♾,‼,⁉,❓,❔,❕,❗,〰,💱,💲,⚕,♻,⚜,🔱,📛,🔰,⭕,✅,☑,✔,❌,❎,➰,➿,〽,✳,✴,❇,©,®,™,#️⃣,*️⃣,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,🔠,🔡,🔢,🔣,🔤,🅰,🆎,🅱,🆑,🆒,🆓,ℹ,🆔,Ⓜ,🆕,🆖,🅾,🆗,🅿,🆘,🆙,🆚,🈁,🈂,🈷,🈶,🈯,🉐,🈹,🈚,🈲,🉑,🈸,🈴,🈳,㊗,㊙,🈺,🈵,🔴,🟠,🟡,🟢,🔵,🟣,🟤,⚫,⚪,🟥,🟧,🟨,🟩,🟦,🟪,🟫,⬛,⬜,◼,◻,◾,◽,▪,▫,🔶,🔷,🔸,🔹,🔺,🔻,💠,🔘,🔳,🔲,🏁,🚩,🎌,🏴,🏳,🏳️‍🌈,🏳️‍⚧️,🏴‍☠️,🇦🇨,🇦🇩,🇦🇪,🇦🇫,🇦🇬,🇦🇮,🇦🇱,🇦🇲,🇦🇴,🇦🇶,🇦🇷,🇦🇸,🇦🇹,🇦🇺,🇦🇼,🇦🇽,🇦🇿,🇧🇦,🇧🇧,🇧🇩,🇧🇪,🇧🇫,🇧🇬,🇧🇭,🇧🇮,🇧🇯,🇧🇱,🇧🇲,🇧🇳,🇧🇴,🇧🇶,🇧🇷,🇧🇸,🇧🇹,🇧🇻,🇧🇼,🇧🇾,🇧🇿,🇨🇦,🇨🇨,🇨🇩,🇨🇫,🇨🇬,🇨🇭,🇨🇮,🇨🇰,🇨🇱,🇨🇲,🇨🇳,🇨🇴,🇨🇵,🇨🇷,🇨🇺,🇨🇻,🇨🇼,🇨🇽,🇨🇾,🇨🇿,🇩🇪,🇩🇬,🇩🇯,🇩🇰,🇩🇲,🇩🇴,🇩🇿,🇪🇦,🇪🇨,🇪🇪,🇪🇬,🇪🇭,🇪🇷,🇪🇸,🇪🇹,🇪🇺,🇫🇮,🇫🇯,🇫🇰,🇫🇲,🇫🇴,🇫🇷,🇬🇦,🇬🇧,🇬🇩,🇬🇪,🇬🇫,🇬🇬,🇬🇭,🇬🇮,🇬🇱,🇬🇲,🇬🇳,🇬🇵,🇬🇶,🇬🇷,🇬🇸,🇬🇹,🇬🇺,🇬🇼,🇬🇾,🇭🇰,🇭🇲,🇭🇳,🇭🇷,🇭🇹,🇭🇺,🇮🇨,🇮🇩,🇮🇪,🇮🇱,🇮🇲,🇮🇳,🇮🇴,🇮🇶,🇮🇷,🇮🇸,🇮🇹,🇯🇪,🇯🇲,🇯🇴,🇯🇵,🇰🇪,🇰🇬,🇰🇭,🇰🇮,🇰🇲,🇰🇳,🇰🇵,🇰🇷,🇰🇼,🇰🇾,🇰🇿,🇱🇦,🇱🇧,🇱🇨,🇱🇮,🇱🇰,🇱🇷,🇱🇸,🇱🇹,🇱🇺,🇱🇻,🇱🇾,🇲🇦,🇲🇨,🇲🇩,🇲🇪,🇲🇫,🇲🇬,🇲🇭,🇲🇰,🇲🇱,🇲🇲,🇲🇳,🇲🇴,🇲🇵,🇲🇶,🇲🇷,🇲🇸,🇲🇹,🇲🇺,🇲🇻,🇲🇼,🇲🇽,🇲🇾,🇲🇿,🇳🇦,🇳🇨,🇳🇪,🇳🇫,🇳🇬,🇳🇮,🇳🇱,🇳🇴,🇳🇵,🇳🇷,🇳🇺,🇳🇿,🇴🇲,🇵🇦,🇵🇪,🇵🇫,🇵🇬,🇵🇭,🇵🇰,🇵🇱,🇵🇲,🇵🇳,🇵🇷,🇵🇸,🇵🇹,🇵🇼,🇵🇾,🇶🇦,🇷🇪,🇷🇴,🇷🇸,🇷🇺,🇷🇼,🇸🇦,🇸🇧,🇸🇨,🇸🇩,🇸🇪,🇸🇬,🇸🇭,🇸🇮,🇸🇯,🇸🇰,🇸🇱,🇸🇲,🇸🇳,🇸🇴,🇸🇷,🇸🇸,🇸🇹,🇸🇻,🇸🇽,🇸🇾,🇸🇿,🇹🇦,🇹🇨,🇹🇩,🇹🇫,🇹🇬,🇹🇭,🇹🇯,🇹🇰,🇹🇱,🇹🇲,🇹🇳,🇹🇴,🇹🇷,🇹🇹,🇹🇻,🇹🇼,🇹🇿,🇺🇦,🇺🇬,🇺🇲,🇺🇳,🇺🇸,🇺🇾,🇺🇿,🇻🇦,🇻🇨,🇻🇪,🇻🇬,🇻🇮,🇻🇳,🇻🇺,🇼🇫,🇼🇸,🇽🇰,🇾🇪,🇾🇹,🇿🇦,🇿🇲,🇿🇼,🏴󠁧󠁢󠁥󠁮󠁧󠁿,🏴󠁧󠁢󠁳󠁣󠁴󠁿,🏴󠁧󠁢󠁷󠁬󠁳󠁿,👋🏻,👋🏼,👋🏽,👋🏾,👋🏿,🤚🏻,🤚🏼,🤚🏽,🤚🏾,🤚🏿,🖐🏻,🖐🏼,🖐🏽,🖐🏾,🖐🏿,✋🏻,✋🏼,✋🏽,✋🏾,✋🏿,🖖🏻,🖖🏼,🖖🏽,🖖🏾,🖖🏿,👌🏻,👌🏼,👌🏽,👌🏾,👌🏿,🤌🏻,🤌🏼,🤌🏽,🤌🏾,🤌🏿,🤏🏻,🤏🏼,🤏🏽,🤏🏾,🤏🏿,✌🏻,✌🏼,✌🏽,✌🏾,✌🏿,🤞🏻,🤞🏼,🤞🏽,🤞🏾,🤞🏿,🤟🏻,🤟🏼,🤟🏽,🤟🏾,🤟🏿,🤘🏻,🤘🏼,🤘🏽,🤘🏾,🤘🏿,🤙🏻,🤙🏼,🤙🏽,🤙🏾,🤙🏿,👈🏻,👈🏼,👈🏽,👈🏾,👈🏿,👉🏻,👉🏼,👉🏽,👉🏾,👉🏿,👆🏻,👆🏼,👆🏽,👆🏾,👆🏿,🖕🏻,🖕🏼,🖕🏽,🖕🏾,🖕🏿,👇🏻,👇🏼,👇🏽,👇🏾,👇🏿,☝🏻,☝🏼,☝🏽,☝🏾,☝🏿,👍🏻,👍🏼,👍🏽,👍🏾,👍🏿,👎🏻,👎🏼,👎🏽,👎🏾,👎🏿,✊🏻,✊🏼,✊🏽,✊🏾,✊🏿,👊🏻,👊🏼,👊🏽,👊🏾,👊🏿,🤛🏻,🤛🏼,🤛🏽,🤛🏾,🤛🏿,🤜🏻,🤜🏼,🤜🏽,🤜🏾,🤜🏿,👏🏻,👏🏼,👏🏽,👏🏾,👏🏿,🙌🏻,🙌🏼,🙌🏽,🙌🏾,🙌🏿,👐🏻,👐🏼,👐🏽,👐🏾,👐🏿,🤲🏻,🤲🏼,🤲🏽,🤲🏾,🤲🏿,🙏🏻,🙏🏼,🙏🏽,🙏🏾,🙏🏿,✍🏻,✍🏼,✍🏽,✍🏾,✍🏿,💅🏻,💅🏼,💅🏽,💅🏾,💅🏿,🤳🏻,🤳🏼,🤳🏽,🤳🏾,🤳🏿,💪🏻,💪🏼,💪🏽,💪🏾,💪🏿,🦵🏻,🦵🏼,🦵🏽,🦵🏾,🦵🏿,🦶🏻,🦶🏼,🦶🏽,🦶🏾,🦶🏿,👂🏻,👂🏼,👂🏽,👂🏾,👂🏿,🦻🏻,🦻🏼,🦻🏽,🦻🏾,🦻🏿,👃🏻,👃🏼,👃🏽,👃🏾,👃🏿,👶🏻,👶🏼,👶🏽,👶🏾,👶🏿,🧒🏻,🧒🏼,🧒🏽,🧒🏾,🧒🏿,👦🏻,👦🏼,👦🏽,👦🏾,👦🏿,👧🏻,👧🏼,👧🏽,👧🏾,👧🏿,🧑🏻,🧑🏼,🧑🏽,🧑🏾,🧑🏿,👱🏻,👱🏼,👱🏽,👱🏾,👱🏿,👨🏻,👨🏼,👨🏽,👨🏾,👨🏿,🧔🏻,🧔🏼,🧔🏽,🧔🏾,🧔🏿,🧔🏻‍♂️,🧔🏼‍♂️,🧔🏽‍♂️,🧔🏾‍♂️,🧔🏿‍♂️,🧔🏻‍♀️,🧔🏼‍♀️,🧔🏽‍♀️,🧔🏾‍♀️,🧔🏿‍♀️,👨🏻‍🦰,👨🏼‍🦰,👨🏽‍🦰,👨🏾‍🦰,👨🏿‍🦰,👨🏻‍🦱,👨🏼‍🦱,👨🏽‍🦱,👨🏾‍🦱,👨🏿‍🦱,👨🏻‍🦳,👨🏼‍🦳,👨🏽‍🦳,👨🏾‍🦳,👨🏿‍🦳,👨🏻‍🦲,👨🏼‍🦲,👨🏽‍🦲,👨🏾‍🦲,👨🏿‍🦲,👩🏻,👩🏼,👩🏽,👩🏾,👩🏿,👩🏻‍🦰,👩🏼‍🦰,👩🏽‍🦰,👩🏾‍🦰,👩🏿‍🦰,🧑🏻‍🦰,🧑🏼‍🦰,🧑🏽‍🦰,🧑🏾‍🦰,🧑🏿‍🦰,👩🏻‍🦱,👩🏼‍🦱,👩🏽‍🦱,👩🏾‍🦱,👩🏿‍🦱,🧑🏻‍🦱,🧑🏼‍🦱,🧑🏽‍🦱,🧑🏾‍🦱,🧑🏿‍🦱,👩🏻‍🦳,👩🏼‍🦳,👩🏽‍🦳,👩🏾‍🦳,👩🏿‍🦳,🧑🏻‍🦳,🧑🏼‍🦳,🧑🏽‍🦳,🧑🏾‍🦳,🧑🏿‍🦳,👩🏻‍🦲,👩🏼‍🦲,👩🏽‍🦲,👩🏾‍🦲,👩🏿‍🦲,🧑🏻‍🦲,🧑🏼‍🦲,🧑🏽‍🦲,🧑🏾‍🦲,🧑🏿‍🦲,👱🏻‍♀️,👱🏼‍♀️,👱🏽‍♀️,👱🏾‍♀️,👱🏿‍♀️,👱🏻‍♂️,👱🏼‍♂️,👱🏽‍♂️,👱🏾‍♂️,👱🏿‍♂️,🧓🏻,🧓🏼,🧓🏽,🧓🏾,🧓🏿,👴🏻,👴🏼,👴🏽,👴🏾,👴🏿,👵🏻,👵🏼,👵🏽,👵🏾,👵🏿,🙍🏻,🙍🏼,🙍🏽,🙍🏾,🙍🏿,🙍🏻‍♂️,🙍🏼‍♂️,🙍🏽‍♂️,🙍🏾‍♂️,🙍🏿‍♂️,🙍🏻‍♀️,🙍🏼‍♀️,🙍🏽‍♀️,🙍🏾‍♀️,🙍🏿‍♀️,🙎🏻,🙎🏼,🙎🏽,🙎🏾,🙎🏿,🙎🏻‍♂️,🙎🏼‍♂️,🙎🏽‍♂️,🙎🏾‍♂️,🙎🏿‍♂️,🙎🏻‍♀️,🙎🏼‍♀️,🙎🏽‍♀️,🙎🏾‍♀️,🙎🏿‍♀️,🙅🏻,🙅🏼,🙅🏽,🙅🏾,🙅🏿,🙅🏻‍♂️,🙅🏼‍♂️,🙅🏽‍♂️,🙅🏾‍♂️,🙅🏿‍♂️,🙅🏻‍♀️,🙅🏼‍♀️,🙅🏽‍♀️,🙅🏾‍♀️,🙅🏿‍♀️,🙆🏻,🙆🏼,🙆🏽,🙆🏾,🙆🏿,🙆🏻‍♂️,🙆🏼‍♂️,🙆🏽‍♂️,🙆🏾‍♂️,🙆🏿‍♂️,🙆🏻‍♀️,🙆🏼‍♀️,🙆🏽‍♀️,🙆🏾‍♀️,🙆🏿‍♀️,💁🏻,💁🏼,💁🏽,💁🏾,💁🏿,💁🏻‍♂️,💁🏼‍♂️,💁🏽‍♂️,💁🏾‍♂️,💁🏿‍♂️,💁🏻‍♀️,💁🏼‍♀️,💁🏽‍♀️,💁🏾‍♀️,💁🏿‍♀️,🙋🏻,🙋🏼,🙋🏽,🙋🏾,🙋🏿,🙋🏻‍♂️,🙋🏼‍♂️,🙋🏽‍♂️,🙋🏾‍♂️,🙋🏿‍♂️,🙋🏻‍♀️,🙋🏼‍♀️,🙋🏽‍♀️,🙋🏾‍♀️,🙋🏿‍♀️,🧏🏻,🧏🏼,🧏🏽,🧏🏾,🧏🏿,🧏🏻‍♂️,🧏🏼‍♂️,🧏🏽‍♂️,🧏🏾‍♂️,🧏🏿‍♂️,🧏🏻‍♀️,🧏🏼‍♀️,🧏🏽‍♀️,🧏🏾‍♀️,🧏🏿‍♀️,🙇🏻,🙇🏼,🙇🏽,🙇🏾,🙇🏿,🙇🏻‍♂️,🙇🏼‍♂️,🙇🏽‍♂️,🙇🏾‍♂️,🙇🏿‍♂️,🙇🏻‍♀️,🙇🏼‍♀️,🙇🏽‍♀️,🙇🏾‍♀️,🙇🏿‍♀️,🤦🏻,🤦🏼,🤦🏽,🤦🏾,🤦🏿,🤦🏻‍♂️,🤦🏼‍♂️,🤦🏽‍♂️,🤦🏾‍♂️,🤦🏿‍♂️,🤦🏻‍♀️,🤦🏼‍♀️,🤦🏽‍♀️,🤦🏾‍♀️,🤦🏿‍♀️,🤷🏻,🤷🏼,🤷🏽,🤷🏾,🤷🏿,🤷🏻‍♂️,🤷🏼‍♂️,🤷🏽‍♂️,🤷🏾‍♂️,🤷🏿‍♂️,🤷🏻‍♀️,🤷🏼‍♀️,🤷🏽‍♀️,🤷🏾‍♀️,🤷🏿‍♀️,🧑🏻‍⚕️,🧑🏼‍⚕️,🧑🏽‍⚕️,🧑🏾‍⚕️,🧑🏿‍⚕️,👨🏻‍⚕️,👨🏼‍⚕️,👨🏽‍⚕️,👨🏾‍⚕️,👨🏿‍⚕️,👩🏻‍⚕️,👩🏼‍⚕️,👩🏽‍⚕️,👩🏾‍⚕️,👩🏿‍⚕️,🧑🏻‍🎓,🧑🏼‍🎓,🧑🏽‍🎓,🧑🏾‍🎓,🧑🏿‍🎓,👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓,👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓,🧑🏻‍🏫,🧑🏼‍🏫,🧑🏽‍🏫,🧑🏾‍🏫,🧑🏿‍🏫,👨🏻‍🏫,👨🏼‍🏫,👨🏽‍🏫,👨🏾‍🏫,👨🏿‍🏫,👩🏻‍🏫,👩🏼‍🏫,👩🏽‍🏫,👩🏾‍🏫,👩🏿‍🏫,🧑🏻‍⚖️,🧑🏼‍⚖️,🧑🏽‍⚖️,🧑🏾‍⚖️,🧑🏿‍⚖️,👨🏻‍⚖️,👨🏼‍⚖️,👨🏽‍⚖️,👨🏾‍⚖️,👨🏿‍⚖️,👩🏻‍⚖️,👩🏼‍⚖️,👩🏽‍⚖️,👩🏾‍⚖️,👩🏿‍⚖️,🧑🏻‍🌾,🧑🏼‍🌾,🧑🏽‍🌾,🧑🏾‍🌾,🧑🏿‍🌾,👨🏻‍🌾,👨🏼‍🌾,👨🏽‍🌾,👨🏾‍🌾,👨🏿‍🌾,👩🏻‍🌾,👩🏼‍🌾,👩🏽‍🌾,👩🏾‍🌾,👩🏿‍🌾,🧑🏻‍🍳,🧑🏼‍🍳,🧑🏽‍🍳,🧑🏾‍🍳,🧑🏿‍🍳,👨🏻‍🍳,👨🏼‍🍳,👨🏽‍🍳,👨🏾‍🍳,👨🏿‍🍳,👩🏻‍🍳,👩🏼‍🍳,👩🏽‍🍳,👩🏾‍🍳,👩🏿‍🍳,🧑🏻‍🔧,🧑🏼‍🔧,🧑🏽‍🔧,🧑🏾‍🔧,🧑🏿‍🔧,👨🏻‍🔧,👨🏼‍🔧,👨🏽‍🔧,👨🏾‍🔧,👨🏿‍🔧,👩🏻‍🔧,👩🏼‍🔧,👩🏽‍🔧,👩🏾‍🔧,👩🏿‍🔧,🧑🏻‍🏭,🧑🏼‍🏭,🧑🏽‍🏭,🧑🏾‍🏭,🧑🏿‍🏭,👨🏻‍🏭,👨🏼‍🏭,👨🏽‍🏭,👨🏾‍🏭,👨🏿‍🏭,👩🏻‍🏭,👩🏼‍🏭,👩🏽‍🏭,👩🏾‍🏭,👩🏿‍🏭,🧑🏻‍💼,🧑🏼‍💼,🧑🏽‍💼,🧑🏾‍💼,🧑🏿‍💼,👨🏻‍💼,👨🏼‍💼,👨🏽‍💼,👨🏾‍💼,👨🏿‍💼,👩🏻‍💼,👩🏼‍💼,👩🏽‍💼,👩🏾‍💼,👩🏿‍💼,🧑🏻‍🔬,🧑🏼‍🔬,🧑🏽‍🔬,🧑🏾‍🔬,🧑🏿‍🔬,👨🏻‍🔬,👨🏼‍🔬,👨🏽‍🔬,👨🏾‍🔬,👨🏿‍🔬,👩🏻‍🔬,👩🏼‍🔬,👩🏽‍🔬,👩🏾‍🔬,👩🏿‍🔬,🧑🏻‍💻,🧑🏼‍💻,🧑🏽‍💻,🧑🏾‍💻,🧑🏿‍💻,👨🏻‍💻,👨🏼‍💻,👨🏽‍💻,👨🏾‍💻,👨🏿‍💻,👩🏻‍💻,👩🏼‍💻,👩🏽‍💻,👩🏾‍💻,👩🏿‍💻,🧑🏻‍🎤,🧑🏼‍🎤,🧑🏽‍🎤,🧑🏾‍🎤,🧑🏿‍🎤,👨🏻‍🎤,👨🏼‍🎤,👨🏽‍🎤,👨🏾‍🎤,👨🏿‍🎤,👩🏻‍🎤,👩🏼‍🎤,👩🏽‍🎤,👩🏾‍🎤,👩🏿‍🎤,🧑🏻‍🎨,🧑🏼‍🎨,🧑🏽‍🎨,🧑🏾‍🎨,🧑🏿‍🎨,👨🏻‍🎨,👨🏼‍🎨,👨🏽‍🎨,👨🏾‍🎨,👨🏿‍🎨,👩🏻‍🎨,👩🏼‍🎨,👩🏽‍🎨,👩🏾‍🎨,👩🏿‍🎨,🧑🏻‍✈️,🧑🏼‍✈️,🧑🏽‍✈️,🧑🏾‍✈️,🧑🏿‍✈️,👨🏻‍✈️,👨🏼‍✈️,👨🏽‍✈️,👨🏾‍✈️,👨🏿‍✈️,👩🏻‍✈️,👩🏼‍✈️,👩🏽‍✈️,👩🏾‍✈️,👩🏿‍✈️,🧑🏻‍🚀,🧑🏼‍🚀,🧑🏽‍🚀,🧑🏾‍🚀,🧑🏿‍🚀,👨🏻‍🚀,👨🏼‍🚀,👨🏽‍🚀,👨🏾‍🚀,👨🏿‍🚀,👩🏻‍🚀,👩🏼‍🚀,👩🏽‍🚀,👩🏾‍🚀,👩🏿‍🚀,🧑🏻‍🚒,🧑🏼‍🚒,🧑🏽‍🚒,🧑🏾‍🚒,🧑🏿‍🚒,👨🏻‍🚒,👨🏼‍🚒,👨🏽‍🚒,👨🏾‍🚒,👨🏿‍🚒,👩🏻‍🚒,👩🏼‍🚒,👩🏽‍🚒,👩🏾‍🚒,👩🏿‍🚒,👮🏻,👮🏼,👮🏽,👮🏾,👮🏿,👮🏻‍♂️,👮🏼‍♂️,👮🏽‍♂️,👮🏾‍♂️,👮🏿‍♂️,👮🏻‍♀️,👮🏼‍♀️,👮🏽‍♀️,👮🏾‍♀️,👮🏿‍♀️,🕵🏻,🕵🏼,🕵🏽,🕵🏾,🕵🏿,🕵🏻‍♂️,🕵🏼‍♂️,🕵🏽‍♂️,🕵🏾‍♂️,🕵🏿‍♂️,🕵🏻‍♀️,🕵🏼‍♀️,🕵🏽‍♀️,🕵🏾‍♀️,🕵🏿‍♀️,💂🏻,💂🏼,💂🏽,💂🏾,💂🏿,💂🏻‍♂️,💂🏼‍♂️,💂🏽‍♂️,💂🏾‍♂️,💂🏿‍♂️,💂🏻‍♀️,💂🏼‍♀️,💂🏽‍♀️,💂🏾‍♀️,💂🏿‍♀️,🥷🏻,🥷🏼,🥷🏽,🥷🏾,🥷🏿,👷🏻,👷🏼,👷🏽,👷🏾,👷🏿,👷🏻‍♂️,👷🏼‍♂️,👷🏽‍♂️,👷🏾‍♂️,👷🏿‍♂️,👷🏻‍♀️,👷🏼‍♀️,👷🏽‍♀️,👷🏾‍♀️,👷🏿‍♀️,🤴🏻,🤴🏼,🤴🏽,🤴🏾,🤴🏿,👸🏻,👸🏼,👸🏽,👸🏾,👸🏿,👳🏻,👳🏼,👳🏽,👳🏾,👳🏿,👳🏻‍♂️,👳🏼‍♂️,👳🏽‍♂️,👳🏾‍♂️,👳🏿‍♂️,👳🏻‍♀️,👳🏼‍♀️,👳🏽‍♀️,👳🏾‍♀️,👳🏿‍♀️,👲🏻,👲🏼,👲🏽,👲🏾,👲🏿,🧕🏻,🧕🏼,🧕🏽,🧕🏾,🧕🏿,🤵🏻,🤵🏼,🤵🏽,🤵🏾,🤵🏿,🤵🏻‍♂️,🤵🏼‍♂️,🤵🏽‍♂️,🤵🏾‍♂️,🤵🏿‍♂️,🤵🏻‍♀️,🤵🏼‍♀️,🤵🏽‍♀️,🤵🏾‍♀️,🤵🏿‍♀️,👰🏻,👰🏼,👰🏽,👰🏾,👰🏿,👰🏻‍♂️,👰🏼‍♂️,👰🏽‍♂️,👰🏾‍♂️,👰🏿‍♂️,👰🏻‍♀️,👰🏼‍♀️,👰🏽‍♀️,👰🏾‍♀️,👰🏿‍♀️,🤰🏻,🤰🏼,🤰🏽,🤰🏾,🤰🏿,🤱🏻,🤱🏼,🤱🏽,🤱🏾,🤱🏿,👩🏻‍🍼,👩🏼‍🍼,👩🏽‍🍼,👩🏾‍🍼,👩🏿‍🍼,👨🏻‍🍼,👨🏼‍🍼,👨🏽‍🍼,👨🏾‍🍼,👨🏿‍🍼,🧑🏻‍🍼,🧑🏼‍🍼,🧑🏽‍🍼,🧑🏾‍🍼,🧑🏿‍🍼,👼🏻,👼🏼,👼🏽,👼🏾,👼🏿,🎅🏻,🎅🏼,🎅🏽,🎅🏾,🎅🏿,🤶🏻,🤶🏼,🤶🏽,🤶🏾,🤶🏿,🧑🏻‍🎄,🧑🏼‍🎄,🧑🏽‍🎄,🧑🏾‍🎄,🧑🏿‍🎄,🦸🏻,🦸🏼,🦸🏽,🦸🏾,🦸🏿,🦸🏻‍♂️,🦸🏼‍♂️,🦸🏽‍♂️,🦸🏾‍♂️,🦸🏿‍♂️,🦸🏻‍♀️,🦸🏼‍♀️,🦸🏽‍♀️,🦸🏾‍♀️,🦸🏿‍♀️,🦹🏻,🦹🏼,🦹🏽,🦹🏾,🦹🏿,🦹🏻‍♂️,🦹🏼‍♂️,🦹🏽‍♂️,🦹🏾‍♂️,🦹🏿‍♂️,🦹🏻‍♀️,🦹🏼‍♀️,🦹🏽‍♀️,🦹🏾‍♀️,🦹🏿‍♀️,🧙🏻,🧙🏼,🧙🏽,🧙🏾,🧙🏿,🧙🏻‍♂️,🧙🏼‍♂️,🧙🏽‍♂️,🧙🏾‍♂️,🧙🏿‍♂️,🧙🏻‍♀️,🧙🏼‍♀️,🧙🏽‍♀️,🧙🏾‍♀️,🧙🏿‍♀️,🧚🏻,🧚🏼,🧚🏽,🧚🏾,🧚🏿,🧚🏻‍♂️,🧚🏼‍♂️,🧚🏽‍♂️,🧚🏾‍♂️,🧚🏿‍♂️,🧚🏻‍♀️,🧚🏼‍♀️,🧚🏽‍♀️,🧚🏾‍♀️,🧚🏿‍♀️,🧛🏻,🧛🏼,🧛🏽,🧛🏾,🧛🏿,🧛🏻‍♂️,🧛🏼‍♂️,🧛🏽‍♂️,🧛🏾‍♂️,🧛🏿‍♂️,🧛🏻‍♀️,🧛🏼‍♀️,🧛🏽‍♀️,🧛🏾‍♀️,🧛🏿‍♀️,🧜🏻,🧜🏼,🧜🏽,🧜🏾,🧜🏿,🧜🏻‍♂️,🧜🏼‍♂️,🧜🏽‍♂️,🧜🏾‍♂️,🧜🏿‍♂️,🧜🏻‍♀️,🧜🏼‍♀️,🧜🏽‍♀️,🧜🏾‍♀️,🧜🏿‍♀️,🧝🏻,🧝🏼,🧝🏽,🧝🏾,🧝🏿,🧝🏻‍♂️,🧝🏼‍♂️,🧝🏽‍♂️,🧝🏾‍♂️,🧝🏿‍♂️,🧝🏻‍♀️,🧝🏼‍♀️,🧝🏽‍♀️,🧝🏾‍♀️,🧝🏿‍♀️,💆🏻,💆🏼,💆🏽,💆🏾,💆🏿,💆🏻‍♂️,💆🏼‍♂️,💆🏽‍♂️,💆🏾‍♂️,💆🏿‍♂️,💆🏻‍♀️,💆🏼‍♀️,💆🏽‍♀️,💆🏾‍♀️,💆🏿‍♀️,💇🏻,💇🏼,💇🏽,💇🏾,💇🏿,💇🏻‍♂️,💇🏼‍♂️,💇🏽‍♂️,💇🏾‍♂️,💇🏿‍♂️,💇🏻‍♀️,💇🏼‍♀️,💇🏽‍♀️,💇🏾‍♀️,💇🏿‍♀️,🚶🏻,🚶🏼,🚶🏽,🚶🏾,🚶🏿,🚶🏻‍♂️,🚶🏼‍♂️,🚶🏽‍♂️,🚶🏾‍♂️,🚶🏿‍♂️,🚶🏻‍♀️,🚶🏼‍♀️,🚶🏽‍♀️,🚶🏾‍♀️,🚶🏿‍♀️,🧍🏻,🧍🏼,🧍🏽,🧍🏾,🧍🏿,🧍🏻‍♂️,🧍🏼‍♂️,🧍🏽‍♂️,🧍🏾‍♂️,🧍🏿‍♂️,🧍🏻‍♀️,🧍🏼‍♀️,🧍🏽‍♀️,🧍🏾‍♀️,🧍🏿‍♀️,🧎🏻,🧎🏼,🧎🏽,🧎🏾,🧎🏿,🧎🏻‍♂️,🧎🏼‍♂️,🧎🏽‍♂️,🧎🏾‍♂️,🧎🏿‍♂️,🧎🏻‍♀️,🧎🏼‍♀️,🧎🏽‍♀️,🧎🏾‍♀️,🧎🏿‍♀️,🧑🏻‍🦯,🧑🏼‍🦯,🧑🏽‍🦯,🧑🏾‍🦯,🧑🏿‍🦯,👨🏻‍🦯,👨🏼‍🦯,👨🏽‍🦯,👨🏾‍🦯,👨🏿‍🦯,👩🏻‍🦯,👩🏼‍🦯,👩🏽‍🦯,👩🏾‍🦯,👩🏿‍🦯,🧑🏻‍🦼,🧑🏼‍🦼,🧑🏽‍🦼,🧑🏾‍🦼,🧑🏿‍🦼,👨🏻‍🦼,👨🏼‍🦼,👨🏽‍🦼,👨🏾‍🦼,👨🏿‍🦼,👩🏻‍🦼,👩🏼‍🦼,👩🏽‍🦼,👩🏾‍🦼,👩🏿‍🦼,🧑🏻‍🦽,🧑🏼‍🦽,🧑🏽‍🦽,🧑🏾‍🦽,🧑🏿‍🦽,👨🏻‍🦽,👨🏼‍🦽,👨🏽‍🦽,👨🏾‍🦽,👨🏿‍🦽,👩🏻‍🦽,👩🏼‍🦽,👩🏽‍🦽,👩🏾‍🦽,👩🏿‍🦽,🏃🏻,🏃🏼,🏃🏽,🏃🏾,🏃🏿,🏃🏻‍♂️,🏃🏼‍♂️,🏃🏽‍♂️,🏃🏾‍♂️,🏃🏿‍♂️,🏃🏻‍♀️,🏃🏼‍♀️,🏃🏽‍♀️,🏃🏾‍♀️,🏃🏿‍♀️,💃🏻,💃🏼,💃🏽,💃🏾,💃🏿,🕺🏻,🕺🏼,🕺🏽,🕺🏾,🕺🏿,🕴🏻,🕴🏼,🕴🏽,🕴🏾,🕴🏿,🧖🏻,🧖🏼,🧖🏽,🧖🏾,🧖🏿,🧖🏻‍♂️,🧖🏼‍♂️,🧖🏽‍♂️,🧖🏾‍♂️,🧖🏿‍♂️,🧖🏻‍♀️,🧖🏼‍♀️,🧖🏽‍♀️,🧖🏾‍♀️,🧖🏿‍♀️,🧗🏻,🧗🏼,🧗🏽,🧗🏾,🧗🏿,🧗🏻‍♂️,🧗🏼‍♂️,🧗🏽‍♂️,🧗🏾‍♂️,🧗🏿‍♂️,🧗🏻‍♀️,🧗🏼‍♀️,🧗🏽‍♀️,🧗🏾‍♀️,🧗🏿‍♀️,🏇🏻,🏇🏼,🏇🏽,🏇🏾,🏇🏿,🏂🏻,🏂🏼,🏂🏽,🏂🏾,🏂🏿,🏌🏻,🏌🏼,🏌🏽,🏌🏾,🏌🏿,🏌🏻‍♂️,🏌🏼‍♂️,🏌🏽‍♂️,🏌🏾‍♂️,🏌🏿‍♂️,🏌🏻‍♀️,🏌🏼‍♀️,🏌🏽‍♀️,🏌🏾‍♀️,🏌🏿‍♀️,🏄🏻,🏄🏼,🏄🏽,🏄🏾,🏄🏿,🏄🏻‍♂️,🏄🏼‍♂️,🏄🏽‍♂️,🏄🏾‍♂️,🏄🏿‍♂️,🏄🏻‍♀️,🏄🏼‍♀️,🏄🏽‍♀️,🏄🏾‍♀️,🏄🏿‍♀️,🚣🏻,🚣🏼,🚣🏽,🚣🏾,🚣🏿,🚣🏻‍♂️,🚣🏼‍♂️,🚣🏽‍♂️,🚣🏾‍♂️,🚣🏿‍♂️,🚣🏻‍♀️,🚣🏼‍♀️,🚣🏽‍♀️,🚣🏾‍♀️,🚣🏿‍♀️,🏊🏻,🏊🏼,🏊🏽,🏊🏾,🏊🏿,🏊🏻‍♂️,🏊🏼‍♂️,🏊🏽‍♂️,🏊🏾‍♂️,🏊🏿‍♂️,🏊🏻‍♀️,🏊🏼‍♀️,🏊🏽‍♀️,🏊🏾‍♀️,🏊🏿‍♀️,⛹🏻,⛹🏼,⛹🏽,⛹🏾,⛹🏿,⛹🏻‍♂️,⛹🏼‍♂️,⛹🏽‍♂️,⛹🏾‍♂️,⛹🏿‍♂️,⛹🏻‍♀️,⛹🏼‍♀️,⛹🏽‍♀️,⛹🏾‍♀️,⛹🏿‍♀️,🏋🏻,🏋🏼,🏋🏽,🏋🏾,🏋🏿,🏋🏻‍♂️,🏋🏼‍♂️,🏋🏽‍♂️,🏋🏾‍♂️,🏋🏿‍♂️,🏋🏻‍♀️,🏋🏼‍♀️,🏋🏽‍♀️,🏋🏾‍♀️,🏋🏿‍♀️,🚴🏻,🚴🏼,🚴🏽,🚴🏾,🚴🏿,🚴🏻‍♂️,🚴🏼‍♂️,🚴🏽‍♂️,🚴🏾‍♂️,🚴🏿‍♂️,🚴🏻‍♀️,🚴🏼‍♀️,🚴🏽‍♀️,🚴🏾‍♀️,🚴🏿‍♀️,🚵🏻,🚵🏼,🚵🏽,🚵🏾,🚵🏿,🚵🏻‍♂️,🚵🏼‍♂️,🚵🏽‍♂️,🚵🏾‍♂️,🚵🏿‍♂️,🚵🏻‍♀️,🚵🏼‍♀️,🚵🏽‍♀️,🚵🏾‍♀️,🚵🏿‍♀️,🤸🏻,🤸🏼,🤸🏽,🤸🏾,🤸🏿,🤸🏻‍♂️,🤸🏼‍♂️,🤸🏽‍♂️,🤸🏾‍♂️,🤸🏿‍♂️,🤸🏻‍♀️,🤸🏼‍♀️,🤸🏽‍♀️,🤸🏾‍♀️,🤸🏿‍♀️,🤽🏻,🤽🏼,🤽🏽,🤽🏾,🤽🏿,🤽🏻‍♂️,🤽🏼‍♂️,🤽🏽‍♂️,🤽🏾‍♂️,🤽🏿‍♂️,🤽🏻‍♀️,🤽🏼‍♀️,🤽🏽‍♀️,🤽🏾‍♀️,🤽🏿‍♀️,🤾🏻,🤾🏼,🤾🏽,🤾🏾,🤾🏿,🤾🏻‍♂️,🤾🏼‍♂️,🤾🏽‍♂️,🤾🏾‍♂️,🤾🏿‍♂️,🤾🏻‍♀️,🤾🏼‍♀️,🤾🏽‍♀️,🤾🏾‍♀️,🤾🏿‍♀️,🤹🏻,🤹🏼,🤹🏽,🤹🏾,🤹🏿,🤹🏻‍♂️,🤹🏼‍♂️,🤹🏽‍♂️,🤹🏾‍♂️,🤹🏿‍♂️,🤹🏻‍♀️,🤹🏼‍♀️,🤹🏽‍♀️,🤹🏾‍♀️,🤹🏿‍♀️,🧘🏻,🧘🏼,🧘🏽,🧘🏾,🧘🏿,🧘🏻‍♂️,🧘🏼‍♂️,🧘🏽‍♂️,🧘🏾‍♂️,🧘🏿‍♂️,🧘🏻‍♀️,🧘🏼‍♀️,🧘🏽‍♀️,🧘🏾‍♀️,🧘🏿‍♀️,🛀🏻,🛀🏼,🛀🏽,🛀🏾,🛀🏿,🛌🏻,🛌🏼,🛌🏽,🛌🏾,🛌🏿,🧑🏻‍🤝‍🧑🏻,🧑🏻‍🤝‍🧑🏼,🧑🏻‍🤝‍🧑🏽,🧑🏻‍🤝‍🧑🏾,🧑🏻‍🤝‍🧑🏿,🧑🏼‍🤝‍🧑🏻,🧑🏼‍🤝‍🧑🏼,🧑🏼‍🤝‍🧑🏽,🧑🏼‍🤝‍🧑🏾,🧑🏼‍🤝‍🧑🏿,🧑🏽‍🤝‍🧑🏻,🧑🏽‍🤝‍🧑🏼,🧑🏽‍🤝‍🧑🏽,🧑🏽‍🤝‍🧑🏾,🧑🏽‍🤝‍🧑🏿,🧑🏾‍🤝‍🧑🏻,🧑🏾‍🤝‍🧑🏼,🧑🏾‍🤝‍🧑🏽,🧑🏾‍🤝‍🧑🏾,🧑🏾‍🤝‍🧑🏿,🧑🏿‍🤝‍🧑🏻,🧑🏿‍🤝‍🧑🏼,🧑🏿‍🤝‍🧑🏽,🧑🏿‍🤝‍🧑🏾,🧑🏿‍🤝‍🧑🏿,👭🏻,👩🏻‍🤝‍👩🏼,👩🏻‍🤝‍👩🏽,👩🏻‍🤝‍👩🏾,👩🏻‍🤝‍👩🏿,👩🏼‍🤝‍👩🏻,👭🏼,👩🏼‍🤝‍👩🏽,👩🏼‍🤝‍👩🏾,👩🏼‍🤝‍👩🏿,👩🏽‍🤝‍👩🏻,👩🏽‍🤝‍👩🏼,👭🏽,👩🏽‍🤝‍👩🏾,👩🏽‍🤝‍👩🏿,👩🏾‍🤝‍👩🏻,👩🏾‍🤝‍👩🏼,👩🏾‍🤝‍👩🏽,👭🏾,👩🏾‍🤝‍👩🏿,👩🏿‍🤝‍👩🏻,👩🏿‍🤝‍👩🏼,👩🏿‍🤝‍👩🏽,👩🏿‍🤝‍👩🏾,👭🏿,👫🏻,👩🏻‍🤝‍👨🏼,👩🏻‍🤝‍👨🏽,👩🏻‍🤝‍👨🏾,👩🏻‍🤝‍👨🏿,👩🏼‍🤝‍👨🏻,👫🏼,👩🏼‍🤝‍👨🏽,👩🏼‍🤝‍👨🏾,👩🏼‍🤝‍👨🏿,👩🏽‍🤝‍👨🏻,👩🏽‍🤝‍👨🏼,👫🏽,👩🏽‍🤝‍👨🏾,👩🏽‍🤝‍👨🏿,👩🏾‍🤝‍👨🏻,👩🏾‍🤝‍👨🏼,👩🏾‍🤝‍👨🏽,👫🏾,👩🏾‍🤝‍👨🏿,👩🏿‍🤝‍👨🏻,👩🏿‍🤝‍👨🏼,👩🏿‍🤝‍👨🏽,👩🏿‍🤝‍👨🏾,👫🏿,👬🏻,👨🏻‍🤝‍👨🏼,👨🏻‍🤝‍👨🏽,👨🏻‍🤝‍👨🏾,👨🏻‍🤝‍👨🏿,👨🏼‍🤝‍👨🏻,👬🏼,👨🏼‍🤝‍👨🏽,👨🏼‍🤝‍👨🏾,👨🏼‍🤝‍👨🏿,👨🏽‍🤝‍👨🏻,👨🏽‍🤝‍👨🏼,👬🏽,👨🏽‍🤝‍👨🏾,👨🏽‍🤝‍👨🏿,👨🏾‍🤝‍👨🏻,👨🏾‍🤝‍👨🏼,👨🏾‍🤝‍👨🏽,👬🏾,👨🏾‍🤝‍👨🏿,👨🏿‍🤝‍👨🏻,👨🏿‍🤝‍👨🏼,👨🏿‍🤝‍👨🏽,👨🏿‍🤝‍👨🏾,👬🏿,💏🏻,💏🏼,💏🏽,💏🏾,💏🏿,🧑🏻‍❤️‍💋‍🧑🏼,🧑🏻‍❤️‍💋‍🧑🏽,🧑🏻‍❤️‍💋‍🧑🏾,🧑🏻‍❤️‍💋‍🧑🏿,🧑🏼‍❤️‍💋‍🧑🏻,🧑🏼‍❤️‍💋‍🧑🏽,🧑🏼‍❤️‍💋‍🧑🏾,🧑🏼‍❤️‍💋‍🧑🏿,🧑🏽‍❤️‍💋‍🧑🏻,🧑🏽‍❤️‍💋‍🧑🏼,🧑🏽‍❤️‍💋‍🧑🏾,🧑🏽‍❤️‍💋‍🧑🏿,🧑🏾‍❤️‍💋‍🧑🏻,🧑🏾‍❤️‍💋‍🧑🏼,🧑🏾‍❤️‍💋‍🧑🏽,🧑🏾‍❤️‍💋‍🧑🏿,🧑🏿‍❤️‍💋‍🧑🏻,🧑🏿‍❤️‍💋‍🧑🏼,🧑🏿‍❤️‍💋‍🧑🏽,🧑🏿‍❤️‍💋‍🧑🏾,👩🏻‍❤️‍💋‍👨🏻,👩🏻‍❤️‍💋‍👨🏼,👩🏻‍❤️‍💋‍👨🏽,👩🏻‍❤️‍💋‍👨🏾,👩🏻‍❤️‍💋‍👨🏿,👩🏼‍❤️‍💋‍👨🏻,👩🏼‍❤️‍💋‍👨🏼,👩🏼‍❤️‍💋‍👨🏽,👩🏼‍❤️‍💋‍👨🏾,👩🏼‍❤️‍💋‍👨🏿,👩🏽‍❤️‍💋‍👨🏻,👩🏽‍❤️‍💋‍👨🏼,👩🏽‍❤️‍💋‍👨🏽,👩🏽‍❤️‍💋‍👨🏾,👩🏽‍❤️‍💋‍👨🏿,👩🏾‍❤️‍💋‍👨🏻,👩🏾‍❤️‍💋‍👨🏼,👩🏾‍❤️‍💋‍👨🏽,👩🏾‍❤️‍💋‍👨🏾,👩🏾‍❤️‍💋‍👨🏿,👩🏿‍❤️‍💋‍👨🏻,👩🏿‍❤️‍💋‍👨🏼,👩🏿‍❤️‍💋‍👨🏽,👩🏿‍❤️‍💋‍👨🏾,👩🏿‍❤️‍💋‍👨🏿,👨🏻‍❤️‍💋‍👨🏻,👨🏻‍❤️‍💋‍👨🏼,👨🏻‍❤️‍💋‍👨🏽,👨🏻‍❤️‍💋‍👨🏾,👨🏻‍❤️‍💋‍👨🏿,👨🏼‍❤️‍💋‍👨🏻,👨🏼‍❤️‍💋‍👨🏼,👨🏼‍❤️‍💋‍👨🏽,👨🏼‍❤️‍💋‍👨🏾,👨🏼‍❤️‍💋‍👨🏿,👨🏽‍❤️‍💋‍👨🏻,👨🏽‍❤️‍💋‍👨🏼,👨🏽‍❤️‍💋‍👨🏽,👨🏽‍❤️‍💋‍👨🏾,👨🏽‍❤️‍💋‍👨🏿,👨🏾‍❤️‍💋‍👨🏻,👨🏾‍❤️‍💋‍👨🏼,👨🏾‍❤️‍💋‍👨🏽,👨🏾‍❤️‍💋‍👨🏾,👨🏾‍❤️‍💋‍👨🏿,👨🏿‍❤️‍💋‍👨🏻,👨🏿‍❤️‍💋‍👨🏼,👨🏿‍❤️‍💋‍👨🏽,👨🏿‍❤️‍💋‍👨🏾,👨🏿‍❤️‍💋‍👨🏿,👩🏻‍❤️‍💋‍👩🏻,👩🏻‍❤️‍💋‍👩🏼,👩🏻‍❤️‍💋‍👩🏽,👩🏻‍❤️‍💋‍👩🏾,👩🏻‍❤️‍💋‍👩🏿,👩🏼‍❤️‍💋‍👩🏻,👩🏼‍❤️‍💋‍👩🏼,👩🏼‍❤️‍💋‍👩🏽,👩🏼‍❤️‍💋‍👩🏾,👩🏼‍❤️‍💋‍👩🏿,👩🏽‍❤️‍💋‍👩🏻,👩🏽‍❤️‍💋‍👩🏼,👩🏽‍❤️‍💋‍👩🏽,👩🏽‍❤️‍💋‍👩🏾,👩🏽‍❤️‍💋‍👩🏿,👩🏾‍❤️‍💋‍👩🏻,👩🏾‍❤️‍💋‍👩🏼,👩🏾‍❤️‍💋‍👩🏽,👩🏾‍❤️‍💋‍👩🏾,👩🏾‍❤️‍💋‍👩🏿,👩🏿‍❤️‍💋‍👩🏻,👩🏿‍❤️‍💋‍👩🏼,👩🏿‍❤️‍💋‍👩🏽,👩🏿‍❤️‍💋‍👩🏾,👩🏿‍❤️‍💋‍👩🏿,💑🏻,💑🏼,💑🏽,💑🏾,💑🏿,🧑🏻‍❤️‍🧑🏼,🧑🏻‍❤️‍🧑🏽,🧑🏻‍❤️‍🧑🏾,🧑🏻‍❤️‍🧑🏿,🧑🏼‍❤️‍🧑🏻,🧑🏼‍❤️‍🧑🏽,🧑🏼‍❤️‍🧑🏾,🧑🏼‍❤️‍🧑🏿,🧑🏽‍❤️‍🧑🏻,🧑🏽‍❤️‍🧑🏼,🧑🏽‍❤️‍🧑🏾,🧑🏽‍❤️‍🧑🏿,🧑🏾‍❤️‍🧑🏻,🧑🏾‍❤️‍🧑🏼,🧑🏾‍❤️‍🧑🏽,🧑🏾‍❤️‍🧑🏿,🧑🏿‍❤️‍🧑🏻,🧑🏿‍❤️‍🧑🏼,🧑🏿‍❤️‍🧑🏽,🧑🏿‍❤️‍🧑🏾,👩🏻‍❤️‍👨🏻,👩🏻‍❤️‍👨🏼,👩🏻‍❤️‍👨🏽,👩🏻‍❤️‍👨🏾,👩🏻‍❤️‍👨🏿,👩🏼‍❤️‍👨🏻,👩🏼‍❤️‍👨🏼,👩🏼‍❤️‍👨🏽,👩🏼‍❤️‍👨🏾,👩🏼‍❤️‍👨🏿,👩🏽‍❤️‍👨🏻,👩🏽‍❤️‍👨🏼,👩🏽‍❤️‍👨🏽,👩🏽‍❤️‍👨🏾,👩🏽‍❤️‍👨🏿,👩🏾‍❤️‍👨🏻,👩🏾‍❤️‍👨🏼,👩🏾‍❤️‍👨🏽,👩🏾‍❤️‍👨🏾,👩🏾‍❤️‍👨🏿,👩🏿‍❤️‍👨🏻,👩🏿‍❤️‍👨🏼,👩🏿‍❤️‍👨🏽,👩🏿‍❤️‍👨🏾,👩🏿‍❤️‍👨🏿,👨🏻‍❤️‍👨🏻,👨🏻‍❤️‍👨🏼,👨🏻‍❤️‍👨🏽,👨🏻‍❤️‍👨🏾,👨🏻‍❤️‍👨🏿,👨🏼‍❤️‍👨🏻,👨🏼‍❤️‍👨🏼,👨🏼‍❤️‍👨🏽,👨🏼‍❤️‍👨🏾,👨🏼‍❤️‍👨🏿,👨🏽‍❤️‍👨🏻,👨🏽‍❤️‍👨🏼,👨🏽‍❤️‍👨🏽,👨🏽‍❤️‍👨🏾,👨🏽‍❤️‍👨🏿,👨🏾‍❤️‍👨🏻,👨🏾‍❤️‍👨🏼,👨🏾‍❤️‍👨🏽,👨🏾‍❤️‍👨🏾,👨🏾‍❤️‍👨🏿,👨🏿‍❤️‍👨🏻,👨🏿‍❤️‍👨🏼,👨🏿‍❤️‍👨🏽,👨🏿‍❤️‍👨🏾,👨🏿‍❤️‍👨🏿,👩🏻‍❤️‍👩🏻,👩🏻‍❤️‍👩🏼,👩🏻‍❤️‍👩🏽,👩🏻‍❤️‍👩🏾,👩🏻‍❤️‍👩🏿,👩🏼‍❤️‍👩🏻,👩🏼‍❤️‍👩🏼,👩🏼‍❤️‍👩🏽,👩🏼‍❤️‍👩🏾,👩🏼‍❤️‍👩🏿,👩🏽‍❤️‍👩🏻,👩🏽‍❤️‍👩🏼,👩🏽‍❤️‍👩🏽,👩🏽‍❤️‍👩🏾,👩🏽‍❤️‍👩🏿,👩🏾‍❤️‍👩🏻,👩🏾‍❤️‍👩🏼,👩🏾‍❤️‍👩🏽,👩🏾‍❤️‍👩🏾,👩🏾‍❤️‍👩🏿,👩🏿‍❤️‍👩🏻,👩🏿‍❤️‍👩🏼,👩🏿‍❤️‍👩🏽,👩🏿‍❤️‍👩🏾,👩🏿‍❤️‍👩🏿";//emoji list current from October 2020 (some unsupported emojis removed)

var emojis;
var hidden = document.createElement('canvas');
var hiddenX = hidden.getContext('2d');
var x = result.getContext('2d');

let links = ["https://upload.wikimedia.org/wikipedia/commons/1/13/Michelangelo%2C_Creation_of_Adam_06.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg"];
let myURL = links[2];//links[Math.floor(Math.random()*links.length)];

image.addEventListener('change', main)
pSize.addEventListener('change', main)
scale.addEventListener('change', main)
tolerance.addEventListener('change', main)
fillColor.addEventListener('change', main)
display.addEventListener('change', main)
hideBlack.addEventListener('change', main)
emptySpace.addEventListener('change', main)
enableBgColor.addEventListener('change', main)
bgColor.addEventListener('change', main)

main()

async function main(ev) { 
  enableInputs(false)
  buildEmojiMap(emojis);
  if(!img || image.files[0] != img.src) { 
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      hidden.width = img.naturalWidth
      hidden.height = img.naturalHeight
      hiddenX.clearRect(0,0,hidden.width,hidden.height)
      hiddenX.drawImage(img, 0, 0);    
      analyzeImage(img);
    }
    img.src = image.files[0] ? URL.createObjectURL(image.files[0]) : myURL;
  } else {
    analyzeImage(img)
  }
  
}//end main

async function analyzeImage(img) {

  spinner.style.display = "inline";
  await delay(100)
  const ROWS = Math.floor(img.naturalHeight / pSize.value);
  const COLS = Math.floor(img.naturalWidth / pSize.value);
  console.log("grid size is:"+ROWS*COLS)
  result.width = COLS * scale.value;
  result.height = (ROWS * scale.value)-scale.value;

  x.clearRect(0,0,result.width,result.height) 
  if (enableBgColor.checked) {
    x.fillStyle = bgColor.value
    x.fillRect(0, 0, result.width, result.height)
  }
  x.font = scale.value*(display.value=="chart"?.75:display.value=="mosaic"?1.5:1)+"px Segoe UI Emoji, Apple Color Emoji, Segoe UI Symbol, Noto Color Emoji"

  let hueMap = {};
  var pixels = [];
  for (let i = 0; i < ROWS * COLS; i+=1) {

    let row = Math.floor(i / COLS);
    let col = i % COLS;
    let buffer = hiddenX.getImageData(col * pSize.value, row * pSize.value, pSize.value, pSize.value);
    let colorInfo = getColorInfo(buffer.data, false)
    let lightness =  colorInfo.lab[0];
    let isBlack = colorInfo.rgb[0]==0&&colorInfo.rgb[1]==0&&colorInfo.rgb[2]==0

    let bestEmoji
    if(!hueMap[lightness]){

      let best = []
      let i = 0;
      while(best.length==0){
        i = i + Number(tolerance.value);
        best = emojis.filter(e=>{
          let d = deltaE94(e.lab, colorInfo.lab)
          return d<i
        })
      }
      hueMap[lightness] = {}
      hueMap[lightness].emojis = best

    }
    bestEmoji = hueMap[lightness].emojis[Math.floor(hueMap[lightness].emojis.length*Math.random())];

    let xc = scale.value * col
    let yc = scale.value * row  
    let p = {}
    p.x = xc
    p.y = yc
    p.key = bestEmoji.key
    p.isBlack = isBlack
    pixels.push(p)

    if(i%500==0) {
      spinner.innerText = Math.floor((i/(ROWS*COLS))*100)+"%" 
      await delay(0)
    }
  }//end for each pixel

  var pix = pixels.sort((a,b)=>Math.random()>.5?1:-1);
  for(emo of pix) {

    let skipDueToBlack = hideBlack.checked && emo.isBlack
    if(!skipDueToBlack){
      x.moveTo(emo.x,emo.y) 
      x.fillText(emo.key, emo.x, emo.y)
    }
  }
  spinner.style.display = "none"
  enableInputs(true)
}//end analyzeImage

function buildEmojiMap(){
  var em = getEm()
  hidden.height = em
  hidden.width = em
  hiddenX.font = `10px Segoe UI Emoji, Apple Color Emoji, Segoe UI Symbol, Noto Color Emoji`
  //hiddenX.fillStyle = fillColor.value;
  //let white = Math.floor(fillColor.value*256).toString(16)
  //hiddenX.fillStyle = `#${white}${white}${white}`
  emojis = source.split(",");
  emojis = emojis.map(e=>{
    return { "key":e }
  });

  emojis.forEach((emo,index) => {

    hiddenX.clearRect(0,0,hidden.width,hidden.height)
    //hiddenX.fillRect(0,0,hidden.width,hidden.height)//filling with "fill" color pure white
    hiddenX.fillText(emo.key,0,em/1.4)
    let d = hiddenX.getImageData(0,0,hidden.width,hidden.height)
    //AVE COLOR
    var colors = getColorInfo(d.data, false)     
    emo.rgb = colors.rgb
    emo.lab = colors.lab
    emo.colorPixels = colors.colorPixels
    emo.pixels = colors.pixels;
    emo.width = hiddenX.measureText(emo.key).width
    //let r, r2, g, g2, b, b2;
    //[, r, r2, g, g2, b, b2] = fillColor.value;
    //let sel = [parseInt(r + r2, 16), parseInt(g + g2, 16), parseInt(b + b2, 16)]
    let isAllBlack = colors.rgb[0] == 0 && colors.rgb[1] == 0 && colors.rgb[2] == 0;
    emo.isSupported = (!isAllBlack && (colors.transparentPixels / (colors.totalPixels + colors.transparentPixels)) < Number(emptySpace.value));
  })

  var em = getEm()
  emojis = emojis.filter(emo=>emo.isSupported&&emo.width<=em)
  console.log(emojis)
} //end buildEmojiMap

function getColorInfo(arr, ignoreFill){

  let sums = [0,0,0,0,0]
  let j = -4
  let blockSize = 4;//r,g,b,a
  let totalColorPixels = 0
  let totalPixels = 0
  let isFill = false;
  var transparentPixels = 0
  while((j+=blockSize)<arr.length){
    
    if (arr[j + 3] === 0) {
      transparentPixels++
      continue;
    }
    
    let isColor = !(arr[j]==arr[j+1] && arr[j+1]==arr[j+2]);
    if(isColor) totalColorPixels++
        sums[0] += arr[j] ** 2 //r
        sums[1] += arr[j + 1] ** 2 //g
        sums[2] += arr[j + 2] ** 2  //b
        sums[3] += arr[j + 3] //opacity
        sums[4] += arr[j] + arr[j + 1] + arr[j + 2] + arr[j + 3] //sum
        totalPixels++
  }

      let rgb = totalPixels == 0 ? [0, 0, 0] : sums.filter((el, i) => i < 3).map(s => Math.round(Math.sqrt(s / totalPixels)));
      let xyz = RGBtoXYZ(rgb[0], rgb[1], rgb[2])
      let lab = XYZtoLAB(xyz[0], xyz[1], xyz[2])

      sums = { "rgb": rgb, "lab": lab, "colorPixels": totalColorPixels, "totalPixels": totalPixels, transparentPixels: transparentPixels, checkSum: sums[4] }
      return sums;
}//end getAveColor

//utility
function getEm(){
  var b = document.querySelector('body');
  return Number(window.getComputedStyle(b,null).fontSize.replace(/[^\d]/g,""));
}

function downloadIt(){
  var link = document.createElement('a');
  link.download = 'EmojiArtMaker.png';
  link.href = result.toDataURL()
  link.click();
}

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms);
  })
}

//https://stackoverflow.com/questions/15408522/rgb-to-xyz-and-lab-colours-conversion
function RGBtoXYZ(R, G, B) {

  var_R = parseFloat( R / 255 )        //R from 0 to 255
  var_G = parseFloat( G / 255 )        //G from 0 to 255
  var_B = parseFloat( B / 255 )        //B from 0 to 255

  if ( var_R > 0.04045 ) var_R = Math.pow( ( var_R + 0.055 ) / 1.055, 2.4)
  else                   var_R = var_R / 12.92
  if ( var_G > 0.04045 ) var_G = Math.pow( ( var_G + 0.055 ) / 1.055, 2.4)
  else                   var_G = var_G / 12.92
  if ( var_B > 0.04045 ) var_B = Math.pow( ( var_B + 0.055 ) / 1.055, 2.4)
  else                   var_B = var_B / 12.92

  var_R = var_R * 100
  var_G = var_G * 100
  var_B = var_B * 100

  //Observer. = 2°, Illuminant = D65
  X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
  Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
  Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
  return [X, Y, Z]
}

//https://stackoverflow.com/questions/15408522/rgb-to-xyz-and-lab-colours-conversion
function XYZtoLAB(x, y, z) {
  var ref_X =  95.047;
  var ref_Y = 100.000;
  var ref_Z = 108.883;

  var_X = x / ref_X          //ref_X =  95.047   Observer= 2°, Illuminant= D65
  var_Y = y / ref_Y          //ref_Y = 100.000
  var_Z = z / ref_Z          //ref_Z = 108.883

  if ( var_X > 0.008856 ) var_X = Math.pow(var_X, (1/3))
  else                    var_X = ( 7.787 * var_X ) + ( 16 / 116 )
  if ( var_Y > 0.008856 ) var_Y = Math.pow(var_Y, (1/3))
  else                    var_Y = ( 7.787 * var_Y ) + ( 16 / 116 )
  if ( var_Z > 0.008856 ) var_Z = Math.pow(var_Z, (1/3))
  else                    var_Z = ( 7.787 * var_Z ) + ( 16 / 116 )

  CIE_L = ( 116 * var_Y ) - 16
  CIE_a = 500 * ( var_X - var_Y )
  CIE_b = 200 * ( var_Y - var_Z )

  return [CIE_L, CIE_a, CIE_b]
}

/*https://stackoverflow.com/questions/54738431/calculate-deltae94-in-javascript*/
/*calculate difference in two lab colors*/
function deltaE94(a,b) {
  var labA = a;
  var labB = b;

  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / (1.0);
  var deltaCkcsc = deltaC / (sc);
  var deltaHkhsh = deltaH / (sh);
  var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

function enableInputs(tru) {
  let inputs = [image,pSize,scale,tolerance,fillColor,display,hideBlack,enableBgColor,bgColor,emptySpace];
  if(!tru){
    inputs.forEach(inp=>inp.disabled = "disabled");
  } else {
    inputs.forEach(inp=>inp.removeAttribute("disabled"));
  }
}