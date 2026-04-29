/* THE BEAUTY — Models Page JS
   Taste-Skill compliant: no placeholders, full implementation */

// ==============================
// DATA — Catalogue des modèles
// ==============================
// 💡 Pour ajouter vos vraies photos : remplacez "img" par le chemin réel, ex: "imgs/robe-001.jpg"
// Si "img" est null, le placeholder gradient sera utilisé automatiquement

const WHATSAPP_NUMBER = '22997476434'; // 👈 Remplacez par le vrai numéro (sans +, avec indicatif pays)

const MODELS_DATA = [
  { id:1,  name:'Ankara Soleil',      cat:'traditionnel', tag:'Traditionnel', mat:'Wax Ankara',        style:'Afro-chic',          desc:'Robe fluide en wax Ankara aux motifs ensoleillés. Coupe empire qui sublime toutes les silhouettes africaines.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_001.webp', variant:'mc-v1' },
  { id:2,  name:'Robe Bogolan',        cat:'traditionnel', tag:'Traditionnel', mat:'Bogolan authentique',style:'Afro-éditorial',     desc:'Tissu bogolan du Mali peint à la main. Chaque pièce est unique et raconte une histoire.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_002.webp', variant:'mc-v3' },
  { id:3,  name:'Tenue Kente',         cat:'traditionnel', tag:'Traditionnel', mat:'Kente tissé',       style:'Royal africain',     desc:'Ensemble inspiré du kente ghanéen avec des broderies dorées. Noblesse et élégance à l\'africaine.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_003.webp', variant:'mc-v3' },
  { id:4,  name:'Robe Bazin',          cat:'traditionnel', tag:'Traditionnel', mat:'Bazin riche',       style:'Cérémonie',          desc:'Bazin brodé pour les grandes occasions. Prestige et tradition réunis en une seule tenue.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_004.webp', variant:'mc-v1' },
  { id:5,  name:'Kaftan Doré',         cat:'soiree',       tag:'Soirée',       mat:'Lamé doré',         style:'Gala',               desc:'Kaftan luxueux aux reflets dorés irisés. Pour briller lors des grandes soirées.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_005.webp', variant:'mc-v3' },
  { id:6,  name:'Robe Soirée Noire',   cat:'soiree',       tag:'Soirée',       mat:'Velours & dentelle',style:'Black tie',          desc:'Robe longue noire avec empiècement en dentelle. Une présence scénique inoubliable.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_006.webp', variant:'mc-v4' },
  { id:7,  name:'Robe Corail',         cat:'robe',         tag:'Robes',        mat:'Crêpe',             style:'Cocktail',           desc:'Robe cocktail aux tons corail avec jupe évasée. Entre audace et élégance.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_007.webp', variant:'mc-v5' },
  { id:8,  name:'Robe Ivoire',         cat:'robe',         tag:'Robes',        mat:'Satin',             style:'Cérémonie',          desc:'Robe longue en satin ivoire avec dos nu. Idéale pour les mariages et cérémonies.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_008.webp', variant:'mc-v1' },
  { id:9,  name:'Robe Bohème',         cat:'robe',         tag:'Robes',        mat:'Coton brodé',       style:'Bohème chic',        desc:'Robe mi-longue avec broderies traditionnelles revisitées en style contemporain.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_009.webp', variant:'mc-v6' },
  { id:10, name:'Robe Ankara Moderne', cat:'robe',         tag:'Robes',        mat:'Wax Ankara',        style:'Afro-contemporain',  desc:'La robe africaine revisitée pour la femme moderne. Coupes actuelles, tissus traditionnels.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_010.webp', variant:'mc-v1' },
  { id:11, name:'Robe Bordeaux',       cat:'soiree',       tag:'Soirée',       mat:'Mousseline',        style:'Cocktail dinatoire', desc:'Robe bordeaux à bretelles fines avec dos ouvert travaillé. Glamour discret.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_011.webp', variant:'mc-v1' },
  { id:12, name:'Robe Étoilée',        cat:'soiree',       tag:'Soirée',       mat:'Taffetas brodé',    style:'Gala',               desc:'Broderies argentées sur fond noir profond. Pour les soirées qui méritent le grand jeu.', badge:'Exclusif', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_012.webp', variant:'mc-v4' },
  { id:13, name:'Tailleur Noir',       cat:'tailleur',     tag:'Tailleurs',    mat:'Laine fine',        style:'Business chic',      desc:'Ensemble veste croisée et pantalon cigarette. Intemporel et imposant.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_013.webp', variant:'mc-v4' },
  { id:14, name:'Tailleur Camel',      cat:'tailleur',     tag:'Tailleurs',    mat:'Laine cachemire',   style:'Élégance décontractée',desc:'Tons caramel avec finitions en cuir. Parfait entre bureau et sortie.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_014.webp', variant:'mc-v3' },
  { id:15, name:'Tailleur Prune',      cat:'tailleur',     tag:'Tailleurs',    mat:'Crêpe texturé',     style:'Power dressing',     desc:'Couleur prune et coupe structurée. Pour les femmes qui mènent.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_015.webp', variant:'mc-v6' },
  { id:16, name:'Tailleur Blanc Lin',  cat:'tailleur',     tag:'Tailleurs',    mat:'Lin premium',       style:'Été chic',           desc:'Ensemble blanc épuré en lin de haute qualité. Légèreté et lumière.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_016.webp', variant:'mc-v2' },
  { id:17, name:'Look Safari',         cat:'casual',       tag:'Casual',       mat:'Coton bio',         style:'Urban casual',       desc:'Ensemble cargo et top brodé en tons safari. Confort et style urbain africain.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_017.webp', variant:'mc-v3' },
  { id:18, name:'Set Corail',          cat:'casual',       tag:'Casual',       mat:'Coton stretch',     style:'Resort wear',        desc:'Ensemble deux pièces corail. Jupe mi-longue et crop top qui célèbrent les courbes.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_018.webp', variant:'mc-v5' },
  { id:19, name:'Jumpsuit Kaki',       cat:'casual',       tag:'Casual',       mat:'Gabardine',         style:'Casual chic',        desc:'Combinaison ample kaki avec ceinture dorée. Un seul vêtement, mille façons de le porter.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_019.webp', variant:'mc-v2' },
  { id:20, name:'Combo Wax',           cat:'casual',       tag:'Casual',       mat:'Wax coton',         style:'Afro casual',        desc:'Ensemble décontracté en wax pour le quotidien chic. La mode africaine au jour le jour.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_020.webp', variant:'mc-v1' },
  { id:21, name:'Robe Champagne',      cat:'soiree',       tag:'Soirée',       mat:'Organza doré',      style:'Festif luxe',        desc:'Organza champagne frissonnant. Une robe mi-longue qui danse avec vous toute la nuit.', badge:null, badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_021.webp', variant:'mc-v3' },
  { id:22, name:'Ankara Queen',        cat:'traditionnel', tag:'Traditionnel', mat:'Ankara premium',    style:'Afro-royale',        desc:'La reine du wax. Motifs exclusifs dans une coupe majestueuse qui impose le respect.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_022.webp', variant:'mc-v1' },
  { id:23, name:'Robe Jade',           cat:'robe',         tag:'Robes',        mat:'Soie naturelle',    style:'Élégant casual',     desc:'Robe fluide en soie jade. Légèreté et sophistication pour toutes les occasions.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_023.webp', variant:'mc-v2' },
  { id:24, name:'Tailleur Ankara',     cat:'tailleur',     tag:'Tailleurs',    mat:'Wax structuré',     style:'Afro-business',      desc:'Le tailleur africain moderne. Autorité et identité culturelle fusionnées.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_024.webp', variant:'mc-v1' },
  { id:25, name:'Robe Pagne',          cat:'traditionnel', tag:'Traditionnel', mat:'Pagne tissé',       style:'Tradition contemporaine',desc:'Pagne tissé à la main réinterprété en robe moderne. L\'Afrique dans toute sa splendeur.', badge:'Artisanal', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_025.webp', variant:'mc-v5' },
  { id:26, name:'Robe Nuit Violette',  cat:'soiree',       tag:'Soirée',       mat:'Velours',           style:'Soirée formelle',    desc:'Robe violette profonde en velours. Mystère et sensualité pour les grandes nuits.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_026.webp', variant:'mc-v4' },
  { id:27, name:'Ensemble Wax Rose',   cat:'casual',       tag:'Casual',       mat:'Wax premium',       style:'Afro chic casual',   desc:'Ensemble wax rose aux motifs géométriques. Couleur et caractère pour le quotidien.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_027.webp', variant:'mc-v6' },
  { id:28, name:'Robe Tropicale',      cat:'robe',         tag:'Robes',        mat:'Coton imprimé',     style:'Resort chic',        desc:'Robe longue aux imprimés tropicaux africains. Le soleil en toutes circonstances.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_028.webp', variant:'mc-v5' },
  { id:29, name:'Kaftan Cérémoniel',   cat:'traditionnel', tag:'Traditionnel', mat:'Broderie main',     style:'Grande cérémonie',   desc:'Kaftan brodé à la main pour les grandes cérémonies. Chaque fil raconte une histoire.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_029.webp', variant:'mc-v3' },
  { id:30, name:'Tailleur Kente',      cat:'tailleur',     tag:'Tailleurs',    mat:'Kente & soie',      style:'Afro-luxe',          desc:'Tailleur en kente et soie. Puissance culturelle et raffinement absolu.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_030.webp', variant:'mc-v3' },
  { id:31, name:'Robe Terracotta',     cat:'robe',         tag:'Robes',        mat:'Lin imprimé',       style:'Afro-naturel',       desc:'Robe aux tons terracotta inspirés des terres africaines. Chaleur et authenticité.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_031.webp', variant:'mc-v3' },
  { id:32, name:'Soirée Émeraude',     cat:'soiree',       tag:'Soirée',       mat:'Satin émeraude',    style:'Gala',               desc:'Robe longue émeraude en satin lustré. Royale de la tête aux pieds.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_032.webp', variant:'mc-v2' },
  { id:33, name:'Set Bogolan Casual',  cat:'casual',       tag:'Casual',       mat:'Bogolan coton',     style:'Afro street',        desc:'Ensemble bogolan pour le quotidien. L\'art traditionnel dans la rue.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_033.webp', variant:'mc-v3' },
  { id:34, name:'Robe Ankara Festive', cat:'traditionnel', tag:'Traditionnel', mat:'Wax festif',        style:'Fête africaine',     desc:'Robe wax aux couleurs vives pour les célébrations. Joie et fierté culturelle.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_034.webp', variant:'mc-v1' },
  { id:35, name:'Tailleur Épuré',      cat:'tailleur',     tag:'Tailleurs',    mat:'Gabardine fine',    style:'Minimaliste chic',   desc:'Tailleur minimaliste pour la femme moderne. Lignes pures, impact maximal.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_035.webp', variant:'mc-v4' },
  { id:36, name:'Robe Batik',          cat:'traditionnel', tag:'Traditionnel', mat:'Batik artisanal',   style:'Afro-bohème',        desc:'Batik teint à la main avec des motifs organiques uniques. Authenticité pure.', badge:'Artisanal', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_036.webp', variant:'mc-v5' },
  { id:37, name:'Robe Gala Noire',     cat:'soiree',       tag:'Soirée',       mat:'Velours & sequins', style:'Black tie luxe',     desc:'Robe de gala noire avec sequins discrets. Le luxe sans ostentation.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_037.webp', variant:'mc-v4' },
  { id:38, name:'Look Pagne Moderne',  cat:'casual',       tag:'Casual',       mat:'Pagne coton',       style:'Afro contemporain',  desc:'Le pagne revisité pour la femme d\'aujourd\'hui. Tradition et modernité en harmonie.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_038.webp', variant:'mc-v1' },
  { id:39, name:'Robe Sable',          cat:'robe',         tag:'Robes',        mat:'Soie sablée',       style:'Minimaliste luxe',   desc:'Robe aux tons sable et beige. Élégance discrète pour les femmes qui savent.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_039.webp', variant:'mc-v3' },
  { id:40, name:'Kaftan Festif',       cat:'traditionnel', tag:'Traditionnel', mat:'Brocart',           style:'Fête royale',        desc:'Kaftan en brocart pour les fêtes royales. Splendeur et magnificence africaine.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_040.webp', variant:'mc-v3' },
  { id:41, name:'Robe Pétale',         cat:'robe',         tag:'Robes',        mat:'Organza',           style:'Romantique chic',    desc:'Robe à volants en organza léger. Féminité et légèreté pour les occasions spéciales.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_041.webp', variant:'mc-v6' },
  { id:42, name:'Tailleur Wax Royal',  cat:'tailleur',     tag:'Tailleurs',    mat:'Wax premium',       style:'Afro-power',         desc:'Tailleur en wax aux couleurs royales. Le pouvoir de la femme africaine en un ensemble.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_042.webp', variant:'mc-v1' },
  { id:43, name:'Soirée Dorée',        cat:'soiree',       tag:'Soirée',       mat:'Lamé & dentelle',   style:'Gala luxe',          desc:'Robe de soirée dorée avec empiècement en dentelle. Pour les nuits qui se souviennent.', badge:null, badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_043.webp', variant:'mc-v3' },
  { id:44, name:'Combo Ankara Street', cat:'casual',       tag:'Casual',       mat:'Ankara coton',      style:'African street',     desc:'Ensemble street wax pour les jeunes femmes qui assument leur identité avec style.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_044.webp', variant:'mc-v1' },
  { id:45, name:'Robe Nuit Dorée',     cat:'soiree',       tag:'Soirée',       mat:'Organza doré',      style:'Soirée luxe',        desc:'La nuit en or. Robe longue en organza doré pour les moments inoubliables.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_045.webp', variant:'mc-v3' },
  { id:46, name:'Ensemble Bazin',      cat:'traditionnel', tag:'Traditionnel', mat:'Bazin brodé',       style:'Cérémonie tradition',desc:'Ensemble bazin brodé pour les grandes cérémonies traditionnelles.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_046.webp', variant:'mc-v1' },
  { id:47, name:'Robe Été Wax',        cat:'robe',         tag:'Robes',        mat:'Wax léger',         style:'Été africain',       desc:'Robe légère en wax pour les chaudes journées. Fraîcheur et style africain.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_047.webp', variant:'mc-v5' },
  { id:48, name:'Tailleur Cérémonie',  cat:'tailleur',     tag:'Tailleurs',    mat:'Soie & dentelle',   style:'Cérémonie chic',     desc:'Tailleur de cérémonie en soie avec détails en dentelle. Sobriété et élégance.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_048.webp', variant:'mc-v4' },
  { id:49, name:'Look Festival',       cat:'casual',       tag:'Casual',       mat:'Wax festif',        style:'Festival africain',  desc:'Tenue colorée pour les festivals et célébrations. Joie de vivre africaine.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_049.webp', variant:'mc-v1' },
  { id:50, name:'Robe Adaeze',         cat:'robe',         tag:'Robes',        mat:'Aso-oke',           style:'Noblesse nigériane', desc:'Robe en aso-oke nigérian tissé à la main. Noblesse et raffinement de l\'Afrique de l\'Ouest.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_050.webp', variant:'mc-v3' },
  { id:51, name:'Soirée Améthyste',    cat:'soiree',       tag:'Soirée',       mat:'Mousseline',        style:'Soirée romantique',  desc:'Robe améthyste en mousseline légère. Romance et sophistication pour les soirées douces.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_051.webp', variant:'mc-v4' },
  { id:52, name:'Kaftan Moderne',      cat:'traditionnel', tag:'Traditionnel', mat:'Soie brodée',       style:'Afro-luxe moderne',  desc:'Kaftan contemporain en soie brodée. La tradition africaine dans une silhouette actuelle.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_052.webp', variant:'mc-v1' },
  { id:53, name:'Robe Florale Wax',    cat:'robe',         tag:'Robes',        mat:'Wax floral',        style:'Floral africain',    desc:'Wax aux motifs floraux éclatants. La nature africaine sublimée en robe.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_053.webp', variant:'mc-v5' },
  { id:54, name:'Tailleur Audace',     cat:'tailleur',     tag:'Tailleurs',    mat:'Wax & tweed',       style:'Afro-power chic',    desc:'Tailleur audacieux wax et tweed. Pour la femme qui ose affirmer sa différence.', badge:'Exclusif', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_054.webp', variant:'mc-v1' },
  { id:55, name:'Set Traditionnel',    cat:'traditionnel', tag:'Traditionnel', mat:'Pagne tissé main',  style:'Tradition pure',     desc:'Ensemble en pagne tissé à la main par des artisans. Authenticité et savoir-faire ancestral.', badge:'Artisanal', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_055.webp', variant:'mc-v3' },
  { id:56, name:'Robe Club Noire',     cat:'soiree',       tag:'Soirée',       mat:'Jersey premium',    style:'Club chic',          desc:'Robe noire ajustée pour les sorties nocturnes. Sensualité maîtrisée.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_056.webp', variant:'mc-v4' },
  { id:57, name:'Ensemble Ankara Geo', cat:'casual',       tag:'Casual',       mat:'Ankara géométrique',style:'Geo-afro',           desc:'Ensemble aux motifs géométriques wax. Modernité graphique et héritage africain.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_057.webp', variant:'mc-v1' },
  { id:58, name:'Robe Midi Wax',       cat:'robe',         tag:'Robes',        mat:'Wax coton',         style:'Midi chic',          desc:'Robe midi en wax pour toutes les occasions. Versatile et toujours élégante.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_058.webp', variant:'mc-v1' },
  { id:59, name:'Soirée Rubis',        cat:'soiree',       tag:'Soirée',       mat:'Velours rubis',     style:'Soirée intense',     desc:'Rouge rubis intense en velours. Pour les femmes qui n\'ont pas peur de briller.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_059.webp', variant:'mc-v1' },
  { id:60, name:'Tenue Boho Wax',      cat:'casual',       tag:'Casual',       mat:'Wax léger',         style:'Boho africain',      desc:'Style bohème africain en wax léger. Liberté et identité culturelle réunies.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_060.webp', variant:'mc-v5' },
  { id:61, name:'Grande Boubou',       cat:'traditionnel', tag:'Traditionnel', mat:'Broderie dorée',    style:'Majestueux',         desc:'Grand boubou brodé à la main avec des fils d\'or. La majesté africaine en un vêtement.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_061.webp', variant:'mc-v3' },
  { id:62, name:'Robe Graphic Wax',    cat:'robe',         tag:'Robes',        mat:'Wax graphique',     style:'Afro-pop',           desc:'Wax aux motifs graphiques contemporains. La rencontre entre l\'art africain et le design moderne.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_062.webp', variant:'mc-v1' },
  { id:63, name:'Soirée Crystal',      cat:'soiree',       tag:'Soirée',       mat:'Organza cristal',   style:'Féerique luxe',      desc:'Robe en organza cristal transparent. Une féerie portée, pour les soirées qui transcendent.', badge:'Exclusif', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_063.webp', variant:'mc-v2' },
  { id:64, name:'Tailleur Kente Mod',  cat:'tailleur',     tag:'Tailleurs',    mat:'Kente moderne',     style:'Afro-executive',     desc:'Tailleur kente modernisé pour la femme executive africaine. Leadership et héritage.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_064.webp', variant:'mc-v3' },
  { id:65, name:'Robe Mariage Wax',    cat:'traditionnel', tag:'Traditionnel', mat:'Wax prestige',      style:'Mariage africain',   desc:'Robe de mariée en wax prestige. Pour le plus beau jour, dans la plus belle tradition.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_065.webp', variant:'mc-v1' },
  { id:66, name:'Look Casual Pagne',   cat:'casual',       tag:'Casual',       mat:'Pagne coton',       style:'Casual tradition',   desc:'Le pagne au quotidien. Décontracté et fier de son identité.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_066.webp', variant:'mc-v1' },
  { id:67, name:'Robe Nuit Ankara',    cat:'soiree',       tag:'Soirée',       mat:'Ankara luxe',       style:'Soirée wax',         desc:'Robe de soirée en ankara luxe. La fête africaine dans toute sa splendeur.', badge:'Nouveau', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_067.webp', variant:'mc-v1' },
  { id:68, name:'Ensemble Aso-Oke',    cat:'traditionnel', tag:'Traditionnel', mat:'Aso-oke tissé',     style:'Héritage yoruba',    desc:'Ensemble en aso-oke tissé à la main, héritage de la tradition yoruba du Nigeria.', badge:'Artisanal', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_068.webp', variant:'mc-v3' },
  { id:69, name:'Robe Pastel Wax',     cat:'robe',         tag:'Robes',        mat:'Wax pastel',        style:'Douceur africaine',  desc:'Wax aux tons pastels délicats. Féminité douce et identité culturelle affirmée.', badge:null, badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_069.webp', variant:'mc-v6' },
  { id:70, name:'Tailleur Soirée',     cat:'tailleur',     tag:'Tailleurs',    mat:'Satin structuré',   style:'Evening power',      desc:'Tailleur de soirée en satin structuré. L\'autorité au féminin pour les grandes occasions.', badge:'Exclusif', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_070.webp', variant:'mc-v4' },
  { id:71, name:'Robe Ceremonie Wax',  cat:'traditionnel', tag:'Traditionnel', mat:'Wax cérémoniel',    style:'Grande cérémonie',   desc:'Robe de grande cérémonie en wax. Pour les moments qui comptent vraiment.', badge:'Tendance', badgeGold:false, img:'imgs/ModeAfricaine/Web_Optimized/image_071.webp', variant:'mc-v1' },
  { id:72, name:'Finale Royale',       cat:'traditionnel', tag:'Traditionnel', mat:'Or & soie',         style:'Royauté africaine',  desc:'La pièce ultime. Or et soie tissés pour la femme africaine qui règne. Collection exclusive.', badge:'★ Best', badgeGold:true, img:'imgs/ModeAfricaine/Web_Optimized/image_072.webp', variant:'mc-v3' },
];

// ==============================
// STATE
// ==============================
let cart = [];
let currentFilter = 'all';
let lightboxIndex = 0;
let filteredModels = [...MODELS_DATA];
let displayedCount = 12;

// ==============================
// CURSOR
// ==============================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
(function animF() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animF);
})();

function addCursorHover(el) {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
}

// ==============================
// NAVBAR SCROLL
// ==============================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});

// ==============================
// BUILD CARD HTML
// ==============================
function buildCardStyle(model) {
  if (model.img) return `background-image:url('${model.img}')`;
  return '';
}

function renderCard(model, delay = 0) {
  const isInCart = cart.some(i => i.id === model.id);
  const imgStyle = model.img ? `background-image:url('${model.img}')` : '';

  return `
  <div class="model-card" data-id="${model.id}" data-cat="${model.cat}" style="animation-delay:${delay}ms">
    <div class="mc-img ${!model.img ? 'mc-img-placeholder ' + model.variant : ''}" 
         style="${imgStyle}" 
         data-num="${String(model.id).padStart(2,'0')}">
      ${model.badge ? `<span class="mc-badge ${model.badgeGold ? 'mc-badge-gold' : ''}">${model.badge}</span>` : ''}
      <div class="mc-check ${isInCart ? 'visible' : ''}" id="check-${model.id}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div class="mc-overlay"></div>
      <div class="mc-actions">
        <button class="mc-add-btn ${isInCart ? 'added' : ''}" onclick="toggleCart(${model.id}, event)" id="addbtn-${model.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="${isInCart ? 'M20 6L9 17l-5-5' : 'M12 5v14M5 12h14'}"/></svg>
          ${isInCart ? 'Ajouté' : 'Panier'}
        </button>
        <button class="mc-view-btn" onclick="openLightbox(${model.id}, event)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </div>
    <div class="mc-info">
      <span class="mc-tag">${model.tag}</span>
      <h3 class="mc-name">${model.name}</h3>
      <p class="mc-meta">${model.mat} · ${model.style}</p>
    </div>
  </div>`;
}

// ==============================
// RENDER GRID
// ==============================
function renderGrid(reset = false) {
  const grid = document.getElementById('modelsGrid');
  if (reset) {
    filteredModels = currentFilter === 'all'
      ? [...MODELS_DATA]
      : MODELS_DATA.filter(m => m.cat === currentFilter);
    displayedCount = 12;
  }

  const toShow = filteredModels.slice(0, displayedCount);
  const start = reset ? 0 : displayedCount - 6;

  if (reset) {
    grid.innerHTML = toShow.map((m, i) => renderCard(m, i * 60)).join('');
  } else {
    toShow.slice(start).forEach((m, i) => {
      const div = document.createElement('div');
      div.innerHTML = renderCard(m, i * 60);
      grid.appendChild(div.firstElementChild);
    });
  }

  document.getElementById('visibleCount').textContent = filteredModels.length;
  document.getElementById('loadMoreBtn').style.display =
    displayedCount >= filteredModels.length ? 'none' : 'flex';

  // Cursor hover on cards
  document.querySelectorAll('.model-card, .mc-add-btn, .mc-view-btn').forEach(addCursorHover);

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.style.opacity = 1; });
  }, { threshold: 0.08 });
  document.querySelectorAll('.model-card').forEach(c => observer.observe(c));
}

// ==============================
// FILTERS
// ==============================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGrid(true);
  });
  addCursorHover(btn);
});

// Load more
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  displayedCount = Math.min(displayedCount + 6, filteredModels.length);
  renderGrid(false);
});

// ==============================
// CART
// ==============================
function toggleCart(id, e) {
  if (e) e.stopPropagation();
  const model = MODELS_DATA.find(m => m.id === id);
  const idx = cart.findIndex(i => i.id === id);

  if (idx === -1) {
    cart.push(model);
    showToast(`"${model.name}" ajouté au panier`);
  } else {
    cart.splice(idx, 1);
    showToast(`"${model.name}" retiré du panier`);
  }
  updateCartUI();
  refreshCardStates();
}

function updateCartUI() {
  const count = cart.length;

  // Badge navbar
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  // Subtitle
  document.getElementById('cartSubtitle').textContent =
    count === 0 ? 'Votre sélection' : `${count} modèle${count > 1 ? 's' : ''} sélectionné${count > 1 ? 's' : ''}`;

  // Total
  document.getElementById('cartTotalCount').textContent =
    `${count} modèle${count > 1 ? 's' : ''}`;

  // Items
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (count === 0) {
    emptyEl.style.display = 'flex';
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    footerEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    footerEl.style.display = 'block';

    // Rebuild items
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    cart.forEach(m => {
      const imgStyle = m.img ? `background-image:url('${m.img}')` : '';
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="ci-img ${!m.img ? m.variant : ''}" style="${imgStyle}"></div>
        <div class="ci-info">
          <span class="ci-tag">${m.tag}</span>
          <p class="ci-name">${m.name}</p>
          <p class="ci-meta">${m.mat}</p>
        </div>
        <button class="ci-remove" onclick="toggleCart(${m.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>`;
      itemsEl.appendChild(div);
      addCursorHover(div.querySelector('.ci-remove'));
    });
  }

  // Lightbox button
  const lbBtn = document.getElementById('lbAddBtn');
  if (lbBtn) {
    const currentModel = filteredModels[lightboxIndex];
    if (currentModel) {
      const added = cart.some(i => i.id === currentModel.id);
      lbBtn.classList.toggle('added', added);
      lbBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${added ? 'M20 6L9 17l-5-5' : 'M12 5v14M5 12h14'}"/></svg>
        ${added ? 'Retiré du panier' : 'Ajouter au panier'}`;
    }
  }
}

function refreshCardStates() {
  MODELS_DATA.forEach(m => {
    const inCart = cart.some(i => i.id === m.id);
    const btn = document.getElementById(`addbtn-${m.id}`);
    const check = document.getElementById(`check-${m.id}`);
    if (btn) {
      btn.classList.toggle('added', inCart);
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="${inCart ? 'M20 6L9 17l-5-5' : 'M12 5v14M5 12h14'}"/></svg> ${inCart ? 'Ajouté' : 'Panier'}`;
    }
    if (check) check.classList.toggle('visible', inCart);
  });
}

// ==============================
// CART SIDEBAR
// ==============================
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
[document.getElementById('cartBtn'), document.getElementById('cartClose')].forEach(addCursorHover);

// ==============================
// WHATSAPP ORDER
// ==============================


// ==============================
// SITE BASE URL (pour les liens images dans WhatsApp)
// ==============================
const SITE_URL = 'https://ton-site.netlify.app'; // 👈 Remplace par ton URL Netlify

// ==============================
// RECAP PAGE
// ==============================
function openRecap() {
  // Supprimer un éventuel récap existant
  const existing = document.getElementById('recapOverlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'recapOverlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    background:rgba(10,12,13,0.97);
    backdrop-filter:blur(20px);
    overflow-y:auto;
    animation:recapFadeIn .4s cubic-bezier(0.22,1,0.36,1);
  `;

  const itemsHTML = cart.map(m => {
    const imgSrc = m.img || '';
    const imgStyle = imgSrc
      ? `background-image:url('${imgSrc}');background-size:cover;background-position:center top;`
      : `background:linear-gradient(135deg,#1a0d2e,#d15180);`;
    return `
      <div style="display:flex;align-items:center;gap:1.6rem;padding:1.4rem 0;border-bottom:1px solid rgba(255,255,255,.05);">
        <div style="width:7rem;height:8.5rem;border-radius:1rem;flex-shrink:0;${imgStyle}"></div>
        <div style="flex:1;min-width:0;">
          <span style="font-size:.9rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#D15180;">${m.tag}</span>
          <p style="font-family:'Playfair Display',serif;font-size:1.7rem;font-weight:700;color:#f4f0ed;margin:.3rem 0;">${m.name}</p>
          <p style="font-size:1.1rem;color:#6e7278;font-style:italic;">${m.mat} · ${m.style}</p>
        </div>
        <div style="width:5rem;height:6rem;border-radius:.8rem;flex-shrink:0;${imgStyle}background-size:cover;background-position:center;border:1px solid rgba(209,81,128,.3);"></div>
      </div>`;
  }).join('');

  overlay.innerHTML = `
    <style>
      @keyframes recapFadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      .recap-wa-btn:hover { background:#20bd5a !important; transform:translateY(-2px); box-shadow:0 15px 40px rgba(37,211,102,.35) !important; }
      .recap-close-btn:hover { border-color:#D15180 !important; color:#f4f0ed !important; }
    </style>
    <div style="max-width:62rem;margin:0 auto;padding:4rem 2rem 8rem;">

      <!-- Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4rem;">
        <div>
          <p style="font-size:1rem;font-weight:600;letter-spacing:.3em;color:#D15180;text-transform:uppercase;margin-bottom:.6rem;">● RÉCAPITULATIF</p>
          <h2 style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:#f4f0ed;line-height:1.1;">
            Votre Sélection<br><em style="font-weight:300;color:rgba(244,240,237,.4);">${cart.length} modèle${cart.length > 1 ? 's' : ''}</em>
          </h2>
        </div>
        <button class="recap-close-btn" onclick="document.getElementById('recapOverlay').remove()" style="
          width:4.5rem;height:4.5rem;background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.1);border-radius:50%;
          color:#6e7278;font-size:1.8rem;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          transition:all .25s;flex-shrink:0;">✕</button>
      </div>

      <!-- Photos grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:1.5rem;margin-bottom:4rem;">
        ${cart.map(m => {
          const imgSrc = m.img || '';
          const imgStyle = imgSrc
            ? `background-image:url('${imgSrc}');`
            : `background:linear-gradient(135deg,#1a0d2e,#d15180);`;
          return `
          <div style="position:relative;border-radius:1.2rem;overflow:hidden;aspect-ratio:3/4;${imgStyle}background-size:cover;background-position:center top;box-shadow:0 10px 30px rgba(0,0,0,.4);">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,12,13,.9) 0%,transparent 55%);"></div>
            <div style="position:absolute;bottom:1.2rem;left:1.2rem;right:1.2rem;">
              <p style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:#f4f0ed;line-height:1.2;">${m.name}</p>
              <span style="font-size:.85rem;color:#D15180;font-weight:600;letter-spacing:.15em;text-transform:uppercase;">${m.tag}</span>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Liste détaillée -->
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:1.6rem;padding:2.5rem;margin-bottom:3rem;">
        <h3 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:#f4f0ed;margin-bottom:1.5rem;">Détail de la commande</h3>
        ${itemsHTML}
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:1.5rem;margin-top:.5rem;">
          <span style="font-size:1.1rem;color:#6e7278;letter-spacing:.08em;text-transform:uppercase;">Total</span>
          <span style="font-size:1.6rem;font-weight:700;color:#f4f0ed;">${cart.length} modèle${cart.length > 1 ? 's' : ''} sélectionné${cart.length > 1 ? 's' : ''}</span>
        </div>
      </div>

      <!-- Note info -->
      <div style="background:rgba(209,81,128,.07);border:1px solid rgba(209,81,128,.2);border-radius:1rem;padding:1.8rem;margin-bottom:2.5rem;display:flex;gap:1.2rem;align-items:flex-start;">
        <span style="font-size:2rem;flex-shrink:0;">💡</span>
        <p style="font-size:1.2rem;color:rgba(244,240,237,.65);line-height:1.7;">
          Le message WhatsApp contiendra les <strong style="color:#f4f0ed;">noms, descriptions et liens directs</strong> vers chaque photo. 
          Votre styliste pourra visualiser chaque modèle en un clic.
        </p>
      </div>

      <!-- Bouton WhatsApp -->
      <button class="recap-wa-btn" onclick="sendWhatsApp()" style="
        width:100%;display:flex;align-items:center;justify-content:center;gap:1.2rem;
        padding:2rem;background:#25D366;border:none;border-radius:1rem;
        font-family:'Montserrat',sans-serif;font-size:1.4rem;font-weight:700;
        letter-spacing:.08em;text-transform:uppercase;color:#fff;cursor:pointer;
        transition:all .3s cubic-bezier(0.22,1,0.36,1);
        box-shadow:0 10px 30px rgba(37,211,102,.2);">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Confirmer et envoyer via WhatsApp
      </button>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

// ==============================
// WHATSAPP ORDER
// ==============================
function sendWhatsApp() {
  if (cart.length === 0) return;

  const lines = cart.map((m, i) => {
    const imgUrl = m.img ? `${SITE_URL}/${m.img}` : null;
    const photoLine = imgUrl ? `\n   🖼 Photo : ${imgUrl}` : '';
    return `${i + 1}. *${m.name}* (${m.tag})\n   ${m.mat} · ${m.style}${photoLine}`;
  }).join('\n\n');

  const message = encodeURIComponent(
    `Bonjour 👋 *The Beauty*\n\nJe souhaite commander les modèles suivants :\n\n${lines}\n\n📦 *Total : ${cart.length} modèle${cart.length > 1 ? 's' : ''}*\n\nMerci de me contacter pour confirmer. 🙏`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

  // Fermer le récap après envoi
  const recap = document.getElementById('recapOverlay');
  if (recap) recap.remove();
  document.body.style.overflow = '';
  closeCart();
  showToast('Commande envoyée sur WhatsApp ✓');
}

document.getElementById('orderBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  closeCart();
  setTimeout(() => openRecap(), 300);
});



// ==============================
// LIGHTBOX
// ==============================
function openLightbox(id, e) {
  if (e) e.stopPropagation();
  lightboxIndex = filteredModels.findIndex(m => m.id === id);
  if (lightboxIndex === -1) lightboxIndex = 0;
  renderLightbox();
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightboxFn() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const model = filteredModels[lightboxIndex];
  if (!model) return;

  const lbImg = document.getElementById('lbImg');
  lbImg.className = `lb-img ${!model.img ? 'mc-img-placeholder ' + model.variant : ''}`;
  lbImg.style.backgroundImage = model.img ? `url('${model.img}')` : '';
  lbImg.setAttribute('data-num', String(model.id).padStart(2,'0'));

  document.getElementById('lbTag').textContent = model.tag;
  document.getElementById('lbTitle').textContent = model.name;
  document.getElementById('lbDesc').textContent = model.desc;
  document.getElementById('lbMat').textContent = model.mat;
  document.getElementById('lbStyle').textContent = model.style;

  const added = cart.some(i => i.id === model.id);
  const lbBtn = document.getElementById('lbAddBtn');
  lbBtn.className = `lb-add-btn ${added ? 'added' : ''}`;
  lbBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${added ? 'M20 6L9 17l-5-5' : 'M12 5v14M5 12h14'}"/></svg>
    ${added ? 'Retiré du panier' : 'Ajouter au panier'}`;
}

document.getElementById('lbClose').addEventListener('click', closeLightboxFn);
document.getElementById('lbPrev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + filteredModels.length) % filteredModels.length;
  renderLightbox();
});
document.getElementById('lbNext').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % filteredModels.length;
  renderLightbox();
});
document.getElementById('lbAddBtn').addEventListener('click', () => {
  const model = filteredModels[lightboxIndex];
  if (model) toggleCart(model.id);
});
document.getElementById('lightboxOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('lightboxOverlay')) closeLightboxFn();
});
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightboxOverlay');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightboxFn();
  if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + filteredModels.length) % filteredModels.length; renderLightbox(); }
  if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % filteredModels.length; renderLightbox(); }
});

// Floating hero card previews
document.querySelectorAll('.lh-float').forEach(el => {
  const id = parseInt(el.dataset.id);
  const model = MODELS_DATA.find(m => m.id === id);
  if (model) {
    el.classList.add(model.variant);
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    if (model.img) el.style.backgroundImage = `url('${model.img}')`;
  }
});

// ==============================
// TOAST
// ==============================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ==============================
// INIT
// ==============================
renderGrid(true);
addCursorHover(document.getElementById('loadMoreBtn'));
addCursorHover(document.getElementById('cartBtn'));
addCursorHover(document.getElementById('orderBtn'));
addCursorHover(document.getElementById('lbAddBtn'));

console.log('%c✦ THE BEAUTY — Models', 'color:#D15180;font-size:1.5rem;font-weight:bold;');
