
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
  pts: 0,
  votes: 0,
  todo: [{ "title": "Bränn ner för Götgatsbacken utan händer", "score": 140, "link": "" }, { "title": "360 flat på en touring-hoj", "score": 50, "link": "" }, { "title": "Backflip", "score": 50, "link": "" }, { "title": "Line på spotet inne på Eriksdalsbadet", "score": 40, "link": "https://www.google.com/maps/dir//59.3050851,18.072501/@59.3050707,18.0731166,197m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Dubbelbar", "score": 20, "link": "" }, { "title": "X-Up railride", "score": 50, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner för 7steg", "score": 20, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Flytta händerna till fågelpinnen ner +1", "score": 5, "link": "" }, { "title": "Kör pusselbitarna", "score": 15, "link": "https://www.google.com/maps/dir//59.3393539,18.1016669/@59.3390584,18.1018652,161m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Nose drop nose på pusselbitarna", "score": 60, "link": "https://www.google.com/maps/dir//59.3393539,18.1016669/@59.3390584,18.1018652,161m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Nosemanual ET", "score": 30, "link": "" }, { "title": "Nose to Switchfoot Nose", "score": 30, "link": "" }, { "title": "Trick ner för trappan på 116", "score": 30, "link": "https://www.google.com/maps/dir//EttEttSex+Bike+Shop,+%C3%96stg%C3%B6tagatan,+Stockholm/@59.311803,18.0747265,1491m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x465f77f655be625f:0x66d019906922682d!2m2!1d18.075857!2d59.3156374!3e3" }, { "title": "Grinda ett räcke på skorna SOAPSHOES", "score": 100, "link": "" }, { "title": "Blindfolded bunnyhop upp för kant", "score": 100, "link": "" }, { "title": "Blindfolded halfcab upp för kant ", "score": 500, "link": "" }, { "title": "Streetline från Medis till Skanstull", "score": 30, "link": "" }, { "title": "Barspin i oartmoor", "score": 60, "link": "https://www.google.com/maps/dir//59.2983462,18.0618346/@59.2982428,18.062019,83m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Grinda en Sten", "score": 15, "link": "" }, { "title": "Två lines i samma klipp på olika sidor hammarbykanalen", "score": 20, "link": "" }, { "title": "Kickflip med Edward Cava Hands", "score": 30, "link": "" }, { "title": "Gula kicken på båten", "score": 90, "link": "https://www.google.com/maps/dir//59.3370293,18.0337943/@59.3370318,18.0335662,235m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Pegs hop over ner i vatten", "score": 75, "link": "" }, { "title": "Gör en backflip om nån frågar", "score": 50, "link": "" }, { "title": "Skjutsa random på styret", "score": 15, "link": "" }, { "title": "Vinn SM", "score": 500, "link": "" }, { "title": "Designboard tak gap, Hornstull", "score": 250, "link": "https://www.google.com/maps/dir//59.3146987,18.0323236/@59.3146432,18.0321613,96m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Fakie hop ner för trapp <= 3", "score": 10, "link": "" }, { "title": "Fakie hop ner för trapp <= 7", "score": 25, "link": "" }, { "title": "Fakie hop ner för trapp <= 12", "score": 50, "link": "" }, { "title": "Fakie hop ner för trapp <= INFINITY", "score": 200, "link": "" }, { "title": "Railhop sjöstan vid gröna ish", "score": 250, "link": "https://www.google.com/maps/dir//59.3072885,18.1123015/@59.3071913,18.1126958,395m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "540 flat", "score": 70, "link": "" }, { "title": "Olika trick i line, alla hoppen i Skogås dirten", "score": 50, "link": "" }, { "title": "Dubbel crankflip", "score": 70, "link": "" }, { "title": "Peg stal på trallväggen i Skogås", "score": 150, "link": "" }, { "title": "Trick ut för hopptornet i Tanto", "score": 80, "link": "https://www.google.se/maps/dir//59.3120811,18.0370099/@59.3122101,18.0392744,384m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "360 sergeltrappen", "score": 1500, "link": "" }, { "title": "Candy bar till grind", "score": 100, "link": "" }, { "title": "Trick på perrong i tunnelbanan ", "score": 100, "link": "" }, { "title": "Surfer/Seatstand manual", "score": 40, "link": "" }, { "title": "Manual runt hela stjärnan", "score": 80, "link": "https://www.google.com/maps/dir//59.3090721,18.0866161/@59.3091628,18.0857581,443m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "tjäna minst 50kr för en flatland-show på ett torg", "score": 200, "link": "" }, { "title": "Gap firecracker Medis kinktrapp", "score": 150, "link": "https://www.google.com/maps/dir//59.3090721,18.0866161/@59.3091628,18.0857581,443m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Skitcha en spårvagn", "score": 40, "link": "" }, { "title": "Droppa svampen", "score": 100, "link": "" }, { "title": "900 tailtap", "score": 50, "link": "" }, { "title": "Railride något i styrhöjd", "score": 50, "link": "" }, { "title": "Grind/Manual line alla Sveavägen curbs", "score": 80, "link": "" }, { "title": "Kör flottsbro freeride på bmx", "score": 100, "link": "" }, { "title": "Nollie Wallride", "score": 20, "link": "" }, { "title": "Hoppa Skogås eurogap till platt", "score": 80, "link": "" }, { "title": "Micheal droppa högre än styrhöjd", "score": 60, "link": "" }, { "title": "Trick på en båt", "score": 60, "link": "" }, { "title": "1 footed tailwhip", "score": 300, "link": "" }, { "title": "1 footed 360 flat", "score": 200, "link": "" }, { "title": "Droppa in i Rostbanken", "score": 60, "link": "https://www.google.com/maps/dir//59.3090721,18.0866161/@59.3091628,18.0857581,443m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Trick på gallret i stjärnan", "score": 40, "link": "https://www.google.com/maps/dir//59.3090721,18.0866161/@59.3091628,18.0857581,443m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "180 ner i vatten halfcab upp", "score": 80, "link": "" }, { "title": "Sickla Subbox", "score": 50, "link": "https://www.google.com/maps/dir//59.3049285,18.118431/@59.304683,18.1181879,111m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Railgap Kristinebergs IP", "score": 50, "link": "https://www.google.com/maps/dir//59.3356526,18.0046699/@59.3354803,18.0046617,171m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör sten utanför berns", "score": 20, "link": "https://www.google.com/maps/dir//59.3323165,18.0740396/@59.3322139,18.0739854,81m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Lakejump utanför berns", "score": 100, "link": "https://www.google.com/maps/dir//59.3323165,18.0740396/@59.3322139,18.0739854,81m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Jersybarrier Gullmarsplan", "score": 20, "link": "https://www.google.se/maps/dir//59.2990527,18.0818498/@59.2988369,18.0821613,215m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Hip gullmarsplan", "score": 20, "link": "https://www.google.se/maps/dir//59.2990527,18.0818498/@59.2988369,18.0821613,215m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Rail till Rail Musikhögskolan", "score": 200, "link": "https://www.google.se/maps/dir//59.3437282,18.0809581/@59.3418838,18.082789,938m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Line södercurben & trappen", "score": 50, "link": "https://www.google.se/maps/dir//59.3128595,18.0676921/@59.312812,18.0678155,93m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Bank rail bank Söder", "score": 50, "link": "https://www.google.se/maps/dir//59.3060372,18.0652394/@59.3063911,18.0648625,197m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Bank Långholmen", "score": 20, "link": "https://www.google.se/maps/dir//59.3200527,18.0309561/@59.3199902,18.0318395,384m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör QPn fridhemsplan ish", "score": 70, "link": "https://www.google.se/maps/dir//59.3270912,18.0120415/@59.3269917,18.011849,99m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Thorhildsplans railsen", "score": 20, "link": "https://www.google.se/maps/dir//59.3316946,18.0132613/@59.3314663,18.0138201,93m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Fakie götgatsbacken hela", "score": 300, "link": "" }, { "title": "Octopharma banks", "score": 50, "link": "https://www.google.se/maps/dir//59.3380217,18.0048357/@59.3373523,18.0070642,322m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Stadshagen curbs/waves", "score": 30, "link": "https://www.google.se/maps/dir//59.3398173,18.0044912/@59.3392939,18.0052287,332m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Line snakerun", "score": 50, "link": "https://www.google.se/maps/dir//59.3404486,18.011629/@59.3398742,18.0110297,287m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör Tims kinkräcke", "score": 50, "link": "https://www.google.se/maps/dir//59.3406684,18.0094769/@59.3403091,18.0094735,171m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör Stadshagen räcket", "score": 30, "link": "https://www.google.se/maps/dir//59.3372518,18.0158279/@59.3371311,18.0157691,74m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör Stgörans outledge", "score": 75, "link": "https://www.google.se/maps/dir//59.3346773,18.023442/@59.3343391,18.0211071,591m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör Fridhemsplans curbsen", "score": 50, "link": "https://www.google.se/maps/dir//59.3321903,18.0236124/@59.3321348,18.0240843,176m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör C-räcket på Fridhemsplan", "score": 50, "link": "https://www.google.se/maps/dir//59.3322756,18.033501/@59.3320934,18.0335691,176m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Line På Skolan", "score": 30, "link": "https://www.google.se/maps/dir//59.3326578,18.028251/@59.3322468,18.0278913,296m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Bodybagga tim", "score": 300, "link": "https://www.google.se/maps/dir//59.3297496,18.0256015/@59.3295557,18.0258668,249m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Nosebonk Rail", "score": 200, "link": "https://www.google.se/maps/dir//59.3313805,17.9992264/@59.3312519,17.9993927,789m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Ledge Fridhemsplan", "score": 20, "link": "https://www.google.se/maps/dir//59.3326993,18.0473775/@59.3325793,18.0471059,99m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gör nått på gamla sommar", "score": 20, "link": "https://www.google.se/maps/dir//59.3333283,18.0483794/@59.3330769,18.0479339,166m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kungsbron ledge", "score": 30, "link": "https://www.google.se/maps/dir//59.3323797,18.0516605/@59.3323739,18.0515807,99m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Casino Ledge", "score": 150, "link": "https://www.google.se/maps/dir//59.333083,18.054303/@59.3330637,18.0544381,59m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Flatrail när stadshuset", "score": 20, "link": "https://www.google.se/maps/dir//59.3273764,18.0384285/@59.3273499,18.0393285,332m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Stadshus ledgen", "score": 500, "link": "https://www.google.se/maps/dir//59.327168,18.0559226/@59.3271508,18.0540529,332m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Stadshuset wallride", "score": 70, "link": "https://www.google.se/maps/dir//59.3278365,18.0547904/@59.3275249,18.0538032,235m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör subboxen under bron", "score": 150, "link": "https://www.google.se/maps/dir//59.3298735,18.0530375/@59.3295623,18.0531988,166m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Curved wallride Nära stadshuset", "score": 50, "link": "https://www.google.se/maps/dir//59.3284646,18.0583003/@59.3280828,18.0581152,395m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Curved wallride centralstationen", "score": 30, "link": "https://www.google.se/maps/dir//59.3284921,18.0604749/@59.3284306,18.0597874,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Rutschkanan I draken", "score": 30, "link": "https://www.google.se/maps/dir//59.314655,18.0405164/@59.3141698,18.0402412,287m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör det här spottet", "score": 100, "link": "https://www.google.se/maps/dir//59.3164367,18.0316414/@59.3164032,18.0317042,102m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Högalidspark Pumptrack", "score": 20, "link": "https://www.google.se/maps/dir//59.3177527,18.0345319/@59.3175035,18.0346486,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gör inte bara en double peg", "score": 250, "link": "https://www.google.se/maps/dir//59.3101397,18.0491731/@59.3100974,18.0492526,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sös bänkar", "score": 20, "link": "https://www.google.se/maps/dir//59.3101286,18.0560371/@59.3101118,18.0563654,108m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Addes Wallride", "score": 250, "link": "https://www.google.se/maps/dir//59.3104242,18.0579243/@59.3103765,18.0579468,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör DethMetal Ledgen", "score": 100, "link": "https://www.google.se/maps/dir//59.3137111,18.0960813/@59.3138035,18.0958036,197m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Railhop Skolan i sjöstad", "score": 300, "link": "https://www.google.se/maps/dir//59.3053216,18.1080779/@59.3051697,18.1080883,81m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sjöstads subbox", "score": 20, "link": "https://www.google.se/maps/dir//59.304769,18.1078765/@59.3049327,18.1082313,228m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sjöstads tolv trapp", "score": 50, "link": "https://www.google.se/maps/dir//59.3082651,18.1041341/@59.3081825,18.1042178,117m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sjöstad vågor grej", "score": 20, "link": "https://www.google.se/maps/dir//59.3109293,18.1028376/@59.3108635,18.1027924,121m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Addes roofgap", "score": 150, "link": "https://www.google.se/maps/dir//59.3062711,18.0955328/@59.3060586,18.0950027,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sofia Räcket", "score": 500, "link": "https://www.google.se/maps/dir//59.3117946,18.0937022/@59.3116847,18.0937866,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Shitty curbs", "score": 10, "link": "https://www.google.se/maps/dir//59.3064636,18.0830459/@59.3062767,18.0832973,128m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Shitty Rail", "score": 500, "link": "https://www.google.se/maps/dir//59.3064636,18.0830459/@59.3062767,18.0832973,128m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Wallridea Karl X Gustav", "score": 200, "link": "https://www.google.se/maps/dir//59.32938,18.0945855/@59.3292653,18.0945564,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Whippa banken och bodybagga tim", "score": 50, "link": "https://www.google.se/maps/dir//59.3248013,18.0980444/@59.3247696,18.0980667,70m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Bänkarna vid djurgården", "score": 20, "link": "https://www.google.se/maps/dir//59.3315322,18.0944984/@59.3314344,18.0944448,161m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Nosebonk rail v2", "score": 100, "link": "https://www.google.se/maps/dir//59.3333341,18.0987253/@59.33323,18.0987551,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör det här spottet v2", "score": 150, "link": "https://www.google.se/maps/dir//59.3358935,18.0941684/@59.3359257,18.0937996,197m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gör nått schysst på Armemuseet", "score": 100, "link": "https://www.google.se/maps/dir//59.3347301,18.0802382/@59.3346647,18.0805373,161m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gör nått schysst på kungliga dramaten", "score": 50, "link": "https://www.google.se/maps/dir//59.3330343,18.0767001/@59.3328531,18.076562,197m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gapa ut över kedjan till platt", "score": 200, "link": "https://www.google.se/maps/dir//59.3337098,18.0902903/@59.3337945,18.0900116,76m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "kör nåt på bankvarianten", "score": 50, "link": "https://www.google.se/maps/dir//59.3443751,18.096043/@59.3439523,18.0965007,215m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "kör trappen eller räcket på Ö-malms IP", "score": 70, "link": "https://www.google.se/maps/dir//59.3462721,18.0832291/@59.3460681,18.0837474,512m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Svenska El-toro", "score": 500, "link": "https://www.google.se/maps/dir//59.3464513,18.0834676/@59.34652,18.0838671,117m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Outledgen", "score": 50, "link": "https://www.google.se/maps/dir//59.3426276,18.0862693/@59.3425949,18.0863805,81m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Grinda outledgen i värtan", "score": 50, "link": "https://www.google.se/maps/dir//59.3410034,18.1222144/@59.3407503,18.1219596,395m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gapa från outledgen över parkeringsstaketet", "score": 200, "link": "https://www.google.se/maps/dir//59.3410034,18.1222144/@59.3407503,18.1219596,395m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Globen Ledge/Trapp", "score": 100, "link": "https://www.google.se/maps/dir//59.2946866,18.0802298/@59.2947133,18.0802532,60m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Konstigt spot Kör Globen", "score": 20, "link": "https://www.google.se/maps/dir//59.2938925,18.0811128/@59.2937273,18.0813463,166m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Runda Staty Grej Globen", "score": 30, "link": "https://www.google.se/maps/dir//59.2922368,18.0833681/@59.2923618,18.083396,117m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Railhop Slaktis", "score": 150, "link": "https://www.google.se/maps/dir//59.2918835,18.0741711/@59.2919115,18.0742626,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Kör Slaktis elbox/curved Curb", "score": 50, "link": "https://www.google.se/maps/dir//59.2910931,18.0805496/@59.2910112,18.0808855,99m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Mike Jonas Droppa nått Högt (Nollie Bonk)", "score": 100, "link": "" }, { "title": "Wallride/Dropp Slaktis", "score": 50, "link": "https://www.google.se/maps/dir//59.2896946,18.0771076/@59.2895486,18.0771824,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "LedgeRidea Globel Ledgen (På Riktigt)", "score": 5000, "link": "https://www.google.se/maps/dir//59.2899364,18.0851174/@59.2899585,18.0852325,136m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sesha Svenneberkas torg", "score": 200, "link": "https://www.google.se/maps/dir//59.289788,18.0856795/@59.2897829,18.0858941,114m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "WSP Ledgen", "score": 100, "link": "https://www.google.se/maps/dir//59.2967442,18.0809498/@59.2966342,18.0809702,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gap Fire Cracker", "score": 300, "link": "https://www.google.se/maps/dir//59.2966096,18.0805741/@59.2965499,18.0807984,49m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Globen bank", "score": 20, "link": "https://www.google.se/maps/dir//59.2969034,18.0829884/@59.2967945,18.0833706,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Bodybagga prim Gap Ledge Där inne", "score": 1000, "link": "https://www.google.se/maps/dir//59.2975251,18.0824806/@59.2976148,18.082667,198m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Trippel pegchink en trapp", "score": 150, "link": "" }, { "title": "Ta dig igenom Kungstädskården plaskdam", "score": 100, "link": "" }, { "title": "Gör en ola självmord", "score": 100, "link": "https://www.youtube.com/watch?v=Qklc2_AyXC0" }, { "title": "Västra skogen kinken", "score": 500, "link": "https://www.google.se/maps/dir//59.3480756,18.002966/@59.3465558,18.01033,1366m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Norrtull spotet", "score": 50, "link": "https://www.google.se/maps/dir//59.348121,18.0368561/@59.3471625,18.0351987,287m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Spöa jocke olsson i en Game of bike", "score": 500, "link": "" }, { "title": "Gör ett trick på essingeleden", "score": 100, "link": "" }, { "title": "Cykla i södertälje", "score": 100, "link": "" }, { "title": "Fakie nosemanual ner för qp", "score": 500, "link": "" }],
  completed: [],
  otherTodo: [{ "title": "Drick 5st white russians på 10 min.", "score": 80, "link": "https://www.google.com/maps/place/Lion+Bar+%C3%96stg%C3%B6tagatan/@59.3156262,18.0761275,15z/data=!4m2!3m1!1s0x0:0xd0903b46fb02871a?sa=X&ved=2ahUKEwjAud66-IDmAhVOpYsKHaz9A5MQ_BIwCnoECA4QCA" }, { "title": "Håll en öl med fötterna och mata en polare", "score": 15, "link": "" }, { "title": "5 ciggflips i rad", "score": 15, "link": "" }, { "title": "Duscha i bubbel", "score": 50, "link": "" }, { "title": "Drick en öl på systemet", "score": 100, "link": "" }, { "title": "Ölen på systemet var en 10,2%", "score": 15, "link": "" }, { "title": "Torn av ölglas från bord till tak på Mira Bar", "score": 50, "link": "https://www.google.com/maps/place/Lion+Bar+%C3%96stg%C3%B6tagatan/@59.3156262,18.0761275,15z/data=!4m2!3m1!1s0x0:0xd0903b46fb02871a?sa=X&ved=2ahUKEwjAud66-IDmAhVOpYsKHaz9A5MQ_BIwCnoECA4QCA" }, { "title": "Dödsmetall", "score": 15, "link": "" }, { "title": "Street line på elscooter", "score": 15, "link": "" }, { "title": "Planka in och bada på Eriksdalsbadet", "score": 40, "link": "" }, { "title": "Vänd-tia Mästare", "score": 30, "link": "" }, { "title": "Käka ett packet Mentos Mint och drick 1,5L Cola Light", "score": 60, "link": "" }, { "title": "Färga håret grönt, får inte tvättas ur på hela helgen", "score": 40, "link": "" }, { "title": "Kundvagn ner, medis-trappen, ingen håller i.", "score": 50, "link": "https://www.google.com/maps/dir/Mira+Bar+Medborgarplatsen,+%C3%96stg%C3%B6tagatan+27,+116+25+Stockholm/59.3147931,18.0695896/@59.3147412,18.0695017,68m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x465f77ef28ae0325:0xd0903b46fb02871a!2m2!1d18.0761275!2d59.3156262!1m0!3e3" }, { "title": "2p dricker upp en flaska Små Sura Grön på 2 min", "score": 30, "link": "" }, { "title": "Promota AIK på Gröne Jägaren", "score": 20, "link": "https://www.google.com/maps/dir//Den+Gr%C3%B6ne+J%C3%A4garen/@59.3136906,18.0733944,279m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x465f77f0840a84f7:0x82bab3a5f70385e5!2m2!1d18.0735969!2d59.3134272!3e3" }, { "title": "Skicka 2p på 12h kryssning", "score": 1000, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Hoppa mellan 2 plan på båten", "score": 300, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Ragga upp en rökkärring på båten", "score": 100, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Karaoke på Färjan", "score": 100, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Drick en platt orginal på färjan", "score": 100, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Dra på fest i nån annans kabin", "score": 500, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Hångla upp en anställd på båten", "score": 500, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Kör armbrytning med en finne", "score": 500, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Middags buffe men ta bara bärs", "score": 500, "link": "https://www.google.com/maps/dir//%C3%85land+Islands/@58.131908,14.0486455,1625439m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x468ae468c4e1eb19:0xcd43f68373428eed!2m2!1d19.9156105!2d60.1785247!3e3" }, { "title": "Karaoke på karaoke-klubben i Råggan", "score": 100, "link": "https://www.google.com/maps/dir//R%C3%A5gsved's+Pub,+Sk%C3%B6llerstagatan+6,+124+66+Bandhagen/@59.2600559,18.0254004,111m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x465f7742bd1ec493:0xfd57c6e42fb516a3!2m2!1d18.0256636!2d59.2602606!3e3" }, { "title": "Happy ending på Thai massage(utan att be om det)", "score": 200, "link": "" }, { "title": "Best Highscore Hotline Flip Simulator", "score": 90, "link": "" }, { "title": "Muta valerio till en frontflip", "score": 30, "link": "" }, { "title": "Drick en platta bärs i gummibåt/pool", "score": 90, "link": "" }, { "title": "Fånga dagen", "score": 15, "link": "" }, { "title": "Pierca ögonbrynet, ha hela helgen", "score": 200, "link": "" }, { "title": "surfa biltak i minst 50km/h", "score": 100, "link": "" }, { "title": "få en random tjej att visa brösten", "score": 200, "link": "" }, { "title": "stoppa upp en isglass i röven", "score": 100, "link": "" }, { "title": "skicka dic-pic till Jocke Olsson", "score": 100, "link": "tel: +46739227752" }, { "title": "Käka 500ml Bea med sked", "score": 200, "link": "" }, { "title": "Bli tagen av Vakt/Polis", "score": 200, "link": "" }, { "title": "1p är 6st Campechana på La neta", "score": 100, "link": "https://www.google.com/maps/dir/59.3228841,17.9938261/La+Neta+S%C3%B6der,+%C3%96stg%C3%B6tagatan+12B,+116+25+Stockholm/@59.3120027,17.9673802,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465f77fa53b2be5d:0x8512e8f020485d3c!2m2!1d18.075587!2d59.316167" }, { "title": "Dra förbi en uteservering sno en bärs", "score": 150, "link": "" }, { "title": "Torn med 7st ölglasflaskor", "score": 80, "link": "" }, { "title": "Ät en cigg", "score": 60, "link": "" }, { "title": "Slicka en persons båda pungkulor", "score": 200, "link": "" }, { "title": "Vinn över Vilda Väsby i ölhivartävling", "score": 50, "link": "" }, { "title": "Flippa med en VOI", "score": 300, "link": "" }, { "title": "Droppa in, varv runt, trick ut med en Wheels i björns", "score": 200, "link": "" }, { "title": "Gå på KTH fest", "score": 150, "link": "https://www.google.com/maps/dir//59.3477396,18.0723631/@59.3472175,18.0700644,1116m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Riv ett innertak", "score": 80, "link": "" }, { "title": "Hitta OP", "score": 1000, "link": "https://www.facebook.com/OProgrammerad/photos/?ref=page_internal" }, { "title": "Köp en Hotline-Ram på 116", "score": 1500, "link": "" }, { "title": "Dra en line med Micke P", "score": 2000, "link": "https://stoppapressarna.se/sites/default/files/styles/flexslider_full/public/artikelalbum/persbrandt_hot_stor8_0.jpg" }, { "title": "Dra en grossistfrulle", "score": 150, "link": "https://www.google.com/maps/dir//59.2903952,18.0592413/@59.2922427,18.0602608,1329m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Skateboard downhill vitan", "score": 100, "link": "" }, { "title": "Flykicka och sno ölen av nån", "score": 50, "link": "" }, { "title": "Dunka plåt längs Sveavägen", "score": 80, "link": "" }, { "title": "Klunka en vinare i en kanot vid Djurgården", "score": 250, "link": "" }, { "title": "Sno en platta redbull från 116", "score": 100, "link": "" }, { "title": "Lämna in cykel på service på 116", "score": 30, "link": "" }, { "title": "3p äter 3L glass på 15 min", "score": 60, "link": "" }, { "title": "Hitta ett nytt spot i Stockholm (dubbelkolla med Oliver)", "score": 200, "link": "" }, { "title": "Gå på grönalund", "score": 1000, "link": "" }, { "title": "Slå Isak Westher bara om han inte är skön", "score": 1000, "link": "" }, { "title": "Knäck en berka på Svenneberkas torg", "score": 100, "link": "https://www.google.se/maps/dir//59.289788,18.0856795/@59.2897829,18.0858941,114m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Parkour Line", "score": 50, "link": "" }, { "title": "Drick en bärs på skinnis (Fråga nån på gatan var de ligger)", "score": 150, "link": "" }, { "title": "Hamna på sös", "score": 300, "link": "" }, { "title": "Gå högvakten med grabbarna på slottet", "score": 500, "link": "https://www.google.se/maps/dir//59.3271454,18.0728918/@59.3261905,18.0727268,279m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Hitta knugen", "score": 1000, "link": "" }, { "title": "Gå in i riksdagen", "score": 100, "link": "https://www.google.se/maps/dir//59.3275456,18.0677728/@59.3263246,18.0704698,558m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Sula Livet", "score": 10, "link": "" }, { "title": "Sälen ner för rulltrappan vid central station", "score": 300, "link": "https://www.google.se/maps/dir//59.3311987,18.0572981/@59.3308703,18.057006,166m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Dra en kik på guldbron", "score": 15, "link": "" }, { "title": "Grinda WasaSkeppet", "score": 200, "link": "" }, { "title": "Ta några schyssta piller på ett rave", "score": 150, "link": "" }, { "title": "Rulla in på en hotellfrukost", "score": 50, "link": "" }, { "title": "Spela ett bord på Blackjack", "score": 100, "link": "" }, { "title": "Vinn 1000kr på grodjakten", "score": 100, "link": "" }, { "title": "Ät en billys burgare (fråga tate om recept)", "score": 50, "link": "" }, { "title": "Köp en limpa cigg av ciggmannen", "score": 100, "link": "https://www.google.se/maps/dir//59.3149516,18.0764535/@59.3150644,18.0767522,140m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Muta Erik Lindgren att göra ett uppdrag åt er", "score": 200, "link": "" }, { "title": "Dra en morgonsupen på sjättetunnan eller mjöd", "score": 50, "link": "https://www.google.se/maps/dir//Sj%C3%A4tte+Tunnan/@59.3233159,18.0705211,279m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x465f77e2fcf6e625:0x42bb3691fc5ba30f!2m2!1d18.070695!2d59.3234866!3e3" }, { "title": "Åk Skyview i globen", "score": 80, "link": "" }, { "title": "Festa i haninge", "score": 500, "link": "" }, { "title": "Bygg ett spot", "score": 50, "link": "" }, { "title": "Köp material till att bygga ett spot", "score": 100, "link": "" }, { "title": "Ha Powertools till att bygga ett spot", "score": 200, "link": "" }, { "title": "Bygg ett spot från ikeamöbler", "score": 150, "link": "" }, { "title": "Åk epatraktor", "score": 50, "link": "" }, { "title": "Bada från Thaibåten", "score": 50, "link": "https://www.google.se/maps/dir//ThaiBoat/@59.3066099,18.0812185,3159m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x465f781e28b11dd3:0xbfdfa83ab8ef2a91!2m2!1d18.0816976!2d59.3044323!3e3" }, { "title": "Ta en bira på Bandhagen Pub", "score": 300, "link": "https://www.google.se/maps/dir//59.2699731,18.0487457/@59.2699522,18.0493284,99m/data=!3m1!1e3!4m2!4m1!3e3" }, { "title": "Gymma topless med cykeln som vikt offentligt", "score": 50, "link": "" }, { "title": "Byt en cigg mot en sprit", "score": 100, "link": "" }, { "title": "Drick en platta groggar på en kväll 1p", "score": 200, "link": "" }, { "title": "Gör en meme och få mer än 100 upvotes på reddit", "score": 1000, "link": "" }, { "title": "Få en kändis att posta en bild/video på dig/er", "score": 500, "link": "" }, { "title": "Sov över på en tunnelbane station", "score": 300, "link": "" }, { "title": "Sätt en cigg i peggen direkt efter att ha rökt den", "score": 500, "link": "" }, { "title": "Låtsas vara civvare och stanna nån (snälla säg att ni är från tunnelbanan programmet)", "score": 200, "link": "" }, { "title": "Gör en sån här", "score": 50, "link": "https://www.youtube.com/watch?v=ofV_iFBw2YE" }],
  othercompleted: [],
  anotherTodo: [
    { "title": "Spya", "score": 200, "count": 0 },
    { "title": "test1", "score": 50, "count": 0 },
    { "title": "test2", "score": 75, "count": 0 },
  ],
  anothercompleted: [{ "title": "Lyckan är grunden", "a": "Bantus Jon", "b": "Bulan", "c": "Tate", "completed": false, "ans": "" }, { "title": "Brandsläckar slagsmål", "a": "Prim", "b": "Love Hedström", "c": "Olla", "completed": false, "ans": "" }, { "title": "Flykick Bullseye", "a": "Hahne", "b": "Dahlström", "c": "Helmersson", "completed": false, "ans": "" }, { "title": "Hur många cm goding tog Dennis?", "a": "7cm", "b": "15cm", "c": "Hela", "completed": false, "ans": "" }, { "title": "Vart ligger dödskentas bar", "a": "Söder", "b": "Västerhaninge", "c": "Rönninge", "completed": false, "ans": "" }, { "title": "Vem droppade svampen och rullade ur?", "a": "Danny Saucedo", "b": "Hotline Tim", "c": "Love Hedström", "completed": false, "ans": "" }, { "title": "Vart är jag?", "a": "Döds Kenta", "b": "John Bös", "c": "Lugge", "completed": false, "ans": "" }, { "title": "Bubbel i badet", "a": "Tim Sjöholm", "b": "BubbelTim", "c": "Hotline Tim", "completed": false, "ans": "" }, { "title": "Norrlandstrucken", "a": "Kevin Vetohue", "b": "Jesper Stern", "c": "Matte Saarinen", "completed": false, "ans": "" }, { "title": "Jag bröt footen ", "a": "Oliver Jonasson", "b": "Göteborgs-Tobbe", "c": "AlfredXD", "completed": false, "ans": "" }]
};

var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

var infoMD = '<span class="material-icons">info</span >';

renderTodoList();


function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  createCounter('pts');
  createCounter('vts')

  initData('todo', data.todo);
  initData('todo', data.completed, true);
  initData('otherTodo', data.otherTodo);
  initData('otherTodo', data.othercompleted, true);
  initData('anotherTodo', data.anotherTodo);
  initQuizData('quiz', data.anothercompleted);

}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function createCounter(id) {

  var newID = id === 'pts' ? "POINT" : "VOTES";

  var counter = document.getElementById(id);
  var text = document.createElement('div');
  text.id = newID;
  text.innerText = id === 'pts' ? data.pts : Math.floor(data.pts / 3000);
  counter.insertBefore(text, counter.childNodes[0]);
}

function getindexOfThis(value, data) {
  for (i = 0; i < data.length; i++) {
    if (value === data[i]["title"])
      return i;
  }
  return 0;
}

function initQuizData(id, data) {
  for (i = 0; i < data.length; i++) {
    var task = data[i]["title"];
    var a = data[i]["a"];
    var b = data[i]["b"];
    var c = data[i]["c"];
    var done = data[i]["completed"];
    var ans = data[i]["ans"];
    addQuizItemToDOM(id, task, a, b, c, done, ans);
  }
}

function initData(id, data, completed) {
  for (i = 0; i < data.length; i++) {
    var task = data[i]["title"];
    var points = data[i]["score"];
    var link = data[i]["link"] != null ? data[i]["link"] : "";
    var count = data[i]["count"] != null ? data[i]["count"] : 0;
    addItemToDOM(count, id, task, points, completed, link);
  }
}

function dataCompleter(value, id) {

  var target;
  var origin;
  var goto;
  var multiplier = 1;

  if (id === 'todo') {
    target = document.getElementById('completed');
    var origin = data.todo;
    var goto = data.completed;
  }
  else if (id === 'otherTodo') {
    target = document.getElementById('otherCompleted');
    var origin = data.otherTodo;
    var goto = data.othercompleted;
  }
  else if (id === 'anotherTodo') {
    target = document.getElementById('anotherCompleted');
    var origin = data.anotherTodo;
    var goto = data.anothercompleted;
  }
  else if (id === 'completed') {
    multiplier = -1;
    target = document.getElementById('todo');
    var origin = data.completed;
    var goto = data.todo;
  }
  else if (id === 'otherCompleted') {
    multiplier = -1;
    target = document.getElementById('otherTodo');
    var origin = data.othercompleted;
    var goto = data.otherTodo;
  }
  else if (id === 'anotherCompleted') {
    multiplier = -1;
    target = document.getElementById('anotherTodo');
    var origin = data.anothercompleted;
    var goto = data.anotherTodo;
  }

  var index = getindexOfThis(value, origin);
  data.pts += origin[index]["score"] * multiplier;
  goto.push(origin[index])
  origin.splice(index, 1);

  data.votes = Math.floor(data.pts / 3000)
  dataObjectUpdated();

  return target;
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var value = item.text
  var parent = item.parentNode;
  var id = parent.id;
  if (id === 'anotherTodo') {
    var index = getindexOfThis(value, data.anotherTodo)
    multiplier = this.innerText === "-" ? -1 : 1;
    if (multiplier === -1 & data.anotherTodo[index]["count"] === 0)
      return;

    data.pts += data.anotherTodo[index]["score"] * multiplier;
    data.anotherTodo[index]["count"] += multiplier;

    data.votes = Math.floor(data.pts / 3000)
    dataObjectUpdated();

    document.getElementById("COUNTER" + data.anotherTodo[index]["title"]).innerText = data.anotherTodo[index]["count"];
    document.getElementById("POINT").innerText = data.pts;
    document.getElementById("VOTES").innerText = data.votes;
  }
  else {
    target = dataCompleter(value, id);
    document.getElementById("POINT").innerText = data.pts;
    document.getElementById("VOTES").innerText = data.votes;

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
  }
}

// Adds a new item to the todo list
function addItemToDOM(counter, id, text, points, completed, link) {
  var list;
  if (id === 'todo')
    list = (completed) ? document.getElementById('completed') : document.getElementById('todo');
  else if (id === 'otherTodo')
    list = (completed) ? document.getElementById('otherCompleted') : document.getElementById('otherTodo');
  else if (id === 'anotherTodo')
    list = (completed) ? document.getElementById('anotherCompleted') : document.getElementById('anotherTodo');


  var item = document.createElement('li');
  item.innerText = text;
  item.text = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var ptstext = document.createElement('button');
  ptstext.innerText = points;

  var infoText = document.createElement('button');
  if (link != "") {

    infoText.classList.add("fa", "fa-info-circle", "fa-6");

    infoText.onclick = function () { window.open(link, '_blank'); };
  }

  buttons.appendChild(infoText);
  buttons.appendChild(ptstext);

  var complete = document.createElement('button');
  if (id === 'anotherTodo') {
    var minus = document.createElement('button');
    minus.classList.add('ticks');
    complete.classList.add('ticks');
    minus.innerText = "-";
    minus.addEventListener('click', completeItem);
    buttons.appendChild(minus);
    complete.innerHTML = "+";
    complete.addEventListener('click', completeItem);
    buttons.appendChild(complete);
    var count = document.createElement('button');
    count.id = "COUNTER" + text;
    count.innerText = counter;
    buttons.appendChild(count);
  }
  else {
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;
    complete.addEventListener('click', completeItem);
    buttons.appendChild(complete);
  }

  item.appendChild(buttons);


  list.insertBefore(item, list.childNodes[0]);
}

function checkAnswer(q, ans, correct, btn) {

  index = getindexOfThis(q, data.anothercompleted);
  var done = data.anothercompleted[index]["completed"];
  if (done)
    return;
  data.anothercompleted[index]["completed"] = true;
  if (ans === correct) {
    data.pts += 10;
    btn.classList.add('correct');
    data.anothercompleted[index]["ans"] = ans;
  }
  else {
    btn.classList.add('incorrect');
    data.anothercompleted[index]["ans"] = ans;
  }

  var allCompletedAndAllCorrect = true;
  for (i = 0; i < data.anothercompleted.length; i++) {
    if (!data.anothercompleted[i]["completed"] || data.anothercompleted[i]["ans"] != data.anothercompleted[i]["c"])
      allCompletedAndAllCorrect = false;
  }
  if (allCompletedAndAllCorrect)
    data.pts += 500;

  data.votes = Math.floor(data.pts / 3000)
  dataObjectUpdated();

  document.getElementById("POINT").innerText = data.pts;
  document.getElementById("VOTES").innerText = data.votes;
}

function addQuizItemToDOM(id, text, a, b, c, done, answered) {

  var list = document.getElementById('anotherCompleted');

  var item = document.createElement('li');
  item.innerText = text;
  item.text = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var ans = [a, b, c];
  ans = ans.sort(() => Math.random() - 0.5);

  var complete = document.createElement('button');
  complete.innerText = ans[0];
  complete.classList.add('quiz');
  if (done && answered === c && ans[0] === c)
    complete.classList.add('correct');
  else if (done && answered === ans[0])
    complete.classList.add('incorrect');
  complete.onclick = function () { checkAnswer(text, ans[0], c, complete); };
  buttons.appendChild(complete);

  var complete2 = document.createElement('button');
  complete2.innerText = ans[1];
  complete2.classList.add('quiz');
  if (done && answered === c && ans[1] === c)
    complete2.classList.add('correct');
  else if (done && answered === ans[1])
    complete2.classList.add('incorrect');
  complete2.onclick = function () { checkAnswer(text, ans[1], c, complete2); };
  buttons.appendChild(complete2);

  var complete3 = document.createElement('button');
  complete3.innerText = ans[2];
  complete3.classList.add('quiz');
  if (done && answered === c && ans[2] === c)
    complete3.classList.add('correct');
  else if (done && answered === ans[2])
    complete3.classList.add('incorrect');
  complete3.onclick = function () { checkAnswer(text, ans[2], c, complete3); };
  buttons.appendChild(complete3);

  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
