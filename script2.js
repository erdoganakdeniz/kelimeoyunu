
sorular = [
    {
        "soru": "Saklambaçta ebeyi pes ettiren oyuncu",
        "cevap": "Kurt",
        "harfsayisi": "4"
    },
    {
        "soru": "“Şuh” sözünün batı dilleri kökenli eş anlamlısı",
        "cevap": "Vamp",
        "harfsayisi": "4"
    },
    {
        "soru": "Şüphe duyulan kimse",
        "cevap": "Zanlı",
        "harfsayisi": "5"
    },
    {
        "soru": "Bir emek sonucu ortaya konulan ürün, eser",
        "cevap": "Yapıt",
        "harfsayisi": "5"
    },
    {
        "soru": "Eş görevli sözcükleri veya cümleleri bir araya getiren sözcük, cümle düğümleyicisi",
        "cevap": "Bağlaç",
        "harfsayisi": "6"
    },
    {
        "soru": "Bildirme, haber verme anlamındaki eski bir söz",
        "cevap": "Tebliğ",
        "harfsayisi": "6"
    },
    {
        "soru": "Sanat eserlerini bir topluluğa çalma veya söyleme etkinliği",
        "cevap": "Dinleti",
        "harfsayisi": "7"
    },
    {
        "soru": "Ben sevdalısı",
        "cevap": "Narsist",
        "harfsayisi": "7"
    },
    {
        "soru": "Esmer ve çelimsiz",
        "cevap": "Karakuru",
        "harfsayisi": "8"
    },
    {
        "soru": "Mecazi anlamda güçlükle elde etmek",
        "cevap": "Koparmak",
        "harfsayisi": "8"
    },
    {
        "soru": "“İsteğe bağlı” anlamında kullanılan Fransızca kökenli bir sözcük",
        "cevap": "Opsiyonel",
        "harfsayisi": "9"
    },
    {
        "soru": "Sıfat haliyle “hayali” anlamına gelen bir edebiyat türünün de adı olan söz",
        "cevap": "Fantastik",
        "harfsayisi": "9"
    },
    {
        "soru": "“Saygın bir kişi olan siz” anlamında bir tabir",
        "cevap": "Zatıaliniz",
        "harfsayisi": "10"
    },
    {
        "soru": "Bütün işlerin bağlı olduğu, tüm işleri çözüme ulaştırabilecek olan yer veya makam",
        "cevap": "Kilitnokta",
        "harfsayisi": "10"
    }
]
var bosluk = 0;
var rastgeleharf = "";
var bosharf = ["_", "_", "_", "_"];
var index = 0;
var rastgelesayi = 0;
var puan = 0;
var bosluksayisi = 0;
var alinanharf = 0;
document.querySelector('.siradakisoru').addEventListener('click', function () {

    document.querySelector('.sorutext').textContent = sorular[index].soru;
    bosluk = sorular[index].cevap.length;

    if (bosluk == bosharf.length) {

    }
    else {
        bosharf.push("_");

    }
    for (let j = 0; j < bosharf.length; j++) {
        bosharf[j] = "_";
    }
    document.getElementById("currentword").innerHTML = "  " + bosharf.join("  ");
    index++;



});
document.querySelector('.harfalim').addEventListener('click', function () {
    rastgelesayi = Math.floor(Math.random() * sorular[index - 1].cevap.length);
    rastgeleharf = sorular[index - 1].cevap[rastgelesayi];
    bosharf[rastgelesayi] = rastgeleharf.toUpperCase();
    document.getElementById("currentword").innerHTML = "  " + bosharf.join("  ");
});
document.querySelector('.dogrucevap').addEventListener('click', function () {
    for (let k = 0; k < bosharf.length; k++) {

        if (bosharf[k] == "_") {
            bosluksayisi++;
        }
        bosharf[k] = sorular[index - 1].cevap[k].toUpperCase();
        document.getElementById("currentword").innerHTML = "  " + bosharf.join("  ");

    }
    puan = (bosluksayisi * 100);
    document.querySelector('.puan').textContent = puan;


});
