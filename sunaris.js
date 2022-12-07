const bronze = {
	"fer": 2,
	"cuivre": 4,
	"money": 10
};

const acier = {
	'fer' : 16,
	'or' : 8,
	'obsidienne' : 4,
	'bronze' : 4,
	'money' : 20
 };

const invar = {
	'or' : 16,
	'diamant' : 4,
	'emeraude' : 12,
	'bronze' : 4,
	'acier' : 2,
	'money' : 30
 };

const titane = {
	'diamant' : 8,
	'emeraude' : 16,
	'netherite_scrap' : 2,
	'acier' : 4,
	'invar' : 4,
	'money' : 50,
 };

const virenium = {
	'titane' : 8,
	'diamant' : 16,
	'netherite_ingot' : 2,
	'nether_star' : 3,
	'money' : 300
 };

const virenium_infused = {
	'virenium' : 1,
	'titane' : 4,
	'nether_star' : 4
 };

 const Pioche_en_virenium = {
	'virenium' : 3,
	'virenium_infused' : 1,
 };

var totalMaterials = {
	'fer': null,
	'cuivre': null,
	'or': null,
	'diamant': null,
	'emeraude': null,
	'obsidienne': null,
	'netherite_scrap': null,
	'netherite_ingot': null,
	'nether_star': null,
	'money': null,
	'virenium_infused' : null,
};

const moneyArray = ['money'];
const alliageArray = ['bronze', 'acier', 'invar', 'titane', 'virenium', 'virenium_infused'];

function recipe() {

		totalMaterials = {
			'fer': null,
			'cuivre': null,
			'or': null,
			'diamant': null,
			'emeraude': null,
			'obsidienne': null,
			'netherite_scrap': null,
			'netherite_ingot': null,
			'nether_star': null,
			'money': null,
			'virenium_infused' : null,
		};

		let formula = document.getElementById('formula');
		let formulaText = formula.options[formula.selectedIndex].text;
		let formulaValue = formula.options[formula.selectedIndex].value;
		let formulaValueText = formula.options[formula.selectedIndex].value;
		let quantity = parseInt(document.getElementById('quantity').value);
		let titleToReturn = 'Elements pour ' + formulaText + ' (' + quantity +')';
		let resultTitle = document.getElementById('result-title');
		let resultTitleArray = document.getElementById('result-title-array');
		let resultTitleTotal = document.getElementById('result-title-total');
		let resultDetail = document.getElementById('result-detail');
		let resultDetailTotal = document.getElementById('result-detail-total');
		let resultDetailTotalStack = document.getElementById('result-detail-total-stack');
		let resultDetailTotalStackb = document.getElementById('result-detail-total-stackb');
		let resultSchema = document.getElementById('result-schema');
		let resultArraySchemaAliages = document.getElementById  ('result-array-schema-aliages')       

		if (formulaText === '--Merci de choisir une option--' || quantity < 1 || isNaN(quantity)) {
			titleToReturn = 'Merci de remplir la quantité';
		} else {
			var resultArray = {
				'commande' : {
					'elements' : formulaValue + ' : ' + quantity,
					'detail' : calculate(formulaValue, quantity)
					
				}
			}
			
			let margeClassList = [
				'no-class',
				'margingleft25',
				'margingleft50',
				'margingleft75',
				'margingleft100',
				'margingleft125',
			];

			let listToFormat = document.getElementsByClassName('to-format');
			for (let i = 0; i < listToFormat.length; i++) {
				let margeClassListIndex = marge[i];
				let className =  margeClassList[margeClassListIndex];
				listToFormat[i].classList.add(className);
			}

			Object.keys(totalMaterials).forEach(key => {
				if (totalMaterials[key] !== null) {

					let imgD = document.createElement("img");
					imgD.height = 25;
					imgD.width = 25;
					if (moneyArray.includes(key)) {
						imgD.src = 'pictures/money.png';
					} else {
						if (key === 'nether_star') {
							imgD.src = 'pictures/' + key + '.gif';
						} else {
							imgD.src = 'pictures/' + key + '.png';
						}
					}
					let keyText = key;
					if (moneyArray.includes(key)) {
						if (key === 'money') {
							keyText = "money"
						}
					}

					resultDetailTotal.appendChild(imgD);
					let paraD = document.createElement("span");
					paraD.innerText = ' ' + keyText + ' : ' + totalMaterials[key];
					resultDetailTotal.appendChild(paraD);
					resultDetailTotal.appendChild(document.createElement("br"));
				}
			});

			var totalMaterialsStack = {
				'fer': stackConverter(totalMaterials.fer),
				'cuivre': stackConverter(totalMaterials.cuivre),
				'or': stackConverter(totalMaterials.or),
				'diamant': stackConverter(totalMaterials.diamant),
				'emeraude': stackConverter(totalMaterials.emeraude),
				'obsidienne': stackConverter(totalMaterials.obsidienne),
				'netherite_scrap': stackConverter(totalMaterials.netherite_scrap),
				'netherite_ingot': stackConverter(totalMaterials.netherite_ingot),
				'nether_star': stackConverter(totalMaterials.nether_star),
			};
			var totalMaterialsStackb = {
				'fer': stackConverterb(totalMaterials.fer),
				'cuivre': stackConverterb(totalMaterials.cuivre),
				'or': stackConverterb(totalMaterials.or),
				'diamant': stackConverterb(totalMaterials.diamant),
				'emeraude': stackConverterb(totalMaterials.emeraude),
				'netherite_ingot': stackConverterb(totalMaterials.netherite_ingot),
				
			};

			Object.keys(totalMaterialsStack).forEach(key => {
				if (totalMaterialsStack[key] !== null) {
					let img = document.createElement("img");
					img.height = 25;
					img.width = 25;
					if (moneyArray.includes(key)) {
						img.src = 'pictures/money.png';
					}  else {
						if (key === 'nether_star') {
							img.src = 'pictures/' + key + '.gif';
						} else {
							img.src = 'pictures/' + key + '.png';
						}
					}

					let keyText = key;
					if (moneyArray.includes(key)) {
						if (key === 'money') { keyText = "money"}
					}

					resultDetailTotalStack.appendChild(img);
					let para = document.createElement("span");
					para.innerText = ' ' + keyText + ' : ' + totalMaterialsStack[key];
					resultDetailTotalStack.appendChild(para);
					resultDetailTotalStack.appendChild(document.createElement("br"));
				}
			});
			Object.keys(totalMaterialsStackb).forEach(key => {
				if (totalMaterialsStackb[key] !== null) {
					let img = document.createElement("img");
					img.height = 25;
					img.width = 25;
				   {
						if (key === 'nether_star') {
							img.src = 'pictures/' + key + '.webp';
						} else {
							img.src = 'pictures/' + key + '.png';
						}
					}

					let keyText = key;
					if (moneyArray.includes(key)) {
						if (key === 'money') { keyText = "money"}
					}

					resultDetailTotalStackb.appendChild(img);
					let para = document.createElement("span");
					para.innerText = ' ' + keyText + ' : ' + totalMaterialsStackb[key];
					resultDetailTotalStackb.appendChild(para);
					resultDetailTotalStackb.appendChild(document.createElement("br"));
				}
			});
		}
		resultTitle.innerText = titleToReturn;
		resultTitleArray.innerText = titleToReturn;
		resultTitleTotal.innerText = titleToReturn;

}


function generateSchemaData(resultArraySchema, resultSchema) {
	let alliageArray = ['bronze', 'acier', 'invar', 'titane', 'virenium', 'virenium_infused'];
	Object.keys(resultArraySchema).forEach(key => {
		if (!alliageArray.includes(key)) {
			let imgD = document.createElement("img");
			imgD.height = 25;
			imgD.width = 25;
			imgD.classList.add('to-format');
			if (moneyArray.includes(key)) {
				imgD.src = 'pictures/money.png';
			} else {
				if (key === 'nether_star') {
					imgD.src = 'pictures/' + key + '.gif';
				} else {
					imgD.src = 'pictures/' + key + '.png';
				}
			}
			let keyText = key;
			if (moneyArray.includes(key)) {
				if (key === 'money') {
					keyText = "money"
				}
			   
			}
		resultSchema.appendChild(imgD);
			let paraD = document.createElement("span");
			paraD.innerText = ' ' + keyText + ' : ' + resultArraySchema[key] + ' (' + stackConverter(resultArraySchema[key]) + ')';
			resultSchema.appendChild(paraD);
			resultSchema.appendChild(document.createElement("br"));
		} else {
			if (alliageArray.includes(key)) {
				let imgAlliage = document.createElement("img");
				imgAlliage.height = 25;
				imgAlliage.width = 25;
				imgAlliage.src = 'pictures/' + key + '.png';
				imgAlliage.classList.add('glow');
				imgAlliage.classList.add('to-format');

				let keyText = key;
				resultSchema.appendChild(imgAlliage);
				let paraBronze = document.createElement("span");
				paraBronze.innerText = ' ' + keyText + ' : ' + resultArraySchema[key]['number'] + ' (' + stackConverter(resultArraySchema[key]['number']) + ')';
				resultSchema.appendChild(paraBronze);
				resultSchema.appendChild(document.createElement("br"));
				generateSchemaData(resultArraySchema[key]['composant'], resultSchema);
			}
		}
		
	});
	
}

function calculate(element, number) {
	if (element === 'bronze') {
		return calculateBronze(number);
	}

	if (element === 'acier') {
		return calculateAcier(number);
	}

	if (element === 'invar') {
		return calculateInvar(number);
	}
	if (element === 'titane') {
		return calculateTitane(number);
	}

	if (element === 'virenium') {
		return calculateVirenium(number);
	}

	if (element === 'virenium_infused') {
		return calculateVireniumInfused(number);
	}
}

function calculateBronze(value) {
	totalMaterials.fer = totalMaterials.fer + (bronze.fer * value);
	totalMaterials.cuivre = totalMaterials.cuivre + (bronze.cuivre * value);
	totalMaterials.money = totalMaterials.money + (bronze.money * value);

	return {
	  'fer': bronze.fer * value,
	  'cuivre': bronze.cuivre * value,
	  'money': bronze.money * value,
	};
}

function calculateAcier(value) {
	totalMaterials.fer = totalMaterials.fer + (acier.fer * value);
	totalMaterials.or = totalMaterials.or + (acier.or * value);
	totalMaterials.obsidienne = totalMaterials.obsidienne + (acier.obsidienne * value);
	totalMaterials.money = totalMaterials.money + (acier.money * value);

	return {
		'fer': acier.fer * value,
		'or': acier.or * value,
		'obsidienne': acier.obsidienne * value,
		'money': acier.money * value,
		'bronze': {
			'number' : acier.bronze * value,
			'composant' : calculateBronze(acier.bronze * value)
		},
	};
}

function calculateInvar(value) {
	totalMaterials.or = totalMaterials.or + (invar.or * value);
	totalMaterials.diamant = totalMaterials.diamant + (invar.diamant * value);
	totalMaterials.emeraude = totalMaterials.emeraude + (invar.emeraude * value);
	totalMaterials.money = totalMaterials.money + (invar.money * value);

	return {
		'or': invar.or * value,
		'diamant': invar.diamant * value,
		'emeraude': invar.emeraude * value,
		'money': invar.money * value,
		'bronze': {
			'number' : invar.bronze * value,
			'composant' : calculateBronze(invar.bronze * value)
		},
		'acier': {
			'number' : invar.acier * value,
			'composant' : calculateAcier(invar.acier * value)
		},
	};
}

function  calculateTitane(value) {
	totalMaterials.diamant = totalMaterials.diamant + (titane.diamant * value);
	totalMaterials.emeraude = totalMaterials.emeraude + (titane.emeraude * value);
	totalMaterials.netherite_scrap = totalMaterials.netherite_scrap + (titane.netherite_scrap * value);
	totalMaterials.money = totalMaterials.money + (titane.money * value);

	return {
		'diamant': titane.diamant * value,
		'emeraude': titane.emeraude * value,
		'netherite_scrap': titane.netherite_scrap * value,
		'money': titane.money * value,
		'acier': {
			'number' : titane.acier * value,
			'composant' : calculateAcier(titane.acier * value)
		},
		'invar': {
			'number' : titane.invar * value,
			'composant' : calculateInvar(titane.invar * value)
		},
	};
}

function calculateVirenium(value) {
	totalMaterials.diamant = totalMaterials.diamant + (virenium.diamant * value);
	totalMaterials.netherite_ingot = totalMaterials.netherite_ingot + (virenium.netherite_ingot * value);
	totalMaterials.nether_star = totalMaterials.nether_star + (virenium.nether_star * value);
	totalMaterials.money = totalMaterials.money + (virenium.money * value);

	return {
		'diamant': virenium.diamant * value,
		'netherite_ingot': virenium.netherite_ingot * value,
		'nether_star': virenium.nether_star * value,
		'money': virenium.money * value,
		'titane':  {
			'number' : virenium.titane * value,
			'composant' : calculateTitane(virenium.titane * value)
		},
	};
}

function calculateVireniumInfused(value) {
	totalMaterials.nether_star = totalMaterials.nether_star + (virenium_infused.nether_star * value);

	return {
		'nether_star': virenium_infused.nether_star * value,
		'titane':  {
			'number' : virenium_infused.titane * value,
			'composant' : calculateTitane(virenium_infused.titane * value)
		},
		'virenium':  {
			'number' : virenium_infused.virenium * value,
			'composant' : calculateVirenium(virenium_infused.virenium * value)
		},
	};
}


function calculatePiocheVirenium(value) {
	totalMaterials.virenium_infused = totalMaterials.virenium_infused + (Pioche_virenium.virenium_infused * value);
	totalMaterials.virenium = totalMaterials.virenium + (Pioche_virenium.virenium * value);
	totalMaterials.money = totalMaterials.money + (virenium.money * value);

	return {
		'virenium': Pioche_virenium.virenium  * value,
		'vireniumInfused':  {
			'number' : Pioche_virenium.virenium_infused * value,
			'composant' : calculateVirenium(virenium_infused.virenium * value) + 1
			
		},
	};
}

function calculatePiocheVirenium(value){
	totalMaterials.virenium_infused
	totalMaterials.virenium
}

function stackConverter(value) {
	if (value !== null) {
		let stack = Math.trunc(value / 64);
		let left = value % 64;
		let stackText = 'stack';
		if (stack > 1) {
			stackText = 'stacks';
		}

		return stack + ' ' + stackText + ' et ' + left + ' unités';
	}

   return null;
}
   
function stackConverterb(value) {
	if (value !== null) {
		let stack = Math.trunc((value / 9)/64 );
		let left = Math.trunc((value /9) %64);
		let left2 = Math.trunc(value %9);

		let stackText = 'stack';
		if (stack > 1) {
			stackText = 'stacks';
		}

		return stack + ' ' + stackText + ' de blocks plus ' + left + ' ' + ' blocks ' + ' et ' + left2 + ' unités ';
	}

   return null;
}