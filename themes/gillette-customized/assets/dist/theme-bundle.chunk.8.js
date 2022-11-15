(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__["ModalEvents"].opened, optionChangeHandler);
      }
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(_this8.context);
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["announceInputErrorMessage"]
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["Validators"].cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItemDetails; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__["optionChangeDecorator"].call(_assertThisInitialized(_this), hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = Object(_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["convertIntoArray"])(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["isBrowserIE"] ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__["isBrowserIE"] ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_4__["showAlertModal"])(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRtb2RhbCIsIiRjYXJ0UGFnZUNvbnRlbnQiLCIkIiwiJGNhcnRDb250ZW50IiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zIiwiJG92ZXJsYXkiLCJoaWRlIiwiJGFjdGl2ZUNhcnRJdGVtSWQiLCIkYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24iLCJzZXRBcHBsZVBheVN1cHBvcnQiLCJiaW5kRXZlbnRzIiwid2luZG93IiwiQXBwbGVQYXlTZXNzaW9uIiwiYWRkQ2xhc3MiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzaG93QWxlcnRNb2RhbCIsInNob3ciLCJ1dGlscyIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJyZWZyZXNoQ29udGVudCIsImVycm9ycyIsImpvaW4iLCJjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSIsInByZVZhbCIsIk51bWJlciIsImludmFsaWRFbnRyeSIsImlzSW50ZWdlciIsImNvbnRleHQiLCJpbnZhbGlkRW50cnlNZXNzYWdlIiwicmVwbGFjZSIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsImNhcnRFZGl0T3B0aW9ucyIsInByb2R1Y3RJZCIsInByb2R1Y3RGb3JDaGFuZ2VJZCIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsImZpbmQiLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50Iiwib3B0aW9uQ2hhbmdlSGFuZGxlciIsIiRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciIsIm1vZGFsQm9keVJlc2VydmVkSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJsZW5ndGgiLCJjc3MiLCJoYXNDbGFzcyIsIm9uZSIsIk1vZGFsRXZlbnRzIiwib3BlbmVkIiwicHJvZHVjdERldGFpbHMiLCJDYXJ0SXRlbURldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCIkZm9ybSIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInRleHQiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwiYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImZpbHRlciIsImJpbmRDYXJ0RXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdHJpbmciLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQ29uZmlybSIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXJyb3JNZXNzYWdlcyIsImNvdW50cnkiLCJzaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UiLCJwcm92aW5jZSIsInNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UiLCJzaGlwcGluZ0VzdGltYXRvciIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiUGFnZU1hbmFnZXIiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImlzRXN0aW1hdG9yRm9ybU9wZW5lZCIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdFc3RpbWF0b3JBbGVydCIsInNoaXBwaW5nVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImF0dHIiLCJyZW1vdmVBdHRyIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZSIsInRvZ2dsZUJ1dHRvbiIsImJ1dHRvblNlbGVjdG9yIiwiJHRvZ2dsZUNvbnRhaW5lciIsImNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSIsInNlbGVjdG9yVG9BY3RpdmF0ZSIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiY2FsbCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsImVhY2giLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsImlzU2F0aXNmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJtYXAiLCJ4IiwiY2hlY2tlZCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwiY29udmVydEludG9BcnJheSIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVsIiwiaXNCcm93c2VySUUiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsIm1hdGNoIiwiY2FyZCIsIlByb2R1Y3REZXRhaWxzQmFzZSIsImNlcnQiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImF0dHJzIiwiaXRlbSIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJhZGRPcHRpb25zIiwic3RhdGVzQXJyYXkiLCIkc2VsZWN0RWxlbWVudCIsImNvbnRhaW5lciIsInByZWZpeCIsInN0YXRlcyIsImZvckVhY2giLCJzdGF0ZU9iaiIsImNhbGxiYWNrIiwiY291bnRyeU5hbWUiLCJnZXRCeU5hbWUiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRThCO0FBQ1M7QUFDakM7QUFDVztBQUNpQjtBQUNsQjtBQUFBLElBRXBDQSxJQUFJO0VBQUE7RUFBQTtJQUFBO0VBQUE7RUFBQTtFQUFBLE9BQ3JCQyxPQUFPLEdBQVAsbUJBQVU7SUFDTixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDeEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdELENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUNFLGFBQWEsR0FBR0YsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzVDLElBQUksQ0FBQ0csV0FBVyxHQUFHSCxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDMUMsSUFBSSxDQUFDSSwyQkFBMkIsR0FBR0osQ0FBQyxDQUFDLHlDQUF5QyxDQUFDO0lBQy9FLElBQUksQ0FBQ0ssUUFBUSxHQUFHTCxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FDM0NNLElBQUksRUFBRSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUk7SUFDN0IsSUFBSSxDQUFDQyx3QkFBd0IsR0FBRyxJQUFJO0lBRXBDLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7SUFDekIsSUFBSSxDQUFD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c0JBQXNCLENBQUNJLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHVixNQUFNLENBQUNXLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUNaLFlBQVksQ0FBQyxDQUFDO0VBQ25FLElBQU1lLGVBQWUsR0FBR1osTUFBTSxDQUFDQyxJQUFJLENBQUNRLGdCQUFnQixDQUFDWixZQUFZLENBQUMsQ0FBQyxDQUFDakQsR0FBRyxDQUFDLFVBQUFpRSxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDakYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDa0YsR0FBRyxFQUFFO0VBQUEsRUFBQztFQUVwRyxPQUFPRixlQUFlLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVILEdBQUcsRUFBRVYsQ0FBQyxFQUFLO0lBQzNDYSxHQUFHLENBQUNILEdBQUcsQ0FBQyxHQUFHSCxhQUFhLENBQUNQLENBQUMsQ0FBQztJQUMzQixPQUFPYSxHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IENhcnRJdGVtRGV0YWlscyBmcm9tICcuL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xuICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0XScpO1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXG4gICAgICAgICAgICAuaGlkZSgpOyAvLyBUT0RPOiB0ZW1wb3JhcnkgdW50aWwgcm9wZXIgcHVsbHMgaW4gaGlzIGNhcnQgY29tcG9uZW50c1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0QXBwbGVQYXlTdXBwb3J0KCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNldEFwcGxlUGF5U3VwcG9ydCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtYXhFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuZXdRdHkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHsgcHJvZHVjdEZvckNoYW5nZUlkOiBwcm9kdWN0SWQsIC4uLnRoaXMuY29udGV4dCB9O1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwgPSAkKCcjbW9kYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RhbC5vcGVuKCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyID0gJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdJywgdGhpcy4kbW9kYWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0ID0gJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmxlbmd0aCAmJiBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIuY3NzKCdoZWlnaHQnLCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJG1vZGFsLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25DaGFuZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLm9uZShNb2RhbEV2ZW50cy5vcGVuZWQsIG9wdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IENhcnRJdGVtRGV0YWlscyh0aGlzLiRtb2RhbCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgY3VycmVudFRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkKGN1cnJlbnRUYXJnZXQpLmZpbmQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnM6ICdjYXJ0L2FkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucy5odG1sKHJlc3BvbnNlLmFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMpO1xuXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICQoYFtkYXRhLWNhcnQtaXRlbWlkPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtSWR9J11gLCB0aGlzLiRjYXJ0Q29udGVudClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbZGF0YS1hY3Rpb249JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb259J11gKVxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IGJpbmQoZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCk7XG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEVtcHR5IGNvZGVcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCgkY29kZUlucHV0LmRhdGEoJ2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUNvZGUoY29kZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNlcnRGb3JtID0gJCgnLmNhcnQtZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjZXJ0SW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICghY2hlY2tJc0dpZnRDZXJ0VmFsaWQoY29kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh2YWxpZGF0aW9uRGljdGlvbmFyeS5pbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb250ZXh0LnNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIHByb3ZpbmNlOiB0aGlzLmNvbnRleHQuc2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJyksIHNoaXBwaW5nRXJyb3JNZXNzYWdlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFc3RpbWF0b3JBbGVydCA9ICQoJy5zaGlwcGluZy1xdW90ZXMnKTtcblxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gZXN0aW1hdG9yIGVycm9yIG1lc3NhZ2VzIGFyZSBiZWluZyBpbmplY3RlZCBpbiBodG1sIGFzIGEgcmVzdWx0XG4gICAgICAgICAgICAvLyBvZiB1c2VyIHN1Ym1pdDsgY2xlYXJpbmcgYW5kIGFkZGluZyByb2xlIG9uIHN1Ym1pdCBwcm92aWRlc1xuICAgICAgICAgICAgLy8gcmVndWxhciBhbm5vdW5jZW1lbnQgb2YgdGhlc2UgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGlmIChzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnKSkge1xuICAgICAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcy5jb3VudHJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB5b3UgY2hhbmdlIGEgY291bnRyeSwgeW91IHN3YXAgdGhlIHN0YXRlL3Byb3ZpbmNlIGJldHdlZW4gYW4gaW5wdXQgYW5kIGEgc2VsZWN0IGRyb3Bkb3duXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcbiAgICAgICAgICAgICQodGhpcy5zaGlwcGluZ0VzdGltYXRvcikuZmluZCgnLmZvcm0tZmllbGQtLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUodG9nZ2xlQnV0dG9uLCBidXR0b25TZWxlY3RvciwgJHRvZ2dsZUNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUgPSAoc2VsZWN0b3JUb0FjdGl2YXRlKSA9PiB7XG4gICAgICAgICAgICAkKHRvZ2dsZUJ1dHRvbikuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jywgc2VsZWN0b3JUb0FjdGl2YXRlKTtcbiAgICAgICAgICAgICQoYnV0dG9uU2VsZWN0b3IpLnRleHQoJChgIyR7c2VsZWN0b3JUb0FjdGl2YXRlfWApLnRleHQoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCkge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItY2xvc2UnKTtcbiAgICAgICAgICAgICR0b2dnbGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1hZGQnKTtcbiAgICAgICAgICAgICR0b2dnbGVDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSAhdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQ7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG4gICAgICAgICRlc3RpbWF0b3JGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHN0YXRlX2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJCgnW25hbWU9XCJzaGlwcGluZy16aXBcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nLXF1b3RlcycpLmh0bWwocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdC1zaGlwcGluZy1xdW90ZScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUlkID0gJCgnLnNoaXBwaW5nLXF1b3RlOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2hpcHBpbmctZXN0aW1hdGUtc2hvd19fYnRuLW5hbWUnLCAkZXN0aW1hdG9yQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjQ2FydEVkaXRQcm9kdWN0RmllbGRzRm9ybScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3Lmh0bWwoKS5tYXRjaCgvJyguKj8pJy8pWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuLyoqXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XG5cbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xuXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcblxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xuICAgICAgICBzdGF0ZXNBcnJheS5zdGF0ZXMuZm9yRWFjaCgoc3RhdGVPYmopID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5sYWJlbCA/IHN0YXRlT2JqLmxhYmVsIDogc3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9