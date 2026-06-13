import noodle1 from "../../assets/images/pasta1.jpeg";
import noodle2 from "../../assets/images/pasta2.jpeg";
import noodle3 from "../../assets/images/pasta3.jpeg";
import sorba1 from "../../assets/images/lentilsoup.jpeg";
import sorba2 from "../../assets/images//brocolisoup.jpeg";
import sorba3 from "../../assets/images/mashroomsoup.jpeg";
import sorba4 from "../../assets/images/tomatosoup.jpeg";
import legion from "../../assets/images/legion.jpeg";
import margherita from "../../assets/images/margherita.jpeg";
import bbq from "../../assets/images/bbq.jpeg";
import chickkenmashroom from "../../assets/images/chickenmashroom.jpeg";
import dimare from "../../assets/images/dimare.jpeg";
import vegetables from "../../assets/images/vegetables.jpeg";
import fetucini from "../../assets/images/fetuccino.jpeg";
import pennearabiatta from "../../assets/images/pennearabiato.jpeg";
import spagettibolonez from "../../assets/images/spagettibolonez.jpeg";
import dimare2 from "../../assets/images/dimare2.jpeg";

import cacanoud from "../../assets/images/cacaound.jpeg";
import macadamya from "../../assets/images/macadamyanut.jpeg";
import spanis from "../../assets/images/spanislatte.jpeg";
import vaitchooclate from "../../assets/images/whitechooclatenutlatte.jpeg";
import issaltedcaramel from "../../assets/images/saltedcaramellatte.jpeg";
import issaltedcaramelraff from "../../assets/images/saltedcarmelraff.jpeg";
import isamericano from "../../assets/images/isamericano.jpeg";
import islatte from "../../assets/images/islatte.jpeg";
import frappucino from "../../assets/images/frappacino.jpeg";
import ismocca from "../../assets/images/ismocca.jpeg";
import israfcofe from "../../assets/images/israfcoffe.jpeg";
import affacato from "../../assets/images/affacto.jpeg";
import vanillamilkseyk from "../../assets/images/vanillamilkseyk.jpeg";
import sokalatmilkseyk from "../../assets/images/chooclatemilkseyk.jpeg";
import caramelmilkseyk from "../../assets/images/caramelmilkseyk.jpeg";
import strowberrylimonat from "../../assets/images/strawberrymilkseyk.jpeg";
import banamilkseyk from "../../assets/images/bananamilkseyk.jpeg";
import snikersmilkseyk from "../../assets/images/snickersilkseyk.jpeg";
import tropicallimonat from "../../assets/images/tropicallimonat.jpeg";
import pasionfrutmango from "../../assets/images/pasionfrutmango.jpeg";
import strowberylimonat from "../../assets/images/strowberylimonat.jpeg";
import vatermelon from "../../assets/images/vatermelon.jpeg";
import singleespresso from "../../assets/images/singleespresso.jpeg";
import doubleespresso from "../../assets/images/doubleespresso.jpeg";
import espressomaciato from "../../assets/images/espressomaciato.jpeg";
import lungo from "../../assets/images/lungo.jpeg";
import flatwhite from "../../assets/images/flatwhite.jpeg";
import cortado from "../../assets/images/cortado.jpeg";
import americano from "../../assets/images/americani.jpeg";
import latte from "../../assets/images/latte.jpeg";
import cappuccino from "../../assets/images/cappucino.jpeg";
import darkmokka from "../../assets/images/darkmocha.jpeg";
import whitemocka from "../../assets/images/whitemocca.jpeg";
import raffcofe from "../../assets/images/raffcofee.jpeg";
import saltedcaramellatte from "../../assets/images/saltedcaramellatte.jpeg";

import duyu from "../../assets/images/duyu.jpeg";
import qrildeterezi from "../../assets/images/qrildeterevez.jpeg";
import aldenterevez from "../../assets/images/aldenteterevez.jpeg";
import almadilim from "../../assets/images/almadilim.jpeg";
import fri from "../../assets/images/fries.jpeg";
import ratatoulli from "../../assets/images/ratatoulli.jpeg";

import turkBreakfast from "../../assets/images/turkbreakfast.jpeg";
import milliBreakfast from "../../assets/images/milli-breakfast.jpeg";
import saporaBreakfast from "../../assets/images/saporaBreakfast.jpeg";
import englishBreakfast from "../../assets/images/englishBreakfast.jpeg";

import defaultsalap from "../../assets/images/defaultsalad.png";
import defaultavropa from "../../assets/images/defaultavropa.png";
import defaultburger from "../../assets/images/defaultburger.png";
import defaultmexican from "../../assets/images/defaultmexican.png";

export const menuData = {
  breakfasts: [
    {
      id: 1,
      title: "Türk Sərpmə Səhər Yeməyi",
      image: turkBreakfast,
      price: 35,

      description:
        "Simit, poğaça, pendir çeşidləri, zeytun, bal, çay və Türk qəhvəsi ilə təqdim olunan zəngin Türk səhər süfrəsi.",

      included: [
        "Simit",
        "Pide çörəyi",
        "Poğaça",
        "Reçel çeşidləri",
        "Pomidor",
        "Xiyar",
        "Zeytun (qara və yaşıl)",
        "Cəfəri",
        "Şirin bibər",
        "Bal",
        "Pastrami",
        "Bazlama tost",
        "Ağ pendir",
        "Kaşar pendiri",
        "Hellim pendiri",
        "Kərə yağı",
        "Sosis",
        "Çay",
        "Türk qəhvəsi",
      ],

      chooseCount: 2,

      options: [
        "Menemen",
        "Sucuqlu yumurta",
        "Səhanda yumurta",
        "Omlet",
        "Mıhlama",
        "Haşlanmış yumurta",
      ],
    },

    {
      id: 2,
      title: "Milli Səhər Yeməyi",
      image: milliBreakfast,
      price: 30,

      description:
        "Təndir çörəyi, yuxa, kənd pendirləri, bal, mürəbbə, qaymaq və samovar çayı ilə milli səhər süfrəsi.",

      included: [
        "Təndir çörəyi",
        "Yuxa",
        "Nəhrə yağı",
        "Keçi pendiri",
        "Motal pendiri",
        "Şor",
        "Bal",
        "Mürəbbə (3 növ)",
        "Qaymaq",
        "Xama",
        "Samovar çayı",
        "Limon",
      ],

      chooseCount: 2,

      options: [
        "Pomidor çığırtması",
        "Kükü",
        "Göz yumurta",
        "Qayğanaq",
        "Qaynadılmış yumurta",
        "Kolbasalı yumurta",
      ],
    },

    {
      id: 3,
      title: "Sapora Breakfast",
      image: saporaBreakfast,
      price: 35,

      description:
        "Pankek, çörək səbəti, pendir çeşidləri, meyvə püreləri, sırniki və isti içkilə təqdim olunan xüsusi Sapora səhər menyusu.",

      included: [
        "Çörək səbəti",
        "Pankek",
        "Pomidor",
        "Xiyar",
        "Bal",
        "Meyvə püresi (3 növ)",
        "Qatılaşdırılmış süd",
        "Şokolad pastası",
        "Sosis",
        "Kəsmik (2 növ)",
        "Kərə yağı",
        "Feta pendiri",
        "Mozzarella pendiri",
        "Qranapadano pendiri",
        "Holland pendiri",
        "Fri kartofu",
        "Sırniki",
        "Çay",
        "Qəhvə",
      ],

      chooseCount: 2,

      options: [
        "Pendirli omlet",
        "Göbələkli omlet",
        "Avokadolu omlet",
        "Göz yumurta",
        "Kükü",
        "Pomidor çığırtması",
        "Sapora omleti",
        "Qaynadılmış yumurta",
      ],
    },

    {
      id: 4,
      title: "English Breakfast",
      image: englishBreakfast,
      price: 28,

      description:
        "Mal bekonu, yumurta, sosis, qrildə tərəvəzlər, souslu paxla və tost çörəyi ilə klassik İngilis səhər yeməyi.",

      included: [
        "Mal bekonu",
        "2 ədəd göz yumurta",
        "2 ədəd sosis",
        "Qrildə çerri pomidor",
        "Qrildə göbələk",
        "Sousda ağ paxla",
        "Qızardılmış tost çörəyi",
        "Ahmad çayı",
      ],

      chooseCount: 0,

      options: [],
    },
  ],
  noodles: [
    {
      id: 1,
      title: "Karidesli Wok Noodle",
      description:
        "Karides, yumurta noodle, rəngli bibər, soya sousu və yaşıl soğan",
      price: 27,
      image: noodle2,
    },
    {
      id: 2,
      title: "Toyuqlu Teriyaki Noodle",
      description:
        "Toyuq filesi, noodle, tərəvəzlər, teriyaki sousu və soya sousu",
      price: 20,
      image: noodle1,
    },
    {
      id: 3,
      title: "Qızıl Balıqlı Wok Noodle",
      description:
        "Qızıl balıq, noodle, tərəvəzlər, soya sousu və təzə göyərti",
      price: 24,
      image: noodle3,
    },

    {
      id: 4,
      title: "Fetuçini Alfredo",
      description:
        "Fetuçini makaronu, qaymaqlı sous, parmesan pendiri və göyərti",
      price: 24,
      image: fetucini,
    },

    {
      id: 5,
      title: "Penne Arrabbiata",
      description:
        "Penne makaronu, pomidor sousu, sarımsaq, acı bibər və parmesan",
      price: 22,
      image: pennearabiatta,
    },

    {
      id: 6,
      title: "Spagetti Bolonez",
      description:
        "Spagetti, mal əti raqusu, pomidor sousu, parmesan və reyhan",
      price: 25,
      image: spagettibolonez,
    },

    {
      id: 7,
      title: "Di Mare Makaronu",
      description: "Karides, kalmar, dəniz məhsulları, spagetti və xüsusi sous",
      price: 30,
      image: dimare2,
    },
  ],

  sorbalar: [
    {
      id: 1,
      title: "Mərci Şorbası",
      description: "Qırmızı mərcimək, kök, soğan və xüsusi ədviyyatlar",
      price: 8,
      image: sorba1,
    },
    {
      id: 2,
      title: "Kremli Brokoli Şorbası",
      description: "Brokoli, qaymaq, süd və xüsusi ədviyyatlar",
      price: 10,
      image: sorba2,
    },
    {
      id: 3,
      title: "Kremli Göbələk Şorbası",
      description: "Təzə göbələk, qaymaq, süd və kərə yağı",
      price: 12,
      image: sorba3,
    },
    {
      id: 4,
      title: "Pomidor Şorbası",
      description: "Pomidor, reyhan, sarımsaq və xüsusi sous",
      price: 10,
      image: sorba4,
    },
  ],

  Pizza: [
    {
      id: 1,
      title: "Legion Pizza",
      description: "Mozzarella pendiri, pepperoni, göbələk və zeytun",
      price: 24,
      image: legion,
    },
    {
      id: 2,
      title: "Margherita Pizza",
      description: "Mozzarella pendiri, pomidor sousu və təzə reyhan",
      price: 22,
      image: margherita,
    },
    {
      id: 3,
      title: "BBQ Sapora Pizza",
      description: "BBQ sousu, toyuq əti, mozzarella pendiri və qırmızı soğan",
      price: 26,
      image: bbq,
    },
    {
      id: 4,
      title: "Toyuqlu Göbələk Pizza",
      description: "Toyuq əti, göbələk, mozzarella pendiri və qaymaqlı sous",
      price: 25,
      image: chickkenmashroom,
    },
    {
      id: 5,
      title: "Di Mare Pizza",
      description: "Karides, kalmar, mozzarella pendiri və dəniz məhsulları",
      price: 30,
      image: dimare,
    },
    {
      id: 6,
      title: "Tərəvəzli Pizza",
      description: "Bibər, göbələk, qarğıdalı, zeytun və mozzarella pendiri",
      price: 21,
      image: vegetables,
    },
  ],
  salatlar: [
    {
      id: 1,
      title: "Toyuqlu Sezar Salatı",
      description:
        "Toyuq filesi, kahı, parmesan pendiri, kruton və sezar sousu",
      price: 18,
      image: defaultsalap,
    },
    {
      id: 2,
      title: "Krevetli Sezar Salatı",
      description: "Krevet, kahı, parmesan pendiri, kruton və sezar sousu",
      price: 22,
      image: defaultsalap,
    },
    {
      id: 3,
      title: "Harialtı Salatı",
      description: "Təzə tərəvəzlər və xüsusi sous ilə hazırlanmış salat",
      price: 15,
      image: defaultsalap,
    },
    {
      id: 4,
      title: "Ton Balıqlı Salat",
      description: "Ton balığı, tərəvəzlər və xüsusi sous",
      price: 19,
      image: defaultsalap,
    },
    {
      id: 5,
      title: "Dəniz Məhsulları Salatı",
      description: "Dəniz məhsulları və təzə tərəvəzlərdən hazırlanmış salat",
      price: 24,
      image: defaultsalap,
    },
    {
      id: 6,
      title: "İsti Salat",
      description: "İsti tərəvəzlər və xüsusi sous ilə hazırlanmış salat",
      price: 17,
      image: defaultsalap,
    },
    {
      id: 7,
      title: "Kapreze Salatı",
      description: "Mozzarella, pomidor, reyhan və zeytun yağı",
      price: 16,
      image: defaultsalap,
    },
    {
      id: 8,
      title: "Rukola Qarışığı",
      description: "Rukola, tərəvəzlər və xüsusi sous",
      price: 15,
      image: defaultsalap,
    },
    {
      id: 9,
      title: "Mal Əti Karpaççosu",
      description: "Nazik dilimlənmiş mal əti və parmesan pendiri",
      price: 23,
      image: defaultsalap,
    },
    {
      id: 10,
      title: "Yaşıl Təravət Salatı",
      description: "Yaşıl tərəvəzlərdən hazırlanmış yüngül salat",
      price: 14,
      image: defaultsalap,
    },
    {
      id: 11,
      title: "Marinə Edilmiş Pomidor Salatı",
      description: "Marinə edilmiş pomidor və göyərtilər",
      price: 13,
      image: defaultsalap,
    },
  ],

  avropaKlassikleri: [
    {
      id: 1,
      title: "Toyuq Şnitseli",
      description: "Xırtıldayan panirovkada toyuq şnitseli",
      price: 22,
      image: defaultavropa,
    },
    {
      id: 2,
      title: "Mal Ətli Stroqanov",
      description: "Mal əti, göbələk və qaymaqlı sous",
      price: 28,
      image: defaultavropa,
    },
    {
      id: 3,
      title: "Toyuqlu Stroqanov",
      description: "Toyuq filesi, göbələk və qaymaqlı sous",
      price: 24,
      image: defaultavropa,
    },
    {
      id: 4,
      title: "Mal Əti Medalyonu",
      description: "Qril edilmiş mal əti medalyonları",
      price: 32,
      image: defaultavropa,
    },
    {
      id: 9,
      title: "İspan Paelyası",
      description:
        "Dəniz məhsulları və düyü ilə hazırlanan ənənəvi ispan yeməyi",
      price: 32,
      image: defaultavropa,
    },
    {
      id: 10,
      title: "Rizotto",
      description: "Kremli italyan düyü yeməyi",
      price: 23,
      image: defaultavropa,
    },
    {
      id: 11,
      title: "Lazanya",
      description: "Mal əti və pendir qatları ilə hazırlanmış lazanya",
      price: 26,
      image: defaultavropa,
    },
  ],

  meksikaSapora: [
    {
      id: 1,
      title: "Mal Ətli Fajita",
      description: "Mal əti, bibər və xüsusi Meksika sousları",
      price: 28,
      image: defaultmexican,
    },
    {
      id: 2,
      title: "Toyuqlu Fajita",
      description: "Toyuq filesi, bibər və xüsusi Meksika sousları",
      price: 24,
      image: defaultmexican,
    },
    {
      id: 3,
      title: "Qarışıq Tacos",
      description: "Ət və tərəvəzlərlə hazırlanmış Meksika takosu",
      price: 22,
      image: defaultmexican,
    },
    {
      id: 4,
      title: "Toyuqlu Ençilada",
      description: "Toyuq filesi və xüsusi sous ilə hazırlanmış ençilada",
      price: 24,
      image: defaultmexican,
    },
    {
      id: 5,
      title: "Burrito",
      description: "Ət, tərəvəz və souslarla doldurulmuş tortilla",
      price: 21,
      image: defaultmexican,
    },
    {
      id: 6,
      title: "Ribay Steyk",
      description: "Qril edilmiş premium ribay steyk",
      price: 39,
      image: defaultmexican,
    },
    {
      id: 7,
      title: "Klassik Steyk",
      description: "Qril edilmiş klassik mal əti steyki",
      price: 34,
      image: defaultmexican,
    },
  ],

  burgerler: [
    {
      id: 1,
      title: "Mal Ətli Burger",
      description: "Mal əti kotleti, pendir və tərəvəzlər",
      price: 18,
      image: defaultburger,
    },
    {
      id: 2,
      title: "Toyuq Burgeri",
      description: "Toyuq filesi, tərəvəzlər və xüsusi sous",
      price: 16,
      image: defaultburger,
    },
    {
      id: 3,
      title: "Sapora Çizburgeri",
      description: "Xüsusi pendirli Sapora burgeri",
      price: 19,
      image: defaultburger,
    },
    {
      id: 4,
      title: "Big Fantastik Burger",
      description: "İkiqat ətli böyük burger",
      price: 24,
      image: defaultburger,
    },
  ],
  // mixFast: [
  //   {
  //     id: 1,
  //     title: "Toyuq Naqetsləri",
  //     description: "Xırtıldayan toyuq nagetsləri",
  //     price: 12,
  //     image: defaultFoodImage,
  //   },
  //   {
  //     id: 2,
  //     title: "Mozzarella Çubuqları",
  //     description: "Əridilmiş mozzarella pendiri ilə hazırlanmış çubuqlar",
  //     price: 14,
  //     image: defaultFoodImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Soğan Halqaları",
  //     description: "Xırtıldayan qızardılmış soğan halqaları",
  //     price: 10,
  //     image: defaultFoodImage,
  //   },
  //   {
  //     id: 4,
  //     title: "Kartof Fri",
  //     description: "Qızardılmış kartof dilimləri",
  //     price: 8,
  //     image: defaultFoodImage,
  //   },
  //   {
  //     id: 5,
  //     title: "Toyuq Qanadları",
  //     description: "Ədviyyatlı və qızardılmış toyuq qanadları",
  //     price: 15,
  //     image: defaultFoodImage,
  //   },
  // ],
  drinks: [
    {
      id: 1,
      title: "Coconut Cacao Latte",
      description: "Espresso, süd, kakao və hindqozu notları",
      price: 6,
      image: cacanoud,
    },
    {
      id: 2,
      title: "Macadamia Latte",
      description: "Espresso, süd və makadamiya şərbəti",
      priceSmall: 6,
      priceMedium: 6.5,
      image: macadamya,
    },
    {
      id: 3,
      title: "Spanish Latte",
      description: "Espresso, süd və qatılaşdırılmış süd",
      priceSmall: 6,
      priceMedium: 6.5,
      image: spanis,
    },
    {
      id: 4,
      title: "White Chocolate Latte",
      description: "Espresso, süd və ağ şokolad sousu",
      priceSmall: 6,
      priceMedium: 6.5,
      image: vaitchooclate,
    },
    {
      id: 5,
      title: "Single Espresso",
      description: "Tək porsiya espresso",
      price: 3.5,
      image: singleespresso,
    },
    {
      id: 6,
      title: "Double Espresso",
      description: "İkiqat espresso",
      price: 4,
      image: doubleespresso,
    },
    {
      id: 7,
      title: "Espresso Macchiato",
      description: "Espresso və süd köpüyü",
      price: 4,
      image: espressomaciato,
    },
    {
      id: 8,
      title: "Lungo",
      description: "Uzadılmış espresso",
      price: 4,
      image: lungo,
    },
    {
      id: 9,
      title: "Flat White",
      description: "Espresso və mikroköpüklü süd",
      price: 5,
      image: flatwhite,
    },
    {
      id: 10,
      title: "Cortado",
      description: "Espresso və az miqdarda süd",
      price: 4,
      image: cortado,
    },
    {
      id: 11,
      title: "Americano",
      description: "Espresso və isti su",
      priceSmall: 4.9,
      priceMedium: 5.5,
      image: americano,
    },
    {
      id: 12,
      title: "Latte",
      description: "Espresso və süd",
      priceSmall: 5.7,
      priceMedium: 6.1,
      image: latte,
    },
    {
      id: 13,
      title: "Cappuccino",
      description: "Espresso, süd və süd köpüyü",
      priceSmall: 5.4,
      priceMedium: 6,
      image: cappuccino,
    },
    {
      id: 14,
      title: "Dark Mocha",
      description: "Tünd şokolad və espresso",
      price: 6.5,
      image: darkmokka,
    },
    {
      id: 15,
      title: "White Mocha",
      description: "Ağ şokolad və espresso",
      price: 6.5,
      image: whitemocka,
    },
    {
      id: 16,
      title: "Raf Coffee",
      description: "Qaymaqlı xüsusi raf qəhvəsi",
      price: 6.9,
      image: raffcofe,
    },
    {
      id: 17,
      title: "Salted Caramel Latte",
      description: "Espresso, süd və duzlu karamel",
      priceSmall: 6.1,
      priceMedium: 6.6,
      image: saltedcaramellatte,
    },

    {
      id: 18,
      title: "Iced Salted Caramel Latte",
      description: "Soyuq espresso, süd və duzlu karamel",
      price: 7.5,
      image: issaltedcaramel,
    },
    {
      id: 19,
      title: "Iced Salted Caramel Raf",
      description: "Soyuq raf qəhvəsi və duzlu karamel",
      price: 7.9,
      image: issaltedcaramelraff,
    },
    {
      id: 20,
      title: "Iced Americano",
      description: "Soyuq espresso və su",
      price: 5.5,
      image: isamericano,
    },
    {
      id: 21,
      title: "Iced Latte",
      description: "Soyuq espresso və süd",
      price: 6,
      image: islatte,
    },
    {
      id: 22,
      title: "Frappuccino",
      description: "Buzlu qəhvə əsaslı içki",
      price: 6.5,
      image: frappucino,
    },
    {
      id: 23,
      title: "Iced Mocha",
      description: "Soyuq şokoladlı qəhvə",
      price: 7.9,
      image: ismocca,
    },
    {
      id: 24,
      title: "Iced Raf Coffee",
      description: "Soyuq qaymaqlı raf qəhvəsi",
      price: 6.9,
      image: israfcofe,
    },
    {
      id: 25,
      title: "Affogato",
      description: "Dondurma üzərində espresso",
      price: 6.3,
      image: affacato,
    },

    {
      id: 26,
      title: "Vanilla Milkshake",
      description: "Vanil dondurması və süd",
      price: 6.7,
      image: vanillamilkseyk,
    },
    {
      id: 27,
      title: "Chocolate Milkshake",
      description: "Şokolad və süd",
      price: 6.7,
      image: sokalatmilkseyk,
    },
    {
      id: 28,
      title: "Caramel Milkshake",
      description: "Karamel və süd",
      price: 6.7,
      image: caramelmilkseyk,
    },
    {
      id: 29,
      title: "Strawberry Milkshake",
      description: "Çiyələk və süd",
      price: 6.7,
      image: strowberrylimonat,
    },
    {
      id: 30,
      title: "Banana Milkshake",
      description: "Banan və süd",
      price: 6.7,
      image: banamilkseyk,
    },
    {
      id: 31,
      title: "Snickers Milkshake",
      description: "Snickers və süd",
      price: 7,
      image: snikersmilkseyk,
    },

    {
      id: 32,
      title: "Tropical Lemonade",
      description: "Tropik meyvə qarışığı",
      price: 7,
      image: tropicallimonat,
    },
    {
      id: 33,
      title: "Passion Fruit Mango",
      description: "Manqo və marakuya",
      price: 7,
      image: pasionfrutmango,
    },
    {
      id: 34,
      title: "Strawberry Lemonade",
      description: "Çiyələk və limon",
      price: 7,
      image: strowberylimonat,
    },
    {
      id: 35,
      title: "Watermelon Mojito",
      description: "Qarpız, nanə və лайm",
      price: 5.9,
      image: vatermelon,
    },
  ],
  garnishes: [
    {
      id: 1,
      title: "Düyü Pilavı",
      description: "Ətirli düyü, kərə yağı və göyərti",
      price: 5,
      image: duyu,
    },

    {
      id: 2,
      title: "Qrildə Tərəvəz",
      description: "Badımcan, balqabaq, bibər və göbələk",
      price: 8,
      image: qrildeterezi,
    },

    {
      id: 3,
      title: "Al Dente Tərəvəz",
      description: "Buxarda hazırlanmış mövsümi tərəvəzlər",
      price: 7,
      image: aldenterevez,
    },

    {
      id: 4,
      title: "Kartof Dilimləri",
      description: "Ədviyyatlı soba kartofu",
      price: 6,
      image: almadilim,
    },

    {
      id: 5,
      title: "Fri Kartof",
      description: "Xırtıldayan qızardılmış kartof",
      price: 5,
      image: fri,
    },

    {
      id: 6,
      title: "Ratatouille",
      description: "Badımcan, balqabaq, pomidor və bibər qarışığı",
      price: 9,
      image: ratatoulli,
    },
  ],
};
