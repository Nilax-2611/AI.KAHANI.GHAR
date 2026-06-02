/* ==========================================================================
   AI.KAHANI.GHAR Interactive Application Logic
   ========================================================================== */

// --- 1. Story Database (हिंदी कहानियों का संग्रह) ---
const storiesDatabase = [
    {
        id: "horror-fort",
        title: "लाल किले का अदृश्य रखवाला",
        titleEn: "The Invisible Guard of Red Fort",
        genre: "horror",
        genreHindi: "👻 रहस्य और डर",
        genreHindiEn: "👻 Mystery & Horror",
        length: "5 मिनट",
        lengthEn: "5 mins",
        views: "120K+",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
        excerpt: "दिल्ली के लाल किले के नीचे एक ऐसा तहखाना है जिसे मुगलों ने कभी सील कर दिया था। सालों बाद जब पुरातत्व विभाग की टीम वहाँ पहुँची, तो उन्हें पता चला कि वह अकेला नहीं था...",
        excerptEn: "Deep underneath the historic Delhi Red Fort lies a sealed Mughal chamber. Years later, when archeologists opened it, they realized they were not alone...",
        content: [
            "रात के बारह बज चुके थे। दिल्ली का ऐतिहासिक लाल किला चाँदनी रात के सन्नाटे में डूबा हुआ था। पुरातत्ववेत्ता विक्रम और उनकी सहयोगी माया किले के उस हिस्से में खड़े थे, जो पर्यटकों के लिए हमेशा बंद रहता है। उनके सामने एक पुराना लोहे का दरवाज़ा था, जिस पर रहस्यमयी अरबी और संस्कृत में कुछ मंत्र लिखे हुए थे।",
            "विक्रम ने भारी ताले को छुआ। 'माया, क्या तुम तैयार हो? इतिहास की यह सबसे बड़ी खोज हो सकती है। लाल किले का यह गुप्त कक्ष आज से पहले कभी नहीं खोला गया।' माया ने सहमी हुई आँखों से सिर हिलाया। जैसे ही विक्रम ने ताला काटा, दरवाज़ा एक भयानक चरमराहट के साथ खुल गया। अंदर एक लंबी सीढ़ी नीचे अँधेरे पाताल की ओर जा रही थी।",
            "वे अपनी टॉर्च जलाकर नीचे उतरने लगे। हवा इतनी ठंडी थी कि उनके मुँह से भाप निकल रही थी। जब वे आखिरी सीढ़ी पर पहुँचे, तो उनकी आँखें खुली की खुली रह गईं। वहाँ एक विशाल तिजोरी थी, जो सोने और हीरों से नहीं, बल्कि प्राचीन पांडुलिपियों से भरी हुई थी। लेकिन तिजोरी के सामने एक जलता हुआ दीया रखा था। विक्रम हैरान था, 'सैकड़ों सालों से बंद कमरे में दीया कैसे जल सकता है?'",
            "तभी, उनके पीछे का दरवाज़ा अचानक ज़ोर से बंद हो गया! टॉर्च की रोशनी थरथराने लगी। दीवारों पर एक विशाल साया उभर आया। वह एक साया नहीं, बल्कि एक योद्धा की परछाई थी जिसके हाथ में तलवार थी। एक गूँजती हुई भारी आवाज़ आई, 'तुमने सीमा लाँघी है, नश्वर जीवों! इस किले की गुप्त विद्या को छूने का दुस्साहस मत करो!'",
            "माया डर के मारे घुटनों पर बैठ गई। विक्रम ने हिम्मत जुटाकर पूछा, 'तुम कौन हो?' साया धीरे-धीरे एक अर्ध-पारदर्शी रूप में बदला। उसकी आँखें सुलगते कोयले की तरह लाल थीं। उसने कहा, 'मैं लाल किले का अदृश्य रखवाला हूँ। मुझे इस ज्ञान की रक्षा का दायित्व मिला है। जो भी इसे चुराने की कोशिश करता है, वह इस तहखाने से कभी बाहर नहीं जाता।' विक्रम ने हाथ जोड़कर कहा, 'हम चोर नहीं, शोधकर्ता हैं। हम इस ज्ञान को दुनिया के भले के लिए संजोना चाहते हैं।' रक्षक ने विक्रम की आँखों में सच्चाई देखी, दीये की लौ तेज़ हुई, और दरवाज़ा अपने आप खुल गया। साया गायब हो गया, लेकिन एक चेतावनी हवा में गूँजती रही—'ज्ञान का सदुपयोग करना, अन्यथा मैं वापस आऊँगा।'"
        ],
        contentEn: [
            "It was midnight. The historic Red Fort of Delhi lay silent under the moonlit sky. Archeologist Vikram and his colleague Maya stood in a restricted corridor usually closed to tourists. In front of them was an ancient iron door, inscribed with mysterious charms in Arabic and Sanskrit.",
            "Vikram touched the heavy lock. 'Are you ready, Maya? This could be the biggest discovery in history. This secret room has never been opened before.' Maya nodded with anxious eyes. As Vikram cut the lock, the door creaked open. Inside, a flight of stone stairs spiraled down into pitch darkness.",
            "With flashlights on, they began their descent. The air grew so cold that their breath turned to mist. Reaching the final step, their jaws dropped. They stood inside a giant vault filled not with gold or diamonds, but with thousands of ancient manuscripts. Oddly, a single clay lamp flickered in the center. Vikram wondered, 'How can a lamp burn in a chamber sealed for centuries?'",
            "Suddenly, the heavy door slammed shut behind them! The flashlight beams flickered. A colossal shadow rose on the stone walls—not a normal shape, but the form of a warrior holding a spectral sword. A booming, echoing voice whispered: 'You have crossed the line, mortals! Do not dare to touch the secret knowledge of this fort!'",
            "Terrified, Maya fell to her knees. Summoning courage, Vikram called out, 'Who are you?' The shadow slowly materialized into a semi-translucent figure with eyes like burning coals. It spoke: 'I am the Invisible Guardian of the Red Fort. It is my eternal duty to protect this wisdom. Those who attempt to steal it never leave this tomb.' Vikram bowed: 'We are researchers, not thieves. We wish to preserve this knowledge for the betterment of humanity.' Seeing truth in his eyes, the guardian let the door swing open and dissolved, leaving a final warning in the air: 'Use the wisdom wisely, or I shall return.'"
        ],
        artDesc: "एक रहस्यमयी पुराना तहखाना, जिसमें एक जलता हुआ जादुई दीया है और हवा में मंडराता हुआ पारदर्शी योद्धा का साया।"
    },
    {
        id: "magic-forest",
        title: "चमकते जादुई जंगल का वरदान",
        titleEn: "Blessing of the Glowing Forest",
        genre: "magic",
        genreHindi: "🧚 जादू और परियाँ",
        genreHindiEn: "🧚 Magic & Fairies",
        length: "4 मिनट",
        lengthEn: "4 mins",
        views: "98K+",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        excerpt: "छाया नाम की एक गरीब अनाथ लड़की एक बार खोकर उस जंगल में चली जाती है जहाँ पेड़ आपस में बात करते हैं और हर पत्ता सोने की तरह चमकता है...",
        excerptEn: "Chhaya, a poor orphan girl, gets lost in a forest where trees whisper to each other and every leaf glimmers like gold...",
        content: [
            "हिमालय की वादियों के पीछे एक ऐसा जंगल था जिसका ज़िक्र सिर्फ पुरानी लोककथाओं में मिलता था—'स्वर्ण वन'। यहाँ के पेड़ साधारण नहीं थे; रात होते ही इनके पत्तों से नीली और सुनहरी रोशनी निकलने लगती थी। गाँव के लोग कहते थे कि उस जंगल में जाने वाला कभी वापस नहीं आता, क्योंकि वहाँ परियों का वास है।",
            "छाया, गाँव की एक छोटी और दयालु अनाथ लड़की, अपनी बीमार दादी के लिए जड़ी-बूटी खोजने के चक्कर में उस वर्जित जंगल की ओर निकल पड़ी। चलते-चलते शाम हो गई, और वह रास्ता भटक गई। घने अँधेरे के बीच अचानक पूरा जंगल चमकने लगा। हवा में मीठी बांसुरी जैसी धुन गूँजने लगी।",
            "छाया ने देखा कि एक बड़ा बरगद का पेड़ धीरे-धीरे अपनी आँखें खोल रहा था। पेड़ ने मुस्कुराते हुए कहा, 'नन्हीं छाया, तुम यहाँ क्यों आई हो? क्या तुम्हें डर नहीं लगता?' छाया ने हाथ जोड़कर कहा, 'बाबा, मेरी दादी बहुत बीमार हैं। मुझे उनके इलाज के लिए संजीवनी बूटी चाहिए। कृपया मेरी मदद करें।' पेड़ छाया की निडरता और निस्वार्थ प्रेम से प्रसन्न हुआ।",
            "तभी हवा में से सुनहरी परियाँ प्रकट हुईं। उनके पंख तितलियों जैसे थे और वे हवा में उड़ रही थीं। मुख्य परी ने छाया को एक चमकता हुआ जादुई फूल दिया और कहा, 'यह स्वर्ण-कमल है। इसकी एक पंखुड़ी तुम्हारी दादी को ठीक कर देगी। लेकिन याद रखना, इसका प्रयोग कभी अपने लालच के लिए मत करना।' छाया ने आदर से सिर झुकाया और फूल ले लिया।",
            "जब वह गाँव वापस पहुँची, तो फूल के स्पर्श मात्र से उसकी दादी पूरी तरह स्वस्थ हो गईं। छाया ने कभी उस फूल का व्यापार नहीं किया, लेकिन उसके बाद से उसके छोटे से घर में कभी अनाज और प्यार की कमी नहीं हुई। स्वर्ण वन ने उसे सदैव के लिए खुशहाली का गुप्त वरदान दे दिया था।"
        ],
        contentEn: [
            "Behind the valleys of the Himalayas lay a forest only spoken of in old folk tales—the 'Golden Woods'. The trees here were not ordinary; at night, their leaves cast a soft blue and gold bioluminescent glow. Villagers said those who entered never returned, as fairies ruled the land.",
            "Chhaya, a kind-hearted orphan girl, went searching for medicinal herbs to cure her sick grandmother. As dusk fell, she lost her way. Amidst the gathering shadows, the entire forest suddenly lit up. The air was filled with a melody resembling a sweet flute.",
            "Chhaya noticed a massive Banyan tree slowly opening its eyes. The tree smiled: 'Little Chhaya, why are you here? Are you not afraid?' She bowed: 'Grandfather, my grandmother is very ill. I need the life-saving herb (Sanjeevani Booti) to cure her. Please help me.' The tree was pleased by her courage and selfless love.",
            "Suddenly, golden fairies materialized from the glowing air, their wings colorful like butterflies. The head fairy presented her with a glittering golden lotus: 'This is the Golden Lotus. A single petal will cure your grandmother. But remember, never use its magic for greed.' Chhaya thanked them and took the flower.",
            "Returning to the village, the mere touch of the lotus completely healed her grandmother. Chhaya never sold the magical flower, yet her small home was never again short of grain or love. The Golden Woods had bestowed upon her a lifetime blessing of joy and abundance."
        ],
        artDesc: "एक जादुई नीली रोशनी से जगमगाता जंगल जिसमें उड़ती हुई सुनहरी परियाँ और एक बात करता हुआ प्राचीन विशाल पेड़ है।"
    },
    {
        id: "scifi-future",
        title: "समय यात्री की भूल: साल 2099",
        titleEn: "Time Traveler's Mistake: Year 2099",
        genre: "scifi",
        genreHindi: "🚀 भविष्य और विज्ञान",
        genreHindiEn: "🚀 Sci-Fi & Future",
        length: "6 मिनट",
        lengthEn: "6 mins",
        views: "75K+",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        excerpt: "साइबर सिटी 'नियो-दिल्ली' के वैज्ञानिक आरव ने हाथ की घड़ी जैसी टाइम-मशीन बनाई। लेकिन अतीत की एक छोटी सी घटना को बदलने से उसका वर्तमान ही गायब होने लगा...",
        excerptEn: "Aarav, a scientist in cyber-city 'Neo-Delhi', invented a wrist-worn time machine. But altering a tiny past event began deleting his own present...",
        content: [
            "साल 2099। नियो-दिल्ली एक ऐसी गगनचुंबी इमारतों वाली नगरी थी जहाँ उड़ने वाली कारें और रोबोटिक सहायक आम बात थे। शहर के सबसे जीनियस युवा वैज्ञानिक, आरव, ने अपने प्रयोगशाला में एक क्रांतिकारी उपकरण विकसित किया था—'क्रोनोस रिंग'। यह कलाई पर बाँधने वाली एक छोटी सी मशीन थी जो समय यात्रा को संभव बनाती थी।",
            "आरव हमेशा से अपनी एक पुरानी गलती को सुधारना चाहता था। दस साल पहले, एक दुर्घटना में उसकी बनाई पहली एआई चिप नष्ट हो गई थी, जिसके कारण उसके मेंटर वैज्ञानिक सतीश को बहुत बदनामी झेलनी पड़ी थी। आरव ने घड़ी में साल 2089 सेट किया और नीली रोशनी के धमाके के साथ अतीत में चला गया।",
            "वह भूतकाल में पहुँचा और चुपके से उस प्रयोगशाला में जाकर चिप को जलने से बचा लिया। खुश होकर आरव तुरंत 2099 में वापस लौट आया। लेकिन जब उसने आँखें खोलीं, तो वह दंग रह गया। जहाँ नियो-दिल्ली की विशाल चमकती इमारतें होनी चाहिए थीं, वहाँ केवल बंजर ज़मीन और टूटे हुए खंडहर थे। रोबोट्स इंसानों पर अत्याचार कर रहे थे।",
            "आरव ने महसूस किया कि उसने 'बटरफ्लाई इफ़ेक्ट' शुरू कर दिया था। उस चिप के बचने की वजह से एक दुष्ट एआई प्रोग्राम का निर्माण हुआ जिसने पूरी मानव सभ्यता को गुलाम बना लिया था। उसकी घड़ी की बैटरी तेज़ी से खत्म हो रही थी। उसके पास केवल एक मौका था अतीत में जाकर अपनी ही की गई सुधार को रोकने का।",
            "आरव ने अपनी बची हुई ऊर्जा समेटी और वापस 2089 में गया। भारी मन से उसने अपनी बनाई चिप को खुद अपनी आँखों के सामने जलने दिया। जब वह वापस 2099 में आया, तो नियो-दिल्ली पहले जैसी चमक रही थी। आरव ने क्रोनोस रिंग को हमेशा के लिए नष्ट कर दिया। उसने सीख लिया था कि समय के चक्र के साथ छेड़छाड़ करने की कीमत विनाश होती है।"
        ],
        contentEn: [
            "The year is 2099. Neo-Delhi is a towering metropolis of skyscrapers, flying vehicles, and robotic assistants. Aarav, a brilliant young cyber-scientist, had developed a revolutionary device in his lab—the 'Chronos Ring'. Worn like a watch, it made time travel possible.",
            "Aarav always wished to correct a mistake from his past. Ten years ago, a lab fire had destroyed his first advanced AI chip, leading to severe disgrace for his mentor, Professor Satish. Aarav set the dial to 2089 and vanished in a flash of blue energy.",
            "Arriving in the past, he sneaked into the laboratory and successfully prevented the chip from burning. Thrilled, he returned to 2099. But as he opened his eyes, he gasped in horror. The dazzling towers of Neo-Delhi were gone. In their place stood barren wasteland and ruins, with hostile robots enslaving humans.",
            "Aarav realized he had triggered the 'Butterfly Effect'. Saving that chip allowed the creation of an evil AI program that took over human civilization. His ring's battery was draining fast; he had only one chance to go back and undo his own correction.",
            "Summoning his remaining energy, Aarav returned to 2089. With a heavy heart, he watched his chip burn to ashes. Returning to 2099, Neo-Delhi was once again glowing and free. Aarav destroyed the Chronos Ring, learning that tampering with the threads of time only spins destruction."
        ],
        artDesc: "भविष्य का एक नियॉन-चमकता साइबर शहर जिसमें उड़ती गाड़ियाँ हैं और एक वैज्ञानिक अपनी कलाई से निकलती होलोग्राफिक घड़ी को देख रहा है।"
    },
    {
        id: "moral-wisdom",
        title: "बुद्धिमान खरगोश और रहस्यमयी दर्पण",
        titleEn: "The Wise Rabbit and the Magic Mirror",
        genre: "moral",
        genreHindi: "🌱 ज्ञान और नीति",
        genreHindiEn: "🌱 Wisdom & Morals",
        length: "3 मिनट",
        lengthEn: "3 mins",
        views: "112K+",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
        excerpt: "पंचतंत्र की शैली में लिखी गई एक बेहतरीन कहानी, जहाँ एक चालाक खरगोश एक जादुई दर्पण की सहायता से पूरे जंगल को एक घमंडी शेर के अत्याचार से बचाता है...",
        excerptEn: "A Panchatantra-style fable where a clever rabbit uses a magical mirror to save the forest from a tyrannical and arrogant lion...",
        content: [
            "सुंदरवन का राजा, विक्रम नाम का एक शेर, बहुत क्रूर और घमंडी था। वह बिना वजह जंगल के जानवरों का शिकार करता था। सभी जानवर उससे थर-थर काँपते थे। एक दिन, जंगल के सबसे बुद्धिमान और नन्हे खरगोश, चीकू, की बारी आई शेर का भोजन बनने की। चीकू मौत से डरने वाला नहीं था, उसने दिमाग का इस्तेमाल करने की सोची।",
            "चीकू जानबूझकर शेर के पास बहुत देर से पहुँचा। शेर भूख से तमतमा रहा था। उसने दहाड़कर कहा, 'नन्हे जीव! तेरी यह हिम्मत कि तू इतनी देर से आया? अब मैं पूरे जंगल का विनाश कर दूँगा!' चीकू ने काँपते हुए नाटक किया, 'महाराज! इसमें मेरी कोई गलती नहीं है। रास्ते में मुझे एक जादुई गुफा मिली, जहाँ एक रहस्यमयी सोने का दर्पण लगा है।'",
            "चीकू ने आगे कहा, 'उस दर्पण में से एक और विशाल शेर निकला और उसने दावा किया कि वह इस जंगल का असली राजा है। उसने मुझे रोक लिया था और आपकी शक्तियों का मज़ाक उड़ा रहा था।' यह सुनकर राजा विक्रम का स्वाभिमान आहत हुआ। उसने गुस्से में कहा, 'मुझे तुरंत उस गुफा और उस दूसरे शेर के पास ले चलो! मैं उसका अंत कर दूँगा।'",
            "चीकू शेर को जंगल के पुराने सूखे कुएँ के पास ले गया, जिसके मुहाने पर चीकू ने पहले से ही चमकीली धातु का एक बड़ा टुकड़ा रख दिया था जो दर्पण जैसा दिखता था। शेर ने कुएँ के अंदर झाँका। पानी में उसे अपनी ही परछाई दिखाई दी, लेकिन चीकू की बातों के जाल में फँसे होने के कारण उसे लगा कि सचमुच कोई दूसरा शेर उसे ललकार रहा है।",
            "जैसे ही शेर दहाड़ा, कुएँ से उसकी ही दहाड़ गूँजकर वापस आई। गुस्से में पागल होकर शेर ने कुएँ के अंदर छलांग लगा दी। गहरा कुआँ होने के कारण वह वापस बाहर नहीं आ पाया। चीकू ने मुस्कुराते हुए सभी जानवरों को यह खुशखबरी दी। इस प्रकार, शारीरिक बल पर मानसिक बुद्धि की जीत हुई, और नन्हे खरगोश ने सूझबूझ से पूरे वन को अभयदान दिया।"
        ],
        contentEn: [
            "The king of Sundarvan was a lion named Vikram, who was incredibly cruel and arrogant. He hunted the forest animals without reason, keeping everyone in constant terror. One day, it was the turn of Cheeku, the smallest and wisest rabbit, to become the lion's meal. Cheeku was not afraid; he decided to use his wits.",
            "Cheeku deliberately arrived very late. The lion was roaring in hunger: 'Tiny creature! How dare you show up late? I will destroy the entire forest!' Cheeku trembled fictitiously: 'Majesty! It is not my fault. On my way, I found a magic cave containing a mysterious golden mirror.'",
            "Cheeku continued: 'Another giant lion emerged from the mirror, claiming to be the true king of this forest. He stopped me and ridiculed your power.' King Vikram's pride was wounded. Furious, he commanded: 'Take me to that cave and that other lion immediately! I shall end him.'",
            "Cheeku led the lion to an old dry well, where he had earlier placed a large polished piece of metal that reflected like a mirror. The lion looked down the well. Seeing his reflection, and blinded by Cheeku's words, he believed another lion was challenging him.",
            "As the lion roared, his own roar echoed back. Blinded by rage, the lion leaped into the deep well and was trapped forever. Cheeku smiled and shared the good news. Thus, mental wit triumphed over brute physical force, and the tiny rabbit saved the forest."
        ],
        artDesc: "एक सुंदर हरा-भरा जंगल, जिसमें एक नन्हा चालाक खरगोश एक पुराने कुएँ के पास खड़ा है और एक गुस्सैल शेर कुएँ के पानी में अपनी परछाई देख रहा है।"
    }
];

// --- 2. Live Audio Synthesizer (प्रोसीजरल साउंडस्केप जेनरेटर) ---
// We use Web Audio API to synthesize highly immersive soundscapes live, saving resource footprint.
let audioCtx = null;
let ambientNodes = {
    drone: null,
    filter: null,
    lfo: null,
    gain: null,
    chimeTimer: null,
    noiseNode: null
};
let isAmbientPlaying = false;
let currentAmbientTheme = 'mystic';

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Low frequency atmospheric background synthesizer
function startSynthesizedAmbient(theme) {
    initAudioContext();
    stopSynthesizedAmbient();
    
    isAmbientPlaying = true;
    currentAmbientTheme = theme;
    
    const dest = audioCtx.destination;
    
    // Create nodes
    const mainGain = audioCtx.createGain();
    mainGain.gain.setValueAtTime(0.08, audioCtx.currentTime); // Low volume background drone
    mainGain.connect(dest);
    ambientNodes.gain = mainGain;

    if (theme === 'mystic') {
        // Celestial glowing pad
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(110.5, audioCtx.currentTime); // A2 detuned
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(250, audioCtx.currentTime);
        filter.Q.setValueAtTime(7, audioCtx.currentTime);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.1, audioCtx.currentTime); // very slow sweep
        lfoGain.gain.setValueAtTime(100, audioCtx.currentTime);

        // Connect LFO to filter frequency
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        
        // Connect Oscillators to filter and main gain
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(mainGain);

        // Start
        osc1.start();
        osc2.start();
        lfo.start();

        ambientNodes.drone = [osc1, osc2, lfo];
        ambientNodes.filter = filter;
        ambientNodes.lfo = lfoGain;

        // Dynamic high-pitched golden chimes triggers
        playMysticChimes(mainGain);
        
    } else if (theme === 'horror') {
        // Haunting, scary low sweeping drone
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(48, audioCtx.currentTime); // E1 (creepy note)
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(48.7, audioCtx.currentTime); // detuned dissonant wave
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, audioCtx.currentTime);
        filter.Q.setValueAtTime(10, audioCtx.currentTime);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.05, audioCtx.currentTime); // extremely slow
        lfoGain.gain.setValueAtTime(40, audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(mainGain);

        osc1.start();
        osc2.start();
        lfo.start();

        ambientNodes.drone = [osc1, osc2, lfo];
        ambientNodes.filter = filter;
        
        // Random dissonant screech timer
        playScaryScreeches(mainGain);

    } else if (theme === 'forest') {
        // Wind noise synthesizer + bird chirps
        // Create noise buffer
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, audioCtx.currentTime);
        filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

        // Sweep filter to simulate blowing wind
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.15, audioCtx.currentTime);
        lfoGain.gain.setValueAtTime(200, audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        whiteNoise.connect(filter);
        filter.connect(mainGain);

        whiteNoise.start();
        lfo.start();

        ambientNodes.drone = [whiteNoise, lfo];
        ambientNodes.filter = filter;

        // Periodic bird chirps simulator
        playForestBirds(mainGain);

    } else if (theme === 'future') {
        // Cybernetic pulsing rhythmic synth wave
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const pulser = audioCtx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(65.41, audioCtx.currentTime); // C2
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(130.81, audioCtx.currentTime); // C3
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, audioCtx.currentTime);

        // Pulse volume (cyberbeat LFO)
        const pulseLfo = audioCtx.createOscillator();
        pulseLfo.type = 'square';
        pulseLfo.frequency.setValueAtTime(1.5, audioCtx.currentTime); // 1.5Hz beat
        
        const pulseGain = audioCtx.createGain();
        pulseGain.gain.setValueAtTime(0.4, audioCtx.currentTime);

        // Map square wave to volume pulsing
        pulseLfo.connect(pulseGain);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(pulser);
        pulser.connect(mainGain);

        // Let pulse LFO sweep filter slightly too
        const filterSweep = audioCtx.createGain();
        filterSweep.gain.setValueAtTime(150, audioCtx.currentTime);
        pulseLfo.connect(filterSweep);
        filterSweep.connect(filter.frequency);

        osc1.start();
        osc2.start();
        pulseLfo.start();

        ambientNodes.drone = [osc1, osc2, pulseLfo];
        ambientNodes.filter = filter;
    }

    updateAmbientUI();
}

function stopSynthesizedAmbient() {
    isAmbientPlaying = false;
    
    // Clear dynamic timers
    if (ambientNodes.chimeTimer) {
        clearTimeout(ambientNodes.chimeTimer);
        ambientNodes.chimeTimer = null;
    }

    // Stop and disconnect drone nodes
    if (ambientNodes.drone) {
        if (Array.isArray(ambientNodes.drone)) {
            ambientNodes.drone.forEach(node => {
                try { node.stop(); } catch(e) {}
                try { node.disconnect(); } catch(e) {}
            });
        } else {
            try { ambientNodes.drone.stop(); } catch(e) {}
            try { ambientNodes.drone.disconnect(); } catch(e) {}
        }
        ambientNodes.drone = null;
    }

    if (ambientNodes.filter) {
        try { ambientNodes.filter.disconnect(); } catch(e) {}
        ambientNodes.filter = null;
    }

    if (ambientNodes.lfo) {
        try { ambientNodes.lfo.disconnect(); } catch(e) {}
        ambientNodes.lfo = null;
    }

    if (ambientNodes.gain) {
        try { ambientNodes.gain.disconnect(); } catch(e) {}
        ambientNodes.gain = null;
    }

    updateAmbientUI();
}

// Procedural high-pitched chime sounds generator (For Mystic)
function playMysticChimes(targetGain) {
    if (!isAmbientPlaying || currentAmbientTheme !== 'mystic') return;

    const chimeTime = Math.random() * 6000 + 4000; // Every 4-10 seconds
    ambientNodes.chimeTimer = setTimeout(() => {
        if (!isAmbientPlaying) return;

        // Generate synthetic bell chime
        const frequencies = [880, 1046.5, 1318.5, 1568]; // A5, C6, E6, G6 (Pentatonic magical harmony)
        const chosenFreq = frequencies[Math.floor(Math.random() * frequencies.length)];

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(chosenFreq, audioCtx.currentTime);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.1); // Fast attack
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.0); // Slow mystical decay

        osc.connect(gainNode);
        gainNode.connect(targetGain);

        osc.start();
        osc.stop(audioCtx.currentTime + 4.1);

        // Loop next chime
        playMysticChimes(targetGain);
    }, chimeTime);
}

// Procedural horror tension spikes (For Horror)
function playScaryScreeches(targetGain) {
    if (!isAmbientPlaying || currentAmbientTheme !== 'horror') return;

    const scaryTime = Math.random() * 8000 + 7000; // Every 7-15 seconds
    ambientNodes.chimeTimer = setTimeout(() => {
        if (!isAmbientPlaying) return;

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, audioCtx.currentTime); // start low
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 1.5); // scary slide up

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.4); 
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.0); 

        // Filter high frequencies slightly
        const bpf = audioCtx.createBiquadFilter();
        bpf.type = 'bandpass';
        bpf.frequency.setValueAtTime(500, audioCtx.currentTime);

        osc.connect(bpf);
        bpf.connect(gainNode);
        gainNode.connect(targetGain);

        osc.start();
        osc.stop(audioCtx.currentTime + 2.1);

        playScaryScreeches(targetGain);
    }, scaryTime);
}

// Procedural forest birds synthesizer (For Forest)
function playForestBirds(targetGain) {
    if (!isAmbientPlaying || currentAmbientTheme !== 'forest') return;

    const chirpTime = Math.random() * 5000 + 3000; // Every 3-8 seconds
    ambientNodes.chimeTimer = setTimeout(() => {
        if (!isAmbientPlaying) return;

        // Perform 2-3 quick chirps
        const now = audioCtx.currentTime;
        const numChirps = Math.floor(Math.random() * 2) + 2;
        let chirpStart = now;

        for (let j = 0; j < numChirps; j++) {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            osc.type = 'sine';
            // Rapid pitch sweep upwards to sound like a bird
            osc.frequency.setValueAtTime(1200, chirpStart);
            osc.frequency.exponentialRampToValueAtTime(2400, chirpStart + 0.08);

            gainNode.gain.setValueAtTime(0, chirpStart);
            gainNode.gain.linearRampToValueAtTime(0.02, chirpStart + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, chirpStart + 0.08);

            osc.connect(gainNode);
            gainNode.connect(targetGain);

            osc.start(chirpStart);
            osc.stop(chirpStart + 0.1);

            chirpStart += 0.15; // Delay between double chirps
        }

        playForestBirds(targetGain);
    }, chirpTime);
}

// Global ambient and music switches
let globalSoundEnabled = false;

function toggleGlobalSound() {
    globalSoundEnabled = !globalSoundEnabled;
    const globalSoundBtn = document.getElementById('global-sound-btn');
    const globalSoundIcon = document.getElementById('global-sound-icon');
    
    if (globalSoundEnabled) {
        globalSoundBtn.classList.add('active');
        globalSoundIcon.setAttribute('data-lucide', 'volume-2');
        // Start playing our mystic ambient as default background drone
        startSynthesizedAmbient('mystic');
    } else {
        globalSoundBtn.classList.remove('active');
        globalSoundIcon.setAttribute('data-lucide', 'volume-x');
        stopSynthesizedAmbient();
    }
    lucide.createIcons(); // refresh icons
}

function toggleAmbientSound() {
    if (isAmbientPlaying) {
        stopSynthesizedAmbient();
    } else {
        const theme = document.getElementById('ambient-theme').value;
        startSynthesizedAmbient(theme);
        
        // Keep global sound synced
        globalSoundEnabled = true;
        document.getElementById('global-sound-btn').classList.add('active');
        document.getElementById('global-sound-icon').setAttribute('data-lucide', 'volume-2');
        lucide.createIcons();
    }
}

function changeAmbientTheme() {
    if (isAmbientPlaying) {
        const theme = document.getElementById('ambient-theme').value;
        startSynthesizedAmbient(theme);
    }
}

function updateAmbientUI() {
    const ambientBtn = document.getElementById('ambient-btn');
    const ambientIcon = document.getElementById('ambient-icon');
    const ambientText = document.getElementById('ambient-text');
    
    if (!ambientBtn) return; // protect modal context issues

    if (isAmbientPlaying) {
        ambientBtn.classList.add('active');
        ambientIcon.setAttribute('data-lucide', 'music-4');
        ambientText.innerText = "संगीत बंद करें";
    } else {
        ambientBtn.classList.remove('active');
        ambientIcon.setAttribute('data-lucide', 'music');
        ambientText.innerText = "संगीत चालू";
    }
    lucide.createIcons();
}


// --- 3. Stories Library Loading & Filters ---
let currentGenreFilter = 'all';

function renderStoriesGrid() {
    const grid = document.getElementById('stories-grid');
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    grid.innerHTML = '';

    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

    const filtered = storiesDatabase.filter(story => {
        const matchesGenre = currentGenreFilter === 'all' || story.genre === currentGenreFilter;
        const titleText = isEn ? (story.titleEn || story.title) : story.title;
        const excerptText = isEn ? (story.excerptEn || story.excerpt) : story.excerpt;
        const matchesSearch = titleText.toLowerCase().includes(searchVal) || 
                              excerptText.toLowerCase().includes(searchVal);
        return matchesGenre && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass-panel" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">
                <i data-lucide="info" style="width: 48px; height: 48px; margin: 0 auto 15px; color: var(--secondary);"></i>
                <h3>${isEn ? 'No stories found' : 'कोई कहानी नहीं मिली'}</h3>
                <p>${isEn ? 'Please try a different title or genre.' : 'कृपया कोई दूसरा शीर्षक या शैली खोजकर देखें।'}</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(story => {
        const card = document.createElement('div');
        card.className = "story-card glass-panel";
        card.setAttribute('onclick', `openStoryReader('${story.id}')`);
        
        let badgeClass = "badge-gold";
        if (story.genre === 'horror') badgeClass = "badge-red";
        if (story.genre === 'scifi') badgeClass = "badge-blue";

        const displayTitle = isEn ? (story.titleEn || story.title) : story.title;
        const displayExcerpt = isEn ? (story.excerptEn || story.excerpt) : story.excerpt;
        const displayGenre = isEn ? (story.genreHindiEn || story.genreHindi) : story.genreHindi;
        const displayLength = isEn ? (story.lengthEn || story.length) : story.length;
        const readLabel = isEn ? 'read' : 'पठन';
        const viewsLabel = isEn ? 'views' : 'व्यूज';
        const readBtn = isEn ? 'Read' : 'पढ़ें';

        card.innerHTML = `
            <div class="story-thumbnail">
                <img src="${story.image}" alt="${displayTitle}">
                <div class="story-badge-overlay">
                    <span class="badge ${badgeClass}">${displayGenre}</span>
                </div>
                <div class="story-length-overlay">
                    <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
                    <span>${displayLength} ${readLabel}</span>
                </div>
            </div>
            <div class="story-card-content">
                <h3 class="story-card-title">${displayTitle}</h3>
                <p class="story-excerpt">${displayExcerpt}</p>
                <div class="story-meta-footer">
                    <span><i data-lucide="eye" style="width: 14px; height: 14px;"></i> ${story.views} ${viewsLabel}</span>
                    <span class="read-btn-link">${readBtn} <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i></span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    lucide.createIcons();
}

function setGenreFilter(genre) {
    currentGenreFilter = genre;
    
    // Update active tab UI
    const tabs = document.querySelectorAll('.genre-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-genre') === genre) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderStoriesGrid();
}

function filterStories() {
    renderStoriesGrid();
}


// --- 4. Interactive Story Reader Modal System ---
let currentReadingStory = null;
let readerFontSize = 100; // in percent

function openStoryReader(storyId) {
    const story = storiesDatabase.find(s => s.id === storyId);
    if (!story) return;

    currentReadingStory = story;
    
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    const displayTitle = isEn ? (story.titleEn || story.title) : story.title;
    const displayGenre = isEn ? (story.genreHindiEn || story.genreHindi) : story.genreHindi;
    const displayLength = isEn ? (story.lengthEn || story.length) : story.length;
    const readLabel = isEn ? 'read' : 'पठन';
    const viewsLabel = isEn ? 'views' : 'व्यूज';
    const ratingLabel = isEn ? 'rating' : 'रेटिंग';

    // Set text elements
    document.getElementById('reader-title').innerText = displayTitle;
    document.getElementById('reader-genre-badge').innerText = displayGenre;
    
    let badge = document.getElementById('reader-genre-badge');
    badge.className = "badge"; // reset
    if (story.genre === 'horror') badge.classList.add('badge-red');
    else if (story.genre === 'scifi') badge.classList.add('badge-blue');
    else if (story.genre === 'magic') badge.classList.add('badge-gold');

    // Cover Visual
    const coverBg = document.getElementById('reader-cover-bg');
    coverBg.style.backgroundImage = `url('${story.image}')`;
    document.getElementById('reader-banner-meta').innerText = `${displayLength} ${readLabel} | 👁 ${story.views} ${viewsLabel} | 🌟 ${story.rating} ${ratingLabel}`;

    // Render paragraphs
    const bodyContent = document.getElementById('reader-body-content');
    bodyContent.innerHTML = '';
    const paragraphs = isEn ? (story.contentEn || story.content) : story.content;
    paragraphs.forEach((para, index) => {
        const p = document.createElement('p');
        p.id = `reader-p-${index}`;
        p.innerText = para;
        bodyContent.appendChild(p);
    });

    // Reset Reader state
    readerFontSize = 100;
    document.getElementById('font-size-val').innerText = `${readerFontSize}%`;
    bodyContent.style.fontSize = "1.15rem";
    
    // Sync Ambient Sound theme dropdown to match story genre
    const ambientSelect = document.getElementById('ambient-theme');
    if (story.genre === 'horror') ambientSelect.value = 'horror';
    else if (story.genre === 'scifi') ambientSelect.value = 'future';
    else if (story.genre === 'magic') ambientSelect.value = 'mystic';
    else ambientSelect.value = 'forest';

    // Auto trigger synthesized background soundtrack if globally enabled
    if (globalSoundEnabled) {
        startSynthesizedAmbient(ambientSelect.value);
    } else {
        stopSynthesizedAmbient();
    }

    // Reset progress bar
    document.getElementById('reader-progress').style.width = "0%";

    // Display modal
    const modal = document.getElementById('story-reader-modal');
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add('open'), 10);
    
    // Track modal scrolling for reading progress bar
    const modalContent = modal.querySelector('.modal-content');
    modalContent.onscroll = function() {
        const totalScrollHeight = modalContent.scrollHeight - modalContent.clientHeight;
        if (totalScrollHeight > 0) {
            const percent = (modalContent.scrollTop / totalScrollHeight) * 100;
            document.getElementById('reader-progress').style.width = `${percent}%`;
        }
    };

    lucide.createIcons();
}

function closeStoryReader() {
    stopTTS(); // stop narration
    
    const modal = document.getElementById('story-reader-modal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = "none";
        currentReadingStory = null;
    }, 400);

    // Stop ambient audio inside reader, sync back global
    if (globalSoundEnabled) {
        startSynthesizedAmbient('mystic');
    } else {
        stopSynthesizedAmbient();
    }
}

function adjustReaderFont(dir) {
    readerFontSize += dir * 10;
    if (readerFontSize < 80) readerFontSize = 80;
    if (readerFontSize > 150) readerFontSize = 150;
    
    document.getElementById('font-size-val').innerText = `${readerFontSize}%`;
    document.getElementById('reader-body-content').style.fontSize = `${(readerFontSize / 100) * 1.15}rem`;
}


// --- 5. Hindi Text-to-Speech (TTS) Narration System ---
let ttsSynth = window.speechSynthesis;
let ttsUtterance = null;
let isNarrating = false;
let spokenParagraphIndex = 0;
let spokenParagraphs = [];

function toggleTTS() {
    if (!currentReadingStory && !generatedStoryActive) return;

    if (isNarrating) {
        stopTTS();
    } else {
        startTTS();
    }
}

function startTTS() {
    initAudioContext();
    stopTTS(); // clear active

    isNarrating = true;
    
    // Gather story script
    let storyParagraphs = [];
    if (currentReadingStory) {
        const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
        storyParagraphs = isEn ? (currentReadingStory.contentEn || currentReadingStory.content) : currentReadingStory.content;
    } else if (generatedStoryActive) {
        storyParagraphs = generatedStoryContent;
    }

    spokenParagraphs = storyParagraphs;
    spokenParagraphIndex = 0;

    // Highlight initial block
    highlightSpeechParagraph(spokenParagraphIndex);

    // Queue speak paragraph
    speakParagraphSequence();

    // Toggle button visual state
    updateTTSUI(true);
}

function speakParagraphSequence() {
    if (!isNarrating || spokenParagraphIndex >= spokenParagraphs.length) {
        stopTTS();
        return;
    }

    const textToSpeak = spokenParagraphs[spokenParagraphIndex];
    ttsUtterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Set speech speed
    const speedSelect = document.getElementById('tts-speed');
    const speed = speedSelect ? parseFloat(speedSelect.value) : 1.0;
    ttsUtterance.rate = speed;

    // Set voice based on language
    const voices = ttsSynth.getVoices();
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    let targetVoice;
    if (isEn) {
        targetVoice = voices.find(voice => voice.lang.toLowerCase().includes('en'));
    } else {
        targetVoice = voices.find(voice => voice.lang.toLowerCase().includes('hi'));
    }
    
    if (targetVoice) {
        ttsUtterance.voice = targetVoice;
    }

    // Highlight text boundary if supported by Speech API (word by word highlighter)
    ttsUtterance.onboundary = function(event) {
        if (event.name === 'word') {
            const pId = currentReadingStory ? `reader-p-${spokenParagraphIndex}` : 'gen-body';
            const element = document.getElementById(pId);
            if (element && currentReadingStory) {
                // Approximate visual word highlighting
                const origText = spokenParagraphs[spokenParagraphIndex];
                const charIndex = event.charIndex;
                
                // Find nearest word bounds
                let endWordIndex = origText.indexOf(' ', charIndex);
                if (endWordIndex === -1) endWordIndex = origText.length;
                
                const before = origText.substring(0, charIndex);
                const word = origText.substring(charIndex, endWordIndex);
                const after = origText.substring(endWordIndex);

                element.innerHTML = `${before}<span class="tts-highlight">${word}</span>${after}`;
            }
        }
    };

    ttsUtterance.onend = function() {
        // Clean highlight on complete paragraph
        resetSpeechHighlight(spokenParagraphIndex);

        spokenParagraphIndex++;
        if (spokenParagraphIndex < spokenParagraphs.length) {
            highlightSpeechParagraph(spokenParagraphIndex);
            speakParagraphSequence();
        } else {
            stopTTS();
        }
    };

    ttsUtterance.onerror = function(e) {
        console.error("TTS speech error", e);
        stopTTS();
    };

    // Synthesize voice
    ttsSynth.speak(ttsUtterance);
}

function stopTTS() {
    isNarrating = false;
    if (ttsSynth) {
        ttsSynth.cancel();
    }
    
    // Clean all paragraph visual overlays
    if (spokenParagraphs) {
        for (let i = 0; i < spokenParagraphs.length; i++) {
            resetSpeechHighlight(i);
        }
    }
    
    // Reset generated story visual too
    const genBody = document.getElementById('gen-body');
    if (genBody && generatedStoryActive) {
        // re-render raw HTML template
        genBody.innerHTML = generatedStoryContent.map(p => `<p>${p}</p>`).join('');
    }

    updateTTSUI(false);
}

function changeTTSSpeed() {
    if (isNarrating) {
        // SpeechSynthesisUtterance rate cannot be changed on the fly dynamically in some engines.
        // We stop and resume from the current paragraph block at the new speed.
        const prevIndex = spokenParagraphIndex;
        stopTTS();
        isNarrating = true;
        spokenParagraphIndex = prevIndex;
        highlightSpeechParagraph(spokenParagraphIndex);
        speakParagraphSequence();
        updateTTSUI(true);
    }
}

function highlightSpeechParagraph(index) {
    if (currentReadingStory) {
        const para = document.getElementById(`reader-p-${index}`);
        if (para) {
            para.style.borderLeft = "4px solid var(--accent)";
            para.style.paddingLeft = "10px";
            para.style.background = "rgba(255, 183, 3, 0.05)";
            para.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else if (generatedStoryActive) {
        const genBody = document.getElementById('gen-body');
        if (genBody) {
            // highlight the actual active block in the generated frame
            const paragraphs = genBody.querySelectorAll('p');
            if (paragraphs[index]) {
                paragraphs[index].style.borderLeft = "4px solid var(--accent)";
                paragraphs[index].style.paddingLeft = "10px";
                paragraphs[index].style.background = "rgba(255, 183, 3, 0.05)";
                paragraphs[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}

function resetSpeechHighlight(index) {
    if (currentReadingStory) {
        const para = document.getElementById(`reader-p-${index}`);
        if (para) {
            para.style.borderLeft = "none";
            para.style.paddingLeft = "0";
            para.style.background = "none";
            // Restore clean text
            para.innerHTML = spokenParagraphs[index];
        }
    } else if (generatedStoryActive) {
        const genBody = document.getElementById('gen-body');
        if (genBody) {
            const paragraphs = genBody.querySelectorAll('p');
            if (paragraphs[index]) {
                paragraphs[index].style.borderLeft = "none";
                paragraphs[index].style.paddingLeft = "0";
                paragraphs[index].style.background = "none";
            }
        }
    }
}

function updateTTSUI(playing) {
    const playBtn = document.getElementById('tts-play-btn');
    const playIcon = document.getElementById('tts-icon');
    const playText = document.getElementById('tts-text');

    const genPlayBtn = document.getElementById('tts-gen-btn');

    if (!playBtn) return;

    if (playing) {
        playBtn.classList.add('active');
        playIcon.setAttribute('data-lucide', 'volume-x');
        playText.innerText = "रोकें";
        
        if (genPlayBtn) {
            genPlayBtn.classList.add('active');
            genPlayBtn.querySelector('i').setAttribute('data-lucide', 'volume-x');
        }
    } else {
        playBtn.classList.remove('active');
        playIcon.setAttribute('data-lucide', 'volume-2');
        playText.innerText = "सुनाएँ";
        
        if (genPlayBtn) {
            genPlayBtn.classList.remove('active');
            genPlayBtn.querySelector('i').setAttribute('data-lucide', 'volume-2');
        }
    }
    lucide.createIcons();
}


// --- 6. AI Story Compiler Engine (जादुई कहानी रचयिता) ---
let generatedStoryActive = false;
let generatedStoryContent = [];
let generatedStoryTitle = "";

const storyCompilationsTemplates = {
    horror: {
        title: [
            "का मुख्य द्वार और अदृश्य साया",
            "के खंडहर की चीख",
            "का प्राचीन रहस्यमयी अभिशाप",
            "की डरावनी लाल आँखें"
        ],
        plot: [
            "की हवा में कुछ अजीब था। सालों पहले बंद कर दिए गए इस स्थान में आधी रात को रोशनी जल उठी थी। #HERO# अपनी भारी साँसों के साथ अंदर बढ़ रहा था।",
            "तभी अचानक दीवार पर एक परछाई उभरी। वह कोई आम इंसान नहीं था। उसकी आँखें कोयले की तरह लाल सुलग रही थीं और चेहरे पर एक भयानक मुस्कान थी।",
            "एक गूँजती हुई काँपती आवाज़ हवा में तैरी: '#HERO#! तुम यहाँ से वापस नहीं जा सकते। यह स्थान सदैव के लिए मेरा है।' #HERO# के पैरों तले ज़मीन खिसक गई।",
            "लेकिन #HERO# ने हार नहीं मानी। अपनी जेब से एक सिद्ध ताबीज निकाला जिसकी जादुई आभा से वह भयानक साया पीछे हटा और चिल्लाते हुए अदृश्य हो गया। #HERO# की हिम्मत ने आज उसकी जान बचा ली।"
        ],
        artDesc: "एक गहरा अँधेरा स्थान, जहाँ नियॉन लाल आँखों वाला डरावना साया चमक रहा है और डरा हुआ नायक कांप रहा है।"
    },
    magic: {
        title: [
            "और स्वर्ण पंखों वाली परी",
            "का चमकता जादुई रहस्य",
            "का अद्भुत वरदान",
            "और प्राचीन जादुई द्वार"
        ],
        plot: [
            "अत्यंत विस्मयकारी दृश्यों से भरा था। रात होते ही यहाँ के सभी पेड़-पौधे नीले और सुनहरे रंग से चमकने लगते थे। #HERO# मंत्रमुग्ध होकर आगे बढ़ रहा था।",
            "तभी, फूलों के बीच से एक सुंदर परी प्रकट हुई। उसके पंख तितली जैसे रंगीन और चमकदार थे। उसने मुस्कुराकर #HERO# का स्वागत किया।",
            "परी ने कहा, 'तुम्हारी निस्वार्थ भावना देखकर मैंने तुम्हें चुना है। यह चमकता हुआ जादुई मणि लो, यह तुम्हारी हर शुद्ध इच्छा पूरी करेगा।'",
            "#HERO# ने आदर से सिर झुकाया। उस मणि के प्रभाव से गाँव के सभी बीमार लोग ठीक हो गए और सुख-समृद्धि छा गई। #HERO# अमर कथाओं का हिस्सा बन गया।"
        ],
        artDesc: "एक जगमगाता हुआ जादुई वन, जहाँ फूलों से दिव्य रोशनी निकल रही है और हवा में सुंदर सुनहरी परियाँ उड़ रही हैं।"
    },
    moral: {
        title: [
            "की चतुराई और घमंडी शेर",
            "का मूल्यवान सत्य और सीख",
            "का दयालु कर्म और भाग्य",
            "की सूझबूझ और चमत्कारी रहस्य"
        ],
        plot: [
            "के निवासियों के सामने एक बड़ी चुनौती थी। वहाँ एक बहुत ही क्रूर और घमंडी प्राणी रहता था जो कमज़ोर जानवरों पर अत्याचार करता था। #HERO# ने एक युक्ति सोची।",
            "#HERO# ने हिम्मत दिखाई और राजा के सामने जाकर कहा, 'यहाँ एक और शक्तिशाली प्राणी आ गया है जो स्वयं को आपसे महान बताता है।'",
            "क्रोध में आकर उस अत्याचारी ने उसे देखने की माँग की। #HERO# उसे एक गहरे कुएँ/दर्पण के पास ले गया जहाँ उसने अपने ही भयानक रूप की परछाई देखी।",
            "वह खुद की परछाई से लड़ने के चक्कर में गहरे संकट में फँस गया। सभी जानवरों ने #HERO# की बुद्धिमत्ता की भूरि-भूरि प्रशंसा की। सीख: बल से बड़ी बुद्धि होती है।"
        ],
        artDesc: "एक शांत हरा-भरा वन, जहाँ एक चतुर नायक मुस्कुरा रहा है और एक मूर्ख विशाल प्राणी पराजित होकर हैरान खड़ा है।"
    },
    scifi: {
        title: [
            "और साल 2099 का रोबोट",
            "की साइबर दुनिया की यात्रा",
            "का शक्तिशाली क्वांटम कोड",
            "और अंतरिक्ष स्टेशन का अंतिम मानव"
        ],
        plot: [
            "में टेक्नोलॉजी की सीमाएँ टूट चुकी थीं। आसमान में उड़ती हुई कारें और नियॉन लाइट्स की चमक बिखरी हुई थी। #HERO# अपने रोबोटिक साथी के साथ खड़ा था।",
            "तभी सुरक्षा अलार्म बजने लगा। केंद्रीय मुख्य कंप्यूटर पर एक खतरनाक वायरस का हमला हुआ था जो पूरे अंतरिक्ष नियंत्रण को ध्वस्त कर सकता था।",
            "#HERO# ने तुरंत अपनी न्यूरल-लिंक घड़ी निकाली और जटिल होलोग्राफिक कोड लिखने लगा। डेटा स्ट्रीम हवा में तैर रहे थे।",
            "आखिरी सेकेंड में वायरस नष्ट हो गया और पूरा ग्रिड फिर से जाग उठा। #HERO# ने एक बार फिर पूरी डिजिटल सभ्यता को विनाश से बचा लिया था।"
        ],
        artDesc: "एक अत्याधुनिक साइबर सिटी जिसमें होलोग्राफिक मॉनिटर्स हैं और एक वैज्ञानिक नियॉन रंग का इंटरफ़ेस कंट्रोल कर रहा है।"
    }
};

function generateAIScript(event) {
    event.preventDefault();

    const charName = document.getElementById('char-name').value.trim();
    const settingSelect = document.getElementById('setting-select');
    const settingText = settingSelect.options[settingSelect.selectedIndex].text;
    
    // Get checked radio genre
    const genres = document.getElementsByName('ai-genre');
    let chosenGenre = 'horror';
    for (const r of genres) {
        if (r.checked) chosenGenre = r.value;
    }

    if (!charName) return;

    // Show loading page
    document.getElementById('result-placeholder').style.display = "none";
    document.getElementById('result-display').style.display = "none";
    document.getElementById('result-loading').style.display = "block";
    
    // Stop active audio/TTS during synthesis
    stopTTS();

    // Loading bars simulation
    const steps = document.getElementById('loading-steps').querySelectorAll('li');
    steps[0].className = "active";
    steps[1].className = "";
    steps[2].className = "";
    
    let progress = 0;
    const progressFill = document.getElementById('generator-progress');
    const loaderStatus = document.getElementById('loader-status');
    
    const interval = setInterval(() => {
        progress += 5;
        progressFill.style.width = `${progress}%`;

        if (progress === 30) {
            steps[0].className = "done";
            steps[1].className = "active";
            loaderStatus.innerText = "पात्रों में प्राण फूँके जा रहे हैं...";
        }
        if (progress === 65) {
            steps[1].className = "done";
            steps[2].className = "active";
            loaderStatus.innerText = "एआई इमेजरी तैयार हो रही है...";
        }
        if (progress >= 100) {
            clearInterval(interval);
            steps[2].className = "done";
            showGeneratedStory(charName, settingText, chosenGenre);
        }
    }, 150);
}

function showGeneratedStory(hero, setting, genre) {
    const templates = storyCompilationsTemplates[genre];
    
    // Compile Title
    const randomTitleSuffix = templates.title[Math.floor(Math.random() * templates.title.length)];
    generatedStoryTitle = `${setting} ${randomTitleSuffix}`;

    // Compile Paragraphs
    generatedStoryContent = templates.plot.map(p => {
        let compiled = p.replaceAll('#HERO#', hero);
        compiled = compiled.replace('...', `... ${setting} के नज़दीक...`);
        return compiled;
    });

    const artDescription = `${hero} ${templates.artDesc} स्थान: ${setting}`;

    // Update Result UI elements
    document.getElementById('gen-title').innerText = generatedStoryTitle;
    document.getElementById('gen-art-desc').innerText = artDescription;

    const genBody = document.getElementById('gen-body');
    genBody.innerHTML = '';
    generatedStoryContent.forEach(para => {
        const p = document.createElement('p');
        p.innerText = para;
        genBody.appendChild(p);
    });

    // Toggle active state
    generatedStoryActive = true;
    currentReadingStory = null; // deactivate predefined story context

    // Hide loader, show display
    document.getElementById('result-loading').style.display = "none";
    document.getElementById('result-display').style.display = "block";
    
    lucide.createIcons();
}

function copyGeneratedStory() {
    if (!generatedStoryActive) return;

    const textToCopy = `${generatedStoryTitle}\n\n${generatedStoryContent.join('\n\n')}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("✨ कहानी आपके क्लिपबोर्ड पर कॉपी हो गई है!");
    }).catch(err => {
        console.error("कहानियों को कॉपी करने में त्रुटि: ", err);
    });
}

function speakGeneratedStory() {
    toggleTTS();
}


// --- 7. Interactive Feedback & Video Controls ---
function openVideoModal(url, title) {
    const modal = document.getElementById('video-modal');
    document.getElementById('video-modal-title').innerText = title;
    
    // Start video source (safely appending standard configs)
    document.getElementById('youtube-player').src = `${url}?autoplay=1&mute=0&rel=0`;

    // Stop active TTS
    stopTTS();

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = "none";
        document.getElementById('youtube-player').src = ''; // flush player memory
    }, 400);
}

async function submitSuggestion(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const msg = document.getElementById('contact-msg').value.trim();

    if (!name || !email || !msg) return;

    // Show loading spinner/state on button
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading-spinner" style="display:inline-block; width:12px; height:12px; border:2px solid #fff; border-radius:50%; border-top-color:transparent; animation: spin 0.8s linear infinite; margin-right:8px;"></span> Sending...';

    // Inject temporary keyframes if not defined
    if (!document.getElementById('spin-keyframes')) {
        const style = document.createElement('style');
        style.id = 'spin-keyframes';
        style.innerHTML = `@keyframes spin { to { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
    }

    try {
        const response = await fetch("https://formsubmit.co/ajax/ai.kahani.ghar.26@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: msg,
                _subject: `💡 New AI.KAHANI.GHAR Suggestion from ${name}`
            })
        });

        if (response.ok) {
            // Success response
            document.getElementById('contact-form').style.display = "none";
            document.getElementById('contact-success').style.display = "flex";
            
            // Trigger beautiful synth sound chimes for form submission
            initAudioContext();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
            osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.3); // Arpeggio slide up to C6
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.6);
        } else {
            alert("Oops! There was a problem sending your message. Please try again or email us directly at AI.KAHANI.GHAR.26@gmail.com.");
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        }
    } catch (error) {
        console.error("Form submission error:", error);
        alert("Network error! Please check your connection or email us directly at AI.KAHANI.GHAR.26@gmail.com.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
    }
}

function subscribeNewsletter() {
    const email = document.getElementById('news-email').value.trim();
    if (!email) {
        alert("कृपया वैध ईमेल पता दर्ज करें।");
        return;
    }
    alert("🔔 धन्यवाद! आपको हमारे नए एआई कहानियों की सूचना मिलती रहेगी।");
    document.getElementById('news-email').value = '';
}

function rateStory(starsCount) {
    const starIcons = document.querySelectorAll('.stars-rating .star-icon');
    starIcons.forEach((star, index) => {
        if (index < starsCount) {
            star.classList.add('active');
            star.setAttribute('fill', 'var(--accent)');
        } else {
            star.classList.remove('active');
            star.removeAttribute('fill');
        }
    });

    // Play soft thank you chime
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}


// --- 8. Navigation Links Handler ---
function setActiveLink(clickedLink) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));
    clickedLink.classList.add('active');
}

// Mobile Menu Navigation drawer
function toggleMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementById('menu-icon');
    
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

function closeMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementById('menu-icon');
    nav.classList.remove('open');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
}


// --- 9. Language Toggle System (हिंदी ↔ English) ---
let currentLang = 'en'; // default English

const translations = {
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-stories": "Stories",
        "nav-generator": "AI Creator",
        "nav-videos": "YouTube Gallery",
        "nav-about": "About Us",
        "nav-sound-btn": "Music",
        "nav-subscribe": '<i data-lucide="youtube"></i> AI.KAHANI.GHAR',

        // Hero
        "hero-badge": '<i data-lucide="sparkles"></i> India\'s First AI Hindi Story Platform',
        "hero-title": "AI Kahani Ghar",
        "hero-subtitle": 'Where modern <span>Artificial Intelligence (AI)</span> and ancient <span>human imagination</span> weave together a magical world of words. From mysterious haunted ruins to astonishing sci-fi journeys beyond the stars...',
        "hero-btn-read": '<i data-lucide="book-open"></i> Read Stories',
        "hero-btn-generate": '<i data-lucide="wand-2"></i> Create Your Story',
        "stat-sub-lbl": "YouTube Family",
        "stat-story-lbl": "Magical Stories",
        "stat-views-lbl": "Total Views",

        // Stories Section
        "stories-title": "Magical Stories",
        "stories-subtitle": "Choose your favorite genre and embark on a mysterious journey.",
        "genre-all": '<i data-lucide="layout-grid"></i> All Genres',
        "genre-horror": "👻 Mystery & Horror",
        "genre-magic": "🧚 Magic & Fairies",
        "genre-moral": "🌱 Wisdom & Morals",
        "genre-scifi": "🚀 Sci-Fi & Future",

        // AI Generator
        "gen-section-title": "AI Story Creator",
        "gen-section-subtitle": "Enter your idea and our AI will instantly craft a unique Hindi story for you!",
        "gen-hero-label": "Main Character",
        "gen-setting-label": "Setting / Location",
        "gen-genre-label": "Story Genre",
        "gen-genre-horror": "👻 Horror / Mystery",
        "gen-genre-magic": "🧚 Magical / Fairy Tale",
        "gen-genre-scifi": "🚀 Sci-Fi / Future",
        "gen-genre-moral": "🌱 Moral / Wisdom",
        "gen-btn": '<i data-lucide="wand-2"></i> Generate Story with AI',
        "gen-loading-text": "AI is weaving a magical story for you...",
        "gen-copy-btn": '<i data-lucide="copy"></i> Copy',
        "gen-speak-btn": '<i data-lucide="mic"></i> Listen',

        // Videos Section
        "videos-title": "YouTube Video Gallery",
        "videos-subtitle": "Watch our most popular AI-animated cinematic Hindi stories.",
        "banner-title": "Don't want to miss new videos?",
        "banner-desc": "Hit the red bell button to watch exciting new Hindi story videos every Tuesday and Saturday at 6 PM.",
        "banner-btn": '<i data-lucide="youtube"></i> Join AI.KAHANI.GHAR',

        // About Section
        "about-subheading": '<i data-lucide="info"></i> About Us',
        "about-title": "Who is AI.KAHANI.GHAR?",
        "about-desc": "We are a group of artists, storytellers, and tech enthusiasts on a mission to revive Hindi literature and folklore in the digital age.",
        "step1-title": "1. Creative Prompts",
        "step1-desc": "We use modern language models (AI) to draft creative, suspenseful, and unique Hindi stories.",
        "step2-title": "2. AI Visual Art",
        "step2-desc": "Using tools like Midjourney and Stable Diffusion, we bring story characters and worlds to life.",
        "step3-title": "3. Cinematic Experience (Sound & Voice)",
        "step3-desc": "With grand sound effects and sweet Hindi voiceover, we create videos that mesmerize you.",

        // Contact Form
        "contact-title": "💡 Suggest Your Story Idea",
        "contact-desc": 'If you have a unique idea or folk tale, send it below or email us directly at <strong><a href="mailto:AI.KAHANI.GHAR.26@GMAIL.COM" style="color: var(--secondary); text-decoration: none;">AI.KAHANI.GHAR.26@GMAIL.COM</a></strong>.',
        "contact-btn": '<i data-lucide="send"></i> Send Suggestion',
        "contact-success": "Thank you! Your suggestion has been sent.<br><small style='display:block;margin-top:8px;opacity:0.85;line-height:1.4;'><b>Note for Admin:</b> If emails aren't arriving, check your <b>AI.KAHANI.GHAR.26@gmail.com</b> inbox (and Spam folder) for an activation email from <b>FormSubmit.co</b> and click the activation button to verify your form.</small>",

        // Footer
        "footer-desc": "A divine collection of Hindi stories born from the union of art and science.",
        "footer-yt-link-text": "YouTube: AI.KAHANI.GHAR",
        "footer-links-title": "Quick Links",
        "footer-home": "Home",
        "footer-stories": "Story Collection",
        "footer-gen": "AI Story Machine",
        "footer-videos": "Videos",
        "footer-genres-title": "Categories",
        "footer-cat-horror": "Horror Stories",
        "footer-cat-magic": "Fairy World",
        "footer-cat-moral": "Moral Stories",
        "footer-cat-scifi": "Sci-Fi",
        "newsletter-title": "Story Dose",
        "newsletter-desc": "Register to receive email notifications about our new stories and podcasts.",
        "footer-copyright": "© 2026 AI.KAHANI.GHAR. All rights reserved. | Crafted with love by AI.",

        // Reader Modal
        "reader-yt-btn": '<i data-lucide="youtube"></i> Watch Video on AI.KAHANI.GHAR',
        "video-modal-sub": '<i data-lucide="youtube"></i> Subscribe to Our Channel',

        // Placeholders
        "search-placeholder": "Search stories by title or keyword...",
        "contact-name-placeholder": "Your Name",
        "contact-email-placeholder": "Your Email",
        "contact-msg-placeholder": "Your story plot or suggestion...",
        "newsletter-placeholder": "Your Email...",
        "gen-hero-placeholder": "e.g. Brave princess, old sage",
        "gen-setting-placeholder": "e.g. Enchanted forest, space station"
    },
    hi: {
        "nav-home": "मुख्य",
        "nav-stories": "कहानियाँ",
        "nav-generator": "एआई रचयिता",
        "nav-videos": "यूट्यूब गैलरी",
        "nav-about": "हमारे बारे में",
        "nav-sound-btn": "संगीत",
        "nav-subscribe": '<i data-lucide="youtube"></i> AI.कहानी घर',

        "hero-badge": '<i data-lucide="sparkles"></i> भारत का पहला एआई हिंदी कहानी मंच',
        "hero-title": "एआई कहानी घर",
        "hero-subtitle": 'जहाँ आधुनिक <span>कृत्रिम बुद्धिमत्ता (AI)</span> और पौराणिक <span>इंसानी कल्पना</span> मिलकर रचते हैं शब्दों का जादुई संसार। रहस्यमयी भूतिया खंडहेरों से लेकर सितारों के पार विज्ञान की अद्भुत यात्राओं तक...',
        "hero-btn-read": '<i data-lucide="book-open"></i> कहानियाँ पढ़ें',
        "hero-btn-generate": '<i data-lucide="wand-2"></i> अपनी कहानी बनाएँ',
        "stat-sub-lbl": "यूट्यूब परिवार",
        "stat-story-lbl": "जादुई कहानियाँ",
        "stat-views-lbl": "कुल व्यूज",

        "stories-title": "जादुई कहानियाँ",
        "stories-subtitle": "अपनी मनपसंद विधा चुनें और रहस्यमयी यात्रा पर निकल पड़ें।",
        "genre-all": '<i data-lucide="layout-grid"></i> सभी शैलियाँ',
        "genre-horror": "👻 रहस्य और डर",
        "genre-magic": "🧚 जादू और परियाँ",
        "genre-moral": "🌱 ज्ञान और नीति",
        "genre-scifi": "🚀 भविष्य और विज्ञान",

        "gen-section-title": "एआई कहानी रचयिता",
        "gen-section-subtitle": "अपनी सोच बताइए और हमारा एआई तुरंत रचेगा आपके लिए एक अनोखी हिंदी कहानी!",
        "gen-hero-label": "मुख्य पात्र",
        "gen-setting-label": "जगह / सेटिंग",
        "gen-genre-label": "कहानी की शैली",
        "gen-genre-horror": "👻 भूतिया / रहस्य",
        "gen-genre-magic": "🧚 जादुई / परी-कथा",
        "gen-genre-scifi": "🚀 साइंस-फिक्शन / भविष्य",
        "gen-genre-moral": "🌱 शिक्षाप्रद / नीति",
        "gen-btn": '<i data-lucide="wand-2"></i> एआई से कहानी बनाएँ',
        "gen-loading-text": "एआई आपके लिए एक जादुई कहानी रच रहा है...",
        "gen-copy-btn": '<i data-lucide="copy"></i> कॉपी करें',
        "gen-speak-btn": '<i data-lucide="mic"></i> सुनें',

        "videos-title": "यूट्यूब वीडियो गैलरी",
        "videos-subtitle": "हमारी सबसे लोकप्रिय एआई-एनिमेटेड सिनेमैटिक हिंदी कहानियों के वीडियो देखें।",
        "banner-title": "क्या आप नए वीडियो मिस नहीं करना चाहते?",
        "banner-desc": "हर मंगलवार और शनिवार को शाम 6 बजे रोमांचक नई हिंदी कहानियों के वीडियो देखने के लिए तुरंत लाल घंटी वाला बटन दबाएँ।",
        "banner-btn": '<i data-lucide="youtube"></i> AI.कहानी घर से जुड़ें',

        "about-subheading": '<i data-lucide="info"></i> हमारे बारे में',
        "about-title": "AI.KAHANI.GHAR कौन है?",
        "about-desc": "हम कलाकारों, कहानीकारों और तकनीक-प्रेमियों का एक समूह हैं जो हिंदी साहित्य और पौराणिक लोककथाओं को डिजिटल युग में पुनर्जीवित करने के मिशन पर निकले हैं।",
        "step1-title": "1. जादुई पटकथा (Creative Prompts)",
        "step1-desc": "हम आधुनिक भाषाई मॉडल्स (AI) की मदद से रचनात्मक, सस्पेंस और रहस्यों से भरी अनोखी हिंदी कहानियों के ड्रॉफ्ट तैयार करते हैं।",
        "step2-title": "2. एआई कलाकृतियाँ (AI Visual Art)",
        "step2-desc": "Midjourney and Stable Diffusion जैसे विज़ुअल टूल्स से हम कहानियों के पात्रों और भव्य दुनिया को सजीव बनाते हैं।",
        "step3-title": "3. सिनेमैटिक अनुभव (Sound & Voice)",
        "step3-desc": "भव्य ध्वनि प्रभाव और मधुर हिंदी वॉइसओवर के मेल से हम एक ऐसा वीडियो बनाते हैं जिसे देखकर आप मंत्रमुग्ध हो जाएँ।",

        "contact-title": "💡 अपनी कहानी का सुझाव दें",
        "contact-desc": 'यदि आपके दिमाग में कोई अनोखा आइडिया या लोककथा है, तो नीचे भेजें या हमें सीधे <strong><a href="mailto:AI.KAHANI.GHAR.26@GMAIL.COM" style="color: var(--secondary); text-decoration: none;">AI.KAHANI.GHAR.26@GMAIL.COM</a></strong> पर ईमेल करें।',
        "contact-btn": '<i data-lucide="send"></i> सुझाव भेजें',
        "contact-success": "धन्यवाद! आपका सुझाव भेज दिया गया है।<br><small style='display:block;margin-top:8px;opacity:0.85;line-height:1.4;'><b>व्यवस्थापक (Admin) के लिए नोट:</b> यदि संदेश ईमेल में नहीं मिल रहे हैं, तो कृपया अपने <b>AI.KAHANI.GHAR.26@gmail.com</b> इनबॉक्स (और स्पैम फ़ोल्डर) में <b>FormSubmit.co</b> से प्राप्त सक्रियण (activation) ईमेल की जांच करें और उसे एक्टिवेट करें।</small>",

        "footer-desc": "कला और विज्ञान के मिलन से उत्पन्न हिंदी कहानियों का दिव्य भंडार।",
        "footer-yt-link-text": "यूट्यूब: AI.कहानी घर",
        "footer-links-title": "त्वरित लिंक्स",
        "footer-home": "मुख्य पृष्ठ",
        "footer-stories": "कहानियों का संग्रह",
        "footer-gen": "एआई कहानी मशीन",
        "footer-videos": "वीडियोस",
        "footer-genres-title": "श्रेणियाँ",
        "footer-cat-horror": "डरावनी कहानियाँ",
        "footer-cat-magic": "परियों की दुनिया",
        "footer-cat-moral": "शिक्षाप्रद कहानियाँ",
        "footer-cat-scifi": "साइंस-फिक्शन",
        "newsletter-title": "कहानी की खुराक",
        "newsletter-desc": "हमारी नई कहानियों और पॉडकास्ट की ईमेल सूचना प्राप्त करने के लिए रजिस्टर करें।",
        "footer-copyright": "© 2026 AI.KAHANI.GHAR. सभी अधिकार सुरक्षित हैं। | एआई के द्वारा निर्मित सप्रेम भेंट।",

        "reader-yt-btn": '<i data-lucide="youtube"></i> AI.कहानी घर पर वीडियो देखें',
        "video-modal-sub": '<i data-lucide="youtube"></i> हमारे चैनल को सब्सक्राइब करें',

        "search-placeholder": "शीर्षक या मुख्य शब्द से कहानी खोजें...",
        "contact-name-placeholder": "आपका नाम",
        "contact-email-placeholder": "आपका ईमेल",
        "contact-msg-placeholder": "आपकी कहानी का प्लॉट या सुझाव...",
        "newsletter-placeholder": "आपका ईमेल...",
        "gen-hero-placeholder": "जैसे: बहादुर राजकुमारी, बूढ़ा साधु",
        "gen-setting-placeholder": "जैसे: जादुई जंगल, अंतरिक्ष स्टेशन"
    }
};

function applyLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Update all placeholder translations
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update the toggle button text
    const langText = document.getElementById('lang-toggle-text');
    const mobileLangText = document.getElementById('mobile-lang-toggle-text');
    if (langText) langText.innerText = currentLang === 'hi' ? 'English' : 'हिंदी';
    if (mobileLangText) mobileLangText.innerText = currentLang === 'hi' ? 'English' : 'हिंदी';

    // Re-render stories grid with correct language
    renderStoriesGrid();

    // Refresh Lucide icons (since innerHTML replacement removes SVGs)
    lucide.createIcons();
}

function toggleLanguage() {
    applyLanguage(currentLang === 'hi' ? 'en' : 'hi');
}


// --- 11. Dynamic YouTube RSS Fetcher ---
async function fetchLatestYouTubeVideos() {
    const grid = document.getElementById('youtube-videos-grid');
    if (!grid) return;

    // Use rss2json to bypass CORS and parse the YouTube RSS feed
    const channelId = 'UCk-ZrVy9FFCj73EX2QO02Eg';
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
            grid.innerHTML = ''; // clear loading state
            
            // Limit to recent 3 videos
            const recentVideos = data.items.slice(0, 3);
            
            recentVideos.forEach((video, index) => {
                // Extract video ID from URL
                const videoId = video.link.split('v=')[1] || video.guid.split(':')[2];
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                
                // Format date roughly
                const pubDate = new Date(video.pubDate);
                const dateStr = pubDate.toLocaleDateString('hi-IN') || pubDate.toLocaleDateString();

                // Assign a badge arbitrarily for UI flare
                let badgeHTML = '<span class="video-badge"><i data-lucide="trending-up"></i> नया (New)</span>';
                if (index === 1) badgeHTML = '<span class="video-badge badge-red">👻 रोमांचक</span>';
                if (index === 2) badgeHTML = '<span class="video-badge badge-blue">🚀 जादुई</span>';

                const card = document.createElement('div');
                card.className = "video-card";
                card.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="video-overlay">
                            <button class="play-btn" onclick="openVideoModal('${embedUrl}', '${video.title.replace(/'/g, "\\'")}')">
                                <i data-lucide="play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="video-info">
                        ${badgeHTML}
                        <h3 class="video-title">${video.title}</h3>
                        <div class="video-meta">
                            <span><i data-lucide="user"></i> ${video.author}</span>
                            <span><i data-lucide="calendar"></i> ${dateStr}</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
            lucide.createIcons();
        } else {
            grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; width: 100%;">अभी कोई नए वीडियो नहीं मिले। कृपया बाद में जाँचें।</p>';
        }
    } catch (error) {
        console.error("YouTube videos fetch failed: ", error);
        grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; width: 100%;">वीडियो लोड करने में त्रुटि। कृपया सीधे यूट्यूब चैनल पर जाएँ।</p>';
    }
}
window.addEventListener('DOMContentLoaded', () => {
    // Apply default language (English) to compile all translated elements immediately on load
    applyLanguage(currentLang);
    
    // Fetch latest YouTube videos automatically
    fetchLatestYouTubeVideos();
    
    // Lucide Icons Render
    lucide.createIcons();

    // Trigger subtle subscriber count counting animation for premium feel
    animateSubscriberCount();
});

function animateSubscriberCount() {
    const subNum = document.getElementById('stat-subscribers');
    const viewNum = document.getElementById('stat-views');
    
    let subVal = 0;
    const subTarget = 50; // K
    const subInterval = setInterval(() => {
        subVal += 1;
        subNum.innerText = `${subVal}K+`;
        if (subVal >= subTarget) {
            clearInterval(subInterval);
        }
    }, 30);

    let viewVal = 0;
    const viewTarget = 100; // tenth parts of million (1M = 10 * 100K)
    const viewInterval = setInterval(() => {
        viewVal += 2;
        viewNum.innerText = `${(viewVal / 100).toFixed(1)}M+`;
        if (viewVal >= viewTarget) {
            clearInterval(viewInterval);
        }
    }, 20);
}
