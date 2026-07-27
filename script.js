const ip = "DiamondLan.aternos.me";
const port = "21494";

const statusText = document.getElementById("serverStatus");
const playersText = document.getElementById("players");
const pingText = document.getElementById("ping");
const versionText = document.getElementById("version");
const dot = document.querySelector(".dot");

async function loadServer() {

    try {

        const response = await fetch(`https://api.mcsrvstat.us/3/${ip}:${port}`);

        const data = await response.json();

        if (data.online) {

            statusText.innerHTML = "🟢 آنلاین";

            dot.style.background = "#00ff6a";
            dot.style.boxShadow = "0 0 20px #00ff6a";

            playersText.innerHTML =
                `${data.players.online} / ${data.players.max}`;

            versionText.innerHTML =
                data.version || "نامشخص";

            pingText.innerHTML =
                "در دسترس";

        } else {

            statusText.innerHTML = "🔴 آفلاین";

            dot.style.background = "red";
            dot.style.boxShadow = "0 0 20px red";

            playersText.innerHTML = "--";

            versionText.innerHTML = "--";

            pingText.innerHTML = "--";

        }

    } catch {

        statusText.innerHTML = "خطا در اتصال";

        playersText.innerHTML = "--";

        versionText.innerHTML = "--";

        pingText.innerHTML = "--";

    }

}

loadServer();

setInterval(loadServer,15000);

document
.getElementById("copyIP")
.addEventListener("click",()=>{

navigator.clipboard.writeText(
"DiamondLan.aternos.me:21494"
);

alert("آی‌پی سرور کپی شد.");

});
