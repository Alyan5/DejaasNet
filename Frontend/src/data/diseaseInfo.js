/**
 * Dejaa'sNet - Comprehensive Plant Disease Information Database
 * Contains disease descriptions, symptoms, causes, and treatment suggestions
 * for all 17 classes supported by the CNN model.
 */

const diseaseInfo = {
  "Apple___Apple_scab": {
    plant: "Apple",
    disease: "Apple Scab",
    scientificName: "Venturia inaequalis",
    severity: "Moderate",
    description:
      "Apple scab is a common fungal disease caused by Venturia inaequalis. It affects leaves, fruit, and occasionally twigs, leading to dark, olive-green to black lesions. Severe infections can cause premature leaf drop and unmarketable fruit.",
    symptoms: [
      "Olive-green to dark brown velvety spots on leaves",
      "Scab-like lesions on fruit surface",
      "Distorted or cracked fruit in severe cases",
      "Premature leaf drop",
      "Yellowing of leaves around lesion areas",
    ],
    causes: [
      "Fungal spores overwinter in fallen leaves",
      "Spread by wind and rain splash during spring",
      "Thrives in cool, wet weather (15-20°C)",
      "High humidity promotes spore germination",
    ],
    treatment: [
      "Apply fungicides (captan, myclobutanil) during bud break",
      "Remove and destroy fallen infected leaves in autumn",
      "Prune trees to improve air circulation",
      "Plant scab-resistant apple varieties (e.g., Liberty, Enterprise)",
      "Apply lime sulfur sprays during dormant season",
      "Maintain proper tree spacing for airflow",
    ],
    prevention: [
      "Choose resistant cultivars when planting new trees",
      "Practice good sanitation by raking fallen leaves",
      "Avoid overhead irrigation",
      "Monitor weather conditions for infection periods",
    ],
    icon: "🍎",
    color: "#4a7c59",
  },

  "Apple___Black_rot": {
    plant: "Apple",
    disease: "Black Rot",
    scientificName: "Botryosphaeria obtusa",
    severity: "High",
    description:
      "Black rot is a serious fungal disease of apples caused by Botryosphaeria obtusa. It can affect fruit, leaves, and bark, causing significant crop losses. The fungus can persist in mummified fruits and dead wood for years.",
    symptoms: [
      "Frogeye leaf spots - circular brown lesions with purple margins",
      "Large, expanding brown to black rot on fruit",
      "Concentric rings visible in rotting fruit tissue",
      "Cankers on branches and trunk",
      "Mummified fruit remaining on tree",
    ],
    causes: [
      "Fungus survives in mummified fruits and cankers",
      "Spores spread by rain during warm, wet weather",
      "Enters through wounds, insect damage, or natural openings",
      "Optimal temperature: 20-30°C with high moisture",
    ],
    treatment: [
      "Prune and remove all dead wood and cankers",
      "Remove mummified fruit from trees and ground",
      "Apply fungicides (captan, thiophanate-methyl) preventatively",
      "Treat wounds and pruning cuts with wound sealant",
      "Improve tree vigor through proper fertilization",
      "Control insects that create entry wounds",
    ],
    prevention: [
      "Maintain tree health through balanced nutrition",
      "Remove all sources of inoculum (dead wood, mummies)",
      "Avoid mechanical injury to trees",
      "Use proper pruning techniques during dry weather",
    ],
    icon: "🍎",
    color: "#2d2d2d",
  },

  "Apple___Cedar_apple_rust": {
    plant: "Apple",
    disease: "Cedar Apple Rust",
    scientificName: "Gymnosporangium juniperi-virginianae",
    severity: "Moderate",
    description:
      "Cedar apple rust is a distinctive fungal disease that requires two hosts to complete its life cycle: apple trees and eastern red cedar (juniper). It produces striking orange-yellow spots on apple leaves and fruit.",
    symptoms: [
      "Bright orange-yellow spots on upper leaf surface",
      "Small, tube-like structures (aecia) on leaf undersides",
      "Orange spots on fruit, usually near the calyx",
      "Premature defoliation in severe cases",
      "Reduced fruit size and quality",
    ],
    causes: [
      "Requires alternating hosts: apple and juniper/cedar",
      "Spores travel by wind between host plants (up to several miles)",
      "Spring rains trigger spore release from cedar galls",
      "Warm, humid conditions favor infection",
    ],
    treatment: [
      "Apply fungicides (myclobutanil, triadimefon) at pink bud stage",
      "Continue sprays through petal fall",
      "Remove nearby cedar/juniper trees if possible (within 2 miles)",
      "Destroy cedar galls before they produce spores in spring",
      "Use protective fungicide programs in high-risk areas",
    ],
    prevention: [
      "Plant rust-resistant apple varieties (e.g., Redfree, Liberty)",
      "Separate apple and cedar plantings by maximum distance",
      "Scout for and remove cedar galls in winter",
      "Monitor weather for high-risk infection periods",
    ],
    icon: "🍎",
    color: "#e67e22",
  },

  "Apple___healthy": {
    plant: "Apple",
    disease: "Healthy",
    scientificName: "N/A",
    severity: "None",
    description:
      "This apple leaf shows no signs of disease. The plant appears to be in good health with normal leaf coloration and structure. Continue maintaining good cultural practices to keep your apple trees healthy.",
    symptoms: [],
    causes: [],
    treatment: [
      "Continue regular watering and balanced fertilization",
      "Maintain proper pruning schedule for airflow",
      "Monitor regularly for early signs of disease",
      "Practice integrated pest management (IPM)",
    ],
    prevention: [
      "Keep monitoring leaves for any changes",
      "Ensure proper drainage around root zone",
      "Apply dormant oil sprays as a preventive measure",
      "Maintain clean orchard floor",
    ],
    icon: "🍏",
    color: "#27ae60",
  },

  "Potato___Early_blight": {
    plant: "Potato",
    disease: "Early Blight",
    scientificName: "Alternaria solani",
    severity: "Moderate to High",
    description:
      "Early blight is a common fungal disease of potatoes caused by Alternaria solani. It typically appears first on older, lower leaves and can cause significant yield reductions if not managed. The characteristic 'target spot' pattern makes it identifiable.",
    symptoms: [
      "Dark brown to black concentric ring lesions (target spots)",
      "Lesions first appear on older, lower leaves",
      "Yellowing of tissue around lesions",
      "Premature defoliation from bottom up",
      "Dark, sunken lesions on tubers",
      "Reduced tuber size and yield",
    ],
    causes: [
      "Fungus overwinters in plant debris and infected tubers",
      "Spread by wind, rain, and irrigation water",
      "Favored by warm temperatures (24-29°C)",
      "Stressed or nutrient-deficient plants are more susceptible",
      "Alternating wet and dry conditions promote disease",
    ],
    treatment: [
      "Apply fungicides (chlorothalonil, mancozeb, azoxystrobin) preventatively",
      "Begin spraying when first symptoms appear or at canopy closure",
      "Remove and destroy infected plant debris",
      "Improve plant nutrition, especially nitrogen and potassium",
      "Rotate fungicide modes of action to prevent resistance",
      "Ensure adequate irrigation to reduce plant stress",
    ],
    prevention: [
      "Use certified disease-free seed potatoes",
      "Practice 2-3 year crop rotation away from solanaceous crops",
      "Avoid overhead irrigation late in the day",
      "Space plants adequately for good air circulation",
      "Hill potatoes properly to protect tubers",
    ],
    icon: "🥔",
    color: "#8b6914",
  },

  "Potato___Late_blight": {
    plant: "Potato",
    disease: "Late Blight",
    scientificName: "Phytophthora infestans",
    severity: "Very High",
    description:
      "Late blight is one of the most devastating plant diseases in history, famously causing the Irish Potato Famine. Caused by the oomycete Phytophthora infestans, it can destroy an entire field within days under favorable conditions.",
    symptoms: [
      "Water-soaked, pale green to dark brown lesions on leaves",
      "White fuzzy mold growth on leaf undersides (sporangia)",
      "Rapid spread through entire plant canopy",
      "Dark brown to purple lesions on stems",
      "Reddish-brown granular rot in tubers",
      "Distinctive foul odor from infected tissue",
    ],
    causes: [
      "Oomycete pathogen spread by wind-borne sporangia",
      "Thrives in cool (10-20°C), wet conditions",
      "Can spread extremely rapidly (explosive epidemic potential)",
      "Survives between seasons in infected tubers",
      "Rain and fog facilitate sporulation and infection",
    ],
    treatment: [
      "Apply systemic fungicides immediately (metalaxyl, dimethomorph)",
      "Use protectant fungicides preventatively (chlorothalonil, mancozeb)",
      "Destroy all infected plant material by burning or deep burial",
      "Harvest tubers during dry weather",
      "Avoid wounding tubers during harvest",
      "Store tubers in cool, dry, well-ventilated conditions",
    ],
    prevention: [
      "Plant certified blight-free seed potatoes",
      "Use late blight-resistant varieties",
      "Eliminate volunteer potatoes and cull piles",
      "Monitor weather forecasts for blight-favorable conditions",
      "Apply preventive fungicides before disease appears",
      "Destroy all crop debris after harvest",
    ],
    icon: "🥔",
    color: "#c0392b",
  },

  "Potato___healthy": {
    plant: "Potato",
    disease: "Healthy",
    scientificName: "N/A",
    severity: "None",
    description:
      "This potato leaf appears healthy with no signs of disease. The plant shows normal growth patterns and leaf coloration. Continue with good agricultural practices to maintain plant health.",
    symptoms: [],
    causes: [],
    treatment: [
      "Maintain regular watering schedule",
      "Apply balanced fertilizer as needed",
      "Continue monitoring for pest and disease signs",
      "Hill soil around stems as plants grow",
    ],
    prevention: [
      "Rotate crops annually",
      "Use certified seed potatoes",
      "Maintain proper soil drainage",
      "Scout regularly for early disease symptoms",
    ],
    icon: "🥔",
    color: "#27ae60",
  },

  "Tomato___Bacterial_spot": {
    plant: "Tomato",
    disease: "Bacterial Spot",
    scientificName: "Xanthomonas spp.",
    severity: "High",
    description:
      "Bacterial spot is caused by several species of Xanthomonas bacteria. It affects leaves, stems, and fruit, causing significant damage in warm, humid conditions. It's one of the most challenging tomato diseases to manage.",
    symptoms: [
      "Small, dark, water-soaked spots on leaves",
      "Spots may develop yellow halos",
      "Raised, scab-like lesions on fruit",
      "Defoliation in severe cases",
      "Lesions on stems and petioles",
      "Fruit spots become rough and corky",
    ],
    causes: [
      "Bacteria spread by rain splash, wind, and contaminated tools",
      "Enters through natural openings and wounds",
      "Thrives in warm (24-30°C), humid conditions",
      "Survives on plant debris and infected seeds",
    ],
    treatment: [
      "Apply copper-based bactericides early in disease development",
      "Combine copper sprays with mancozeb for better efficacy",
      "Remove severely infected plants",
      "Avoid working with plants when foliage is wet",
      "Sanitize all tools and equipment between plants",
      "Use bacteriophage-based biological controls where available",
    ],
    prevention: [
      "Use certified disease-free seeds and transplants",
      "Practice crop rotation (2-3 years)",
      "Avoid overhead irrigation",
      "Plant resistant varieties when available",
      "Maintain good air circulation between plants",
    ],
    icon: "🍅",
    color: "#e74c3c",
  },

  "Tomato___Early_blight": {
    plant: "Tomato",
    disease: "Early Blight",
    scientificName: "Alternaria solani",
    severity: "Moderate to High",
    description:
      "Early blight in tomatoes is caused by the same fungus as in potatoes (Alternaria solani). It's one of the most common tomato diseases worldwide, causing characteristic concentric ring patterns on leaves.",
    symptoms: [
      "Concentric ring (target-shaped) lesions on lower leaves first",
      "Dark brown to black spots with yellow halos",
      "Progressive defoliation from bottom of plant upward",
      "Dark, sunken, leathery lesions on fruit stem end",
      "Collar rot at the soil line in seedlings",
    ],
    causes: [
      "Fungal spores overwinter in soil and plant debris",
      "Spread by rain splash, wind, and irrigation",
      "Warm temperatures (24-29°C) with humid conditions",
      "Plants stressed by poor nutrition or drought",
    ],
    treatment: [
      "Apply fungicides (chlorothalonil, copper, azoxystrobin) preventatively",
      "Remove lower infected leaves to slow spread",
      "Mulch around plants to prevent soil splash",
      "Improve plant nutrition with balanced fertilizer",
      "Stake or cage plants to improve air flow",
    ],
    prevention: [
      "Rotate crops for at least 2 years",
      "Remove all plant debris after the season",
      "Water at the base of plants, not overhead",
      "Use resistant varieties when available",
      "Mulch to prevent soil splash onto lower leaves",
    ],
    icon: "🍅",
    color: "#d35400",
  },

  "Tomato___Late_blight": {
    plant: "Tomato",
    disease: "Late Blight",
    scientificName: "Phytophthora infestans",
    severity: "Very High",
    description:
      "Late blight on tomatoes is caused by the same pathogen as potato late blight. It can rapidly devastate tomato crops, with entire plants collapsing within days under favorable conditions.",
    symptoms: [
      "Large, dark green to brown water-soaked lesions on leaves",
      "White, fuzzy growth on leaf undersides in humid conditions",
      "Greasy-appearing dark lesions on stems",
      "Firm, dark brown to olive-colored rot on fruit",
      "Rapid plant death under favorable conditions",
    ],
    causes: [
      "Oomycete pathogen (Phytophthora infestans)",
      "Spreads via airborne sporangia in cool, wet weather",
      "Optimal at 15-22°C with high humidity",
      "Can travel long distances by wind",
    ],
    treatment: [
      "Apply fungicides immediately upon detection (chlorothalonil, mancozeb)",
      "Use systemic fungicides for established infections",
      "Remove and destroy all infected plant tissue",
      "Do not compost infected material",
      "Harvest remaining healthy fruit and ripen indoors",
    ],
    prevention: [
      "Plant resistant varieties (e.g., Defiant, Mountain Magic)",
      "Avoid planting near potatoes",
      "Provide good air circulation with proper spacing",
      "Water at the base; avoid wetting foliage",
      "Monitor late blight forecasting systems in your area",
    ],
    icon: "🍅",
    color: "#8b0000",
  },

  "Tomato___Leaf_Mold": {
    plant: "Tomato",
    disease: "Leaf Mold",
    scientificName: "Passalora fulva (syn. Fulvia fulva)",
    severity: "Moderate",
    description:
      "Leaf mold is a fungal disease primarily affecting greenhouse and high-tunnel tomatoes. It thrives in high humidity and can cause significant leaf loss, reducing fruit production.",
    symptoms: [
      "Pale green to yellowish spots on upper leaf surface",
      "Olive-green to grayish-purple velvety mold on leaf undersides",
      "Leaves curl upward and become brittle",
      "Leaves eventually turn yellow and drop",
      "Rarely affects fruit directly but reduces yield",
    ],
    causes: [
      "Fungus thrives in high humidity (>85%) and moderate temperatures",
      "Common in greenhouse and high-tunnel production",
      "Spores persist on plant debris and greenhouse structures",
      "Poor ventilation exacerbates the problem",
    ],
    treatment: [
      "Improve ventilation and reduce humidity below 85%",
      "Apply fungicides (chlorothalonil, mancozeb) if needed",
      "Remove and destroy severely affected leaves",
      "Increase plant spacing for better air movement",
      "Use fans in greenhouses to promote air circulation",
    ],
    prevention: [
      "Maintain greenhouse humidity below 85%",
      "Provide adequate ventilation and air circulation",
      "Use resistant varieties (many carry the Cf genes)",
      "Avoid overhead watering",
      "Sanitize greenhouse between crop cycles",
    ],
    icon: "🍅",
    color: "#7d8471",
  },

  "Tomato___Septoria_leaf_spot": {
    plant: "Tomato",
    disease: "Septoria Leaf Spot",
    scientificName: "Septoria lycopersici",
    severity: "Moderate to High",
    description:
      "Septoria leaf spot is one of the most destructive foliar diseases of tomatoes. It can cause severe defoliation, exposing fruit to sunscald and reducing plant vigor and yield.",
    symptoms: [
      "Small, circular spots (1-3mm) with dark borders and gray centers",
      "Tiny dark specks (pycnidia) visible in spot centers with a lens",
      "Spots first appear on lower leaves after first fruit set",
      "Severe defoliation progressing upward through plant",
      "Fruit is not directly infected but suffers from sunscald",
    ],
    causes: [
      "Fungus overwinters on infected plant debris",
      "Spread by rain splash from soil to lower leaves",
      "Optimal at 20-25°C with prolonged leaf wetness",
      "Can also be spread by hands, tools, and insects",
    ],
    treatment: [
      "Apply fungicides (chlorothalonil, mancozeb, copper) at first sign",
      "Remove infected lower leaves promptly",
      "Mulch heavily to prevent rain splash from soil",
      "Maintain regular fungicide spray schedule during wet weather",
      "Ensure good plant nutrition to support recovery",
    ],
    prevention: [
      "Rotate crops for at least 2 years",
      "Remove and destroy all plant debris at season end",
      "Mulch around plants to prevent spore splash",
      "Water at soil level, not overhead",
      "Stake or cage plants to keep foliage off the ground",
    ],
    icon: "🍅",
    color: "#95a5a6",
  },

  "Tomato___Spider_mites Two-spotted_spider_mite": {
    plant: "Tomato",
    disease: "Spider Mites (Two-spotted)",
    scientificName: "Tetranychus urticae",
    severity: "Moderate to High",
    description:
      "Two-spotted spider mites are tiny arachnids that feed on plant cells, causing stippling and bronzing of leaves. Large populations can cause severe damage and even plant death, especially in hot, dry conditions.",
    symptoms: [
      "Fine stippling (tiny pale dots) on upper leaf surface",
      "Leaves become bronzed, yellowed, or bleached",
      "Fine silken webbing on leaf undersides and between leaves",
      "Tiny moving dots visible on leaf undersides (the mites)",
      "Severe infestations cause leaf drop and plant decline",
    ],
    causes: [
      "Spider mites thrive in hot (>27°C), dry conditions",
      "Outbreaks often follow broad-spectrum insecticide applications",
      "Dust on foliage can promote mite populations",
      "Mites spread on wind currents, clothing, and tools",
    ],
    treatment: [
      "Spray plants with strong water jet to dislodge mites",
      "Apply miticides (abamectin, spiromesifen) for severe infestations",
      "Release predatory mites (Phytoseiulus persimilis) as biocontrol",
      "Apply insecticidal soap or neem oil for milder infestations",
      "Increase humidity around plants",
      "Avoid broad-spectrum insecticides that kill natural enemies",
    ],
    prevention: [
      "Monitor plants regularly, especially in hot, dry weather",
      "Maintain plant hydration and humidity",
      "Avoid over-fertilizing with nitrogen (promotes succulent growth)",
      "Encourage natural predators in the garden",
      "Keep area around plants free of dust and weeds",
    ],
    icon: "🍅",
    color: "#e74c3c",
  },

  "Tomato___Target_Spot": {
    plant: "Tomato",
    disease: "Target Spot",
    scientificName: "Corynespora cassiicola",
    severity: "Moderate",
    description:
      "Target spot is a fungal disease affecting tomato leaves, stems, and fruit. Named for the concentric ring pattern of lesions, it can cause significant defoliation in warm, humid conditions.",
    symptoms: [
      "Small, brown spots with concentric rings (target pattern)",
      "Spots enlarge and may coalesce into large necrotic areas",
      "Lesions can appear on leaves, stems, and fruit",
      "Lower leaves affected first",
      "Severe defoliation in favorable conditions",
    ],
    causes: [
      "Fungus survives on plant debris and other host plants",
      "Spread by splashing water, wind, and contact",
      "Favored by warm (20-30°C) and humid conditions",
      "Dense plant canopies promote disease development",
    ],
    treatment: [
      "Apply fungicides (chlorothalonil, azoxystrobin, difenoconazole)",
      "Remove heavily infected leaves",
      "Improve air circulation by pruning lower branches",
      "Reduce humidity around plants",
      "Apply mulch to prevent soil splash",
    ],
    prevention: [
      "Maintain proper plant spacing",
      "Practice crop rotation",
      "Remove plant debris at end of season",
      "Use drip irrigation instead of overhead watering",
      "Avoid working with wet plants",
    ],
    icon: "🍅",
    color: "#a0522d",
  },

  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    plant: "Tomato",
    disease: "Yellow Leaf Curl Virus",
    scientificName: "TYLCV (Begomovirus)",
    severity: "Very High",
    description:
      "Tomato Yellow Leaf Curl Virus (TYLCV) is a devastating viral disease transmitted by whiteflies. It causes severe stunting and yield loss, with infected plants producing little to no marketable fruit.",
    symptoms: [
      "Severe upward curling and cupping of leaves",
      "Yellowing of leaf margins and interveinal areas",
      "Stunted plant growth",
      "Flower drop and poor fruit set",
      "Reduced fruit size on remaining fruit",
      "Plants appear bushy with thickened, rubbery leaves",
    ],
    causes: [
      "Transmitted by silverleaf whitefly (Bemisia tabaci)",
      "Virus cannot be spread mechanically (no tool transmission)",
      "Whiteflies acquire virus from infected plants",
      "High whitefly populations increase disease spread",
    ],
    treatment: [
      "No cure exists for virus-infected plants",
      "Remove and destroy infected plants immediately",
      "Control whitefly populations with insecticides or biocontrol",
      "Use yellow sticky traps to monitor and reduce whitefly numbers",
      "Apply reflective mulches to repel whiteflies",
      "Use systemic insecticides (imidacloprid) for whitefly control",
    ],
    prevention: [
      "Plant TYLCV-resistant varieties (Ty-1, Ty-2, Ty-3 genes)",
      "Use whitefly-proof netting in seedling production",
      "Manage whitefly populations aggressively",
      "Remove infected plants and nearby weed hosts",
      "Avoid planting new crops next to older infected ones",
    ],
    icon: "🍅",
    color: "#f1c40f",
  },

  "Tomato___Tomato_mosaic_virus": {
    plant: "Tomato",
    disease: "Mosaic Virus",
    scientificName: "ToMV (Tobamovirus)",
    severity: "High",
    description:
      "Tomato mosaic virus (ToMV) is a highly stable and infectious virus that can persist on surfaces, in soil, and on seeds for years. It's easily transmitted by touch, making it challenging to control in production settings.",
    symptoms: [
      "Mottled light and dark green mosaic pattern on leaves",
      "Leaf distortion, curling, and fern-like appearance",
      "Stunted plant growth",
      "Reduced fruit set and uneven fruit ripening",
      "Internal browning of fruit (brownwall)",
      "Young leaves may be narrowed or shoe-string shaped",
    ],
    causes: [
      "Mechanically transmitted by handling plants (hands, tools)",
      "Extremely stable virus surviving on surfaces for months/years",
      "Seed-borne transmission possible",
      "Spread through contaminated soil and plant debris",
      "Tobacco products can be a source (related to TMV)",
    ],
    treatment: [
      "No chemical cure available for viral infections",
      "Remove and destroy infected plants immediately",
      "Sanitize hands and tools with milk solution or TSP",
      "Avoid handling healthy plants after touching infected ones",
      "Do not save seeds from infected plants",
    ],
    prevention: [
      "Use virus-resistant varieties (Tm-2 and Tm-2² genes)",
      "Start with certified virus-free seeds and transplants",
      "Wash hands thoroughly before handling plants",
      "Dip tools in 10% bleach or milk solution between plants",
      "Avoid using tobacco products near tomato plants",
      "Remove and destroy all plant debris at end of season",
    ],
    icon: "🍅",
    color: "#2ecc71",
  },

  "Tomato___healthy": {
    plant: "Tomato",
    disease: "Healthy",
    scientificName: "N/A",
    severity: "None",
    description:
      "This tomato leaf shows no signs of disease or pest damage. The plant appears to be in excellent health condition with normal leaf color, shape, and structure. Maintain current cultural practices.",
    symptoms: [],
    causes: [],
    treatment: [
      "Continue regular watering at soil level",
      "Maintain balanced fertilization program",
      "Support plants with stakes or cages",
      "Monitor regularly for early signs of disease or pests",
    ],
    prevention: [
      "Practice crop rotation each season",
      "Maintain clean garden beds",
      "Ensure proper spacing between plants",
      "Remove lower leaves that touch the ground",
    ],
    icon: "🍅",
    color: "#27ae60",
  },
};

export const getDiseaseInfo = (label) => {
  return diseaseInfo[label] || null;
};

export const getSeverityColor = (severity) => {
  const colors = {
    None: "#27ae60",
    Low: "#2ecc71",
    Moderate: "#f39c12",
    "Moderate to High": "#e67e22",
    High: "#e74c3c",
    "Very High": "#c0392b",
  };
  return colors[severity] || "#95a5a6";
};

export const getAllDiseases = () => {
  return Object.entries(diseaseInfo).map(([key, value]) => ({
    key,
    ...value,
  }));
};

export default diseaseInfo;
