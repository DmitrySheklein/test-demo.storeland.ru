const sum = (a, b) => {
  return a + b;
};
const sayHello = (str) => {
  return `Hello ${str}`;
};
const someFunc = () => {
  const a = 5;
  const b = 10;

  return a - b;
};
// Объект ссылки, по которой кликнули
var a = $(this),
  addUrl = a.attr("data-action-add-url"),
  delUrl = a.attr("data-action-delete-url"),
  addTitle = a.attr("data-action-add-title"),
  delTitle = a.attr("data-action-delete-title"),
  isAdd = a.attr("data-action-is-add"),
  aText = a.parent().find(".add-wishlist"),
  pName = a.attr("data-prodname"),
  pImage = a.attr("data-prodimage"),
  pUrl = a.attr("data-produrl"),
  pDataid = a.attr("data-id"),
  pDataprice = a.attr("data-mod-id"),
  pPrice = a.attr("data-mod-id-price"),
  pDataGoodsid = a.attr("data-goodsid"),
  addTooltip = a.attr("data-add-tooltip"),
  delTooltip = a.attr("data-del-tooltip");
requestUrl = a.attr("href");
const li = `<li class="item" {% IF favorites_goods.index > 10 %}style="display:none;"{% ENDIF %} data-id="{favorites_goods.ID}">
<a data-href="${addUrl}" data-goods-mod-id="{favorites_goods.MIN_PRICE_NOW_ID}" class="remove item-remove" title="Убрать товар из списка избранного" onclick="removeFromFavorites($(this))"></a>
<a href="{favorites_goods.URL}" title="{favorites_goods.NAME}" class="product-image">
  <img src="{% IF favorites_goods.IMAGE_EMPTY %}{ASSETS_IMAGES_PATH}no-photo-icon.png?design=techno{% ELSE %}${pImage}{% ENDIF %}" alt="{favorites_goods.NAME}" class="goods-image-icon">
</a>
<div class="product-details">
  <p class="product-name"><a href="{favorites_goods.URL}" title="{favorites_goods.NAME}">{favorites_goods.NAME}</a></p>
  <span class="price {CURRENCY_CHAR_CODE}" data-price="{favorites_goods.MIN_PRICE_NOW}">${pPrice}</span>
  <a href="#" class="dataid">{favorites_goods.ID}</a>
</div>
</li>`;
