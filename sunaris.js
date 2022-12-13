const COMPONENT_CATEGORIES = {
  ALLIAGE: "alliage",
  RAW_MATERIAL: "raw material",
};

const RECETTES = Object.freeze([
  {
    name: "fer",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/fer.png",
	picturePathBlock: "pictures/ferB.png",
  },
  {
    name: "cuivre",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/cuivre.png",
	picturePathBlock: "pictures/cuivreB.png",
  },
  {
    name: "or",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/or.png",
	picturePathBlock: "pictures/orB.png",
  },
  {
    name: "diamant",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/diamant.png",
	picturePathBlock: "pictures/diamantB.png",
  },
  {
    name: "emeraude",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/emeraude.png",
	picturePathBlock: "pictures/emeraudeB.png",
  },
  {
    name: "obsidienne",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/obsidienne.png",
  },
  {
    name: "netherite_scrap",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/netherite_scrap.png",
  },
  {
    name: "netherite_ingot",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/netherite_ingot.png",
	picturePathBlock: "pictures/netheriteB.png",
  },
  {
    name: "nether_star",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/nether_star.gif",
  },
  {
    name: "money",
    components: [],
    category: COMPONENT_CATEGORIES.RAW_MATERIAL,
    picturePath: "pictures/money.png",
  },

  {
    name: "bronze",
    components: [
      { name: "cuivre", quantity: 4 },
      { name: "fer", quantity: 2 },
      { name: "money", quantity: 10 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/cuivre.png",
  },
  {
    name: "acier",
    components: [
      { name: "cuivre", quantity: 16 },
      { name: "fer", quantity: 24 },
      { name: "or", quantity: 8 },
      { name: "obsidienne", quantity: 4 },
      { name: "bronze", quantity: 4 },
      { name: "money", quantity: 60 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/fer.png",
  },
  {
    name: "invar",
    components: [
      { name: "cuivre", quantity: 48 },
      { name: "fer", quantity: 56 },
      { name: "or", quantity: 32 },
      { name: "obsidienne", quantity: 8 },
      { name: "diamant", quantity: 4 },
      { name: "emeraude", quantity: 12 },
      { name: "bronze", quantity: 12 },
      { name: "acier", quantity: 2 },
      { name: "money", quantity: 190 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/invar.png",
  },
  {
    name: "titane",
    components: [
      { name: "cuivre", quantity: 256 },
      { name: "fer", quantity: 320 },
      { name: "or", quantity: 160 },
      { name: "obsidienne", quantity: 48 },
      { name: "diamant", quantity: 24 },
      { name: "emeraude", quantity: 64 },
      { name: "netherite_scrap", quantity: 2 },
      { name: "bronze", quantity: 64 },
      { name: "acier", quantity: 12 },
      { name: "invar", quantity: 4 },
      { name: "money", quantity: 1050 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/titane.png",
  },

  {
    name: "virenium",
    components: [
      { name: "cuivre", quantity: 2048 },
      { name: "fer", quantity: 2560 },
      { name: "or", quantity: 1280 },
      { name: "obsidienne", quantity: 384 },
      { name: "diamant", quantity: 208 },
      { name: "emeraude", quantity: 512 },
      { name: "netherite_scrap", quantity: 16 },
      { name: "netherite_ingot", quantity: 2 },
      { name: "nether_star", quantity: 3 },
      { name: "bronze", quantity: 512 },
      { name: "acier", quantity: 96 },
      { name: "invar", quantity: 32 },
      { name: "titane", quantity: 8 },
      { name: "money", quantity: 8700 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/virenium.png",
  },
  {
    name: "virenium_infused",
    components: [
      { name: "cuivre", quantity: 3072 },
      { name: "fer", quantity: 3840 },
      { name: "or", quantity: 1920 },
      { name: "obsidienne", quantity: 576 },
      { name: "diamant", quantity: 304 },
      { name: "emeraude", quantity: 768 },
      { name: "netherite_scrap", quantity: 24 },
      { name: "netherite_ingot", quantity: 2 },
      { name: "nether_star", quantity: 7 },
      { name: "bronze", quantity: 768 },
      { name: "acier", quantity: 144 },
      { name: "invar", quantity: 48 },
      { name: "titane", quantity: 12 },
      { name: "virenium", quantity: 1 },
      { name: "money", quantity: 12900 },
    ],
    category: COMPONENT_CATEGORIES.ALLIAGE,
    picturePath: "pictures/virenium.png",
  },
]);

const stackConverter = (value) => {
  if (value !== null) {
    let stack = Math.trunc(value / 64);
    let left = value % 64;
    let stackText = "stack";
    if (stack > 1) {
      stackText = "stacks";
    }

    return stack + " " + stackText + " et " + left + " unités";
  }

  return null;
};

const stackConverterb = (value) => {
  if (value !== null) {
    let stack = Math.trunc(value / 9 / 64);
    let left = Math.trunc((value / 9) % 64);
    let left2 = Math.trunc(value % 9);

    let stackText = "stack";
    if (stack > 1) {
      stackText = "stacks";
    }

    return (
      stack +
      " " +
      stackText +
      " de blocks plus " +
      left +
      " " +
      " blocks " +
      " et " +
      left2 +
      " unités "
    );
  }

  return null;
};

function recipe() {
  const findSubComponents = (elementName, demandedQuantity) => {
    const foundRecette = RECETTES.find((found) => found.name === elementName);

    const itemsRequired = [];

    foundRecette.components.forEach((component) => {
      const componentRequiredQuantity = component.quantity * demandedQuantity;
      const componentName = component.name;
      const buildedItemsRequired = findSubComponents(
        // recursif	// Une liste
        componentName,
        componentRequiredQuantity
      );

      itemsRequired.push(buildedItemsRequired);
    });

    return {
      name: elementName,
      category: foundRecette.category,
      picturePath: foundRecette.picturePath,
	  picturePathBlock: foundRecette.picturePathBlock,
      quantity: demandedQuantity,
      itemsRequired,
    };
  };

  const isComponentAlliage = (comp) =>
    comp.category === COMPONENT_CATEGORIES.ALLIAGE;
  const isComponentMoney = (comp) => ["money"].includes(comp.name);

  const calculateV2 = (elementName, demandedQuantity) => {
    return findSubComponents(elementName, demandedQuantity, false);
  };

  const filterCalculatedByCategory = (
    calculated,
    buildedResult,
    categoryNameFilter,
    nested = false
  ) => {
    const { itemsRequired, category, name, quantity, picturePath, picturePathBlock } = calculated;
    if (categoryNameFilter === category) {
      const foundComponent = buildedResult.find((c) => c.name === name);
      if (foundComponent) {
        foundComponent.quantity = foundComponent.quantity + quantity;
      } else {
        buildedResult.push({
          name,
          quantity,
          category,
          picturePath,
		  picturePathBlock,
        });
      }
    }

    return;
  };

  const RESULT_BOX_TYPES = {
    ALLIAGE: "alliageBox",
    RAW: "rawBox",
    RAW_STACK: "rawStackBox",
    RAW_STACK_BLOCK: "rawStackBlockBox",
  };

  const buildBlockText = ({
    keyText,
    itemComponentQuantity,
    boxType,	 // rawBox
  }) => {
    const blockBuilderMapping = {
		alliageBox: () =>
        ` ${keyText} : ${itemComponentQuantity} (${stackConverter(itemComponentQuantity)})`,

		rawBox: () =>
        ` ${keyText} : ${itemComponentQuantity}`, //la on change l'écriture
	
		rawStackBox: () =>
        ` ${keyText} :  ${stackConverter(itemComponentQuantity)}`,

		rawStackBlockBox: () =>	// ????
        ` ${keyText} :  ${stackConverterb(itemComponentQuantity)}`,
    };

	return blockBuilderMapping[boxType](); // TEST
  };

  const generateSchemaData = ({
    resultArraySchema,
    resultSchema,
    boxType,
  }) => {
    // let alliageArray = ['bronze', 'acier', 'invar', 'titane', 'virenium', 'virenium_infused'];

    console.log("generateSchemaData->", { resultArraySchema, resultSchema });

    const { name, category, quantity, itemsRequired } = resultArraySchema;

	const blackListByBoxType = {
		[RESULT_BOX_TYPES.RAW_STACK]: ['money'],
		[RESULT_BOX_TYPES.RAW_STACK_BLOCK]: ['obsidienne','money','netherite_scrap','nether_star'] ,
	}

    itemsRequired.forEach((itemComponent) => {
      console.log("looping in n item required ->", itemComponent);
      const {
        name: itemComponentName,
        category: itemComponentCategory,
        quantity: itemComponentQuantity,
        itemsRequired: itemComponentRequiredItems,
        picturePath: itemComponentPicturePath,
		picturePathBlock: itemPicturePathBlock
      } = itemComponent;

	  const isBlacklisted = !!blackListByBoxType[boxType]?.find(item=> item === itemComponentName);	// !! transforms it into boolean boolean
	  if (!isBlacklisted){
		// handling image

		let imagePath = itemComponentPicturePath;	 // assumption -> on assume la valeur

		if (boxType === RESULT_BOX_TYPES.RAW_STACK_BLOCK){ 
			imagePath = itemPicturePathBlock;
		}

		//	VERIFIER SI IMAGE PATH EXISTE:
		if (!imagePath){
			console.warn('veillez mettre à jour les images sur du -> ', itemComponentName);	// check
		}
		// -------

		let imgD = document.createElement("img");
		imgD.height = 25;
		imgD.width = 25;
		imgD.classList.add("to-format");
		imgD.src = imagePath;
		//
		const keyText = itemComponentName;
		if (isComponentAlliage(itemComponent)) {
		  imgD.classList.add("glow");
		  // generateSchemaData(resultArraySchema[key]['composant'], resultSchema);	// TODO fix
		}
		// NON-ALLIAGE
		resultSchema.appendChild(imgD);
		const paraD = document.createElement("span");
		paraD.innerText = buildBlockText({
		  keyText,
		  itemComponentQuantity,
		  boxType,
		});
  
		resultSchema.appendChild(paraD);
		resultSchema.appendChild(document.createElement("br"));
		return;
	  }
    });
  };

  let formula = document.getElementById("formula");
  let formulaText = formula.options[formula.selectedIndex].text;
  let formulaValue = formula.options[formula.selectedIndex].value;
  let quantity = parseInt(document.getElementById("quantity").value);
  let titleToReturn = "Elements pour " + formulaText + " (" + quantity + ")";
  let resultTitle = document.getElementById("result-title");
  let resultTitleArray = document.getElementById("result-title-array");
  let resultTitleTotal = document.getElementById("result-title-total");
  let resultDetail = document.getElementById("result-detail");
  let resultDetailTotal = document.getElementById("result-detail-total");
  let resultDetailTotalStack = document.getElementById(
    "result-detail-total-stack"
  );
  let resultDetailTotalStackb = document.getElementById(
    "result-detail-total-stackb"
  );
  let resultSchema = document.getElementById("result-alliage");

  // resetting schema:
  resultSchema.innerHTML = "";
  resultDetailTotalStackb.innerHTML = "";
  resultDetailTotalStack.innerHTML = "";
  resultDetailTotal.innerHTML = "";
  // ------

  if (
    formulaText === "--Merci de choisir une option--" ||
    quantity < 1 ||
    isNaN(quantity)
  ) {
    titleToReturn = "Merci de remplir la quantité";
  } else {
    const calculationV2Result = calculateV2(formulaValue, quantity);
    console.log("calculationResult->", calculationV2Result);
    const onlyAlliages = [];

    calculationV2Result.itemsRequired.forEach((itemRequired) => {
      filterCalculatedByCategory(
        itemRequired,
        onlyAlliages,
        COMPONENT_CATEGORIES.ALLIAGE
      );
    });

    console.log("only alliages ->", onlyAlliages);

    // For only alliages
    generateSchemaData({
      resultArraySchema: {
        ...calculationV2Result,
        itemsRequired: onlyAlliages,
      },
      resultSchema,
	  boxType: RESULT_BOX_TYPES.ALLIAGE
    });

    // DISPLAY 3 RAW BOXES
    const onlyRaw = [];

    calculationV2Result.itemsRequired.forEach((itemRequired) => {
      filterCalculatedByCategory(
        itemRequired,
        onlyRaw,
        COMPONENT_CATEGORIES.RAW_MATERIAL
      );
    });
    // Schema for raw total materials
    generateSchemaData({
      resultArraySchema: {
        ...calculationV2Result,
        itemsRequired: onlyRaw,
      },
      resultSchema: resultDetailTotal,
	  boxType: RESULT_BOX_TYPES.RAW
    });

    // Schema for raw stack v1	(a)
    generateSchemaData({
      resultArraySchema: {
        ...calculationV2Result,
        itemsRequired: onlyRaw,
      },
      resultSchema: resultDetailTotalStack,
	  
	  boxType: RESULT_BOX_TYPES.RAW_STACK

    });

    // Schema for raw stack v2 (b)
    generateSchemaData({
      resultArraySchema: {
        ...calculationV2Result,
        itemsRequired: onlyRaw, 
      },
      resultSchema: resultDetailTotalStackb, // TODO Change
	  boxType: RESULT_BOX_TYPES.RAW_STACK_BLOCK


    });
    //---------

    let marge = [];

    let margeClassList = [
      "no-class",
      "margingleft25",
      "margingleft50",
      "margingleft75",
      "margingleft100",
      "margingleft125",
    ];

    let listToFormat = document.getElementsByClassName("to-format");
    for (let i = 0; i < listToFormat.length; i++) {
      let margeClassListIndex = marge[i];
      let className = margeClassList[margeClassListIndex];
      listToFormat[i].classList.add(className);
    }
  }
  resultTitle.innerText = titleToReturn;
}
