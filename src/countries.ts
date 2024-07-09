export const continents = {
  europe: "Europe",
  asia: "Asia",
  africa: "Africa",
  northAmerica: "North America",
  southAmerica: "South America",
  oceania: "Oceania",
} as const;

const countries = [
  {
    name: "Afghanistan",
    flag: "🇦🇫",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d13576853.543421444!2d57.14433019917766!3d33.82104724396152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xf3b5460dbe96da78!2sAfghanistan!5e0!3m2!1sen!2sdk!4v1720460051045!5m2!1sen!2sdk",
    funFacts: [
      "Afghanistan is known as the “graveyard of empires” due to the numerous invasions it has withstood throughout history.",
      "Buzkashi is the national sport of Afghanistan, which involves players on horseback trying to place a goat or calf carcass in a goal.",
      "The famous Buddhas of Bamiyan, which were destroyed by the Taliban in 2001, were the tallest standing Buddha statues in the world.",
    ],
  },
  {
    name: "Åland Islands",
    flag: "🇦🇽",
    embedUrl:
      "!1m18!1m12!1m3!1d1016483.330511471!2d18.89560232406993!3d60.15889766947938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ae468c4e1eb19%3A0xcd43f68373428eed!2s%C3%85land%20Islands!5e0!3m2!1sen!2sdk!4v1720526582653!5m2!1sen!2sdk",
    funFacts: [
      "The Åland Islands are an autonomous region of Finland, with Swedish as the official language.",
      "The archipelago of the Åland Islands consists of around 6700 islands, but only about 60 are inhabited.",
      "Åland has its own parliament and issues its own postage stamps.",
    ],
    continent: continents.europe,
  },
  {
    name: "Albania",
    flag: "🇦🇱",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1538376.03559766!2d18.707088346904328!3d41.14236903585715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13453bf3bd274c2d%3A0x77ce589d6983bee!2sAlbania!5e0!3m2!1sen!2sdk!4v1720480472978!5m2!1sen!2sdk",
    funFacts: [
      "Albania has more bunkers per square kilometer than any other country in the world, built during the communist era.",
      "Albania has one of the most diverse weather systems in Europe, with beaches, mountains, and more.",
      "Albania’s capital, Tirana, has a colorful main square with buildings painted in bright hues.",
    ],
  },
  {
    name: "Algeria",
    flag: "🇩🇿",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d14430266.999018325!2d-8.89567784734843!3d27.99345570816247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28037bd1%3A0x7140bee3abd7f8a2!2sAlgeria!5e0!3m2!1sen!2sdk!4v1720460077889!5m2!1sen!2sdk",
    funFacts: [
      "Algeria is the largest country in Africa by land area.",
      "The Sahara Desert covers more than 80% of Algeria.",
      "Algeria has a rich history of Roman architecture, including the well-preserved ruins of Timgad.",
    ],
  },
  {
    name: "American Samoa",
    flag: "🇦🇸",
    embedUrl:
      "!1m18!1m12!1m3!1d1991427.4981990764!2d-170.9300974049114!3d-12.875098027008548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71a684b79248fdc9%3A0xf3ee739e2dae4bdd!2sAmerican%20Samoa!5e0!3m2!1sen!2sdk!4v1720526599740!5m2!1sen!2sdk",
    funFacts: [
      "American Samoa is an unincorporated territory of the United States located in the South Pacific Ocean.",
      "American Samoa is the only U.S. territory where residents are U.S. nationals but not U.S. citizens.",
      "American Samoa is known for its coral reefs and is home to the National Park of American Samoa.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Andorra",
    flag: "🇦🇩",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d3010163.7907039393!2d-1.0366087697750204!3d42.542273283045205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5f52e989ef095%3A0x7c93ed778ea7f92!2sAndorra!5e0!3m2!1sen!2sdk!4v1720460111640!5m2!1sen!2sdk",
    funFacts: [
      "Andorra is the 16th smallest country in the world and has no airport or railway.",
      "Andorra is known for its ski resorts and duty-free shopping.",
      "Andorra has the highest life expectancy in the world at 83.5 years.",
    ],
  },
  {
    name: "Angola",
    flag: "🇦🇴",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d16032887.397709148!2d7.211357457860649!3d-11.166955214580168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24ecaad8b27%3A0x590a289d0d4a4e3d!2sAngola!5e0!3m2!1sen!2sdk!4v1720460157362!5m2!1sen!2sdk",
    funFacts: [
      "Angola has one of the fastest-growing economies in the world, largely due to its oil reserves.",
      "The Giant Sable Antelope, thought to be extinct, was rediscovered in Angola in 2006.",
      "Angola’s capital, Luanda, is one of the most expensive cities in the world for expats.",
    ],
  },
  {
    name: "Anguilla",
    flag: "🇦🇮",
    embedUrl:
      "!1m18!1m12!1m3!1d242308.29375307748!2d-63.36495810275824!3d18.38979749011201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e63748eef01e5%3A0x3b9d6ad384e0d481!2sAnguilla!5e0!3m2!1sen!2sdk!4v1720526616921!5m2!1sen!2sdk",
    funFacts: [
      "Anguilla is a British overseas territory in the Caribbean known for its stunning beaches and clear turquoise waters.",
      "Anguilla has a strong music culture, particularly known for its annual Anguilla Summer Festival featuring boat racing and calypso music.",
      "Anguilla is named after the Spanish word for eel due to its elongated shape.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Antarctica",
    flag: "🇦🇶",
    embedUrl:
      "!1m18!1m12!1m3!1d25138408.699560937!2d0!3d-67.3835390039519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarctica!5e0!3m2!1sen!2sdk!4v1720526632978!5m2!1sen!2sdk",
    funFacts: [
      "Antarctica is the coldest, driest, and windiest continent, with temperatures reaching as low as -89.2°C.",
      "Antarctica is the only continent without a native human population, and its inhabitants are mainly scientists and researchers.",
      "Antarctica contains about 70% of the world’s freshwater in the form of ice.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Antigua and Barbuda",
    flag: "🇦🇬",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d1950101.0195914188!2d-63.32861309062236!3d17.325627710190563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0d6eb96db8d1c1%3A0x276a3788e18b7994!2sAntigua%20and%20Barbuda!5e0!3m2!1sen!2sdk!4v1720460211987!5m2!1sen!2sdk",
    funFacts: [
      "Antigua and Barbuda is known for having 365 beaches, one for each day of the year.",
      "Antigua and Barbuda is famous for its annual Sailing Week, a major international event.",
      "Antigua and Barbuda was among the first Caribbean countries to gain independence from Britain, in 1981.",
    ],
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d26270044.081302293!2d-84.81151417101044!3d-36.510870908271954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1sen!2sdk!4v1720460255396!5m2!1sen!2sdk",
    funFacts: [
      "Argentina is the eighth-largest country in the world by land area.",
      "Argentina is the birthplace of the tango dance and music.",
      "The highest peak in the Americas, Aconcagua, is located in Argentina.",
    ],
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d6253663.755539335!2d39.7667215824152!3d40.06321462350852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sArmenia!5e0!3m2!1sen!2sdk!4v1720460276718!5m2!1sen!2sdk",
    funFacts: [
      "Armenia is home to the world’s oldest winery, dating back 6100 years.",
      "Armenia was the first country to adopt Christianity as the state religion, in 301 AD.",
      "Mount Ararat, where Noah’s Ark is believed to have landed, is a national symbol of Armenia.",
    ],
  },
  {
    name: "Aruba",
    flag: "🇦🇼",
    embedUrl:
      "!1m18!1m12!1m3!1d124638.94507596822!2d-70.04968973408248!3d12.518342912093198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8538cfe25a77db%3A0xf16a8a3e89818c2f!2sAruba!5e0!3m2!1sen!2sdk!4v1720526646398!5m2!1sen!2sdk",
    funFacts: [
      "Aruba is a constituent country of the Kingdom of the Netherlands located in the southern Caribbean Sea.",
      "Aruba is known for its white-sand beaches, constant trade winds, and arid landscape.",
      "Aruba’s capital, Oranjestad, features colorful Dutch colonial architecture.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Ascension Island",
    flag: "🇦🇨",
    embedUrl:
      "!1m18!1m12!1m3!1d63224.914410916026!2d-14.399236283130925!3d-7.941231673147612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5b0f4126dd69e2d%3A0x40d606a7f1eda1e7!2sAscension%20Island!5e0!3m2!1sen!2sdk!4v1720526663408!5m2!1sen!2sdk",
    funFacts: [
      "Ascension Island is an isolated volcanic island in the South Atlantic Ocean and part of the British Overseas Territory of Saint Helena, Ascension, and Tristan da Cunha.",
      "Ascension Island was a crucial naval and air base during World War II.",
      "Ascension Island is home to the Green Mountain, which has a unique artificial rainforest created through reforestation efforts.",
    ],
    continent: continents.africa,
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d29724302.509950157!2d111.88944400245386!3d-24.573492425605785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sdk!4v1720460293111!5m2!1sen!2sdk",
    funFacts: [
      "Australia is home to more kangaroos than people.",
      "Australia’s Great Barrier Reef is the largest coral reef system in the world.",
      "Australia has over 10000 beaches, more than any other country.",
    ],
  },
  {
    name: "Austria",
    flag: "🇦🇹",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5502847.175082705!2d8.0705252793393!3d47.666218370879285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079b259d2a7f%3A0x1012d47bdde4c1af!2sAustria!5e0!3m2!1sen!2sdk!4v1720460319742!5m2!1sen!2sdk",
    funFacts: [
      "Austria is famous for its classical music heritage, being the birthplace of Mozart and Beethoven.",
      "Vienna, the capital of Austria, has been named the world’s most livable city multiple times.",
      "Austria is home to the world’s oldest zoo, Tiergarten Schönbrunn, founded in 1752.",
    ],
  },
  {
    name: "Azerbaijan",
    flag: "🇦🇿",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3121994.010170164!2d45.11730525440937!3d40.16851056170714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2sdk!4v1720460343320!5m2!1sen!2sdk",
    funFacts: [
      "Azerbaijan is known as the “Land of Fire” due to its natural gas reserves and burning hillsides.",
      "The capital of Azerbaijan, Baku, is famous for its medieval walled old city and modern architecture.",
      "Azerbaijan has a tradition of mugham, a genre of music that combines classical poetry and musical improvisation.",
    ],
  },
  {
    name: "Bahamas",
    flag: "🇧🇸",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d14881299.825955143!2d-86.51725253802891!3d24.41155639919511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d69a3bb2480f3d%3A0x133eb4836ac779e5!2sThe%20Bahamas!5e0!3m2!1sen!2sdk!4v1720460380013!5m2!1sen!2sdk",
    funFacts: [
      "The Bahamas is made up of over 700 islands and cays, only about 30 of which are inhabited.",
      "The world’s third largest barrier reef is located in the Bahamas.",
      "The Bahamas is one of the few countries where you can swim with pigs, specifically on Pig Beach in Exuma.",
    ],
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1836987.5505109532!2d48.97499294537495!3d25.93961414527549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48524e6a47a211%3A0x2e9450e2dbda1046!2sBahrain!5e0!3m2!1sen!2sdk!4v1720460400632!5m2!1sen!2sdk",
    funFacts: [
      "Bahrain is an archipelago of 33 islands in the Persian Gulf.",
      "Bahrain is known for its pearl diving history and ancient Dilmun civilization.",
      "Bahrain hosts the Formula 1 Bahrain Grand Prix, the first Formula 1 race held in the Middle East.",
    ],
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d14988640.27065198!2d79.7937712910696!3d23.48440406637053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sdk!4v1720460416699!5m2!1sen!2sdk",
    funFacts: [
      "Bangladesh has the world’s largest river delta, formed by the Ganges, Brahmaputra, and Meghna rivers.",
      "Bangladesh is home to the Sundarbans, the largest mangrove forest in the world and a UNESCO World Heritage site.",
      "Bangladesh is known for its vibrant textile industry, being one of the largest garment exporters in the world.",
    ],
  },
  {
    name: "Barbados",
    flag: "🇧🇧",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d248613.82887999975!2d-59.700053679311885!3d13.188163487966253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f1fbae321aa3%3A0xeec51b38cf4362b!2sBarbados!5e0!3m2!1sen!2sdk!4v1720460441694!5m2!1sen!2sdk",
    funFacts: [
      "Barbados is the birthplace of rum, with Mount Gay Rum being the world’s oldest brand.",
      "The island of Barbados is famous for its flying fish, a local delicacy.",
      "Barbados is one of the Caribbean’s leading tourist destinations, known for its beautiful beaches and coral reefs.",
    ],
  },
  {
    name: "Belarus",
    flag: "🇧🇾",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d9677561.608884908!2d17.429539391930287!3d53.688222578723135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2sdk!4v1720460462359!5m2!1sen!2sdk",
    funFacts: [
      "Belarus is known for its vast forests, covering around 40% of the country’s land area.",
      "Minsk, the capital of Belarus, was almost completely rebuilt after World War II and is known for its Soviet-era architecture.",
      "Belarus is home to the Mir Castle Complex, a UNESCO World Heritage site dating back to the 16th century.",
    ],
  },
  {
    name: "Belgium",
    flag: "🇧🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5198196.095533345!2d-0.8077926524988134!3d50.49357619339351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2sBelgium!5e0!3m2!1sen!2sdk!4v1720460484503!5m2!1sen!2sdk",
    funFacts: [
      "Belgium is famous for its chocolate, waffles, fries, and beer.",
      "Belgium has three official languages: Dutch, French, and German.",
      "Belgium is home to the headquarters of the European Union and NATO.",
    ],
  },
  {
    name: "Belize",
    flag: "🇧🇿",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d7806290.2472803695!2d-93.59450715407368!3d17.186491907371632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c5b3ec112faf9%3A0xf64a8a4d3f1ee34e!2sBelize!5e0!3m2!1sen!2sdk!4v1720460515562!5m2!1sen!2sdk",
    funFacts: [
      "Belize is the only country in Central America with English as the official language.",
      "Belize is home to the Great Blue Hole, a giant marine sinkhole and a popular diving site.",
      "Belize has the second longest barrier reef in the world, the Belize Barrier Reef.",
    ],
  },
  {
    name: "Benin",
    flag: "🇧🇯",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d16127596.738849908!2d-8.241835633533329!3d9.29764212149342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023542b047a5695%3A0xecb277f8cb622ef5!2sBenin!5e0!3m2!1sen!2sdk!4v1720460538181!5m2!1sen!2sdk",
    funFacts: [
      "Benin is the birthplace of the vodun (voodoo) religion.",
      "The city of Ouidah in Benin hosts an annual Voodoo Festival, attracting visitors from around the world.",
      "Benin is known for its vibrant arts scene, particularly its bronze and brass sculptures.",
    ],
  },
  {
    name: "Bermuda",
    flag: "🇧🇲",
    embedUrl:
      "!1m18!1m12!1m3!1d215791.17596532582!2d-65.07821575512901!3d32.31891539408456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a2d139e8668b0a5%3A0x3cdffdc72c99b8bc!2sBermuda!5e0!3m2!1sen!2sdk!4v1720526685094!5m2!1sen!2sdk",
    funFacts: [
      "Bermuda is a British Overseas Territory located in the North Atlantic Ocean, known for its pink-sand beaches.",
      "Bermuda is famous for the Bermuda Triangle, a region where ships and planes are said to have mysteriously disappeared.",
      "Bermuda has one of the highest per capita incomes in the world.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Bhutan",
    flag: "🇧🇹",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3625507.907912674!2d86.61753635277537!3d27.452596835162115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b92a573c595cf%3A0xbb0cac652836bcda!2sBhutan!5e0!3m2!1sen!2sdk!4v1720460570852!5m2!1sen!2sdk",
    funFacts: [
      "Bhutan measures its success by Gross National Happiness rather than Gross Domestic Product.",
      "Bhutan is known for its stunning monasteries, including the cliffside Paro Taktsang (Tiger’s Nest).",
      "Bhutan is the only carbon-negative country in the world, absorbing more CO2 than it produces.",
    ],
  },
  {
    name: "Bolivia",
    flag: "🇧🇴",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d15691992.828148734!2d-74.1155833970223!3d-16.217718036842165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115edbf!2sBolivia!5e0!3m2!1sen!2sdk!4v1720460586863!5m2!1sen!2sdk",
    funFacts: [
      "Bolivia has two capitals: Sucre (constitutional capital) and La Paz (seat of government and executive capital).",
      "The Uyuni Salt Flat in Bolivia is the largest salt flat in the world and can be seen from space.",
      "Bolivia is home to Lake Titicaca, the highest navigable lake in the world.",
    ],
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5888839.951684121!2d11.223295538313472!3d43.88877171581225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ba215c737a9d7%3A0x6df7e20343b7e90c!2sBosnia%20and%20Herzegovina!5e0!3m2!1sen!2sdk!4v1720460609316!5m2!1sen!2sdk",
    funFacts: [
      "Bosnia and Herzegovina has one of the last remaining jungles in Europe, Perucica Forest.",
      "Sarajevo, the capital of Bosnia and Herzegovina, hosted the Winter Olympics in 1984.",
      "The Stari Most (Old Bridge) in Mostar is a UNESCO World Heritage site and a symbol of reconciliation.",
    ],
  },
  {
    name: "Botswana",
    flag: "🇧🇼",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d15117728.545006346!2d14.136441247365722!3d-22.32144788197315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea44321d1452211%3A0xf1647c2a8715af7b!2sBotswana!5e0!3m2!1sen!2sdk!4v1720460628342!5m2!1sen!2sdk",
    funFacts: [
      "Botswana is home to the Okavango Delta, one of the largest inland deltas in the world.",
      "Botswana has one of the highest concentrations of elephants in Africa.",
      "Botswana is one of the world’s largest producers of diamonds.",
    ],
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d31689938.96931172!2d-72.51592021830949!3d-14.171290340759917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sdk!4v1720460646062!5m2!1sen!2sdk",
    funFacts: [
      "Brazil is the largest country in South America and the fifth largest in the world.",
      "The Amazon Rainforest, the largest tropical rainforest in the world, is located in Brazil.",
      "Brazil is famous for its annual Carnival festival, the largest in the world.",
    ],
  },
  {
    name: "British Indian Ocean Territory",
    flag: "🇮🇴",
    embedUrl:
      "!1m18!1m12!1m3!1d1015197.3735071073!2d71.22756614315223!3d-6.314233928977256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x249273e0849da387%3A0xa94f6470101f6be1!2sBritish%20Indian%20Ocean%20Territory!5e0!3m2!1sen!2sdk!4v1720526699994!5m2!1sen!2sdk",
    funFacts: [
      "The British Indian Ocean Territory consists of the Chagos Archipelago, located in the Indian Ocean.",
      "Diego Garcia, the largest island of the British Indian Ocean Territory, hosts a major U.S. military base.",
      "The indigenous Chagossian people were forcibly removed from the islands in the 1960s and 1970s to make way for the military base.",
    ],
    continent: continents.asia,
  },
  {
    name: "British Virgin Islands",
    flag: "🇻🇬",
    embedUrl:
      "!1m18!1m12!1m3!1d484161.72048265516!2d-64.8682796555537!3d18.550876980642684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c05739c2b6453cd%3A0x6da070eeb1ec3b3d!2sBritish%20Virgin%20Islands!5e0!3m2!1sen!2sdk!4v1720526713389!5m2!1sen!2sdk",
    funFacts: [
      "The British Virgin Islands (BVI) is a British Overseas Territory located in the Caribbean, known for its reef-lined beaches and yacht-filled harbors.",
      "The British Virgin Islands consists of over 50 islands and cays, with Tortola being the largest and most populated.",
      "The British Virgin Islands are a popular offshore financial center with a large number of registered companies.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Brunei",
    flag: "🇧🇳",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d2036351.5221835678!2d112.81222608870597!3d4.549146200183314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218994b04b8b9d1%3A0x5dfe3580dd09dad6!2sBrunei!5e0!3m2!1sen!2sdk!4v1720460666592!5m2!1sen!2sdk",
    funFacts: [
      "Brunei is one of the richest countries in the world due to its extensive petroleum and natural gas fields.",
      "The Sultan of Brunei is one of the world’s longest-reigning monarchs.",
      "Brunei is home to the largest residential palace in the world, Istana Nurul Iman.",
    ],
  },
  {
    name: "Bulgaria",
    flag: "🇧🇬",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d6005568.694171704!2d20.267510228274947!3d42.695110871976944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2sBulgaria!5e0!3m2!1sen!2sdk!4v1720460693094!5m2!1sen!2sdk",
    funFacts: [
      "Bulgaria is one of the oldest countries in Europe, founded in 681 AD.",
      "The Cyrillic alphabet was created in Bulgaria.",
      "Bulgaria is famous for its rose oil, used in perfumes around the world.",
    ],
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7985564.4314159015!2d-6.832130365722187!3d12.234639629828756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2dca26d5a6709b%3A0x27930aed46836dab!2sBurkina%20Faso!5e0!3m2!1sen!2sdk!4v1720460708859!5m2!1sen!2sdk",
    funFacts: [
      "Burkina Faso means “Land of Honest People.”",
      "Burkina Faso is known for its rich cultural heritage, including the annual FESPACO film festival in Ouagadougou.",
      "Burkina Faso is one of the top producers of cotton in Africa.",
    ],
  },
  {
    name: "Burundi",
    flag: "🇧🇮",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4078427.802237355!2d27.288301708249023!3d-3.3893054947623082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c144d33654f15b%3A0xb1234d0e5631ec8d!2sBurundi!5e0!3m2!1sen!2sdk!4v1720460727260!5m2!1sen!2sdk",
    funFacts: [
      "Burundi is one of the smallest countries in Africa, both in area and population.",
      "Lake Tanganyika, one of the world’s deepest and oldest lakes, forms part of Burundi’s border.",
      "Burundi has a rich tradition of drumming, with the Royal Drummers of Burundi being internationally renowned.",
    ],
  },
  {
    name: "Cabo Verde",
    flag: "🇨🇻",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7853860.444288487!2d-29.263019738340134!3d16.019095261766132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358f2159115131%3A0x6b1af236f918ea1f!2sCabo%20Verde!5e0!3m2!1sen!2sdk!4v1720461109492!5m2!1sen!2sdk",
    funFacts: [
      "Cabo Verde is an archipelago of 10 volcanic islands in the central Atlantic Ocean.",
      "Cabo Verde is known for its unique Creole Portuguese-African culture.",
      "Cabo Verde’s island of Sal is famous for its salt mines and beautiful beaches.",
    ],
  },
  {
    name: "Cambodia",
    flag: "🇰🇭",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7988344.288782639!2d99.70804714118484!3d12.14231537387166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2sdk!4v1720461134921!5m2!1sen!2sdk",
    funFacts: [
      "Cambodia is home to Angkor Wat, the largest religious monument in the world.",
      "The Khmer Empire, which once ruled Cambodia, was one of the most powerful empires in Southeast Asia.",
      "Cambodia’s flag is one of the few to feature a building: Angkor Wat.",
    ],
  },
  {
    name: "Cameroon",
    flag: "🇨🇲",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d16208432.805775607!2d1.7259306226790656!3d7.338517334177537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroon!5e0!3m2!1sen!2sdk!4v1720461158684!5m2!1sen!2sdk",
    funFacts: [
      "Cameroon is known as “Africa in Miniature” due to its diverse geography and culture.",
      "Cameroon is home to Mount Cameroon, the highest peak in Central and West Africa.",
      "Cameroon is famous for its music, particularly makossa and bikutsi.",
    ],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d19119302.433658063!2d-116.73720973810401!3d54.19956842864173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sdk!4v1720461178127!5m2!1sen!2sdk",
    funFacts: [
      "Canada is the second largest country in the world by land area.",
      "Canada has the longest coastline of any country, stretching over 202080 kilometers.",
      "Canada is known for its multicultural cities, stunning natural landscapes, and friendly people.",
    ],
  },
  {
    name: "Canary Islands",
    flag: "🇮🇨",
    embedUrl:
      "!1m18!1m12!1m3!1d1796288.1048900336!2d-17.172441176010604!3d28.438103824193867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41aa86ef755363%3A0x10340f3be4bc8c0!2sCanary%20Islands%2C%20Spain!5e0!3m2!1sen!2sdk!4v1720526727471!5m2!1sen!2sdk",
    funFacts: [
      "The Canary Islands are an autonomous community of Spain located off the northwest coast of Africa.",
      "The archipelago of the Canary Islands consists of seven main islands, with Tenerife being the largest and most populous.",
      "The Canary Islands have a subtropical climate and are a popular tourist destination known for their volcanic landscapes and beaches.",
    ],
    continent: continents.africa,
  },
  {
    name: "Caribbean Netherlands",
    flag: "🇧🇶",
    embedUrl:
      "!1m18!1m12!1m3!1d3950076.5608877465!2d-68.35972663601937!3d14.797359063621057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c22188b8f1db9b7%3A0xe16d35d72183b5cf!2sCaribbean%20Netherlands!5e0!3m2!1sen!2sdk!4v1720526738950!5m2!1sen!2sdk",
    funFacts: [
      "The Caribbean Netherlands consists of three special municipalities of the Netherlands: Bonaire, Sint Eustatius, and Saba.",
      "The Bonaire municipality of Caribbean Netherlands is known for its world-class diving and snorkeling sites, particularly in the Bonaire National Marine Park.",
      "The Saba municipality of Caribbean Netherlands is home to Mount Scenery, the highest point in the Kingdom of the Netherlands.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Cayman Islands",
    flag: "🇰🇾",
    embedUrl:
      "!1m18!1m12!1m3!1d962768.8658177969!2d-81.23364647978899!3d19.506555615930875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25863e2fb8aa29%3A0x7045c4d38770715e!2sCayman%20Islands!5e0!3m2!1sen!2sdk!4v1720526760185!5m2!1sen!2sdk",
    funFacts: [
      "The Cayman Islands are a British Overseas Territory located in the western Caribbean Sea, known for their stunning beaches and coral reefs.",
      "The Cayman Islands are a major financial center, with more registered businesses than people.",
      "The Cayman Islands are famous for Stingray City, where visitors can interact with friendly stingrays.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Central African Republic",
    flag: "🇨🇫",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d16236652.454253897!2d5.540099557886529!3d6.518332122134568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8e9538d86a2b7%3A0xb89bc6025a5c8024!2sCentral%20African%20Republic!5e0!3m2!1sen!2sdk!4v1720461198374!5m2!1sen!2sdk",
    funFacts: [
      "The Central African Republic is home to the Dzanga-Sangha Reserve, known for its biodiversity and forest elephants.",
      "The Ubangi River forms part of the southern border of the Central African Republic.",
      "Despite its natural resources, the Central African Republic is one of the poorest countries in the world.",
    ],
  },
  {
    name: "Chad",
    flag: "🇹🇩",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d15756673.551497001!2d8.1685579010741!3d15.384925715265801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10e73978bd677361%3A0x3b60835bcec0809c!2sChad!5e0!3m2!1sen!2sdk!4v1720461215696!5m2!1sen!2sdk",
    funFacts: [
      "Chad is named after Lake Chad, which is the largest wetland in Chad and the second-largest in Africa.",
      "The Sahara Desert covers much of northern Chad.",
      "Chad is known for its unique rock formations, such as the Ennedi Plateau.",
    ],
  },
  {
    name: "Chile",
    flag: "🇨🇱",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d26974178.716126516!2d-91.23754032825109!3d-34.38236912308441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e0!3m2!1sen!2sdk!4v1720461254771!5m2!1sen!2sdk",
    funFacts: [
      "Chile is the longest north-south country in the world, stretching over 4300 kilometers.",
      "Chile is home to the Atacama Desert, the driest desert in the world.",
      "Chile has over 2000 volcanoes, about 500 of which are potentially active.",
    ],
  },
  {
    name: "China",
    flag: "🇨🇳",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d28781680.207509838!2d62.44217581810325!3d28.286547311438493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sdk!4v1720461272201!5m2!1sen!2sdk",
    funFacts: [
      "China is the most populous country in the world, with over 1.4 billion people.",
      "The Great Wall of China is the longest wall in the world, stretching over 13000 miles.",
      "China has the world’s oldest continuous civilization, with history dating back over 5000 years.",
    ],
  },
  {
    name: "Christmas Island",
    flag: "🇨🇽",
    embedUrl:
      "!1m18!1m12!1m3!1d125539.31283518567!2d105.54131924054721!3d-10.492504690027538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ef59a27e3c0a7cf%3A0x15e7d6090475ea16!2sChristmas%20Island!5e0!3m2!1sen!2sdk!4v1720526774435!5m2!1sen!2sdk",
    funFacts: [
      "Christmas Island is an Australian external territory located in the Indian Ocean, known for its unique red crab migration.",
      "Christmas Island is named after the day of its discovery, December 25, 1643.",
      "Christmas Island National Park covers about 63% of the island and is home to many endemic species.",
    ],
    continent: continents.asia,
  },
  {
    name: "Cocos (Keeling) Islands",
    flag: "🇨🇨",
    embedUrl:
      "!1m18!1m12!1m3!1d249753.68896354482!2d96.70825555875088!3d-12.015863885114658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0ec5897ee869c1%3A0xdbd142f010e39fa6!2sCocos%20(Keeling)%20Islands!5e0!3m2!1sen!2sdk!4v1720526795143!5m2!1sen!2sdk",
    funFacts: [
      "The Cocos (Keeling) Islands are an Australian external territory in the Indian Ocean, consisting of two atolls and 27 coral islands.",
      "The Cocos (Keeling) Islands are known for their stunning white-sand beaches and clear turquoise waters.",
      "The population of the Cocos (Keeling) Islands is mainly of Malay descent, and the islands have a unique blend of Australian and Malay cultures.",
    ],
    continent: continents.asia,
  },
  {
    name: "Colombia",
    flag: "🇨🇴",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d16255820.807705374!2d-84.90725285090663!3d5.896823843501623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1sen!2sdk!4v1720461293398!5m2!1sen!2sdk",
    funFacts: [
      "Colombia is the second most biodiverse country in the world, after Brazil.",
      "Colombia is known for its coffee, which is considered some of the best in the world.",
      "Colombia has coastlines on both the Pacific Ocean and the Caribbean Sea.",
    ],
  },
  {
    name: "Comoros",
    flag: "🇰🇲",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d1998864.4242434306!2d42.562353146629825!3d-11.902854765467044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1898e3036408a48d%3A0xf70a7fbee4dfd4db!2sComoros!5e0!3m2!1sen!2sdk!4v1720461315094!5m2!1sen!2sdk",
    funFacts: [
      "Comoros is an archipelago in the Indian Ocean, located between Madagascar and the coast of Mozambique.",
      "Comoros is one of the world’s top producers of ylang-ylang, a flower used in perfumes.",
      "Comoros is the only country in the Arab League that is entirely in the Southern Hemisphere.",
    ],
  },
  {
    name: "Cook Islands",
    flag: "🇨🇰",
    embedUrl:
      "!1m18!1m12!1m3!1d7871465.045006248!2d-166.23167718462446!3d-15.565512073231082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71548aefb97bdedd%3A0x24ca50e8808b4d8!2sCook%20Islands!5e0!3m2!1sen!2sdk!4v1720526810974!5m2!1sen!2sdk",
    funFacts: [
      "The Cook Islands is a self-governing territory in free association with New Zealand, located in the South Pacific Ocean.",
      "The Cook Islands are known for their beautiful lagoons, coral reefs, and Polynesian culture.",
      "Rarotonga is the largest island of the Cook Islands, and the most populous, with the capital city, Avarua, located there.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Curaçao",
    flag: "🇨🇼",
    embedUrl:
      "!1m18!1m12!1m3!1d249590.37549594181!2d-69.10067423161841!3d12.19063397567056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e849dbe62c7fdc7%3A0xfc7f9228dbc64723!2zQ3VyYcOnYW8!5e0!3m2!1sen!2sdk!4v1720526824152!5m2!1sen!2sdk",
    funFacts: [
      "Curaçao is a constituent country of the Kingdom of the Netherlands, located in the southern Caribbean Sea.",
      "Curaçao is known for its colorful Dutch colonial architecture, particularly in the capital city, Willemstad, a UNESCO World Heritage site.",
      "Curaçao is famous for its vibrant music scene, including genres like tumba and tambú.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Costa Rica",
    flag: "🇨🇷",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d8086582.800820147!2d-90.2177720265104!3d8.250247757479126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1sen!2sdk!4v1720461380535!5m2!1sen!2sdk",
    funFacts: [
      "Costa Rica is known for its biodiversity, with over 25% of its land area protected as national parks and reserves.",
      "Costa Rica abolished its military in 1949 and has no standing army.",
      "Costa Rica is a leading eco-tourism destination, attracting visitors with its rainforests, beaches, and volcanoes.",
    ],
  },
  {
    name: "Côte d’Ivoire",
    flag: "🇨🇮",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4051194.0153639163!2d-10.565270438272645!3d7.438214480116977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf961387b049a067%3A0x1f91e627cb9ee40!2sC%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2sdk!4v1720522302650!5m2!1sen!2sdk",
    funFacts: [
      "Côte d’Ivoire, also known as Ivory Coast, is the world's largest producer of cocoa beans, which are used to make chocolate.",
      "Côte d’Ivoire is known for its vibrant music scene, particularly genres like coupé-décalé and zouglou.",
      "Côte d’Ivoire is home to the Basilica of Our Lady of Peace in Yamoussoukro, which is one of the largest churches in the world.",
    ],
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5836427.593621301!2d11.130627258547964!3d44.41637698174363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133441080add95ed%3A0xa0f3c024e1661b7f!2sCroatia!5e0!3m2!1sen!2sdk!4v1720461398981!5m2!1sen!2sdk",
    funFacts: [
      "Croatia has over 1000 islands, although only about 50 are inhabited.",
      "The Dalmatian dog breed originated in Croatia, specifically in the region of Dalmatia.",
      "Dubrovnik, Croatia, a UNESCO World Heritage site, was a filming location for the popular TV series “Game of Thrones.”",
    ],
  },
  {
    name: "Cuba",
    flag: "🇨🇺",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d15235092.416729828!2d-94.93408318086921!3d21.211814795454625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd49070f7a4cb5%3A0x798cf7529110a41a!2sCuba!5e0!3m2!1sen!2sdk!4v1720461412480!5m2!1sen!2sdk",
    funFacts: [
      "Cuba is the largest island in the Caribbean.",
      "Cuba has a unique car culture, with many vintage American cars from the 1950s still in use.",
      "Havana, the capital of Cuba, is known for its well-preserved Spanish colonial architecture.",
    ],
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1669930.6103053598!2d32.10666105589074!3d35.167013614917856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3c807fc4146e!2sCyprus!5e0!3m2!1sen!2sdk!4v1720461424207!5m2!1sen!2sdk",
    funFacts: [
      "Cyprus is the birthplace of Aphrodite, the ancient Greek goddess of love and beauty.",
      "Cyprus is one of the oldest wine-producing regions in the world, with a history of over 6000 years.",
      "Cyprus is the only country in the European Union where driving is on the left side of the road.",
    ],
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d10553966.141285373!2d4.926466321748174!3d49.77380480180963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0xf8661c75d3db586f!2sCzechia!5e0!3m2!1sen!2sdk!4v1720461447202!5m2!1sen!2sdk",
    funFacts: [
      "The Czech Republic has the most castles per capita of any country in the world.",
      "Prague, the capital of the Czech Republic, is known as “the City of a Hundred Spires” due to its many historical buildings and churches.",
      "The country is famous for its beer, and Czechs are among the highest beer consumers per capita in the world.",
    ],
  },
  {
    name: "Democratic Republic of the Congo",
    flag: "🇨🇩",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d16302160.647179145!2d11.161589403183031!3d-4.016360581975123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemocratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sdk!4v1720461361336!5m2!1sen!2sdk",
    funFacts: [
      "The Congo River, which flows through the Democratic Republic of the Congo, is the deepest river in the world.",
      "The Democratic Republic of the Congo is home to the second largest rainforest in the world, after the Amazon.",
      "The Democratic Republic of the Congo is rich in natural resources, including cobalt and copper.",
    ],
  },
  {
    name: "Denmark",
    flag: "🇩🇰",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2272667.770389303!2d8.904825643441784!3d56.20201011615026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDenmark!5e0!3m2!1sen!2sdk!4v1720461471591!5m2!1sen!2sdk",
    funFacts: [
      "Denmark is consistently ranked as one of the happiest countries in the world.",
      "Denmark is known for its bike-friendly cities, with Copenhagen having more bicycles than cars.",
      "Denmark is home to the oldest monarchy in Europe, with a history dating back over 1000 years.",
    ],
  },
  {
    name: "Diego Garcia",
    flag: "🇩🇬",
    embedUrl:
      "!1m18!1m12!1m3!1d126627.0421890964!2d72.34651950988611!3d-7.343220588801197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x249273fe6d69b0ad%3A0x3b3c07570eb0d1c5!2sDiego%20Garcia!5e0!3m2!1sen!2sdk!4v1720526838576!5m2!1sen!2sdk",
    funFacts: [
      "Diego Garcia is the largest island in the Chagos Archipelago and is part of the British Indian Ocean Territory.",
      "Diego Garcia hosts a major U.S. military base and is strategically important for military operations in the Indian Ocean region.",
      "The indigenous Chagossian people were forcibly removed from Diego Garcia in the 1960s and 1970s to make way for the military base.",
    ],
    continent: continents.asia,
  },
  {
    name: "Djibouti",
    flag: "🇩🇯",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3999051.7994530103!2d39.99042665769407!3d11.812564734636585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1622d46734f9f601%3A0x1472bba7ef0f5b88!2sDjibouti!5e0!3m2!1sen!2sdk!4v1720461486423!5m2!1sen!2sdk",
    funFacts: [
      "Djibouti is located at the junction of the Red Sea and the Gulf of Aden, making it a strategic location for shipping.",
      "Lake Assal, located in Djibouti, is one of the saltiest bodies of water in the world.",
      "Djibouti is home to a unique geological formation known as the “Lac Abbé chimneys,” which are limestone formations created by geothermal activity.",
    ],
  },
  {
    name: "Dominica",
    flag: "🇩🇲",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d984596.1029849369!2d-62.01669795630813!3d15.426312471241774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c14d2faf2155a15%3A0x49b39109053afd3c!2sDominica!5e0!3m2!1sen!2sdk!4v1720461500801!5m2!1sen!2sdk",
    funFacts: [
      "Dominica is known as the “Nature Island” of the Caribbean due to its lush rainforests and natural hot springs.",
      "Dominica is home to the second largest boiling lake in the world, located in Morne Trois Pitons National Park.",
      "Dominica has the highest concentration of active volcanoes in the world.",
    ],
  },
  {
    name: "Dominican Republic",
    flag: "🇩🇴",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3870690.394303463!2d-72.7676874189485!3d18.66529333538165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominican%20Republic!5e0!3m2!1sen!2sdk!4v1720461515561!5m2!1sen!2sdk",
    funFacts: [
      "The Dominican Republic is the most visited destination in the Caribbean.",
      "The Dominican Republic shares the island of Hispaniola with Haiti, making it one of only two Caribbean islands shared by two countries.",
      "The Dominican Republic is known for its merengue and bachata music and dance styles.",
    ],
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d8168864.624518858!2d-89.19058344216577!3d-1.3545257705120775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902387dda89a4bd5%3A0x9d76af04119c3702!2sEcuador!5e0!3m2!1sen!2sdk!4v1720461527327!5m2!1sen!2sdk",
    funFacts: [
      "Ecuador is named after the equator, which runs through the country.",
      "The Galápagos Islands, known for their unique wildlife, are part of Ecuador.",
      "Ecuador is one of the few countries in the world to grant constitutional rights to nature.",
    ],
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d14585927.235592967!2d20.31444591904881!3d26.807574857511728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sdk!4v1720461547638!5m2!1sen!2sdk",
    funFacts: [
      "Egypt is home to the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World.",
      "The Nile River, the longest river in the world, flows through Egypt.",
      "Ancient Egypt was one of the most advanced civilizations, known for its hieroglyphic writing system and monumental architecture.",
    ],
  },
  {
    name: "El Salvador",
    flag: "🇸🇻",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3968522.027574325!2d-91.5671940628646!3d13.748102318921443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6327a659640657%3A0x6f9a16eb98854832!2sEl%20Salvador!5e0!3m2!1sen!2sdk!4v1720461570067!5m2!1sen!2sdk",
    funFacts: [
      "El Salvador is the smallest and most densely populated country in Central America.",
      "El Salvador is known as the “Land of Volcanoes” due to its more than 20 volcanoes, two of which are active.",
      "El Salvador’s Joya de Cerén is a UNESCO World Heritage site often referred to as the “Pompeii of the Americas.”",
    ],
  },
  {
    name: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    embedUrl:
      "!1m18!1m12!1m3!1d2469625.981222934!2d-4.965815442861769!3d52.808950828717414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0xf4e19525332d8ea8!2sEngland%2C%20UK!5e0!3m2!1sen!2sdk!4v1720526851985!5m2!1sen!2sdk",
    funFacts: [
      "England is the largest and most populous country in the United Kingdom, known for its rich history and cultural heritage.",
      "England is home to numerous historic landmarks, including Stonehenge, the Tower of London, and Buckingham Palace.",
      "England is famous for its contributions to literature, with renowned authors such as William Shakespeare, Charles Dickens, and Jane Austen.",
    ],
    continent: continents.europe,
  },
  {
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4084761.330631787!2d5.796424227869275!3d1.1427850644593984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10643a605fae87a7%3A0xc870a2a22c10de7a!2sEquatorial%20Guinea!5e0!3m2!1sen!2sdk!4v1720461587040!5m2!1sen!2sdk",
    funFacts: [
      "Equatorial Guinea is the only African country where Spanish is the official language.",
      "Equatorial Guinea consists of a mainland region and five inhabited islands.",
      "Malabo, the capital city of Equatorial Guinea, is located on the island of Bioko.",
    ],
  },
  {
    name: "Eritrea",
    flag: "🇪🇷",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d15772663.471653152!2d29.28125690531856!3d15.17218250038065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166d5a3f9dba8565%3A0x17c208f02f120efa!2sEritrea!5e0!3m2!1sen!2sdk!4v1720461604099!5m2!1sen!2sdk",
    funFacts: [
      "Eritrea gained independence from Ethiopia in 1993 after a 30-year war.",
      "Eritrea has nine recognized ethnic groups, each with its own language and culture.",
      "Asmara, the capital of Eritrea, is known for its well-preserved Italian colonial architecture.",
    ],
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d8503869.269474378!2d14.3844671129652!3d58.64362931533158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c82a04bfd%3A0x40ea9fba4fb425c3!2sEstonia!5e0!3m2!1sen!2sdk!4v1720461619104!5m2!1sen!2sdk",
    funFacts: [
      "Estonia is one of the most digitally advanced countries in the world, offering e-residency to foreigners.",
      "Estonia has over 2000 islands, making it a popular destination for nature lovers.",
      "Tallinn, the capital of Estonia, has one of the best-preserved medieval old towns in Europe.",
    ],
  },
  {
    name: "Eswatini",
    flag: "🇸🇿",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7311613.376822226!2d26.189133805760406!3d-26.51614519670469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8cee147320f07%3A0xc13dc62f180d7069!2sEswatini!5e0!3m2!1sen!2sdk!4v1720461633747!5m2!1sen!2sdk",
    funFacts: [
      "Eswatini, formerly known as Swaziland, is one of the smallest countries in Africa.",
      "Eswatini is known for its rich cultural heritage, with festivals such as the Reed Dance and Incwala.",
      "Eswatini is one of the few remaining absolute monarchies in the world.",
    ],
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8068060.553904659!2d35.20502226636724!3d9.110798981958848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2sdk!4v1720461663283!5m2!1sen!2sdk",
    funFacts: [
      "Ethiopia is one of the oldest countries in the world, with a history dating back over 3000 years.",
      "Ethiopia is the only African country never to have been colonized, aside from a brief Italian occupation.",
      "Ethiopia is the birthplace of coffee, and the coffee ceremony is an important part of Ethiopian culture.",
    ],
  },
  {
    name: "Falkland Islands",
    flag: "🇫🇰",
    embedUrl:
      "!1m18!1m12!1m3!1d1265508.9594860869!2d-60.84685056700019!3d-51.72028232995426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc2a89b94491e3a3%3A0x322aaaff8dd9c53a!2sFIQQ%201ZZ%2C%20Falkland%20Islands%20(Islas%20Malvinas)!5e0!3m2!1sen!2sdk!4v1720526865881!5m2!1sen!2sdk",
    funFacts: [
      "The Falkland Islands are a British Overseas Territory located in the South Atlantic Ocean, known for their rugged landscapes and abundant wildlife.",
      "The Falkland Islands are home to large colonies of penguins, seals, and albatrosses.",
      "The Falkland Islands were the site of a conflict between the United Kingdom and Argentina in 1982.",
    ],
    continent: continents.southAmerica,
  },
  {
    name: "Fiji",
    flag: "🇫🇯",
    continent: continents.oceania,
    embedUrl:
      "!1m14!1m8!1m3!1d7829709.627042285!2d174.184152!3d-16.6217294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e1990fd703cdc5d%3A0x9e9c319946ef5b93!2sFiji!5e0!3m2!1sen!2sdk!4v1720462138588!5m2!1sen!2sdk",
    funFacts: [
      "Fiji is an archipelago of over 330 islands, about 110 of which are permanently inhabited.",
      "Fiji is known for its stunning coral reefs and clear lagoons, making it a popular diving destination.",
      "Fiji has a strong tradition of rugby, and the national team is one of the best in the world in rugby sevens.",
    ],
  },
  {
    name: "Finland",
    flag: "🇫🇮",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d14117277.086340455!2d4.844444680741164!3d64.41024185097179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sFinland!5e0!3m2!1sen!2sdk!4v1720462165101!5m2!1sen!2sdk",
    funFacts: [
      "Finland is known as the “Land of a Thousand Lakes,” but it actually has about 188000 lakes.",
      "Finland has been ranked as the happiest nation in the world several times.",
      "Finland is the home of Santa Claus, who is said to live in Lapland, near the town of Rovaniemi.",
    ],
  },
  {
    name: "France",
    flag: "🇫🇷",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d23380981.539363865!2d-27.961800691379032!3d44.327962009109136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2sdk!4v1720462181416!5m2!1sen!2sdk",
    funFacts: [
      "France is the most visited country in the world, with over 89 million tourists annually.",
      "The Eiffel Tower in Paris, the capital of France, is one of the most recognizable structures in the world.",
      "France is famous for its cuisine, fashion, art, and architecture.",
    ],
  },
  {
    name: "French Guiana",
    flag: "🇬🇫",
    embedUrl:
      "!1m18!1m12!1m3!1d2037731.4791062828!2d-54.43252657927344!3d4.0317889752241864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d12155785f7d753%3A0xde27f7e90f0af446!2sFrench%20Guiana!5e0!3m2!1sen!2sdk!4v1720526881124!5m2!1sen!2sdk",
    funFacts: [
      "French Guiana is an overseas department of France located on the northeastern coast of South America.",
      "French Guiana is home to the Guiana Space Centre, a major European spaceport.",
      "French Guiana has a diverse ecosystem, with the Amazon rainforest covering much of its territory and housing numerous plant and animal species.",
    ],
    continent: continents.southAmerica,
  },
  {
    name: "French Polynesia",
    flag: "🇵🇫",
    embedUrl:
      "!1m18!1m12!1m3!1d15606628.739469828!2d-155.23649054694303!3d-17.256970906004266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x741875d07c6dd74d%3A0x9bc07a7a09c35711!2sFrench%20Polynesia!5e0!3m2!1sen!2sdk!4v1720526903247!5m2!1sen!2sdk",
    funFacts: [
      "French Polynesia is an overseas collectivity of France located in the South Pacific Ocean, consisting of 118 islands and atolls.",
      "French Polynesia is known for its stunning lagoons, coral reefs, and overwater bungalows, particularly in Bora Bora and Tahiti.",
      "French Polynesia has a rich cultural heritage, with traditional Polynesian music, dance, and crafts playing a central role in island life.",
    ],
    continent: continents.oceania,
  },
  {
    name: "French Southern Territories",
    flag: "🇹🇫",
    embedUrl:
      "!1m18!1m12!1m3!1d11872428.336116023!2d53.208969059290645!3d-43.407499828880596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb314c43e0409c437%3A0xb88a214c90e6d029!2sFrench%20Southern%20and%20Antarctic%20Lands!5e0!3m2!1sen!2sdk!4v1720526922220!5m2!1sen!2sdk",
    funFacts: [
      "The French Southern Territories consist of several islands in the southern Indian Ocean and a portion of Antarctica known as Adélie Land.",
      "The French Southern Territories are home to a variety of wildlife, including penguins, seals, and seabirds.",
      "The territories are uninhabited except for a small number of military personnel and researchers.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Gabon",
    flag: "🇬🇦",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8170088.227044256!2d6.196066696409252!3d-0.9227643851180685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7b0cc30e36786b15!2sGabon!5e0!3m2!1sen!2sdk!4v1720462206747!5m2!1sen!2sdk",
    funFacts: [
      "Gabon is home to a large portion of the Congo Basin rainforest, one of the most important wilderness areas left on Earth.",
      "Gabon has a high biodiversity, with a rich variety of wildlife including gorillas, elephants, and panthers.",
      "Gabon is one of the most urbanized countries in Africa, with 86% of the population living in cities.",
    ],
  },
  {
    name: "Gambia",
    flag: "🇬🇲",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3974115.488383415!2d-18.006564885158806!3d13.414050621064002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29c2965af3807%3A0x9e4a4c406b139d2a!2sThe%20Gambia!5e0!3m2!1sen!2sdk!4v1720462220596!5m2!1sen!2sdk",
    funFacts: [
      "Gambia is the smallest country on mainland Africa, surrounded by Senegal except for its coastline.",
      "Gambia is named after the Gambia River, which flows through its center.",
      "Gambia is known for its diverse ecosystems, including beaches, mangroves, and forests.",
    ],
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3022267.277427463!2d40.71867340179176!3d42.29062777144633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sGeorgia!5e0!3m2!1sen!2sdk!4v1720462238006!5m2!1sen!2sdk",
    funFacts: [
      "Georgia is one of the oldest wine-producing regions in the world, with a history of winemaking dating back 8000 years.",
      "Georgia is known for its unique alphabet, one of the 14 existing scripts in the world.",
      "Georgia’s capital, Tbilisi, is famous for its diverse architecture and cobblestone streets.",
    ],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d10271915.427248327!2d-0.0954811187218817!3d51.05693106970298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sdk!4v1720462253096!5m2!1sen!2sdk",
    funFacts: [
      "Germany is known for its famous beer culture and hosts the world’s largest beer festival, Oktoberfest, in Munich.",
      "Germany is home to the Brandenburg Gate, a symbol of the reunification of East and West Germany.",
      "Germany has over 25000 castles, some of which date back to the Middle Ages.",
    ],
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8093674.295228506!2d-6.3082164370226295!3d7.896175131765693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sdk!4v1720462266868!5m2!1sen!2sdk",
    funFacts: [
      "Ghana was the first African country to gain independence from colonial rule in 1957.",
      "Lake Volta in Ghana is one of the largest artificial lakes in the world.",
      "Ghana is famous for its vibrant culture, including traditional kente cloth and highlife music.",
    ],
  },
  {
    name: "Gibraltar",
    flag: "🇬🇮",
    embedUrl:
      "!1m18!1m12!1m3!1d25780.174019166665!2d-5.3738995383666355!3d36.129507486515266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cbf762714be35%3A0x384e25263600870f!2sGibraltar!5e0!3m2!1sen!2sdk!4v1720526935710!5m2!1sen!2sdk",
    funFacts: [
      "Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula.",
      "The Rock of Gibraltar is a major landmark and home to the only wild monkey population in Europe, the Barbary macaques.",
      "Gibraltar has a strategic location controlling access to the Mediterranean Sea from the Atlantic Ocean.",
    ],
    continent: continents.europe,
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d3214333.620637683!2d21.6850807803686!3d38.116988462431294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGreece!5e0!3m2!1sen!2sdk!4v1720462281638!5m2!1sen!2sdk",
    funFacts: [
      "Greece is known as the cradle of Western civilization and the birthplace of democracy.",
      "Greece has more than 2000 islands, of which about 170 are inhabited.",
      "The Olympic Games originated in ancient Greece over 2700 years ago.",
    ],
  },
  {
    name: "Greenland",
    flag: "🇬🇱",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d25138407.662278034!2d-70.82119554951983!3d67.38353998886552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dbbe3c07715%3A0x34cf9d830114e218!2sGreenland!5e0!3m2!1sen!2sdk!4v1720462434275!5m2!1sen!2sdk",
    funFacts: [
      "Greenland is the world’s largest island that is not a continent.",
      "About 80% of Greenland is covered by an ice sheet.",
      "Despite its name, Greenland is mostly ice-covered, while Iceland is greener.",
    ],
  },
  {
    name: "Grenada",
    flag: "🇬🇩",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d499050.2922778784!2d-61.91990338693804!3d12.25975336536981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381789f4877bd1%3A0x36d8c7015a1f4f8e!2sGrenada!5e0!3m2!1sen!2sdk!4v1720462293600!5m2!1sen!2sdk",
    funFacts: [
      "Grenada is known as the “Island of Spice” due to its significant production of nutmeg and mace.",
      "Grenada has one of the world’s largest underwater sculpture parks.",
      "Grenada gained independence from the United Kingdom in 1974.",
    ],
  },
  {
    name: "Guadeloupe",
    flag: "🇬🇵",
    embedUrl:
      "!1m18!1m12!1m3!1d490544.5561944523!2d-61.726693972088285!3d16.14937629711535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e755a77287d51%3A0xecbe3e37b74a07ab!2sGuadeloupe!5e0!3m2!1sen!2sdk!4v1720526950641!5m2!1sen!2sdk",
    funFacts: [
      "Guadeloupe is an overseas department of France located in the Caribbean Sea.",
      "The archipelago of Guadeloupe consists of two main islands, Basse-Terre and Grande-Terre, and several smaller islands.",
      "Guadeloupe is known for its stunning beaches, tropical rainforests, and active volcano, La Grande Soufrière.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Guam",
    flag: "🇬🇺",
    embedUrl:
      "!1m18!1m12!1m3!1d496688.7636443807!2d144.45917364028543!3d13.450597819468737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f76ff930f24ef%3A0x5571ae91c5b3e5a6!2sGuam!5e0!3m2!1sen!2sdk!4v1720526963941!5m2!1sen!2sdk",
    funFacts: [
      "Guam is an unincorporated territory of the United States located in the western Pacific Ocean.",
      "Guam is the largest and southernmost of the Mariana Islands and is a major strategic military base for the U.S.",
      "Guam is known for its rich Chamorro culture, beautiful beaches, and World War II historical sites.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Guernsey",
    flag: "🇬🇬",
    embedUrl:
      "!1m18!1m12!1m3!1d331234.18480139336!2d-2.7844991042224714!3d49.56441806873783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480d20e4f4bfb3ed%3A0x990ad58a5d0d9899!2sGuernsey!5e0!3m2!1sen!2sdk!4v1720526975853!5m2!1sen!2sdk",
    funFacts: [
      "Guernsey is a British Crown dependency located in the English Channel, near the coast of Normandy, France.",
      "Guernsey has a unique status and is not part of the United Kingdom or the European Union.",
      "Guernsey is known for its low taxes and beautiful coastal scenery, including cliffs, beaches, and historic fortifications.",
    ],
    continent: continents.europe,
  },
  {
    name: "Guatemala",
    flag: "🇬🇹",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3932783.688360301!2d-92.87245601868378!3d15.718886592871726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588135036e7506b%3A0x35982b375b84d5bb!2sGuatemala!5e0!3m2!1sen!2sdk!4v1720462305751!5m2!1sen!2sdk",
    funFacts: [
      "Guatemala is home to Tikal, one of the largest and most famous Mayan ruins in the world.",
      "Guatemala has 37 volcanoes, three of which are active.",
      "Guatemala is known for its rich textile tradition, with colorful handwoven fabrics.",
    ],
  },
  {
    name: "Guinea",
    flag: "🇬🇳",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8048920.617418015!2d-16.737686137853032!3d9.9225446348822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf01b321bcce953f%3A0xe8737bcbd75a2df6!2sGuinea!5e0!3m2!1sen!2sdk!4v1720462322076!5m2!1sen!2sdk",
    funFacts: [
      "Guinea is one of the world’s top producers of bauxite, a key ingredient in aluminum.",
      "Mount Nimba, a UNESCO World Heritage site, is shared between Guinea and Côte d’Ivoire.",
      "Guinea has a rich musical heritage, particularly known for its traditional drumming and dance.",
    ],
  },
  {
    name: "Guinea-Bissau",
    flag: "🇬🇼",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4000719.6466115015!2d-17.926893622018614!3d11.697757032098561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee43c74af82a9f1%3A0xbbe88e3f571e084e!2sGuinea-Bissau!5e0!3m2!1sen!2sdk!4v1720462338231!5m2!1sen!2sdk",
    funFacts: [
      "Guinea-Bissau is known for its national parks and wildlife, including rare and endangered species.",
      "The Bijagos Archipelago, off the coast of Guinea-Bissau, is a UNESCO Biosphere Reserve.",
      "Guinea-Bissau has a diverse cultural heritage, with influences from African, Portuguese, and Brazilian cultures.",
    ],
  },
  {
    name: "Guyana",
    flag: "🇬🇾",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d4070394.244378732!2d-61.58411455691787!3d4.940574677154929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dafefaf60d8c2b3%3A0x48e38867b6e54440!2sGuyana!5e0!3m2!1sen!2sdk!4v1720462354415!5m2!1sen!2sdk",
    funFacts: [
      "Guyana is the only English-speaking country in South America.",
      "Guyana is home to Kaieteur Falls, one of the world’s most powerful waterfalls.",
      "Guyana has vast areas of untouched rainforest, making it a haven for biodiversity.",
    ],
  },
  {
    name: "Haiti",
    flag: "🇭🇹",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d1931097.6867540712!2d-74.43355388924304!3d19.034030139629447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb6c6f37fcbbb11%3A0xb51438b24c54f6d3!2sHaiti!5e0!3m2!1sen!2sdk!4v1720462367447!5m2!1sen!2sdk",
    funFacts: [
      "Haiti is the first independent nation in Latin America and the Caribbean, gaining independence in 1804.",
      "The Citadelle Laferrière in Haiti is one of the largest fortresses in the Americas.",
      "Haiti shares the island of Hispaniola with the Dominican Republic.",
    ],
  },
  {
    name: "Heard & McDonald Islands",
    flag: "🇭🇲",
    embedUrl:
      "!1m18!1m12!1m3!1d167293.61914559253!2d73.36800481044625!3d-53.06104081482297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb301524b88922bfd%3A0x261ddac2e5b3767e!2sHeard%20Island%20and%20McDonald%20Islands!5e0!3m2!1sen!2sdk!4v1720527010710!5m2!1sen!2sdk",
    funFacts: [
      "Heard and McDonald Islands are an Australian external territory located in the southern Indian Ocean.",
      "Heard & McDonald Islands are among the most remote places on Earth and are uninhabited by humans.",
      "Heard Island has an active volcano, Mawson Peak, which is the highest point in Australian territory.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Honduras",
    flag: "🇭🇳",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3942263.4657762707!2d-88.84695072843435!3d15.22046142028492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a751a73b731cf%3A0x7ed1de82b6fb8264!2sHonduras!5e0!3m2!1sen!2sdk!4v1720462379364!5m2!1sen!2sdk",
    funFacts: [
      "Honduras is home to the ancient Mayan city of Copán, a UNESCO World Heritage site.",
      "Honduras has the second largest coral reef in the world, the Mesoamerican Barrier Reef.",
      "Honduras has a rich tradition of Garifuna music and dance, recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity.",
    ],
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d236161.6745533884!2d113.97459225836488!3d22.352640879313768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1sen!2sdk!4v1720469248523!5m2!1sen!2sdk",
    funFacts: [
      "Hong Kong has the highest number of skyscrapers in the world, with more than 300 buildings taller than 150 meters.",
      "Hong Kong is one of the world’s leading financial centers.",
      "Hong Kong is famous for its vibrant street markets and culinary scene, including dim sum and street food.",
    ],
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d11118093.78328726!2d8.956467235394085!3d47.13085288077918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741837bdf37e4c3%3A0xc4290c1e1010!2sHungary!5e0!3m2!1sen!2sdk!4v1720462392216!5m2!1sen!2sdk",
    funFacts: [
      "Hungary is home to the largest thermal water cave system in the world, with over 1000 natural springs.",
      "Budapest, the capital of Hungary, is known for its stunning architecture and historic thermal baths.",
      "Hungary is famous for its contributions to classical music, including composers like Franz Liszt and Béla Bartók.",
    ],
  },
  {
    name: "Iceland",
    flag: "🇮🇸",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d6965734.878850165!2d-29.790056561860894!3d64.77084390139697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sdk!4v1720462407652!5m2!1sen!2sdk",
    funFacts: [
      "Iceland is known as the “Land of Fire and Ice” due to its volcanic activity and numerous glaciers.",
      "Iceland runs almost entirely on renewable energy, primarily geothermal and hydroelectric power.",
      "Iceland has no standing army and is one of the most peaceful countries in the world.",
    ],
  },
  {
    name: "India",
    flag: "🇮🇳",
    continent: continents.asia,
    embedUrl:
      "!1m14!1m8!1m3!1d15283573.950317955!2d72.1146332!3d20.7369564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sdk!4v1720466786524!5m2!1sen!2sdk",
    funFacts: [
      "India is the second most populous country in the world, with over 1.3 billion people.",
      "India is home to the world’s largest democracy and a rich cultural heritage, including the Taj Mahal, one of the Seven Wonders of the World.",
      "India is known for its diverse cuisine, languages, and festivals, including Diwali and Holi.",
    ],
  },
  {
    name: "Indonesia",
    flag: "🇮🇩",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d16327919.61336282!2d107.2235199044468!3d-2.4034516823850023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sdk!4v1720466798489!5m2!1sen!2sdk",
    funFacts: [
      "Indonesia is the world’s largest island country, with over 17000 islands.",
      "Indonesia is home to the world’s largest Muslim population.",
      "Indonesia has some of the most diverse and rich biodiversity in the world, including the Komodo dragon and orangutans.",
    ],
  },
  {
    name: "Iran",
    flag: "🇮🇷",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d6915571.5850297725!2d48.396912065483804!3d32.184179034564025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sdk!4v1720468313757!5m2!1sen!2sdk",
    funFacts: [
      "Iran, historically known as Persia, has one of the world’s oldest continuous civilizations, dating back over 7000 years.",
      "The Persian Empire, once located in present-day Iran, was one of the largest empires in ancient history.",
      "Iran is famous for its Persian carpets, poetry, and historical sites like Persepolis.",
    ],
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3418933.767524661!2d41.07462896224727!3d33.19305152111956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557823d54f54a11%3A0x6da561bba2061602!2sIraq!5e0!3m2!1sen!2sdk!4v1720468327216!5m2!1sen!2sdk",
    funFacts: [
      "Iraq is home to the ancient Mesopotamian civilizations, including Sumer, Akkad, Babylon, and Assyria.",
      "The ancient city of Babylon, with its famous Hanging Gardens, was located in present-day Iraq.",
      "Iraq has the Tigris and Euphrates rivers, which have been crucial for the development of the region.",
    ],
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2442846.457659652!2d-13.213908709356643!3d53.27892526518462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859bae45c4027fb%3A0xcf7c1234cedbf408!2sIreland!5e0!3m2!1sen!2sdk!4v1720466838451!5m2!1sen!2sdk",
    funFacts: [
      "Ireland is known as the “Emerald Isle” due to its lush green landscapes.",
      "Ireland is famous for its rich cultural heritage, including literature, music, and dance.",
      "Ireland has more Nobel Prize winners for literature than any other country, with four winners: W.B. Yeats, George Bernard Shaw, Samuel Beckett, and Seamus Heaney.",
    ],
  },
  {
    name: "Isle of Man",
    flag: "🇮🇲",
    embedUrl:
      "!1m18!1m12!1m3!1d298546.56831517635!2d-5.195818978707872!3d54.22619636482065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48638530442e81d5%3A0xea025bbcf1f0e00d!2sIsle%20of%20Man!5e0!3m2!1sen!2sdk!4v1720527035813!5m2!1sen!2sdk",
    funFacts: [
      "The Isle of Man is a British Crown dependency located in the Irish Sea between Great Britain and Ireland.",
      "The Isle of Man is known for its rugged coastline, medieval castles, and annual TT motorcycle races.",
      "The Isle of Man has its own parliament, the Tynwald, which claims to be the oldest continuous parliamentary body in the world.",
    ],
    continent: continents.europe,
  },
  {
    name: "Israel",
    flag: "🇮🇱",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1743631.7706320754!2d33.76266244771854!3d31.399498526510786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500492432a7c98b%3A0x6a6b422013352cba!2sIsrael!5e0!3m2!1sen!2sdk!4v1720466880515!5m2!1sen!2sdk",
    funFacts: [
      "Israel is the only country in the world where Hebrew is the official language.",
      "The Dead Sea, located in Israel, is the lowest point on Earth’s surface.",
      "Israel is known for its high-tech industry and innovation, often referred to as the “Startup Nation.”",
    ],
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d6150910.150658632!2d7.430391296098537!3d41.1700070651137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sdk!4v1720466900318!5m2!1sen!2sdk",
    funFacts: [
      "Italy is home to the most UNESCO World Heritage sites in the world, with 55 sites.",
      "Rome, the capital of Italy, was the heart of the Roman Empire and is known as the “Eternal City.”",
      "Italy is famous for its cuisine, including pasta, pizza, and gelato.",
    ],
  },
  {
    name: "Jamaica",
    flag: "🇯🇲",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d1941665.5802894756!2d-79.77625250029!3d18.10321193705391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2a1bc6cf719d%3A0x59a0d1c0b5120efa!2sJamaica!5e0!3m2!1sen!2sdk!4v1720466910404!5m2!1sen!2sdk",
    funFacts: [
      "Jamaica is the birthplace of reggae music, with Bob Marley as its most famous exponent.",
      "Jamaica is known for its stunning beaches, vibrant culture, and cuisine, including jerk chicken and Blue Mountain coffee.",
      "Jamaica has produced many world-class athletes, particularly in track and field, including Usain Bolt, the fastest man in the world.",
    ],
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d13698366.631877609!2d126.55380211248676!3d33.04783606202462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sdk!4v1720467338013!5m2!1sen!2sdk",
    funFacts: [
      "Japan is known as the “Land of the Rising Sun” and is an archipelago of 6852 islands.",
      "Japan has the world’s oldest continuous hereditary monarchy, dating back to 660 BC.",
      "Japan is famous for its technology, cuisine (including sushi and ramen), and traditional arts such as tea ceremony and ikebana.",
    ],
  },
  {
    name: "Jersey",
    flag: "🇯🇪",
    embedUrl:
      "!1m18!1m12!1m3!1d83405.21509631241!2d-2.2195589313260635!3d49.211694693888084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480c52a48c927533%3A0x519c23a30a1a6cc3!2sJersey!5e0!3m2!1sen!2sdk!4v1720527047088!5m2!1sen!2sdk",
    funFacts: [
      "Jersey is the largest of the Channel Islands and a British Crown dependency located near the coast of Normandy, France.",
      "Jersey is known for its beautiful beaches, historic castles, and rich agricultural produce, particularly Jersey cows.",
      "Jersey has its own legal and financial systems, separate from the United Kingdom.",
    ],
    continent: continents.europe,
  },
  {
    name: "Jordan",
    flag: "🇯🇴",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3495294.0357365413!2d32.113088516885156!3d31.182667333524343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2sdk!4v1720467352389!5m2!1sen!2sdk",
    funFacts: [
      "Jordan is home to Petra, one of the New Seven Wonders of the World, known for its rock-cut architecture.",
      "Jordan has the Dead Sea, the lowest point on Earth’s surface, and one of the saltiest bodies of water.",
      "Jordan has a rich history, being part of the ancient Nabataean, Roman, and Byzantine empires.",
    ],
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d11036483.783186477!2d56.35835705180686!3d47.520022616950925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2sKazakhstan!5e0!3m2!1sen!2sdk!4v1720467370520!5m2!1sen!2sdk",
    funFacts: [
      "Kazakhstan is the largest landlocked country in the world and the ninth largest country overall.",
      "Kazakhstan is known for its vast steppes and the Baikonur Cosmodrome, the world’s first and largest space launch facility.",
      "Kazakhstan has a rich nomadic heritage and is famous for its traditional horseback sports and eagle hunting.",
    ],
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8171119.108391644!2d27.78243286151031!3d0.15215297416259113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2sdk!4v1720467386701!5m2!1sen!2sdk",
    funFacts: [
      "Kenya is famous for its diverse wildlife and is home to the “Big Five”: lions, elephants, rhinos, leopards, and buffalo.",
      "Kenya is known for its long-distance runners, who have won numerous Olympic medals and world championships.",
      "Kenya’s Great Rift Valley is a significant geographical and historical region, with stunning landscapes and archaeological sites.",
    ],
  },
  {
    name: "Kiribati",
    flag: "🇰🇮",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d9948797.826781742!2d-155.0331580097495!3d2.71899150076083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65647c91c2028703%3A0x84327d040152c307!2sKiribati!5e0!3m2!1sen!2sdk!4v1720467439256!5m2!1sen!2sdk",
    funFacts: [
      "Kiribati is made up of 33 atolls and reef islands, spread over a vast area in the central Pacific Ocean.",
      "Kiribati is the only nation in the world to straddle all four hemispheres (northern, southern, eastern, and western).",
      "Kiribati is among the first countries to greet the new year due to its position on the International Date Line.",
    ],
  },
  {
    name: "Kosovo",
    flag: "🇽🇰",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d752317.9280272485!2d20.2427394156425!3d42.560772933253006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13537af354bf7df1%3A0xbfffeedfabc31791!2sKosovo!5e0!3m2!1sen!2sdk!4v1720468896358!5m2!1sen!2sdk",
    funFacts: [
      "Kosovo is one of the youngest countries in the world, having declared independence from Serbia in 2008.",
      "Kosovo known for its rich cultural heritage, including medieval monasteries and Ottoman-era architecture.",
      "The name “Kosovo” is derived from the Serbian word for “blackbird.”",
    ],
  },
  {
    name: "Kuwait",
    flag: "🇰🇼",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1781234.431544672!2d46.36166501028281!3d29.312453013559303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2sdk!4v1720467501899!5m2!1sen!2sdk",
    funFacts: [
      "Kuwait has one of the world’s highest GDP per capita, thanks to its vast oil reserves.",
      "Kuwait is home to the Kuwait Towers, a symbol of modern Kuwait.",
      "Kuwait has a unique tradition of dhow building, and these wooden boats were historically used for pearl diving and fishing.",
    ],
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3074354.6519436287!2d72.10702141855018!3d41.193444330249264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2sKyrgyzstan!5e0!3m2!1sen!2sdk!4v1720467531760!5m2!1sen!2sdk",
    funFacts: [
      "Kyrgyzstan is known for its stunning mountainous landscapes, with over 90% of the country covered by mountains.",
      "Kyrgyzstan has a rich tradition of nomadic culture, including horseback riding and eagle hunting.",
      "Lake Issyk-Kul in Kyrgyzstan is one of the world’s largest and deepest alpine lakes.",
    ],
  },
  {
    name: "Laos",
    flag: "🇱🇦",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7762748.7212531995!2d98.5817089546829!3d18.191319487755834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e0!3m2!1sen!2sdk!4v1720467549940!5m2!1sen!2sdk",
    funFacts: [
      "Laos is the only landlocked country in Southeast Asia.",
      "Laos is known for its beautiful Buddhist temples, including the UNESCO World Heritage site of Luang Prabang.",
      "Laos is home to the Plain of Jars, an archaeological landscape containing thousands of stone jars whose purpose remains a mystery.",
    ],
  },
  {
    name: "Latvia",
    flag: "🇱🇻",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d4467973.449632843!2d19.269716337670857!3d56.85233033805599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e930677b8a9afd%3A0xcfcd68f2fc10!2sLatvia!5e0!3m2!1sen!2sdk!4v1720467570765!5m2!1sen!2sdk",
    funFacts: [
      "Latvia has a rich cultural heritage, with over 12000 traditional folk songs called “dainas.”",
      "Latvia is known for its Art Nouveau architecture, particularly in the capital, Riga.",
      "Latvia has a high percentage of forested land, making it one of the greenest countries in Europe.",
    ],
  },
  {
    name: "Lebanon",
    flag: "🇱🇧",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1696098.8133991312!2d34.5288673686997!3d33.87180207211766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17028422aaad%3A0xcc7d34096c00f970!2sLebanon!5e0!3m2!1sen!2sdk!4v1720467589289!5m2!1sen!2sdk",
    funFacts: [
      "Lebanon is known for its ancient history, with archaeological sites dating back to the Phoenician civilization.",
      "Lebanon is famous for its cuisine, including dishes like hummus, tabbouleh, and kibbeh.",
      "Lebanon has the highest number of refugees per capita in the world, primarily from neighboring Syria.",
    ],
  },
  {
    name: "Lesotho",
    flag: "🇱🇸",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d1775813.115117862!2d26.914915695435468!3d-29.621559655018807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8c4827d65f8ceb%3A0x232d57b878d11eb3!2sLesotho!5e0!3m2!1sen!2sdk!4v1720467602239!5m2!1sen!2sdk",
    funFacts: [
      "Lesotho is known as the “Kingdom in the Sky” due to its high altitude, with the entire country situated above 1400 meters sea level.",
      "Lesotho is one of the few countries in the world entirely surrounded by another country.",
      "Lesotho is famous for its traditional Basotho blankets, worn by the local people as part of their cultural heritage.",
    ],
  },
  {
    name: "Liberia",
    flag: "🇱🇷",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4060039.4921104!2d-12.090132144208328!3d6.409157579131333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09f803d4a9fcc1%3A0x7fd3286b32d16373!2sLiberia!5e0!3m2!1sen!2sdk!4v1720467616014!5m2!1sen!2sdk",
    funFacts: [
      "Liberia was founded by freed American slaves and is Africa’s oldest republic, established in 1847.",
      "Liberia has a rich musical heritage, including traditional music styles and contemporary genres like hipco.",
      "Liberia’s flag closely resembles the American flag, reflecting its historical ties with the United States.",
    ],
  },
  {
    name: "Libya",
    flag: "🇱🇾",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d14655317.935517212!2d6.76740832723365!3d26.26301090441448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892d98ece010d%3A0xfa076041c7f9c22a!2sLibya!5e0!3m2!1sen!2sdk!4v1720467632867!5m2!1sen!2sdk",
    funFacts: [
      "Libya has the largest proven oil reserves in Africa.",
      "The ancient city of Leptis Magna in Libya is one of the best-preserved Roman cities in the Mediterranean.",
      "Libya is predominantly desert, with the Sahara covering most of the country’s land area.",
    ],
  },
  {
    name: "Liechtenstein",
    flag: "🇱🇮",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d173626.71534546392!2d9.388890369487081!3d47.15947160836384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31441d472ffd%3A0x60eab536dd5ab189!2sLiechtenstein!5e0!3m2!1sen!2sdk!4v1720467647336!5m2!1sen!2sdk",
    funFacts: [
      "Liechtenstein is one of the world’s smallest countries, nestled between Switzerland and Austria.",
      "Liechtenstein is the only country to be entirely located in the Alps.",
      "Liechtenstein has no military and relies on Switzerland for defense.",
    ],
  },
  {
    name: "Lithuania",
    flag: "🇱🇹",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2333654.5106940097!2d21.246159931248485!3d55.166485001444066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLithuania!5e0!3m2!1sen!2sdk!4v1720467672389!5m2!1sen!2sdk",
    funFacts: [
      "Lithuania was the first Soviet republic to declare independence from the Soviet Union in 1990.",
      "Lithuania is known for its beautiful Baroque architecture, especially in the capital, Vilnius.",
      "Lithuania has a strong basketball tradition and is one of the top basketball nations in the world.",
    ],
  },
  {
    name: "Luxembourg",
    flag: "🇱🇺",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d659063.6242670324!2d5.474106283990382!3d49.81488209484065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479545b9ca212147%3A0x64db60f602d392ef!2sLuxembourg!5e0!3m2!1sen!2sdk!4v1720467687789!5m2!1sen!2sdk",
    funFacts: [
      "Luxembourg is one of the world’s wealthiest countries, with a high standard of living.",
      "Luxembourg is one of the founding members of the European Union, NATO, and the United Nations.",
      "Luxembourg City is known for its historic fortifications and Old Town, a UNESCO World Heritage site.",
    ],
  },
  {
    name: "Macau",
    flag: "🇲🇴",
    embedUrl:
      "!1m18!1m12!1m3!1d59120.9436889312!2d113.52895317331317!3d22.161826825131797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae0e235c8f3%3A0xc67be32cb485acf6!2sMacao!5e0!3m2!1sen!2sdk!4v1720527061819!5m2!1sen!2sdk",
    funFacts: [
      "Macau is a Special Administrative Region of China located on the southern coast, near Hong Kong.",
      "Macau is known for its blend of Portuguese and Chinese cultures, as well as its vibrant gambling industry.",
      "Macau has a unique legal system and enjoys a high degree of autonomy under the “one country, two systems” principle.",
    ],
    continent: continents.asia,
  },
  {
    name: "Madagascar",
    flag: "🇲🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d15474904.562961303!2d36.30220549392865!3d-18.751175242061578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d1a4e3ea238545%3A0x5244e3c1977b1388!2sMadagascar!5e0!3m2!1sen!2sdk!4v1720467700629!5m2!1sen!2sdk",
    funFacts: [
      "Madagascar is the fourth largest island in the world and is known for its unique biodiversity.",
      "Over 90% of the wildlife found in Madagascar is not found anywhere else on Earth, including lemurs and the fossa.",
      "The island of Madagascar is known for its baobab trees, especially the Avenue of the Baobabs.",
    ],
  },
  {
    name: "Malawi",
    flag: "🇲🇼",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7954122.505170936!2d29.017892128953463!3d-13.234798817085458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d85bdd9313c0d7%3A0x44a32e1729668543!2sMalawi!5e0!3m2!1sen!2sdk!4v1720467716055!5m2!1sen!2sdk",
    funFacts: [
      "Malawi is known as the “Warm Heart of Africa” due to the friendliness of its people.",
      "Lake Malawi, the third largest lake in Africa, is home to more species of fish than any other lake in the world.",
      "Malawi’s traditional dance, the Gule Wamkulu, is a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity.",
    ],
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d8150000.734577929!2d104.32317691926684!3d4.123026154091408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sdk!4v1720467731434!5m2!1sen!2sdk",
    funFacts: [
      "Malaysia is home to the world’s tallest twin towers, the Petronas Towers, in Kuala Lumpur.",
      "Malaysia is known for its diverse culture, with significant Malay, Chinese, and Indian communities.",
      "Malaysia has some of the world’s oldest tropical rainforests, including Taman Negara.",
    ],
  },
  {
    name: "Maldives",
    flag: "🇲🇻",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d4079561.440454588!2d70.59919224583575!3d3.108798821240811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sdk!4v1720467745844!5m2!1sen!2sdk",
    funFacts: [
      "The Maldives is the lowest and flattest country in the world, with an average ground level of 1.5 meters above sea level.",
      "The Maldives is made up of about 1200 coral islands grouped into 26 atolls.",
      "The Maldives is famous for its luxury resorts and crystal-clear waters, making it a popular honeymoon destination.",
    ],
  },
  {
    name: "Mali",
    flag: "🇲🇱",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7792785.959667357!2d-9.278878752469364!3d17.504110994407434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe143e881b1073cf%3A0xbb3a5be2a0bdcf80!2sMali!5e0!3m2!1sen!2sdk!4v1720467760203!5m2!1sen!2sdk",
    funFacts: [
      "Mali is home to the ancient city of Timbuktu, a historic center of learning and trade.",
      "The Great Mosque of Djenné in Mali is the largest mud-brick building in the world and a UNESCO World Heritage site.",
      "Mali has a rich musical heritage, particularly known for its traditional griot storytellers and musicians.",
    ],
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d206751.21213667915!2d14.213543975293183!3d35.93503802118109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45281d8647c5%3A0xf582d86136be4239!2sMalta!5e0!3m2!1sen!2sdk!4v1720467782148!5m2!1sen!2sdk",
    funFacts: [
      "Malta is one of the world’s smallest and most densely populated countries.",
      "The country has a rich history, with ancient temples older than the pyramids of Egypt.",
      "Malta is known for its picturesque beaches, clear waters, and historic cities like Valletta, a UNESCO World Heritage site.",
    ],
  },
  {
    name: "Marshall Islands",
    flag: "🇲🇭",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d4028959.160645368!2d163.57105718182353!3d9.54946118006705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650119b22129ca2b%3A0x8b3e03e8aa09b776!2sMarshall%20Islands!5e0!3m2!1sen!2sdk!4v1720467807981!5m2!1sen!2sdk",
    funFacts: [
      "The Marshall Islands is a country of atolls and islands spread over a vast area in the central Pacific Ocean.",
      "Bikini Atoll, part of the Marshall Islands, was the site of nuclear testing by the United States after World War II.",
      "The Marshall Islands is known for its navigational skills and traditional stick charts used for wayfinding.",
    ],
  },
  {
    name: "Martinique",
    flag: "🇲🇶",
    embedUrl:
      "!1m18!1m12!1m3!1d247064.68738713983!2d-61.1785831827481!3d14.634031607918955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6aa0f90066070d%3A0xe1001b1217afe7b0!2sMartinique!5e0!3m2!1sen!2sdk!4v1720527127625!5m2!1sen!2sdk",
    funFacts: [
      "Martinique is an overseas department of France located in the Caribbean Sea.",
      "Martinique is known for its stunning beaches, tropical rainforests, and Mount Pelée, an active volcano.",
      "Martinique has a rich Creole culture and is famous for its rum production.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Mauritania",
    flag: "🇲🇷",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d15263298.879389953!2d-21.51573587601252!3d20.936794308390034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe80b8c314b3394f%3A0x83220bebd6be534e!2sMauritania!5e0!3m2!1sen!2sdk!4v1720467835851!5m2!1sen!2sdk",
    funFacts: [
      "Mauritania is known for its vast deserts, with the Sahara covering most of the country’s land area.",
      "The ancient city of Chinguetti in Mauritania is a UNESCO World Heritage site and an important center for Islamic scholarship.",
      "Mauritania has one of the longest trains in the world, used primarily to transport iron ore from mines in the Sahara.",
    ],
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7879160.804732927!2d53.72609971364938!3d-15.363131508443164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c504df94474c9%3A0x4203d9c2116bd031!2sMauritius!5e0!3m2!1sen!2sdk!4v1720467891946!5m2!1sen!2sdk",
    funFacts: [
      "Mauritius is famous for being the only known home of the dodo, an extinct flightless bird.",
      "Mauritius is known for its stunning beaches, coral reefs, and clear lagoons.",
      "Mauritius has a diverse culture influenced by Indian, African, French, and Chinese communities.",
    ],
  },
  {
    name: "Mayotte",
    flag: "🇾🇹",
    embedUrl:
      "!1m18!1m12!1m3!1d248996.3824372796!2d44.99097420340506!3d-12.806498616563788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x220a0e33dcf28dbb%3A0xff32176795fe2a4b!2sMayotte!5e0!3m2!1sen!2sdk!4v1720527139710!5m2!1sen!2sdk",
    funFacts: [
      "Mayotte is an overseas department of France located in the Indian Ocean between Madagascar and the coast of Mozambique.",
      "Mayotte is known for its diverse marine life, coral reefs, and beautiful lagoon, one of the largest in the world.",
      "Mayotte has a blend of African, Arab, and French cultural influences.",
    ],
    continent: continents.africa,
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d31199546.392492495!2d-146.88416282496885!3d17.337808008462616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2sdk!4v1720467906208!5m2!1sen!2sdk",
    funFacts: [
      "Mexico is known for its rich cultural heritage, including ancient civilizations like the Maya and Aztec.",
      "Mexico is home to the world’s largest pyramid by volume, the Great Pyramid of Cholula.",
      "Mexico is famous for its cuisine, which includes dishes like tacos, enchiladas, and guacamole.",
    ],
  },
  {
    name: "Micronesia",
    flag: "🇫🇲",
    continent: continents.oceania,
    embedUrl:
      "!1m14!1m8!1m3!1d4058897.5829277583!2d156.1692206!3d6.5510529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65d9b5c5ac58c813%3A0x547a8dcdfaa46525!2sMicronesia!5e0!3m2!1sen!2sdk!4v1720468029814!5m2!1sen!2sdk",
    buggyUrl: true,
    funFacts: [
      "The Federated States of Micronesia is composed of four states spread across the western Pacific Ocean.",
      "Micronesia is known for its ancient ruins, including the stone city of Nan Madol on the island of Pohnpei.",
      "Micronesia has a rich tradition of navigation and canoe building, with skills passed down through generations.",
    ],
  },
  {
    name: "Moldova",
    flag: "🇲🇩",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2787833.5283669205!2d25.75282372613412!3d46.971637259412674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x258119acdf53accb!2sMoldova!5e0!3m2!1sen!2sdk!4v1720468057587!5m2!1sen!2sdk",
    funFacts: [
      "Moldova is one of the least visited countries in Europe, offering unspoiled landscapes and charming villages.",
      "Moldova is known for its wine production, with a history of winemaking dating back thousands of years.",
      "Moldova is home to the largest underground wine cellar in the world, Milestii Mici, with over 200 kilometers of tunnels.",
    ],
  },
  {
    name: "Monaco",
    flag: "🇲🇨",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d23061.487431374342!2d7.405253046861513!3d43.73785093756925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc26f7b3f8531%3A0x74f7784c3ac49cfc!2sMonaco!5e0!3m2!1sen!2sdk!4v1720468070733!5m2!1sen!2sdk",
    funFacts: [
      "Monaco is the second smallest country in the world, after Vatican City.",
      "Monaco is known for its luxury casinos, yacht-lined harbor, and prestigious Grand Prix motor race.",
      "Monaco has the highest GDP per capita and one of the highest life expectancies in the world.",
    ],
  },
  {
    name: "Mongolia",
    flag: "🇲🇳",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d11274627.152553448!2d93.28265674947042!3d46.37743233035587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2sMongolia!5e0!3m2!1sen!2sdk!4v1720468083816!5m2!1sen!2sdk",
    funFacts: [
      "Mongolia is known as the “Land of the Eternal Blue Sky” due to its vast, open landscapes and over 250 sunny days a year.",
      "Mongolia has a rich nomadic culture, with traditional practices such as horseback riding and eagle hunting.",
      "Mongolia is home to the Gobi Desert, one of the largest deserts in the world.",
    ],
  },
  {
    name: "Montenegro",
    flag: "🇲🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1501465.583307173!2d18.07484381972024!3d42.69207436656503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2sMontenegro!5e0!3m2!1sen!2sdk!4v1720468097904!5m2!1sen!2sdk",
    funFacts: [
      "Montenegro is known for its stunning natural landscapes, including the Bay of Kotor, a UNESCO World Heritage site.",
      "Montenegro declared its independence from Serbia in 2006, making it one of the world’s youngest nations.",
      "Montenegro is home to the Tara River Canyon, the second deepest canyon in the world.",
    ],
  },
  {
    name: "Montserrat",
    flag: "🇲🇸",
    embedUrl:
      "!1m18!1m12!1m3!1d122257.07565026614!2d-62.27641036700784!3d16.75010684795152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c13ab53e1c7369d%3A0x1e0fea838805b1a2!2sMontserrat!5e0!3m2!1sen!2sdk!4v1720527096950!5m2!1sen!2sdk",
    funFacts: [
      "Montserrat is a British Overseas Territory located in the Caribbean Sea, known as the “Emerald Isle of the Caribbean” due to its Irish heritage.",
      "Montserrat’s capital, Plymouth, was destroyed by a volcanic eruption in 1995, and much of the southern part of the island is now an exclusion zone.",
      "Montserrat is famous for its St. Patrick’s Day celebrations, reflecting its Irish connections.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d6946582.562768901!2d-12.42727448531653!3d31.773594624330617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sdk!4v1720468110183!5m2!1sen!2sdk",
    funFacts: [
      "Morocco is known for its rich cultural heritage, blending Arab, Berber, and European influences.",
      "Morocco is home to the Sahara Desert and the Atlas Mountains.",
      "Morocco’s Medina of Fez is a UNESCO World Heritage site and one of the largest car-free urban areas in the world.",
    ],
  },
  {
    name: "Mozambique",
    flag: "🇲🇿",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7746034.604123673!2d30.513957208807398!3d-18.56305957599213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d4aceae6fd4ac5%3A0x12bbbfb9ae16a115!2sMozambique!5e0!3m2!1sen!2sdk!4v1720468121570!5m2!1sen!2sdk",
    funFacts: [
      "Mozambique has a coastline of over 2500 kilometers along the Indian Ocean, known for its beautiful beaches and marine life.",
      "Mozambique is home to the Bazaruto Archipelago, a group of islands known for their coral reefs and clear waters.",
      "Mozambique has a rich cultural heritage, with traditional music and dance playing a central role in community life.",
    ],
  },
  {
    name: "Myanmar",
    flag: "🇲🇲",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7729465.947043173!2d91.37908852391892!3d18.92460769764339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305652a7714e2907%3A0xba7b0ee41c622b11!2sMyanmar%20(Burma)!5e0!3m2!1sen!2sdk!4v1720468142015!5m2!1sen!2sdk",
    funFacts: [
      "Myanmar, formerly known as Burma, is home to thousands of ancient temples, including the famous Bagan Archaeological Zone.",
      "Myanmar has a rich cultural heritage, with influences from Buddhism, Hinduism, and animism.",
      "Inle Lake, located in Myanmar, is known for its unique floating gardens and stilt houses.",
    ],
  },
  {
    name: "Namibia",
    flag: "🇳🇦",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7528289.752857131!2d13.07517320035603!3d-22.87931260001106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf53c7e6ed37521%3A0xd3b9e5a5a8ecb261!2sNamibia!5e0!3m2!1sen!2sdk!4v1720468376249!5m2!1sen!2sdk",
    funFacts: [
      "Namibia is home to the Namib Desert, considered to be the oldest desert in the world.",
      "Namibia is known for its diverse wildlife, including elephants, rhinos, and cheetahs.",
      "Namibia was the first country in the world to incorporate environmental protection into its constitution.",
    ],
  },
  {
    name: "Nauru",
    flag: "🇳🇷",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d31917.19137464832!2d166.91455341995078!3d-0.5279799158780096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f7d1c1f1de45b4d%3A0x59d99df4c5d40a81!2sNauru!5e0!3m2!1sen!2sdk!4v1720468384945!5m2!1sen!2sdk",
    funFacts: [
      "Nauru is the third smallest country in the world by land area, after Vatican City and Monaco.",
      "Nauru has no official capital, but the government offices are located in the district of Yaren.",
      "Nauru was once one of the richest countries in the world per capita, due to its phosphate mining industry.",
    ],
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3594818.2934875158!2d81.49003289604839!3d28.372006086655734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2sdk!4v1720468415961!5m2!1sen!2sdk",
    funFacts: [
      "Nepal is home to Mount Everest, the highest peak in the world.",
      "Nepal has a rich cultural heritage, with Hinduism and Buddhism playing significant roles in daily life.",
      "Nepal is the birthplace of Lord Buddha, with the historic site of Lumbini being a UNESCO World Heritage site.",
    ],
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1251879.6143050306!2d3.960574122915322!3d52.205641438056844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2sdk!4v1720468427270!5m2!1sen!2sdk",
    funFacts: [
      "The Netherlands is known for its iconic windmills, tulip fields, and extensive canal systems.",
      "The Netherlands is one of the world’s largest exporters of flowers, particularly tulips.",
      "The Netherlands has more bicycles than people, making it one of the most bike-friendly countries in the world.",
    ],
  },
  {
    name: "New Caledonia",
    flag: "🇳🇨",
    embedUrl:
      "!1m18!1m12!1m3!1d1904526.4641064336!2d164.86676521924684!3d-21.20096624357534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c27e2693f1a32cb%3A0xf6d0f68fd5937aec!2sNew%20Caledonia!5e0!3m2!1sen!2sdk!4v1720527156630!5m2!1sen!2sdk",
    funFacts: [
      "New Caledonia is a special collectivity of France located in the southwest Pacific Ocean.",
      "New Caledonia is known for its stunning coral reefs, including the world’s second-largest barrier reef, and its rich biodiversity.",
      "New Caledonia has a unique blend of Melanesian and French cultures and is an important center for nickel mining.",
    ],
    continent: continents.oceania,
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d12437916.77850348!2d164.4308868428187!3d-40.43983815248703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sdk!4v1720468443089!5m2!1sen!2sdk",
    funFacts: [
      "New Zealand was the first country to grant women the right to vote in 1893.",
      "New Zealand is known for its stunning landscapes, which were featured prominently in the “Lord of the Rings” film series.",
      "New Zealand is home to unique wildlife, including the kiwi bird, which is a national symbol.",
    ],
  },
  {
    name: "Nicaragua",
    flag: "🇳🇮",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d1991502.9443253397!2d-86.33701586266001!3d12.865597945754251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f10c200ceff22cd%3A0xc8faa7e53fac15b5!2sNicaragua!5e0!3m2!1sen!2sdk!4v1720468452942!5m2!1sen!2sdk",
    funFacts: [
      "Nicaragua is known as the “Land of Lakes and Volcanoes,” with numerous lakes and 19 active volcanoes.",
      "Lake Nicaragua is the largest lake in Central America and has freshwater sharks.",
      "Nicaragua is home to the Bosawás Biosphere Reserve, one of the largest rainforest areas in the Americas.",
    ],
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7791826.578532145!2d2.787984882827069!3d17.526463262471115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1199ec7ac6a1af5d%3A0xc933920a158e24d4!2sNiger!5e0!3m2!1sen!2sdk!4v1720468468046!5m2!1sen!2sdk",
    funFacts: [
      "Niger is named after the Niger River, which is one of the longest rivers in Africa.",
      "Niger is home to the ancient city of Agadez, known for its historic mud-brick architecture.",
      "Niger has one of the world’s largest uranium deposits, making it a significant producer of the mineral.",
    ],
  },
  {
    name: "Nigeria",
    flag: "🇳🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4035000.8328164225!2d6.036392449229114!3d9.024434728548567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sdk!4v1720468480690!5m2!1sen!2sdk",
    funFacts: [
      "Nigeria is the most populous country in Africa, with over 200 million people.",
      "Nigeria is known for its Nollywood film industry, which is the second largest in the world by volume.",
      "Nigeria is home to the Zuma Rock, a natural monolith that is often referred to as the “Gateway to Abuja.”",
    ],
  },
  {
    name: "Niue",
    flag: "🇳🇺",
    embedUrl:
      "!1m18!1m12!1m3!1d120679.02900908618!2d-169.94460542260202!3d-19.054077616093863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x719d252a376eb73b%3A0x914278347bdc8b18!2sNiue!5e0!3m2!1sen!2sdk!4v1720527165987!5m2!1sen!2sdk",
    funFacts: [
      "Niue is a self-governing territory in free association with New Zealand, located in the South Pacific Ocean.",
      "Niue is known for its rugged limestone cliffs, coral reefs, and clear waters, making it a popular destination for diving and snorkeling.",
      "Niue is one of the world’s largest coral islands and has a small population with a strong sense of community.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Norfolk Island",
    flag: "🇳🇫",
    embedUrl:
      "!1m18!1m12!1m3!1d111595.87358695858!2d167.87357983248728!3d-29.0651785398431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c4bd11fadbac939%3A0xb97a9823335d1552!2sNorfolk%20Island!5e0!3m2!1sen!2sdk!4v1720527182734!5m2!1sen!2sdk",
    funFacts: [
      "Norfolk Island is an Australian external territory located in the Pacific Ocean between Australia, New Zealand, and New Caledonia.",
      "Norfolk Island is known for its towering Norfolk Island pines and its history as a penal colony.",
      "Norfolk Island has its own flag, language (Norfolk), and legislature.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Northern Mariana Islands",
    flag: "🇲🇵",
    embedUrl:
      "!1m18!1m12!1m3!1d3900795.787318315!2d142.84568141091654!3d17.297645342399516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x66d8b13490995c51%3A0x9db7ebab7c3a0e32!2sNorthern%20Mariana%20Islands!5e0!3m2!1sen!2sdk!4v1720527196731!5m2!1sen!2sdk",
    funFacts: [
      "The Northern Mariana Islands are a commonwealth in political union with the United States, located in the western Pacific Ocean.",
      "The Northern Mariana Islands are known for their beautiful beaches, clear waters, and World War II historical sites.",
      "Saipan, the largest island of the Northern Mariana Islands, is a popular tourist destination with a mix of American and Pacific cultures.",
    ],
    continent: continents.oceania,
  },
  {
    name: "North Korea",
    flag: "🇰🇵",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3117302.448893968!2d124.78492248067036!3d40.27040365956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357e02dae64f4337%3A0x3a0b871c3e1d861c!2sNorth%20Korea!5e0!3m2!1sen!2sdk!4v1720467465024!5m2!1sen!2sdk",
    funFacts: [
      "North Korea is one of the most secretive and isolated countries in the world.",
      "North Korea is known for its elaborate mass games and military parades.",
      "North Korea’s capital, Pyongyang, is home to the world’s tallest unoccupied building, the Ryugyong Hotel.",
    ],
  },
  {
    name: "North Macedonia",
    flag: "🇲🇰",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1539076.995166007!2d20.91701306421162!3d41.112477996841555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159f70bc4809%3A0xe0f25ad6c81fc5b1!2sNorth%20Macedonia!5e0!3m2!1sen!2sdk!4v1720468495944!5m2!1sen!2sdk",
    funFacts: [
      "North Macedonia is home to Lake Ohrid, one of the oldest and deepest lakes in Europe.",
      "North Macedonia has a rich cultural heritage, with influences from the Byzantine and Ottoman periods.",
      "North Macedonia declared its independence from Yugoslavia in 1991.",
    ],
  },
  {
    name: "Norway",
    flag: "🇳🇴",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d7117183.572298509!2d7.224082695532544!3d64.18244311731628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sdk!4v1720468507913!5m2!1sen!2sdk",
    funFacts: [
      "Norway is known for its stunning fjords, which are glacially carved valleys filled with seawater.",
      "Norway has a strong tradition of skiing and is one of the top winter sports nations in the world.",
      "Norway is home to the Svalbard Global Seed Vault, a secure seed bank located on the Arctic island of Svalbard.",
    ],
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7606795.540117541!2d50.86090492408861!3d21.41919478556467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e0!3m2!1sen!2sdk!4v1720468519409!5m2!1sen!2sdk",
    funFacts: [
      "Oman is known for its rich maritime history and was a major player in the ancient frankincense trade.",
      "Oman is home to the stunning Wahiba Sands, a vast desert with towering sand dunes.",
      "Oman’s capital, Muscat, is famous for its beautiful mosques, including the Sultan Qaboos Grand Mosque.",
    ],
  },
  {
    name: "Pakistan",
    flag: "🇵🇰",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7058059.794869264!2d63.70929895572654!3d30.256511957385147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2sdk!4v1720468531505!5m2!1sen!2sdk",
    funFacts: [
      "Pakistan is home to the second highest peak in the world, K2, located in the Karakoram Range.",
      "Pakistan has a rich cultural heritage, with influences from Persian, Mughal, and British colonial eras.",
      "Pakistan is known for its vibrant music and dance traditions, including qawwali and bhangra.",
    ],
  },
  {
    name: "Palau",
    flag: "🇵🇼",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d4067217.9306726414!2d130.40306350561627!3d5.433293938907803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328445b4a2af0399%3A0x12ed1edd39a1ebbb!2sPalau!5e0!3m2!1sen!2sdk!4v1720468542649!5m2!1sen!2sdk",
    buggyUrl: true,
    funFacts: [
      "Palau is an archipelago of over 500 islands in the western Pacific Ocean.",
      "Palau is known for its pristine marine environment and is a popular destination for scuba diving.",
      "Palau was the first country to establish a shark sanctuary, protecting its marine biodiversity.",
    ],
  },
  {
    name: "Palestine",
    flag: "🇵🇸",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d867282.4554452304!2d34.232707435664686!3d31.884253873458213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sdk!4v1720468572351!5m2!1sen!2sdk",
    funFacts: [
      "Palestine is home to some of the world’s most historic cities, including Bethlehem and Jerusalem.",
      "The Dead Sea, located on the border of Palestine, is the lowest point on Earth’s surface.",
      "Palestine has a rich cultural heritage, with traditional crafts such as embroidery and ceramics.",
    ],
  },
  {
    name: "Panama",
    flag: "🇵🇦",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d2021000.0063124618!2d-81.42487311470093!3d8.37551058784087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2sPanama!5e0!3m2!1sen!2sdk!4v1720468583666!5m2!1sen!2sdk",
    funFacts: [
      "Panama is known for the Panama Canal, one of the most important waterways in the world.",
      "Panama has a diverse ecosystem, with rainforests, beaches, and mountains.",
      "Panama City is the only capital city in the world that has a rainforest within its city limits.",
    ],
  },
  {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d8121027.9971931735!2d145.10667551639733!3d-6.349266108843942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6859e8afbf0e9eaf%3A0xdaf0e50d8e9c127a!2sPapua%20New%20Guinea!5e0!3m2!1sen!2sdk!4v1720468595425!5m2!1sen!2sdk",
    funFacts: [
      "Papua New Guinea is one of the most culturally diverse countries in the world, with over 800 languages spoken.",
      "Papua New Guinea is known for its rich biodiversity, including many unique species of plants and animals.",
      "Papua New Guinea is home to the Kokoda Track, a historic trail that was the site of significant battles during World War II.",
    ],
  },
  {
    name: "Paraguay",
    flag: "🇵🇾",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3748843.6100045!2d-61.090880101424474!3d-23.42508644972124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c083490f13d63%3A0xb3faff611d582ef3!2sParaguay!5e0!3m2!1sen!2sdk!4v1720468605919!5m2!1sen!2sdk",
    funFacts: [
      "Paraguay is one of the two landlocked countries in South America, the other being Bolivia.",
      "Paraguay is known for its traditional harp music and folk dances.",
      "Paraguay is home to the Itaipu Dam, one of the largest hydroelectric power plants in the world.",
    ],
  },
  {
    name: "Peru",
    flag: "🇵🇪",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d8065927.420816921!2d-80.31386191208229!3d-9.204780022856632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2sPeru!5e0!3m2!1sen!2sdk!4v1720468619094!5m2!1sen!2sdk",
    funFacts: [
      "Peru is home to Machu Picchu, an ancient Incan city and one of the New Seven Wonders of the World.",
      "Peru has a diverse ecosystem, including the Amazon rainforest, the Andes mountains, and the coastal desert.",
      "Peru is known for its rich culinary heritage, with dishes like ceviche and lomo saltado.",
    ],
  },
  {
    name: "Pitcairn Islands",
    flag: "🇵🇳",
    embedUrl:
      "!1m18!1m12!1m3!1d3718828.1963899564!2d-130.37429482777432!3d-24.462295809748756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e380f7fdca8078b%3A0x469c8cc719159ac8!2sPitcairn%20Islands!5e0!3m2!1sen!2sdk!4v1720527209701!5m2!1sen!2sdk",
    funFacts: [
      "The Pitcairn Islands are a group of four volcanic islands in the southern Pacific Ocean, and are a British Overseas Territory.",
      "Pitcairn Island is the only inhabited island of the Pitcairn Islands and is known for being settled by the descendants of the HMS Bounty mutineers.",
      "With a population of around 50, the Pitcairn Islands is one of the least populous jurisdictions in the world.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d8002837.41135775!2d117.32785452542707!3d11.649304928038557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sdk!4v1720468629852!5m2!1sen!2sdk",
    funFacts: [
      "The Philippines is an archipelago consisting of over 7000 islands.",
      "The Philippines is known for its diverse marine life, making it a popular destination for snorkeling and diving.",
      "The Philippines is the world’s largest producer of coconuts and one of the top producers of tropical fruits like bananas and pineapples.",
    ],
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5039167.131993162!2d13.859565350457927!3d51.92427055167269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPoland!5e0!3m2!1sen!2sdk!4v1720468647295!5m2!1sen!2sdk",
    funFacts: [
      "Poland is home to the Wieliczka Salt Mine, one of the world’s oldest salt mines and a UNESCO World Heritage site.",
      "Poland has a rich history of classical music, being the birthplace of famous composer Frédéric Chopin.",
      "Poland is known for its medieval architecture, with well-preserved castles, churches, and market squares.",
    ],
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d13300422.754865497!2d-29.418221373724272!3d35.52470932506182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2sdk!4v1720468660143!5m2!1sen!2sdk",
    funFacts: [
      "Portugal is one of the world’s oldest nation-states, with a history dating back to the 12th century.",
      "Portugal is known for its traditional Fado music, a genre characterized by melancholic tunes and lyrics.",
      "Portugal is the largest cork producer in the world, supplying about half of the world’s cork.",
    ],
  },
  {
    name: "Puerto Rico",
    flag: "🇵🇷",
    embedUrl:
      "!1m18!1m12!1m3!1d970179.3494937456!2d-67.32446222451652!3d18.220807801082586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0296261b92a7f9%3A0xf336ec2818049b1a!2sPuerto%20Rico!5e0!3m2!1sen!2sdk!4v1720527222243!5m2!1sen!2sdk",
    funFacts: [
      "Puerto Rico is an unincorporated territory of the United States located in the Caribbean Sea.",
      "Puerto Rico is known for its vibrant culture, beautiful beaches, and historic Old San Juan with its colorful buildings and fortresses.",
      "El Yunque National Forest in Puerto Rico is the only tropical rainforest in the U.S. National Forest System.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1846197.8906577919!2d50.26543565363366!3d25.34263767662247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sdk!4v1720468685086!5m2!1sen!2sdk",
    funFacts: [
      "Qatar is one of the wealthiest countries in the world per capita, largely due to its vast oil and natural gas reserves.",
      "Qatar hosted the FIFA World Cup in 2022, the first Middle Eastern nation to do so.",
      "Qatar is home to the Museum of Islamic Art, which houses one of the most comprehensive collections of Islamic artifacts in the world.",
    ],
  },
  {
    name: "Republic of the Congo",
    flag: "🇨🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8170549.261255647!2d9.606415028914443!3d-0.6935670197914625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60a563dda31309%3A0x55017acf14fc6c8f!2sRepublic%20of%20the%20Congo!5e0!3m2!1sen!2sdk!4v1720461339174!5m2!1sen!2sdk",
    funFacts: [
      "The Republic of the Congo is home to the Congo Basin, the second largest rainforest in the world after the Amazon.",
      "The Republic of the Congo is known for its diverse wildlife, including gorillas, elephants, and chimpanzees.",
      "Brazzaville, the capital of the Republic of the Congo, is located directly across the Congo River from Kinshasa, the capital of the Democratic Republic of the Congo.",
    ],
  },
  {
    name: "Réunion",
    flag: "🇷🇪",
    embedUrl:
      "!1m18!1m12!1m3!1d238171.54647568354!2d55.362497740369186!3d-21.135262782813292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178778110b8e43b%3A0x4a7f8e89ecdbeaf9!2zUsOpdW5pb24!5e0!3m2!1sen!2sdk!4v1720527233292!5m2!1sen!2sdk",
    funFacts: [
      "Réunion is an overseas department of France located in the Indian Ocean, east of Madagascar.",
      "Réunion is known for its active volcano, Piton de la Fournaise, and its diverse landscapes, including rainforests, beaches, and mountains.",
      "Réunion has a unique blend of cultures, including French, African, Indian, and Chinese influences.",
    ],
    continent: continents.africa,
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5685163.703188367!2d19.74473566738762!3d45.91213275717084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff26958976c3%3A0x84ef4f92a804b194!2sRomania!5e0!3m2!1sen!2sdk!4v1720468705856!5m2!1sen!2sdk",
    funFacts: [
      "Romania is home to the world’s heaviest building, the Palace of the Parliament in Bucharest.",
      "Romania is known for its scenic landscapes, including the Carpathian Mountains and the Transylvanian region.",
      "Romania has a rich folklore tradition, including the legend of Dracula, which is associated with the historic figure Vlad the Impaler.",
    ],
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d43941015.596366934!2d63.463773411004055!3d47.763087165112054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sdk!4v1720468721187!5m2!1sen!2sdk",
    funFacts: [
      "Russia is the largest country in the world by land area, spanning 11 time zones.",
      "The Trans-Siberian Railway, the longest railway line in the world, connects Russia’s two cities, Moscow and Vladivostok.",
      "Russia is known for its cultural contributions, including literature, ballet, and classical music, with figures like Tolstoy, Tchaikovsky, and the Bolshoi Ballet.",
    ],
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d1020805.9224050391!2d29.221022207713027!3d-1.9435281259145467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2sdk!4v1720468735035!5m2!1sen!2sdk",
    funFacts: [
      "Rwanda is known as the “Land of a Thousand Hills” due to its mountainous terrain.",
      "Rwanda is famous for its efforts in wildlife conservation, particularly for the endangered mountain gorillas in Volcanoes National Park.",
      "Rwanda has one of the highest representations of women in parliament in the world, with women holding over 60% of the seats.",
    ],
  },
  {
    name: "Saint Barthélemy",
    flag: "🇧🇱",
    embedUrl:
      "!1m18!1m12!1m3!1d60739.43233058833!2d-62.912649498936176!3d17.92214566297489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e75542afee89d%3A0x174116bea2a75e6!2sSt%20Barth%C3%A9lemy!5e0!3m2!1sen!2sdk!4v1720527311772!5m2!1sen!2sdk",
    funFacts: [
      "Saint Barthélemy, commonly known as Saint Barts, is a French overseas collectivity located in the Caribbean Sea.",
      "Saint Barthélemy is known for its luxury tourism, pristine beaches, and high-end restaurants and boutiques.",
      "Saint Barthélemy has a blend of French and Caribbean culture and is a popular destination for celebrities and wealthy tourists.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Saint Helena",
    flag: "🇸🇭",
    embedUrl:
      "!1m18!1m12!1m3!1d14963815.715815846!2d-20.89113980364566!3d-23.701860211604735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b10c91d2619%3A0xe4710f5b2b64dc6e!2sSt%20Helena%2C%20Ascension%20and%20Tristan%20da%20Cunha!5e0!3m2!1sen!2sdk!4v1720527324534!5m2!1sen!2sdk",
    funFacts: [
      "Saint Helena is a British Overseas Territory located in the South Atlantic Ocean.",
      "Saint Helena is famous for being the place of Napoleon Bonaparte’s exile and death.",
      "Saint Helena has unique flora and fauna, including the critically endangered Saint Helena plover, known locally as the wirebird.",
    ],
    continent: continents.africa,
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d243863.4064593831!2d-62.86140814424921!3d17.249532423495822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c12196ec68a720d%3A0xdee99ac69a1d86e8!2sSt%20Kitts%20%26%20Nevis!5e0!3m2!1sen!2sdk!4v1720468749373!5m2!1sen!2sdk",
    funFacts: [
      "Saint Kitts and Nevis is the smallest sovereign state in the Western Hemisphere, both in area and population.",
      "Saint Kitts and Nevis is known for its beautiful beaches and historic sites, such as the Brimstone Hill Fortress, a UNESCO World Heritage site.",
      "Saint Kitts and Nevis has a strong cricketing tradition and is part of the West Indies cricket team.",
    ],
  },
  {
    name: "Saint Lucia",
    flag: "🇱🇨",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d247857.16634964597!2d-61.135710279444346!3d13.912797478814342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c406065f12da31d%3A0x6e7486c4e8399df5!2sSt%20Lucia!5e0!3m2!1sen!2sdk!4v1720468761686!5m2!1sen!2sdk",
    funFacts: [
      "Saint Lucia is known for the Pitons, two mountainous volcanic plugs that are a UNESCO World Heritage site.",
      "The island of Saint Lucia has a drive-in volcano, Sulphur Springs, where visitors can drive right up to the crater.",
      "Saint Lucia is famous for its annual jazz festival, attracting international artists and tourists.",
    ],
  },
  {
    name: "Saint Pierre & Miquelon",
    flag: "🇵🇲",
    embedUrl:
      "!1m18!1m12!1m3!1d348570.7942147488!2d-56.58252621456947!3d46.957577013989855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b6c4b4bfb0e57d1%3A0x9c716737ea6c5c11!2sSt%20Pierre%20and%20Miquelon!5e0!3m2!1sen!2sdk!4v1720527347566!5m2!1sen!2sdk",
    funFacts: [
      "Saint Pierre & Miquelon is a self-governing territorial overseas collectivity of France, located near the Canadian province of Newfoundland and Labrador.",
      "Saint Pierre & Miquelon is known for its French culture, fishing industry, and unique blend of French and North American influences.",
      "Saint Pierre & Miquelon is the last remaining part of the former French colonial empire in North America.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d497664.95265644754!2d-61.61304488499846!3d12.971375372274178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c40ace29e3935bb%3A0x31fdd3e88dd2a1b1!2sSt%20Vincent%20and%20the%20Grenadines!5e0!3m2!1sen!2sdk!4v1720468773220!5m2!1sen!2sdk",
    funFacts: [
      "Saint Vincent and the Grenadines is known for its beautiful beaches and the Tobago Cays Marine Park, a popular sailing and diving destination.",
      "Saint Vincent and the Grenadines is home to La Soufrière, an active volcano that last erupted in 2021.",
      "The movie “Pirates of the Caribbean” was filmed in various locations throughout Saint Vincent and the Grenadines.",
    ],
  },
  {
    name: "Samoa",
    flag: "🇼🇸",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d496057.8347622765!2d-172.4325811787626!3d-13.751604088676507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71a513a364ec1003%3A0xa6870c9674617872!2sSamoa!5e0!3m2!1sen!2sdk!4v1720468782044!5m2!1sen!2sdk",
    funFacts: [
      "Samoa is known for its traditional fa’a Samoa (the Samoan way), which emphasizes community and family values.",
      "Samoa is famous for its stunning waterfalls, including the Afu Aau Falls on Savai’i Island.",
      "Samoa was the first country to welcome the new millennium, moving the International Date Line in 2011 to align its time zone with New Zealand and Australia.",
    ],
  },
  {
    name: "San Marino",
    flag: "🇸🇲",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d91929.51045453417!2d12.377695176370217!3d43.94287054879697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ceb5ff5e63f79%3A0xf39982342010!2sSan%20Marino!5e0!3m2!1sen!2sdk!4v1720468799180!5m2!1sen!2sdk",
    funFacts: [
      "San Marino is one of the world’s smallest countries and claims to be the world’s oldest republic, founded in 301 AD.",
      "San Marino is entirely surrounded by Italy and sits atop Mount Titano.",
      "San Marino is known for its medieval architecture, including the Three Towers of San Marino, which offer stunning views of the surrounding area.",
    ],
  },
  {
    name: "Sao Tome and Principe",
    flag: "🇸🇹",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d1021267.8787394686!2d6.334070568771034!3d0.8985863949952378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1070ecf90b9ad889%3A0x6251230c557630ea!2zU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBl!5e0!3m2!1sen!2sdk!4v1720468811820!5m2!1sen!2sdk",
    funFacts: [
      "Sao Tome and Principe is Africa’s second smallest country, consisting of two main islands in the Gulf of Guinea.",
      "Sao Tome and Principe is known for its biodiversity, including many endemic plant and animal species.",
      "Sao Tome and Principe was once a major producer of cocoa and is known for its high-quality chocolate.",
    ],
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d14914220.611606624!2d34.51058121730469!3d24.130767690050476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sdk!4v1720468827961!5m2!1sen!2sdk",
    funFacts: [
      "Saudi Arabia is home to Islam’s two holiest cities, Mecca and Medina.",
      "Saudi Arabia has the world’s largest sand desert, the Rub’ al Khali or Empty Quarter.",
      "Saudi Arabia recently opened up to tourism and is developing major projects like NEOM, a futuristic city.",
    ],
  },
  {
    name: "Scotland",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    embedUrl:
      "!1m18!1m12!1m3!1d4373832.916741119!2d-9.959769436358496!3d57.63725658914369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861e2c403f2a19f%3A0xe7c1fad809c30714!2sScotland%2C%20UK!5e0!3m2!1sen!2sdk!4v1720527249654!5m2!1sen!2sdk",
    funFacts: [
      "Scotland is a country that is part of the United Kingdom, known for its rich history, cultural heritage, and stunning landscapes.",
      "Scotland is famous for its castles, whisky, and the Loch Ness Monster legend.",
      "Scotland has its own legal system, education system, and an autonomous parliament.",
    ],
    continent: continents.europe,
  },
  {
    name: "Senegal",
    flag: "🇸🇳",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3956077.243269123!2d-17.15777393168067!3d14.464196561085995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46a55099615940!2sSenegal!5e0!3m2!1sen!2sdk!4v1720468842043!5m2!1sen!2sdk",
    funFacts: [
      "Senegal is known for its vibrant music scene, particularly the popular dance music genre mbalax.",
      "Senegal is home to Gorée Island, a UNESCO World Heritage site that was a significant center of the transatlantic slave trade.",
      "Senegal hosts the Dakar Rally, one of the most challenging off-road endurance races in the world.",
    ],
  },
  {
    name: "Serbia",
    flag: "🇷🇸",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2929965.68234303!2d18.271684880902164!3d44.180396430732245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2sdk!4v1720468853384!5m2!1sen!2sdk",
    funFacts: [
      "Serbia is home to the Đavolja Varoš (Devil’s Town), a natural rock formation consisting of hundreds of unique stone pillars.",
      "Serbia has a rich history of medieval monasteries, many of which are UNESCO World Heritage sites.",
      "Serbia is known for its vibrant nightlife, particularly in the capital city, Belgrade, which has been dubbed the “Berlin of the Balkans.”",
    ],
  },
  {
    name: "Seychelles",
    flag: "🇸🇨",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4054395.753285929!2d48.54694158190087!3d-7.082934587174448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x225c21fd70bead3b%3A0x32d3d0a0d349daf7!2sSeychelles!5e0!3m2!1sen!2sdk!4v1720468964669!5m2!1sen!2sdk",
    funFacts: [
      "Seychelles is an archipelago of 115 islands in the Indian Ocean, known for its stunning beaches and crystal-clear waters.",
      "Seychelles is home to the Aldabra Atoll, the world’s second-largest coral atoll and a UNESCO World Heritage site.",
      "Seychelles has a high level of biodiversity, including many endemic species such as the coco de mer palm.",
    ],
  },
  {
    name: "Sierra Leone",
    flag: "🇸🇱",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d2020767.9019796832!2d-13.156829735880663!3d8.42008607254773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leone!5e0!3m2!1sen!2sdk!4v1720468977257!5m2!1sen!2sdk",
    funFacts: [
      "Sierra Leone is known for its beautiful beaches along the Atlantic coast, including Lumley Beach and River Number Two Beach.",
      "Sierra Leone has a rich history, being one of the first British colonies in West Africa and a center for freed slaves.",
      "Sierra Leone is famous for its diamonds, including the discovery of some of the largest and highest-quality diamonds in the world.",
    ],
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d255281.22560147644!2d103.6794411824578!3d1.3139946158867675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sdk!4v1720468987979!5m2!1sen!2sdk",
    funFacts: [
      "Singapore is one of the world’s smallest countries, but it has one of the highest population densities.",
      "Singapore is known as the “Lion City,” and its name is derived from the Sanskrit words “Singa” (lion) and “Pura” (city).",
      "Singapore is a global financial hub and one of the world’s busiest ports.",
    ],
  },
  {
    name: "Sint Maarten",
    flag: "🇸🇽",
    embedUrl:
      "!1m18!1m12!1m3!1d60702.65546913471!2d-63.10029949843048!3d18.029103090590553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6e62d6f890c3%3A0x728b2cc226338f42!2sSint%20Maarten!5e0!3m2!1sen!2sdk!4v1720527262856!5m2!1sen!2sdk",
    funFacts: [
      "Sint Maarten is a constituent country of the Kingdom of the Netherlands, located in the Caribbean and sharing the island of Saint Martin with the French overseas collectivity of Saint-Martin.",
      "Sint Maarten is known for its lively nightlife, beaches, and duty-free shopping.",
      "Sint Maarten’s Princess Juliana International Airport is famous for its runway that is extremely close to Maho Beach, where planes fly low over beachgoers.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Slovakia",
    flag: "🇸🇰",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d2698362.5460173446!2d17.062221466353055!3d48.66495396523686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471460b9ae7cc67f%3A0xcd6b6167b1723a7d!2sSlovakia!5e0!3m2!1sen!2sdk!4v1720469007492!5m2!1sen!2sdk",
    funFacts: [
      "Slovakia is home to more than 6000 caves, many of which are open to the public for exploration.",
      "Slovakia has the highest number of castles and chateaux per capita in the world.",
      "Slovakia is known for its traditional folk music and dance, particularly the fujara, a traditional Slovak shepherd’s flute.",
    ],
  },
  {
    name: "Slovenia",
    flag: "🇸🇮",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1415405.8955919673!2d13.66716163920237!3d46.14149307105311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476524e75e968361%3A0xe740451e25e2d465!2sSlovenia!5e0!3m2!1sen!2sdk!4v1720469020716!5m2!1sen!2sdk",
    funFacts: [
      "Slovenia is known for its stunning natural landscapes, including Lake Bled, which features a picturesque church on an island.",
      "Slovenia has more than 10000 underground caves, with Postojna Cave being one of the most famous.",
      "Slovenia is one of the most environmentally-friendly countries, with over half of its territory covered by forests.",
    ],
  },
  {
    name: "Solomon Islands",
    flag: "🇸🇧",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d8075825.355997899!2d157.37360383786805!3d-8.760261197188319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68d351e0555009d1%3A0xb44cc0a017442980!2sSolomon%20Islands!5e0!3m2!1sen!2sdk!4v1720469033988!5m2!1sen!2sdk",
    funFacts: [
      "The Solomon Islands is an archipelago consisting of nearly 1000 islands in the Pacific Ocean.",
      "The Solomon Islands is known for its rich biodiversity and is home to many endemic species of plants and animals.",
      "The Solomon Islands played a significant role during World War II, with major battles such as the Battle of Guadalcanal taking place there.",
    ],
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8137196.970831555!2d41.009208815796875!3d5.224834554552423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x181d2ea7ecd15b83%3A0x9e393ace5ce9e5be!2sSomalia!5e0!3m2!1sen!2sdk!4v1720469046339!5m2!1sen!2sdk",
    funFacts: [
      "Somalia has the longest coastline on mainland Africa, stretching over 3000 kilometers.",
      "Somalia is known for its rich oral tradition and poetry, often referred to as the “Nation of Poets.”",
      "Somalia has one of the oldest seafaring traditions in the world, with evidence of maritime trade dating back thousands of years.",
    ],
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d13521359.379540443!2d16.655588886760977!3d-34.169025157114135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sdk!4v1720469058128!5m2!1sen!2sdk",
    funFacts: [
      "South Africa is one of the world’s most diverse countries in terms of culture, languages, and wildlife.",
      "South Africa is known for its stunning natural landscapes, including Table Mountain and Kruger National Park.",
      "South Africa is the only country in the world to have three capital cities: Pretoria, Bloemfontein, and Cape Town.",
    ],
  },
  {
    name: "South Georgia & South Sandwich Islands",
    flag: "🇬🇸",
    embedUrl:
      "!1m18!1m12!1m3!1d4477743.557689773!2d-37.221155990659824!3d-56.77046891641015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb93db6e252a87925%3A0x7ee37cda884db0bd!2sSouth%20Georgia%20and%20the%20South%20Sandwich%20Islands!5e0!3m2!1sen!2sdk!4v1720527296463!5m2!1sen!2sdk",
    funFacts: [
      "South Georgia & South Sandwich Islands are a British Overseas Territory in the southern Atlantic Ocean.",
      "South Georgia & South Sandwich Islands are known for their rugged terrain, glaciers, and abundant wildlife, including penguins, seals, and seabirds.",
      "There are no permanent residents, but the South Georgia & South Sandwich Islands are staffed by British government officials and scientists.",
    ],
    continent: continents.oceania,
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3314070.2672524545!2d125.23375129394921!3d35.790192203993406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2sSouth%20Korea!5e0!3m2!1sen!2sdk!4v1720467482381!5m2!1sen!2sdk",
    funFacts: [
      "South Korea is known for its technological advancements and is one of the most digitally connected countries in the world.",
      "South Korea has a rich cultural heritage, including traditional music, dance, and cuisine such as kimchi and bibimbap.",
      "South Korea is famous for its entertainment industry, including K-pop music and popular TV dramas.",
    ],
  },
  {
    name: "South Sudan",
    flag: "🇸🇸",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4047244.941819238!2d27.05383124957154!3d7.854436889374693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171930b53d3e3119%3A0xdbf043637eb6bc97!2sSouth%20Sudan!5e0!3m2!1sen!2sdk!4v1720469071027!5m2!1sen!2sdk",
    funFacts: [
      "South Sudan is the world’s youngest country, having gained independence from Sudan in 2011.",
      "South Sudan is home to the Sudd, one of the world’s largest wetlands.",
      "South Sudan has a rich cultural diversity, with over 60 different ethnic groups and languages.",
    ],
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d6666561.605853255!2d-12.289856527137921!3d35.32692176566788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sdk!4v1720469092423!5m2!1sen!2sdk",
    buggyUrl: true,
    funFacts: [
      "Spain is known for its rich cultural heritage, including flamenco music and dance, bullfighting, and the annual running of the bulls in Pamplona.",
      "Spain is home to the Sagrada Familia in Barcelona, one of the most famous and unfinished basilicas in the world.",
      "Spain has a diverse landscape, from the beaches of the Mediterranean and Atlantic coasts to the mountains of the Pyrenees and Sierra Nevada.",
    ],
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d2023616.6675762453!2d79.38690946870958!3d7.855627892853107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sdk!4v1720469121784!5m2!1sen!2sdk",
    funFacts: [
      "Sri Lanka is known as the “Pearl of the Indian Ocean” due to its stunning natural beauty and biodiversity.",
      "Sri Lanka is famous for its tea production, particularly Ceylon tea, which is known worldwide.",
      "Sri Lanka has a rich cultural heritage, with ancient cities, temples, and UNESCO World Heritage sites such as Sigiriya and the Temple of the Tooth.",
    ],
  },
  {
    name: "Sudan",
    flag: "🇸🇩",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d7869094.725724024!2d24.961277616447592!3d15.62733090289362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15d91cc41072b195%3A0xd2bf70462a612b37!2sSudan!5e0!3m2!1sen!2sdk!4v1720469136318!5m2!1sen!2sdk",
    funFacts: [
      "Sudan has more pyramids than Egypt, with the ancient Nubian pyramids located in the region of Meroë.",
      "Sudan is home to the Nile River, the longest river in the world, which flows through its capital, Khartoum.",
      "Sudan has a diverse cultural heritage, with influences from Arab, African, and Nubian traditions.",
    ],
  },
  {
    name: "Suriname",
    flag: "🇸🇷",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d2037854.5288570053!2d-57.32617887442861!3d3.982400294028203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d0836d5d9d3d551%3A0x1037e1c0712936b2!2sSuriname!5e0!3m2!1sen!2sdk!4v1720469159448!5m2!1sen!2sdk",
    funFacts: [
      "Suriname is the smallest country in South America, both in area and population.",
      "Suriname is known for its diverse ethnic composition, including people of Indian, African, Javanese, and Indigenous descent.",
      "Suriname’s capital, Paramaribo, is a UNESCO World Heritage site known for its well-preserved Dutch colonial architecture.",
    ],
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d7765068.533028706!2d6.884459812744354!3d61.63077679361357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2sSweden!5e0!3m2!1sen!2sdk!4v1720469170587!5m2!1sen!2sdk",
    funFacts: [
      "Sweden is known for its high quality of life, advanced welfare system, and strong emphasis on environmental sustainability.",
      "Sweden is famous for its innovative design and technology, including brands like IKEA, Volvo, and Spotify.",
      "Sweden is home to the Nobel Prize, which was established by Alfred Nobel and is awarded annually in Stockholm.",
    ],
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d1398238.054909958!2d6.9052273280586025!3d46.80561187269231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sdk!4v1720469180786!5m2!1sen!2sdk",
    funFacts: [
      "Switzerland is known for its neutrality, having not been involved in any military conflict since 1815.",
      "Switzerland is famous for its stunning Alpine scenery, with popular tourist destinations such as Zermatt and Interlaken.",
      "Switzerland is renowned for its high-quality watches, chocolate, and banking system.",
    ],
  },
  {
    name: "Syria",
    flag: "🇸🇾",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3355377.923151294!2d36.362873786326794!3d34.78741444882191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2sSyria!5e0!3m2!1sen!2sdk!4v1720469198563!5m2!1sen!2sdk",
    funFacts: [
      "Syria is home to one of the oldest continuously inhabited cities in the world, Damascus.",
      "The ancient city of Palmyra, Syria, a UNESCO World Heritage site, was a major cultural center of the ancient world.",
      "Syria has a rich cultural heritage with influences from various civilizations including the Greeks, Romans, Byzantines, and Ottomans.",
    ],
  },
  {
    name: "Taiwan",
    flag: "🇹🇼",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3747753.474007929!2d116.85921091842467!3d23.463512244293657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ef3065c07572f%3A0xe711f004bf9c5469!2sTaiwan!5e0!3m2!1sen!2sdk!4v1720469212175!5m2!1sen!2sdk",
    funFacts: [
      "Taiwan is known for its night markets, which offer a variety of street food and entertainment.",
      "Taiwan is famous for its high-tech industry, particularly in the production of semiconductors and electronics.",
      "Taiwan has stunning natural landscapes, including Taroko Gorge and Alishan Mountain.",
    ],
  },
  {
    name: "Tajikistan",
    flag: "🇹🇯",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3182759.3192569236!2d68.60628438587855!3d38.8287185753064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b176737abcb3cd%3A0x25c331844f1988b5!2sTajikistan!5e0!3m2!1sen!2sdk!4v1720469279152!5m2!1sen!2sdk",
    funFacts: [
      "Tajikistan is home to the Pamir Mountains, often called the “Roof of the World.”",
      "Tajikistan has over 900 rivers and streams, many of which are fed by glaciers.",
      "Tajikistan has a rich history and was an important cultural and commercial center on the ancient Silk Road.",
    ],
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d8121081.773736851!2d29.695140322930804!3d-6.345855460377604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184b51314869a111%3A0x885a17314bc1c430!2sTanzania!5e0!3m2!1sen!2sdk!4v1720469289136!5m2!1sen!2sdk",
    funFacts: [
      "Tanzania is home to Mount Kilimanjaro, the highest peak in Africa.",
      "Tanzania has some of the world’s most famous national parks, including Serengeti National Park and Ngorongoro Crater.",
      "Tanzania is known for its rich cultural heritage and diverse ethnic groups, including the Maasai people.",
    ],
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7962194.084495174!2d96.19649745900466!3d12.98527419367231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sdk!4v1720469301540!5m2!1sen!2sdk",
    funFacts: [
      "Thailand is known for its vibrant street food culture and bustling markets.",
      "Thailand has over 40000 temples, with Wat Phra Kaew in Bangkok being one of the most famous.",
      "Thailand is the only Southeast Asian country that was never colonized by a European power.",
    ],
  },
  {
    name: "Timor-Leste",
    flag: "🇹🇱",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d2018810.620134764!2d124.40971317170457!3d-8.787056324177478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cfde50986e4a129%3A0x3e5c68387e85b3c!2sTimor-Leste!5e0!3m2!1sen!2sdk!4v1720469313979!5m2!1sen!2sdk",
    funFacts: [
      "Timor-Leste, also known as East Timor, is one of the newest countries in the world, gaining independence in 2002.",
      "Timor-Leste has stunning coral reefs and is a popular destination for diving and snorkeling.",
      "Timor-Leste has a rich cultural heritage, with influences from Portuguese, Indonesian, and indigenous traditions.",
    ],
  },
  {
    name: "Togo",
    flag: "🇹🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d2019775.136385452!2d-0.4869049211271818!3d8.608160039903268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0xfaae5b301ad19360!2sTogo!5e0!3m2!1sen!2sdk!4v1720469325048!5m2!1sen!2sdk",
    funFacts: [
      "Togo is one of the smallest countries in Africa, but it has a rich cultural diversity with over 40 ethnic groups.",
      "Togo is known for its traditional voodoo practices, which are an important part of its cultural heritage.",
      "Togo’s economy relies heavily on agriculture, particularly the production of coffee, cocoa, and cotton.",
    ],
  },
  {
    name: "Tokelau",
    flag: "🇹🇰",
    embedUrl:
      "!1m18!1m12!1m3!1d504459.4758280481!2d-172.20731610811646!3d-8.963886197358683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x705226aab3781df7%3A0x8f7062466ddb9b37!2sTokelau!5e0!3m2!1sen!2sdk!4v1720527365982!5m2!1sen!2sdk",
    funFacts: [
      "Tokelau is a dependent territory of New Zealand, consisting of three tropical atolls in the South Pacific Ocean.",
      "Tokelau is one of the most remote in the world and can only be reached by boat from Samoa.",
      "Tokelau has a unique system of governance, with each atoll having its own local government and a rotating leadership among the atolls.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Tonga",
    flag: "🇹🇴",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d3865986.5980992764!2d-177.388167484482!3d-18.870325320186687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7193b644bb9fd01d%3A0xf36dcccac55ee2a9!2sTonga!5e0!3m2!1sen!2sdk!4v1720469342161!5m2!1sen!2sdk",
    funFacts: [
      "Tonga is the only remaining Polynesian monarchy and one of the few Pacific nations never colonized by a foreign power.",
      "Tonga consists of 169 islands, of which only 36 are inhabited.",
      "Tonga is known for its rich cultural traditions, including music, dance, and the famous Tongan tapa cloth.",
    ],
  },
  {
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d1003647.5239707225!2d-61.871108594334416!3d10.696007993841526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3607976350b6c5%3A0xff082855c639f127!2sTrinidad%20and%20Tobago!5e0!3m2!1sen!2sdk!4v1720469354558!5m2!1sen!2sdk",
    funFacts: [
      "Trinidad and Tobago is the birthplace of the steelpan drum, the only acoustic musical instrument invented in the 20th century.",
      "Trinidad and Tobago is famous for its Carnival, a vibrant and colorful festival celebrated with music, dancing, and parades.",
      "Trinidad and Tobago is home to the largest population of nesting leatherback turtles in the world.",
    ],
  },
  {
    name: "Tristan Da Cunha",
    flag: "🇹🇦",
    embedUrl:
      "!1m18!1m12!1m3!1d50904.55092147713!2d-12.325175613947838!3d-37.11619847241521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1a1af6dc9b%3A0x69ee2d95dc98aedb!2sTristan%20da%20Cunha!5e0!3m2!1sen!2sdk!4v1720527385652!5m2!1sen!2sdk",
    funFacts: [
      "Tristan da Cunha is part of the British Overseas Territory of Saint Helena, Ascension, and Tristan da Cunha, located in the South Atlantic Ocean.",
      "Tristan da Cunha is the most remote inhabited archipelago in the world, with the nearest land, Saint Helena, over 2,400 kilometers away.",
      "The main island of Tristan da Cunha has a small population that lives in the village of Edinburgh of the Seven Seas.",
    ],
    continent: continents.africa,
  },
  {
    name: "Tunisia",
    flag: "🇹🇳",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3388780.9328478617!2d6.9210665421356685!3d33.95767844241581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2sdk!4v1720469363547!5m2!1sen!2sdk",
    funFacts: [
      "Tunisia is home to the ancient city of Carthage, which was a major power in the Mediterranean before being defeated by Rome.",
      "Tunisia is known for its well-preserved Roman ruins, including the Amphitheatre of El Jem, a UNESCO World Heritage site.",
      "Tunisia was the starting point of the Arab Spring in 2010, which led to significant political changes across the Arab world.",
    ],
  },
  {
    name: "Türkiye",
    flag: "🇹🇷",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d6353015.660547092!2d29.84635751908586!3d38.96833383315466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2sdk!4v1720469389281!5m2!1sen!2sdk",
    funFacts: [
      "Türkiye, formerly known as Turkey, is a transcontinental country, with territory in both Europe and Asia.",
      "Türkiye is known for its rich cultural heritage, including landmarks like the Hagia Sophia and Topkapi Palace.",
      "Türkiye is famous for its diverse cuisine, which includes dishes like kebabs, baklava, and Turkish delight.",
    ],
  },
  {
    name: "Turkmenistan",
    flag: "🇹🇲",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d6364124.592412123!2d54.229087530885636!3d38.84430619032231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f65cb5574bc6ccb%3A0x7edd826b4169a491!2sTurkmenistan!5e0!3m2!1sen!2sdk!4v1720469401565!5m2!1sen!2sdk",
    funFacts: [
      "Turkmenistan is home to the Karakum Desert, which covers about 70% of the country.",
      "Turkmenistan is known for the Darvaza Gas Crater, also known as the “Door to Hell,” a natural gas field that has been burning for decades.",
      "Turkmenistan has a rich history, with ancient cities like Merv, a UNESCO World Heritage site, which was an important stop on the Silk Road.",
    ],
  },
  {
    name: "Turks & Caicos Islands",
    flag: "🇹🇨",
    embedUrl:
      "!1m18!1m12!1m3!1d474920.77200328204!2d-72.11974192642643!3d21.57348609825056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894b5f55bebb6b75%3A0x7e11c780028dc1de!2sTKCA%201ZZ%2C%20Turks%20and%20Caicos%20Islands!5e0!3m2!1sen!2sdk!4v1720527404013!5m2!1sen!2sdk",
    funFacts: [
      "The Turks & Caicos Islands are a British Overseas Territory located in the Atlantic Ocean, southeast of the Bahamas.",
      "The Turks & Caicos Islands are known for their stunning beaches, coral reefs, and luxury resorts.",
      "Grand Turk is home to the Turks and Caicos National Museum, which showcases the Turks & Caicos Islands’ history and culture.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Tuvalu",
    flag: "🇹🇻",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d4042771.2337560207!2d175.1396797802639!3d-8.300928960043752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6fc19cb959b1a04d%3A0x8f6754680707122e!2sTuvalu!5e0!3m2!1sen!2sdk!4v1720469412258!5m2!1sen!2sdk",
    funFacts: [
      "Tuvalu is one of the smallest and least populated countries in the world, consisting of nine islands in the Pacific Ocean.",
      "Tuvalu is known for its unique traditional music and dance, including the fatele.",
      "Tuvalu faces significant challenges from climate change, with rising sea levels threatening its existence.",
    ],
  },
  {
    name: "Uganda",
    flag: "🇺🇬",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d4084411.695298853!2d29.66206591270646!3d1.366702277034319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x874155ce43014549!2sUganda!5e0!3m2!1sen!2sdk!4v1720469423824!5m2!1sen!2sdk",
    funFacts: [
      "Uganda is known as the “Pearl of Africa” due to its stunning natural beauty and biodiversity.",
      "Uganda is home to more than half of the world’s mountain gorilla population.",
      "Uganda has the largest lake in Africa, Lake Victoria, which is also the source of the Nile River.",
    ],
  },
  {
    name: "Ukraine",
    flag: "🇺🇦",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5444724.83619582!2d25.904645529530114!3d48.21514727979819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2sdk!4v1720469435455!5m2!1sen!2sdk",
    funFacts: [
      "Ukraine is the largest country entirely in Europe by land area.",
      "Ukraine is known for its rich cultural heritage, including traditional music, dance, and colorful folk art.",
      "Ukraine has a diverse landscape, with the Carpathian Mountains, the Black Sea coastline, and vast plains known as steppes.",
    ],
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d1861093.4143034134!2d52.629357762206354!3d24.348301362344703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sdk!4v1720469449050!5m2!1sen!2sdk",
    funFacts: [
      "The United Arab Emirates (UAE) is known for its modern architecture, including the Burj Khalifa, the tallest building in the world.",
      "The United Arab Emirates consists of seven emirates, each with its own ruler, and Abu Dhabi is the largest emirate by area.",
      "Dubai, one of the emirates, is famous for its luxury shopping, ultramodern architecture, and vibrant nightlife.",
    ],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d9584740.344437262!2d-14.994863087331977!3d54.09104101106977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sdk!4v1720469466149!5m2!1sen!2sdk",
    funFacts: [
      "The United Kingdom is made up of four countries: England, Scotland, Wales, and Northern Ireland.",
      "The United Kingdom is home to some of the world’s most famous landmarks, including Big Ben, Buckingham Palace, and Stonehenge.",
      "The British monarchy of the United Kingdom is one of the oldest in the world, with a history dating back over 1200 years.",
    ],
  },
  {
    name: "United States",
    flag: "🇺🇸",
    continent: continents.northAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d52837811.428775035!2d-161.39761839547373!3d36.069980289950294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sdk!4v1720469478232!5m2!1sen!2sdk",
    funFacts: [
      "The United States is the third largest country in the world by land area and population.",
      "The United States is known for its diverse landscapes, including the Grand Canyon, Yellowstone National Park, and the Rocky Mountains.",
      "The United States is a global leader in technology, entertainment, and culture, with Hollywood being the epicenter of the film industry.",
    ],
  },
  {
    name: "Uruguay",
    flag: "🇺🇾",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d3442174.595322018!2d-58.42444959455441!3d-32.59289275354174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575073afb5fde09%3A0x4a5596616016524a!2sUruguay!5e0!3m2!1sen!2sdk!4v1720469488629!5m2!1sen!2sdk",
    funFacts: [
      "Uruguay is the second smallest country in South America, after Suriname.",
      "Uruguay is known for its progressive social policies, including the legalization of same-sex marriage and cannabis.",
      "Uruguay has a strong tradition of football (soccer) and won the first FIFA World Cup in 1930.",
    ],
  },
  {
    name: "U.S. Virgin Islands",
    flag: "🇻🇮",
    embedUrl:
      "!1m18!1m12!1m3!1d485625.91440660716!2d-65.14624564271163!3d18.02740993759582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c051065f2daacb9%3A0xf91d891d1bc51c05!2sU.S.%20Virgin%20Islands!5e0!3m2!1sen!2sdk!4v1720527418522!5m2!1sen!2sdk",
    funFacts: [
      "The U.S. Virgin Islands are an unincorporated territory of the United States located in the Caribbean Sea.",
      "The U.S. Virgin Islands consists of three main islands: Saint Thomas, Saint John, and Saint Croix, each with its own unique attractions.",
      "The U.S. Virgin Islands are known for their beautiful beaches, crystal-clear waters, and vibrant culture.",
    ],
    continent: continents.northAmerica,
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d6142427.762076324!2d59.326856262721996!3d41.26027759272671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2sdk!4v1720469502939!5m2!1sen!2sdk",
    funFacts: [
      "Uzbekistan is home to some of the most well-preserved ancient cities on the Silk Road, including Samarkand, Bukhara, and Khiva.",
      "Uzbekistan has one of the world’s largest open-pit gold mines, the Muruntau Gold Mine.",
      "Uzbekistan is known for its rich cultural heritage, including traditional music, dance, and craftsmanship.",
    ],
  },
  {
    name: "Vanuatu",
    flag: "🇻🇺",
    continent: continents.oceania,
    embedUrl:
      "!1m18!1m12!1m3!1d3914195.180166467!2d165.63953640727186!3d-16.654037955158444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e89605ec8926013%3A0x348339cfbed0266a!2sVanuatu!5e0!3m2!1sen!2sdk!4v1720469514196!5m2!1sen!2sdk",
    funFacts: [
      "Vanuatu is an archipelago of 83 islands in the South Pacific Ocean.",
      "Vanuatu is known for its active volcanoes, including Mount Yasur on Tanna Island, one of the most accessible active volcanoes in the world.",
      "Vanuatu has a rich cultural heritage, with traditional ceremonies, dances, and music being an integral part of island life.",
    ],
  },
  {
    name: "Vatican City",
    flag: "🇻🇦",
    continent: continents.europe,
    embedUrl:
      "!1m18!1m12!1m3!1d5938.981047398721!2d12.446906848721648!3d41.90381278495585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325890a57d42d3d%3A0x94f9ab23a7eb0!2s00120%20Vatican%20City!5e0!3m2!1sen!2sdk!4v1720469525421!5m2!1sen!2sdk",
    funFacts: [
      "Vatican City is the smallest independent state in the world by both area and population.",
      "Vatican City is the spiritual and administrative center of the Roman Catholic Church and the residence of the Pope.",
      "The Vatican is home to some of the world’s most famous art and architecture, including St. Peter’s Basilica and the Sistine Chapel.",
    ],
  },
  {
    name: "Venezuela",
    flag: "🇻🇪",
    continent: continents.southAmerica,
    embedUrl:
      "!1m18!1m12!1m3!1d8116520.034419133!2d-71.90939685788429!3d6.628962187979752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2853cb36cbd801%3A0xdca0f2587cd54dd3!2sVenezuela!5e0!3m2!1sen!2sdk!4v1720469538133!5m2!1sen!2sdk",
    funFacts: [
      "Venezuela is home to Angel Falls, the world’s highest uninterrupted waterfall.",
      "Venezuela has some of the largest proven oil reserves in the world.",
      "Venezuela is known for its diverse landscapes, including the Andes mountains, Amazon rainforest, and Caribbean coastline.",
    ],
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d3988863.194048862!2d106.50601917094986!3d12.491337362609434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sdk!4v1720469562688!5m2!1sen!2sdk",
    buggyUrl: true,
    funFacts: [
      "Vietnam is known for its rich history and cultural heritage, with influences from Chinese, Khmer, and French civilizations.",
      "Vietnam is famous for its cuisine, including dishes like pho, banh mi, and spring rolls.",
      "Vietnam has stunning natural landscapes, such as Ha Long Bay, a UNESCO World Heritage site with thousands of limestone islands.",
    ],
  },
  {
    name: "Wales",
    flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    embedUrl:
      "!1m18!1m12!1m3!1d1246453.274289461!2d-5.478741006138991!3d52.39799353071568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486434b66c1c0fed%3A0x1ebb71bc8aa5e8a2!2sWales%2C%20UK!5e0!3m2!1sen!2sdk!4v1720527431902!5m2!1sen!2sdk",
    funFacts: [
      "Wales is a country that is part of the United Kingdom, known for its rugged coastline, mountainous national parks, and Celtic culture.",
      "Wales has its own language, Welsh, which is one of the oldest languages in Europe.",
      "Wales is famous for its castles, with more castles per square mile than any other country in the world.",
    ],
    continent: continents.europe,
  },
  {
    name: "Wallis & Futuna",
    flag: "🇼🇫",
    embedUrl:
      "!1m18!1m12!1m3!1d992022.2382034973!2d-177.82218582057226!3d-13.773634769378196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71c8b1066e1a4b3d%3A0x16c918ec8fd20a1b!2sWallis%20and%20Futuna!5e0!3m2!1sen!2sdk!4v1720527444912!5m2!1sen!2sdk",
    funFacts: [
      "Wallis and Futuna is a French overseas collectivity located in the South Pacific Ocean, consisting of three main islands and a number of smaller islets.",
      "Wallis & Futuna is known for its volcanic landscapes, traditional Polynesian culture, and beautiful lagoons.",
      "Wallis and Futuna has a unique political structure with three traditional kingdoms that coexist with the French administration.",
    ],
    continent: continents.oceania,
  },
  {
    name: "Western Sahara",
    flag: "🇪🇭",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3988863.194048862!2d106.50601917094986!3d12.491337362609434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sdk!4v1720469562688!5m2!1sen!2sdk",
    buggyUrl: true,
    funFacts: [
      "Western Sahara is a disputed territory located in North Africa, with both Morocco and the Sahrawi Arab Democratic Republic claiming sovereignty.",
      "Western Sahara is known for its vast desert landscapes, including the Sahara Desert, the largest hot desert in the world.",
      "Western Sahara has a small population and is one of the least densely populated areas in the world.",
    ],
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
    continent: continents.asia,
    embedUrl:
      "!1m18!1m12!1m3!1d7880180.3030024795!2d42.79648133723314!3d15.336125631797705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbac7c34bc5f%3A0x92f129377eae77ae!2sYemen!5e0!3m2!1sen!2sdk!4v1720469576473!5m2!1sen!2sdk",
    funFacts: [
      "Yemen is home to the ancient city of Sana’a, one of the oldest continuously inhabited cities in the world.",
      "Yemen is known for its unique architecture, including mudbrick skyscrapers in the city of Shibam, often called the “Manhattan of the Desert.”",
      "Yemen has a rich cultural heritage, with traditional music, dance, and cuisine reflecting its Arabian roots.",
    ],
  },
  {
    name: "Zambia",
    flag: "🇿🇲",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3978816.015630287!2d25.21325080169055!3d-13.126878021470901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4a5fcfc0b71%3A0xf19ff9ac7e583e45!2sZambia!5e0!3m2!1sen!2sdk!4v1720469595982!5m2!1sen!2sdk",
    funFacts: [
      "Zambia is home to Victoria Falls, one of the largest and most famous waterfalls in the world.",
      "Zambia is known for its diverse wildlife and numerous national parks, including South Luangwa and Kafue National Park.",
      "Zambia has a rich cultural heritage, with over 70 ethnic groups and a variety of traditional ceremonies and festivals.",
    ],
  },
  {
    name: "Zimbabwe",
    flag: "🇿🇼",
    continent: continents.africa,
    embedUrl:
      "!1m18!1m12!1m3!1d3863058.7057128185!2d26.51211531407206!3d-18.99687100304674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xa1c0385fc5cbbfee!2sZimbabwe!5e0!3m2!1sen!2sdk!4v1720469607048!5m2!1sen!2sdk",
    funFacts: [
      "Zimbabwe is known for the Great Zimbabwe ruins, a medieval city that was the capital of the Kingdom of Zimbabwe.",
      "Zimbabwe is home to Hwange National Park, one of the largest game reserves in Africa.",
      "Zimbabwe is famous for its traditional music, including the mbira (thumb piano) and marimba.",
    ],
  },
];

export default countries;
