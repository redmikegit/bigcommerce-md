(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCertificate; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);
  function GiftCertificate(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');
      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }
        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };
      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);
          if (!numberVal) {
            cb(false);
          }
          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }
    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);
    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);
      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();
        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }
    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return;
      }
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }
        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }
  var _proto = GiftCertificate.prototype;
  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: this.validationDictionary.invalid_gift_certificate
    });
    return balanceValidator;
  };
  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJsZW5ndGgiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIiwiR2lmdENlcnRpZmljYXRlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkY2VydEJhbGFuY2VGb3JtIiwiJCIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwidmFsIiwicmVjaXBpZW50RW1haWwiLCJmb3JtTW9kZWwiLCJlbWFpbCIsInNlbmRlck5hbWUiLCJzZW5kZXJFbWFpbCIsImN1c3RvbUFtb3VudCIsInZhbHVlIiwibWluIiwibWF4Iiwic2V0QW1vdW50Iiwib3B0aW9ucyIsImZvdW5kIiwiZm9yRWFjaCIsIm9wdGlvbiIsIiRwdXJjaGFzZUZvcm0iLCIkY3VzdG9tQW1vdW50cyIsImZpbmQiLCJwdXJjaGFzZVZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImRlbGF5IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFtb3VudFJhbmdlIiwiYW1vdW50UGxhY2Vob2xkZXJzIiwidXBkYXRlZEVycm9yVGV4dCIsInBsYWNlaG9sZGVyIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyVmFsIiwiTnVtYmVyIiwiZXJyb3JNZXNzYWdlIiwiY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlIiwicmVzdWx0IiwidG9OYW1lIiwidG9FbWFpbCIsImZyb21OYW1lIiwiZnJvbUVtYWlsIiwidHJpZ2dlcmVkQnkiLCJjZXJ0VGhlbWUiLCJnZXQiLCJjaGVja2VkIiwiYWdyZWVUb1Rlcm1zIiwiYmFsYW5jZVZhbCIsImNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IiLCJvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicHJldmlld1VybCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJvcGVuIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwicHJldmlld0Vycm9yIiwid3JhcCIsIiRiYWxhbmNlRm9ybSIsImJhbGFuY2VWYWxpZGF0b3IiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSx5RUFBVUEsSUFBSSxFQUFFO0VBQzNCLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxDQUFDQyxNQUFN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RyxDQUFDO01BQ3pCQyxNQUFNLEVBQUV1RCxZQUFZLENBQUMxRCxJQUFJLENBQUMsc0JBQXNCLENBQUM7TUFDakRLLEdBQUcsRUFBRUMsa0ZBQXlCQTtJQUNsQyxDQUFDLENBQUM7SUFFRnFELGdCQUFnQixDQUFDeEMsR0FBRyxDQUFDO01BQ2pCQyxRQUFRLEVBQUVzQyxZQUFZLENBQUMxRCxJQUFJLENBQUMsbUNBQW1DLENBQUM7TUFDaEVxQixRQUFRLG9CQUFDQyxFQUFFLEVBQUV2QyxHQUFHLEVBQUU7UUFDZHVDLEVBQUUsQ0FBQ3NDLGtGQUFvQixDQUFDN0UsR0FBRyxDQUFDLENBQUM7TUFDakMsQ0FBQztNQUNEMEMsWUFBWSxFQUFFLElBQUksQ0FBQy9DLG9CQUFvQixDQUFDbUY7SUFDNUMsQ0FBQyxDQUFDO0lBRUYsT0FBT0YsZ0JBQWdCO0VBQzNCLENBQUM7RUFBQTtBQUFBLEVBM013Q0cscURBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycgfHwgY2VydC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IGNoZWNrSXNHaWZ0Q2VydFZhbGlkIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCBmb3JtTW9kZWwgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRDZXJ0aWZpY2F0ZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRjZXJ0QmFsYW5jZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1iYWxhbmNlJyk7XG5cbiAgICAgICAgY29uc3QgcHVyY2hhc2VNb2RlbCA9IHtcbiAgICAgICAgICAgIHJlY2lwaWVudE5hbWUodmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjaXBpZW50RW1haWwoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZGVyTmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kZXJFbWFpbCguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXN0b21BbW91bnQodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlID49IG1pbiAmJiB2YWx1ZSA8PSBtYXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0QW1vdW50KHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0ICRwdXJjaGFzZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjdXN0b21BbW91bnRzID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICBkZWxheTogMzAwLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJGN1c3RvbUFtb3VudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCAkZWxlbWVudCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xuICAgICAgICAgICAgY29uc3QgbWluID0gJGVsZW1lbnQuZGF0YSgnbWluJyk7XG4gICAgICAgICAgICBjb25zdCBtaW5Gb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtaW5Gb3JtYXR0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9ICRlbGVtZW50LmRhdGEoJ21heCcpO1xuICAgICAgICAgICAgY29uc3QgbWF4Rm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWF4Rm9ybWF0dGVkJyk7XG4gICAgICAgICAgICBjb25zdCBpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSA9IChtZXNzYWdlLCAuLi5hbW91bnRSYW5nZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudFBsYWNlaG9sZGVycyA9IFsnW01JTl0nLCAnW01BWF0nXTtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZEVycm9yVGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYW1vdW50UGxhY2Vob2xkZXJzLmZvckVhY2goKHBsYWNlaG9sZGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQgPSB1cGRhdGVkRXJyb3JUZXh0LmluY2x1ZGVzKHBsYWNlaG9sZGVyKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRXJyb3JUZXh0LnJlcGxhY2UocGxhY2Vob2xkZXIsIGFtb3VudFJhbmdlW2ldKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRXJyb3JUZXh0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXJyb3JUZXh0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbnVtYmVyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSh0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmNlcnRpZmljYXRlX2Ftb3VudF9yYW5nZSwgbWluRm9ybWF0dGVkLCBtYXhGb3JtYXR0ZWQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fbmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50TmFtZSh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b05hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudEVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9uYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJOYW1lKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21OYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlckVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21FbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpmaXJzdC1vZi10eXBlJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCeTogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYih0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNlcnRUaGVtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZVwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlMlwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoJGNlcnRCYWxhbmNlRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VWYWwgPSB0aGlzLmNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGNlcnRCYWxhbmNlRm9ybSk7XG5cbiAgICAgICAgICAgICRjZXJ0QmFsYW5jZUZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlVmFsLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlVmFsLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHVyY2hhc2VGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2dpZnQtY2VydGlmaWNhdGUtcHJldmlldycpLmNsaWNrKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBgJHskKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3ByZXZpZXdVcmwnKX0mJHskcHVyY2hhc2VGb3JtLnNlcmlhbGl6ZSgpfWA7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgYXBpLmdldFBhZ2UocHJldmlld1VybCwge30sIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RhbC51cGRhdGVDb250ZW50KHRoaXMuY29udGV4dC5wcmV2aWV3RXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGJhbGFuY2VGb3JtKSB7XG4gICAgICAgIGNvbnN0IGJhbGFuY2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBiYWxhbmNlVmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJnaWZ0Y2VydGlmaWNhdGVjb2RlXCJdJyksXG4gICAgICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICAgICAgY2IoY2hlY2tJc0dpZnRDZXJ0VmFsaWQodmFsKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJhbGFuY2VWYWxpZGF0b3I7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==