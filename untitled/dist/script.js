document.addEventListener("DOMContentLoaded", () => {

  const song = document.getElementById("song");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const lyrics = document.getElementById("lyrics");

  // Botones de play y pause
  play.addEventListener("click", () => song.play());
  pause.addEventListener("click", () => song.pause());

  // Letras sincronizadas
  const lyricLines = [
    { time: 16, text: "¿A dónde vas amor?" },
    { time: 20, text: "¿Cuánto tiempo más tendré que esperar⌛?" },
    { time: 24, text: "Voy corriendo🏃‍♂️‍➡️ y no te puedo alcanzar" },
    { time: 28, text: "No te puedo alcanzar" },
    { time: 33, text: "¿A dónde vas amor?" },
    { time: 36, text: "Hoy tu cuerpo ya no emana calor❤️‍🔥" },
    { time: 41, text: "Cigarrillos van marcando el adiós〰️" },
    { time: 46, text: "Que me quema🔥" },
    { time: 49, text: "¿A donde iraaaaaaaas🗣️🗣️🗣️?" },
    { time: 58, text: "Me siento vacío sin Tiiiiiiiiiiiii🗣️🗣️🧎🏽" },
    { time: 67, text: "Que volverás" },
    { time: 71, text: "Prométeme que volveráss🙏🏾🙏🏾🙏🏾" },
    { time: 76, text: "A miii" },
    { time: 80, text: "A miiiii🧎🏽" },
    { time: 88, text: "Ahh" },
    { time: 92, text: "Ahhh" },
    { time: 96, text: "Ahhhh" },
    { time: 100, text: "🎶" },
    { time: 116, text: "¿A dónde iras?" },
    { time: 445, text: "A mi" }
  ];

  let currentLine = "";

  // Banderas para cada sticker
  let stickersShown = Array(8).fill(false);

  // Enlaces raw de cada sticker (repositorio separado)
  const stickerLinks = [
    "https://raw.githubusercontent.com/angelva200718/stiker1/main/WhatsApp%20Sticker%202026-01-22%20at%2012.30.18%20PM.18%20PM", // 0 - time 16
    "https://raw.githubusercontent.com/angelva200718/stiker2/main/WhatsApp%20Image%202026-01-22%20at%2011.17.55%20AM.jpeg",   // 1 - time 20
    "https://raw.githubusercontent.com/angelva200718/stiker3/main/WhatsApp%20Sticker%202026-01-22%20at%2012.53.10%20PM.10%20PM", // 2 - time 33
    "https://raw.githubusercontent.com/angelva200718/stiker4/main/WhatsApp%20Sticker%202026-01-22%20at%2012.55.42%20PM.42%20PM", // 3 - time 36
    "https://raw.githubusercontent.com/angelva200718/stiker5/main/WhatsApp%20Sticker%202026-01-22%20at%2012.59.16%20PM.16%20PM", // 4 - time 49
    "https://raw.githubusercontent.com/angelva200718/stiker6/main/WhatsApp%20Image%202026-01-22%20at%2011.16.37%20AM.jpeg",   // 5 - time 58
    "https://raw.githubusercontent.com/angelva200718/stiker7/main/WhatsApp%20Sticker%202026-01-22%20at%2011.15.25%20AM.25%20AM", // 6 - time 71
    "https://raw.githubusercontent.com/angelva200718/stiker8/main/WhatsApp%20Sticker%202026-01-22%20at%201.08.54%20PM.54%20PM"   // 7 - time 80
  ];

  // Tiempos exactos de cada sticker
  const stickerTimes = [16, 20, 33, 36, 49, 58, 71, 80];

  // Mostrar letras sincronizadas y stickers
  song.addEventListener("timeupdate", () => {
    const time = song.currentTime;

    // Letras
    for (let i = lyricLines.length - 1; i >= 0; i--) {
      if (time >= lyricLines[i].time) {
        if (currentLine !== lyricLines[i].text) {
          currentLine = lyricLines[i].text;
          lyrics.classList.remove("animate");
          void lyrics.offsetWidth; // reinicia animación
          lyrics.textContent = currentLine;
          lyrics.classList.add("animate");
        }
        break;
      }
    }

    // Stickers
    for (let i = 0; i < stickerLinks.length; i++) {
      if (!stickersShown[i] && time >= stickerTimes[i] && time < stickerTimes[i] + 1) {
        stickersShown[i] = true;
        const sticker = document.createElement("img");
        sticker.src = stickerLinks[i];
        sticker.classList.add("sticker");
        document.body.appendChild(sticker);

        setTimeout(() => sticker.classList.add("show"), 50);

        // Ajustar tiempo en pantalla: stickers 58 y 71 = 7s, otros = 4s
        const duration = (i === 5 || i === 6) ? 7000 : 4000;

        setTimeout(() => {
          sticker.classList.remove("show");
          setTimeout(() => sticker.remove(), 800);
        }, duration);
      }
    }
  });

  /* 🌧️ LLUVIA */
  function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 1 + 0.5 + "s";
    document.body.appendChild(drop);
    setTimeout(() => drop.remove(), 2000);
  }

  setInterval(createDrop, 50);

});