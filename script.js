const sellOptionFacebook = document.querySelector(".sellOptionBlock-fb");
const sellOptionEbay = document.querySelector(".sellOptionBlock-ebay");
const sellOptionCm = document.querySelector(".sellOptionBlock-cm");
const sellOptionBox = document.querySelector(".box-2");
const ebayCheckBoxAppear = document.querySelector(".box-2-5");
const hrPop = document.querySelector(".hr-disabled");
const hrReponsive = document.querySelector(".hr-responsive");
const submitResponsive = document.querySelector(".box-3");
const boxInputResponsive = document.querySelectorAll(".box");
const boxCategoryeBay = document.querySelectorAll(".boxebaycategoryautomoto");
const boxOptionAutoMotos = document.querySelectorAll(".automotocategory");

function tapisDeroulanteBay() {
  sellOptionBox.classList.add("box-deux-remove");

  setTimeout(function () {
    ebayCheckBoxAppear.classList.add("box-checkbox-appear");
    hrPop.classList.add("hr-add");
    hrReponsive.classList.add("hr-padding");
    submitResponsive.classList.add("box-trois-responsive");

    boxInputResponsive.forEach(function (box) {
      box.classList.remove("box-marge-delete");
      box.classList.add("box-input-responsive");
    });
  }, 750);
}

function tapisDeroulanteBayCategorie() {
  boxCategoryeBay.forEach(function (boxebaycategoryautomoto) {
    boxebaycategoryautomoto.classList.add("box-ebay-category-remove");
  });

  setTimeout(function () {
    boxOptionAutoMotos.forEach(function (automotocategory) {
      automotocategory.classList.add("auto-and-moto-cat-visible");
      automotocategory.classList.remove("automotocategorydisplay");
    });
  }, 750);
}

const form = document.querySelector("form");
const section = document.querySelector("section");
const prixAchat = document.getElementById("prixAchat");
const prixVente = document.getElementById("prixVente");
const prixEnvoi = document.getElementById("coutEnvoie");
const venteBay = document.getElementById("ebay");
const venteFacebook = document.getElementById("facebook");
const venteCardMarket = document.getElementById("cardmarket");
const reductioneBay = document.getElementById("reductioneBay");

const ebayCategoryOthers = document.getElementById("ebay-category-others");
const ebayCategoryAutoMoto = document.getElementById("ebay-category-auto");
const ebayCategoryMotoMoto = document.getElementById("ebay-category-motos");
const ebayCategoryAutoAuto = document.getElementById("ebay-category-auto-auto");

const buttonNewSell = document.querySelector(".button-box");

function formule() {
  form.classList.add("form-transform-out");
  form.classList.remove("form-transform-in");
  buttonNewSell.classList.remove("button-box");
  buttonNewSell.classList.add("button-box-appear");
  buttonNewSell.classList.remove("button-box-disappear");
  section.classList.add("section-visible");
  section.classList.remove("section-disabled");

  let structure = "";
  let taxeBay = 0;
  let promotion = 0;
  let taxeBayAfterPromotion = 0;
  let taxeTva = 0;
  let totalTaxe = 0;
  let totalCount = 0;
  let benefice = 0;
  let ValeurMoinTaxe = 0;
  let div = "";
  let taxeCm = 0;

  if (venteBay.checked) {
    if (ebayCategoryAutoMoto.checked) {
      if (ebayCategoryMotoMoto.checked) {
        taxeBay = 6 + 19;
        structure = "Moto";
        if (reductioneBay.checked) {
          structure += " & réduction cochée";
          promotion = (taxeBay * 70) / 100;
        } else {
          structure += " & réduction non cochée";
        }
      } else if (ebayCategoryAutoAuto.checked) {
        taxeBay = 9 + 35;
        structure = "Auto";
        if (reductioneBay.checked) {
          structure += " & réduction cochée";
          promotion = (taxeBay * 70) / 100;
        } else {
          structure += " & réduction non cochée";
        }
      }

      taxeBayAfterPromotion = taxeBay - promotion;
      taxeTva = (taxeBayAfterPromotion * 20) / 100;
      totalTaxe = taxeTva + taxeBayAfterPromotion;
      totalCount =
        totalTaxe + parseFloat(prixEnvoi.value) + parseFloat(prixAchat.value);
      ValeurMoinTaxe = parseFloat(prixVente.value) - totalTaxe;
      benefice = parseFloat(prixVente.value) - totalCount;

      div = `<div>
      <p>Taxe totale eBay :<br> <span>${totalTaxe.toFixed(2)} €</span><br><br>
      Somme après commissions d'eBay :<br> <span>${ValeurMoinTaxe.toFixed(
        2
      )} €</span><br><br>
      Plus-value après livraison :<br> <span>${benefice.toFixed(
        2
      )} €</span><br><br>
      From France to France Only<br>
      Uniquement Vendeurs Particuliers</p>
      </div>`;
    } else {
      structure = "Autres (Carte) -";
      if (prixVente.value < 2000) {
        structure += " Inférieur à 2000";
        taxeBay = (parseFloat(prixVente.value) * 8.33) / 100;
        if (reductioneBay.checked) {
          structure += " & réduction cochée";
          promotion = (taxeBay * 70) / 100;
        } else {
          structure += " & réduction non cochée";
        }
      } else {
        structure += " Supérieur à 2000";
        taxeBay =
          ((parseFloat(prixVente.value) - 2000) * 2) / 100 +
          (2000 * 8.33) / 100;
        if (reductioneBay.checked) {
          structure += " & réduction cochée";
          promotion = (taxeBay * 70) / 100;
        } else {
          structure += " & réduction non cochée";
        }
      }
      taxeBayAfterPromotion = taxeBay - promotion + 0.29;
      taxeTva = (taxeBayAfterPromotion * 20) / 100;
      totalTaxe = taxeBayAfterPromotion + taxeTva;
      totalCount =
        totalTaxe + parseFloat(prixEnvoi.value) + parseFloat(prixAchat.value);
      benefice = parseFloat(prixVente.value) - totalCount;
      ValeurMoinTaxe = parseFloat(prixVente.value) - totalTaxe;

      div = `<div>
        <p>Taxe totale eBay :<br> <span>${totalTaxe.toFixed(2)} €</span><br><br>
        Somme après commissions d'eBay :<br> <span>${ValeurMoinTaxe.toFixed(
          2
        )} €</span><br><br>
        Plus-value après livraison :<br> <span>${benefice.toFixed(
          2
        )} €</span><br><br>
        From France to France Only<br>
        Uniquement Vendeurs Particuliers</p>
    </div>`;
    }
  } else if (venteFacebook.checked) {
    structure = "Vente via PayPal (Entre Proche)";
    const investissement =
      parseFloat(prixAchat.value) + parseFloat(prixEnvoi.value);
    benefice = parseFloat(prixVente.value) - investissement;
    div = `<div><p>Investissement total :<br> <span>${investissement.toFixed(
      2
    )} €</span><br><br>Valeur de la vente :<br> <span>${parseFloat(
      prixVente.value
    ).toFixed(
      2
    )} €</span><br><br>Bénéfice réalisé après livraison :<br> <span>${benefice.toFixed(
      2
    )} €</span><br><br>
    From France to France Only<br></p></div>`;
  } else {
    structure = "Cardmarket";

    taxeCm = (parseFloat(prixVente.value) * 5) / 100;
    totalCount = taxeCm + parseFloat(prixEnvoi.value) + parseFloat(prixAchat.value);
    benefice = parseFloat(prixVente.value) - totalCount;
    ValeurMoinTaxe = parseFloat(prixVente.value) - taxeCm;

    div = `<div>
      <p>Taxe totale Card Market :<br> <span>${taxeCm.toFixed(2)} €</span><br><br>
      Somme après commissions de Card Market :<br> <span>${ValeurMoinTaxe.toFixed(
        2
      )} €</span><br><br>
      Plus-value après livraison :<br> <span>${benefice.toFixed(
        2
      )} €</span><br><br>
      From France to France Only<br>
      Uniquement Vendeurs Particuliers<br>
      Manque de précision car les Frais de Port automatique ne sont pas pris en compte.</p>
  </div>`;
  }

  section.innerHTML = div;
}

function formBack() {
  form.reset();
  section.classList.add("section-disabled");
  form.classList.remove("form-transform-out");
  form.classList.add("form-transform-in");
  ebayCheckBoxAppear.classList.remove("box-checkbox-appear");
  sellOptionBox.classList.remove("box-deux-remove");
  hrPop.classList.remove("hr-add");
  hrReponsive.classList.remove("hr-padding");
  submitResponsive.classList.remove("box-trois-responsive");
  buttonNewSell.classList.add("button-box-disappear");
  buttonNewSell.classList.remove("button-box-appear");

  boxCategoryeBay.forEach(function (boxebaycategoryautomoto) {
    boxebaycategoryautomoto.classList.remove("box-ebay-category-remove");
  });

  boxOptionAutoMotos.forEach(function (automotocategory) {
    automotocategory.classList.remove("auto-and-moto-cat-visible");
    automotocategory.classList.add("automotocategorydisplay");
  });

  boxInputResponsive.forEach(function (box) {
    box.classList.remove("box-marge-delete");
    box.classList.add("box-input-responsive");
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formule();
});
