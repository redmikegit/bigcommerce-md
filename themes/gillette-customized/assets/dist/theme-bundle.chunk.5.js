(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/creditcards-types/index.js":
/*!*************************************************!*\
  !*** ./node_modules/creditcards-types/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./types */ "./node_modules/creditcards-types/types/index.js")


/***/ }),

/***/ "./node_modules/creditcards-types/type.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards-types/type.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = CardType

function CardType (data) {
  if (!(this instanceof CardType)) return new CardType(data)
  Object.assign(this, data)
}

CardType.prototype.digits = 16
CardType.prototype.cvcLength = 3
CardType.prototype.luhn = true
CardType.prototype.groupPattern = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/

CardType.prototype.group = function (number) {
  return (number.match(this.groupPattern) || [])
    .slice(1)
    .filter(Boolean)
}

CardType.prototype.test = function (number, eager) {
  return this[eager ? 'eagerPattern' : 'pattern'].test(number)
}


/***/ }),

/***/ "./node_modules/creditcards-types/types/american-express.js":
/*!******************************************************************!*\
  !*** ./node_modules/creditcards-types/types/american-express.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'American Express',
  digits: 15,
  pattern: /^3[47]\d{13}$/,
  eagerPattern: /^3[47]/,
  groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
  cvcLength: 4
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/dankort.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/dankort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Dankort',
  pattern: /^5019\d{12}$/,
  eagerPattern: /^5019/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/diners-club.js":
/*!*************************************************************!*\
  !*** ./node_modules/creditcards-types/types/diners-club.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Diners Club',
  digits: [14, 19],
  pattern: /^3(0[0-5]|[68]\d)\d{11,16}$/,
  eagerPattern: /^3(0|[68])/,
  groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,9})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/discover.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/discover.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Discover',
  pattern: /^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,
  eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/elo.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/elo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Elo',
  pattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])\d{10}$/,
  eagerPattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/forbrugsforeningen.js":
/*!********************************************************************!*\
  !*** ./node_modules/creditcards-types/types/forbrugsforeningen.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Forbrugsforeningen',
  pattern: /^600722\d{10}$/,
  eagerPattern: /^600/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/creditcards-types/types/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  __webpack_require__(/*! ./visa */ "./node_modules/creditcards-types/types/visa.js"),
  __webpack_require__(/*! ./maestro */ "./node_modules/creditcards-types/types/maestro.js"),
  __webpack_require__(/*! ./forbrugsforeningen */ "./node_modules/creditcards-types/types/forbrugsforeningen.js"),
  __webpack_require__(/*! ./dankort */ "./node_modules/creditcards-types/types/dankort.js"),
  __webpack_require__(/*! ./mastercard */ "./node_modules/creditcards-types/types/mastercard.js"),
  __webpack_require__(/*! ./american-express */ "./node_modules/creditcards-types/types/american-express.js"),
  __webpack_require__(/*! ./diners-club */ "./node_modules/creditcards-types/types/diners-club.js"),
  __webpack_require__(/*! ./discover */ "./node_modules/creditcards-types/types/discover.js"),
  __webpack_require__(/*! ./jcb */ "./node_modules/creditcards-types/types/jcb.js"),
  __webpack_require__(/*! ./unionpay */ "./node_modules/creditcards-types/types/unionpay.js"),
  __webpack_require__(/*! ./troy */ "./node_modules/creditcards-types/types/troy.js"),
  __webpack_require__(/*! ./elo */ "./node_modules/creditcards-types/types/elo.js"),
  __webpack_require__(/*! ./uatp */ "./node_modules/creditcards-types/types/uatp.js")
]


/***/ }),

/***/ "./node_modules/creditcards-types/types/jcb.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/jcb.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'JCB',
  pattern: /^35\d{14}$/,
  eagerPattern: /^35/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/maestro.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/maestro.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Maestro',
  digits: [12, 19],
  pattern: /^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,
  eagerPattern: /^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/mastercard.js":
/*!************************************************************!*\
  !*** ./node_modules/creditcards-types/types/mastercard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Mastercard',
  pattern: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,
  eagerPattern: /^(2[3-7]|22[2-9]|5[1-5])/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/troy.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/troy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Troy',
  pattern: /^9792\d{12}$/,
  eagerPattern: /^9792/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/uatp.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/uatp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UATP',
  digits: 15,
  pattern: /^1\d{14}$/,
  eagerPattern: /^1/,
  groupPattern: /(\d{1,4})(\d{1,5})?(\d{1,6})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/unionpay.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/unionpay.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UnionPay',
  pattern: /^62[0-5]\d{13,16}$/,
  eagerPattern: /^62/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,
  luhn: false
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/visa.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/visa.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Visa',
  digits: [13, 19],
  pattern: /^4\d{12}(\d{3}|\d{6})?$/,
  eagerPattern: /^4/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards/card.js":
/*!******************************************!*\
  !*** ./node_modules/creditcards/card.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const luhn = __webpack_require__(/*! fast-luhn */ "./node_modules/fast-luhn/index.js")
const Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")

module.exports = Card

function Card (data) {
  const types = Types(data)

  return {
    types: data,
    parse: parseCard,
    format: formatCard,
    type: cardType,
    luhn: luhn,
    isValid: isCardValid
  }

  function parseCard (number) {
    if (typeof number !== 'string') return ''
    return number.replace(/[^\d]/g, '')
  }

  function formatCard (number, separator) {
    const type = getType(number, true)
    if (!type) return number
    return type.group(number).join(separator || ' ')
  }

  function cardType (number, eager) {
    const type = getType(number, eager)
    return type ? type.name : undefined
  }

  function isCardValid (number, type) {
    if (type) {
      type = types.get(type)
    } else {
      type = getType(number)
    }
    if (!type) return false
    return (!type.luhn || luhn(number)) && type.test(number)
  }

  function getType (number, eager) {
    return types.find(function (type) {
      return type.test(number, eager)
    })
  }
}


/***/ }),

/***/ "./node_modules/creditcards/cvc.js":
/*!*****************************************!*\
  !*** ./node_modules/creditcards/cvc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")
const cvcRegex = /^\d{3,4}$/

module.exports = Cvc

function Cvc (data) {
  const types = Types(data)

  return {
    isValid: cvcIsValid
  }

  function cvcIsValid (cvc, type) {
    if (typeof cvc !== 'string') return false
    if (!cvcRegex.test(cvc)) return false

    if (!type) {
      return types.some(function (type) {
        return type.cvcLength === cvc.length
      })
    }

    return types.get(type).cvcLength === cvc.length
  }
}


/***/ }),

/***/ "./node_modules/creditcards/expiration.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards/expiration.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const isValidMonth = __webpack_require__(/*! is-valid-month */ "./node_modules/is-valid-month/index.js")
const parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
const parseYear = __webpack_require__(/*! parse-year */ "./node_modules/parse-year/index.js")

module.exports = {
  isPast: isPast,
  month: {
    parse: parseMonth,
    isValid: isValidMonth
  },
  year: {
    parse: parseYear,
    format: formatExpYear,
    isValid: isExpYearValid,
    isPast: isExpYearPast
  }
}

function isPast (month, year) {
  return Date.now() >= new Date(year, month)
}

function parseMonth (month) {
  return parseIntStrict(month)
}

function formatExpYear (year, strip) {
  year = year.toString()
  return strip ? year.substr(2, 4) : year
}

function isExpYearValid (year) {
  if (typeof year !== 'number') return false
  year = parseIntStrict(year)
  return year > 0
}

function isExpYearPast (year) {
  return new Date().getFullYear() > year
}


/***/ }),

/***/ "./node_modules/creditcards/index.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const types = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")
const Card = __webpack_require__(/*! ./card */ "./node_modules/creditcards/card.js")
const Cvc = __webpack_require__(/*! ./cvc */ "./node_modules/creditcards/cvc.js")
const expiration = __webpack_require__(/*! ./expiration */ "./node_modules/creditcards/expiration.js")

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}


/***/ }),

/***/ "./node_modules/creditcards/types.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaults = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  const map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: types.find.bind(types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    const type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}


/***/ }),

/***/ "./node_modules/expand-year/index.js":
/*!*******************************************!*\
  !*** ./node_modules/expand-year/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var zeroFill = __webpack_require__(/*! zero-fill */ "./node_modules/zero-fill/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")

var pad = zeroFill(2)

module.exports = function expandYear (year, now) {
  now = now || new Date()
  var base = now.getFullYear().toString().substr(0, 2)
  year = parseIntStrict(year)
  return parseIntStrict(base + pad(year))
}


/***/ }),

/***/ "./node_modules/fast-luhn/index.js":
/*!*****************************************!*\
  !*** ./node_modules/fast-luhn/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    let length = number.length
    let bit = 1
    let sum = 0
    let value

    while (length) {
      value = parseInt(number.charAt(--length), 10)
      bit ^= 1
      sum += bit ? array[value] : value
    }

    return sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))


/***/ }),

/***/ "./node_modules/is-finite/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-finite/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isFinite || function (value) {
	return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
};


/***/ }),

/***/ "./node_modules/is-integer/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-integer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = __webpack_require__(/*! is-finite */ "./node_modules/is-finite/index.js");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};


/***/ }),

/***/ "./node_modules/is-valid-month/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-valid-month/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")

module.exports = function isValidMonth (month) {
  if (typeof month !== 'number' || !isInteger(month)) return false
  return month >= 1 && month <= 12
}


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ "./node_modules/parse-int/index.js":
/*!*****************************************!*\
  !*** ./node_modules/parse-int/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")
var isIntegerRegex = /^-?\d+$/

module.exports = function parseIntStrict (integer) {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : undefined
  }
  if (typeof integer === 'string') {
    return isIntegerRegex.test(integer) ? parseInt(integer, 10) : undefined
  }
}


/***/ }),

/***/ "./node_modules/parse-year/index.js":
/*!******************************************!*\
  !*** ./node_modules/parse-year/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var expandYear = __webpack_require__(/*! expand-year */ "./node_modules/expand-year/index.js")

module.exports = function parseYear (year, expand, now) {
  year = parseIntStrict(year)
  if (year == null) return
  if (!expand) return year
  return expandYear(year, now)
}


/***/ }),

/***/ "./node_modules/zero-fill/index.js":
/*!*****************************************!*\
  !*** ./node_modules/zero-fill/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! zero-fill. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * Given a number, return a zero-filled string.
 * From http://stackoverflow.com/questions/1267283/
 * @param  {number} width
 * @param  {number} number
 * @return {string}
 */
module.exports = function zeroFill (width, number, pad) {
  if (number === undefined) {
    return function (number, pad) {
      return zeroFill(width, number, pad)
    }
  }
  if (pad === undefined) pad = '0'
  width -= number.toString().length
  if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
  return number + ''
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2FtZXJpY2FuLWV4cHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2RhbmtvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2RpbmVycy1jbHViLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZWxvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9mb3JicnVnc2ZvcmVuaW5nZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9qY2IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL21hZXN0cm8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL21hc3RlcmNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3VhdHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3VuaW9ucGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy92aXNhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy9jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy9jdmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2V4cGlyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhwYW5kLXllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbHVobi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZmluaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1pbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy12YWxpZC1tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVGaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWludC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2UteWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVyby1maWxsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxnRUFBUzs7Ozs7Ozs7Ozs7OztBQ0Z0Qjs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLHlEQUFTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QjtBQUNBLHFCQUFxQixJQUFJLEtBQUssSUFBSSxNQUFNLElBQUk7QUFDNUM7QUFDQSxDQUFDOzs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQSxJQUFJLElBQUk7QUFDUixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoRVk7O0FBRVosZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVk7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pZOztBQUVaLHFCQUFxQixtQkFBTyxDQUFDLG9EQUFXO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLHdEQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay41LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi90eXBlcycpXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkVHlwZVxuXG5mdW5jdGlvbiBDYXJkVHlwZSAoZGF0YSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FyZFR5cGUpKSByZXR1cm4gbmV3IENhcmRUeXBlKGRhdGEpXG4gIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSlcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLmRpZ2l0cyA9IDE2XG5DYXJkVHlwZS5wcm90b3R5cGUuY3ZjTGVuZ3RoID0gM1xuQ2FyZFR5cGUucHJvdG90eXBlLmx1aG4gPSB0cnVlXG5DYXJkVHlwZS5wcm90b3R5cGUuZ3JvdXBQYXR0ZXJuID0gLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8vXG5cbkNhcmRUeXBlLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIChudW1iZXIubWF0Y2godGhpcy5ncm91cFBhdHRlcm4pIHx8IFtdKVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAobnVtYmVyLCBlYWdlcikge1xuICByZXR1cm4gdGhpc1tlYWdlciA/ICdlYWdlclBhdHRlcm4nIDogJ3BhdHRlcm4nXS50ZXN0KG51bWJlcilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgZGlnaXRzOiAxNSxcbiAgcGF0dGVybjogL14zWzQ3XVxcZHsxM30kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjNbNDddLyxcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw2fSk/KFxcZHsxLDV9KT8vLFxuICBjdmNMZW5ndGg6IDRcbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRGFua29ydCcsXG4gIHBhdHRlcm46IC9eNTAxOVxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjUwMTkvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0RpbmVycyBDbHViJyxcbiAgZGlnaXRzOiBbMTQsIDE5XSxcbiAgcGF0dGVybjogL14zKDBbMC01XXxbNjhdXFxkKVxcZHsxMSwxNn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjMoMHxbNjhdKS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSk/KFxcZHsxLDZ9KT8oXFxkezEsOX0pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRGlzY292ZXInLFxuICBwYXR0ZXJuOiAvXjYoMDExKDBbMC05XXxbMi00XVxcZHw3NHw3WzctOV18OFs2LTldfDlbMC05XSl8NFs0LTldXFxkezN9fDVcXGR7NH0pXFxkezEwfSQvLFxuICBlYWdlclBhdHRlcm46IC9eNigwMTEoMFswLTldfFsyLTRdfDc0fDdbNy05XXw4WzYtOV18OVswLTldKXw0WzQtOV18NSkvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0VsbycsXG4gIHBhdHRlcm46IC9eKDRbMDM1XXw1WzBdfDZbMjM1XSkoNls3MjYzXXw5WzkwXXwxWzI0MTZdfDdbNzM2XXw4WzldfDBbMDQ1NzldfDVbMF0pKFswLTldKShbMC05XSlcXGR7MTB9JC8sXG4gIGVhZ2VyUGF0dGVybjogL14oNFswMzVdfDVbMF18NlsyMzVdKSg2WzcyNjNdfDlbOTBdfDFbMjQxNl18N1s3MzZdfDhbOV18MFswNDU3OV18NVswXSkoWzAtOV0pKFswLTldKS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRm9yYnJ1Z3Nmb3JlbmluZ2VuJyxcbiAgcGF0dGVybjogL142MDA3MjJcXGR7MTB9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142MDAvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICByZXF1aXJlKCcuL3Zpc2EnKSxcbiAgcmVxdWlyZSgnLi9tYWVzdHJvJyksXG4gIHJlcXVpcmUoJy4vZm9yYnJ1Z3Nmb3JlbmluZ2VuJyksXG4gIHJlcXVpcmUoJy4vZGFua29ydCcpLFxuICByZXF1aXJlKCcuL21hc3RlcmNhcmQnKSxcbiAgcmVxdWlyZSgnLi9hbWVyaWNhbi1leHByZXNzJyksXG4gIHJlcXVpcmUoJy4vZGluZXJzLWNsdWInKSxcbiAgcmVxdWlyZSgnLi9kaXNjb3ZlcicpLFxuICByZXF1aXJlKCcuL2pjYicpLFxuICByZXF1aXJlKCcuL3VuaW9ucGF5JyksXG4gIHJlcXVpcmUoJy4vdHJveScpLFxuICByZXF1aXJlKCcuL2VsbycpLFxuICByZXF1aXJlKCcuL3VhdHAnKVxuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0pDQicsXG4gIHBhdHRlcm46IC9eMzVcXGR7MTR9JC8sXG4gIGVhZ2VyUGF0dGVybjogL14zNS9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnTWFlc3RybycsXG4gIGRpZ2l0czogWzEyLCAxOV0sXG4gIHBhdHRlcm46IC9eKD86NVswNjc4OV1cXGRcXGR8KD8hNjAxMVswMjM0XSkoPyE2MDExN1s0Nzg5XSkoPyE2MDExOFs2Nzg5XSkoPyE2MDExOSkoPyE2NFs0NTY3ODldKSg/ITY1KTZcXGR7M30pXFxkezgsMTV9JC8sXG4gIGVhZ2VyUGF0dGVybjogL14oNSgwMTh8MFsyM118WzY4XSl8NlszN118NjAxMTF8NjAxMTV8NjAxMTcoWzU2XXw3WzU2XSl8NjAxMThbMC01XXw2NFswLTNdfDY2KS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnTWFzdGVyY2FyZCcsXG4gIHBhdHRlcm46IC9eKDVbMS01XVswLTldezJ9fDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXigyWzMtN118MjJbMi05XXw1WzEtNV0pL1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdUcm95JyxcbiAgcGF0dGVybjogL145NzkyXFxkezEyfSQvLFxuICBlYWdlclBhdHRlcm46IC9eOTc5Mi9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVUFUUCcsXG4gIGRpZ2l0czogMTUsXG4gIHBhdHRlcm46IC9eMVxcZHsxNH0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjEvLFxuICBncm91cFBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDV9KT8oXFxkezEsNn0pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVW5pb25QYXknLFxuICBwYXR0ZXJuOiAvXjYyWzAtNV1cXGR7MTMsMTZ9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142Mi8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy8sXG4gIGx1aG46IGZhbHNlXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ1Zpc2EnLFxuICBkaWdpdHM6IFsxMywgMTldLFxuICBwYXR0ZXJuOiAvXjRcXGR7MTJ9KFxcZHszfXxcXGR7Nn0pPyQvLFxuICBlYWdlclBhdHRlcm46IC9eNC8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgbHVobiA9IHJlcXVpcmUoJ2Zhc3QtbHVobicpXG5jb25zdCBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcmRcblxuZnVuY3Rpb24gQ2FyZCAoZGF0YSkge1xuICBjb25zdCB0eXBlcyA9IFR5cGVzKGRhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlczogZGF0YSxcbiAgICBwYXJzZTogcGFyc2VDYXJkLFxuICAgIGZvcm1hdDogZm9ybWF0Q2FyZCxcbiAgICB0eXBlOiBjYXJkVHlwZSxcbiAgICBsdWhuOiBsdWhuLFxuICAgIGlzVmFsaWQ6IGlzQ2FyZFZhbGlkXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNhcmQgKG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykgcmV0dXJuICcnXG4gICAgcmV0dXJuIG51bWJlci5yZXBsYWNlKC9bXlxcZF0vZywgJycpXG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRDYXJkIChudW1iZXIsIHNlcGFyYXRvcikge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKG51bWJlciwgdHJ1ZSlcbiAgICBpZiAoIXR5cGUpIHJldHVybiBudW1iZXJcbiAgICByZXR1cm4gdHlwZS5ncm91cChudW1iZXIpLmpvaW4oc2VwYXJhdG9yIHx8ICcgJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhcmRUeXBlIChudW1iZXIsIGVhZ2VyKSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGUobnVtYmVyLCBlYWdlcilcbiAgICByZXR1cm4gdHlwZSA/IHR5cGUubmFtZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gaXNDYXJkVmFsaWQgKG51bWJlciwgdHlwZSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0eXBlID0gdHlwZXMuZ2V0KHR5cGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBnZXRUeXBlKG51bWJlcilcbiAgICB9XG4gICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gKCF0eXBlLmx1aG4gfHwgbHVobihudW1iZXIpKSAmJiB0eXBlLnRlc3QobnVtYmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZSAobnVtYmVyLCBlYWdlcikge1xuICAgIHJldHVybiB0eXBlcy5maW5kKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZS50ZXN0KG51bWJlciwgZWFnZXIpXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXG5jb25zdCBjdmNSZWdleCA9IC9eXFxkezMsNH0kL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN2Y1xuXG5mdW5jdGlvbiBDdmMgKGRhdGEpIHtcbiAgY29uc3QgdHlwZXMgPSBUeXBlcyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogY3ZjSXNWYWxpZFxuICB9XG5cbiAgZnVuY3Rpb24gY3ZjSXNWYWxpZCAoY3ZjLCB0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiBjdmMgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoIWN2Y1JlZ2V4LnRlc3QoY3ZjKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlcy5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXMuZ2V0KHR5cGUpLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgaXNWYWxpZE1vbnRoID0gcmVxdWlyZSgnaXMtdmFsaWQtbW9udGgnKVxuY29uc3QgcGFyc2VJbnRTdHJpY3QgPSByZXF1aXJlKCdwYXJzZS1pbnQnKVxuY29uc3QgcGFyc2VZZWFyID0gcmVxdWlyZSgncGFyc2UteWVhcicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1Bhc3Q6IGlzUGFzdCxcbiAgbW9udGg6IHtcbiAgICBwYXJzZTogcGFyc2VNb250aCxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkTW9udGhcbiAgfSxcbiAgeWVhcjoge1xuICAgIHBhcnNlOiBwYXJzZVllYXIsXG4gICAgZm9ybWF0OiBmb3JtYXRFeHBZZWFyLFxuICAgIGlzVmFsaWQ6IGlzRXhwWWVhclZhbGlkLFxuICAgIGlzUGFzdDogaXNFeHBZZWFyUGFzdFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGFzdCAobW9udGgsIHllYXIpIHtcbiAgcmV0dXJuIERhdGUubm93KCkgPj0gbmV3IERhdGUoeWVhciwgbW9udGgpXG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGggKG1vbnRoKSB7XG4gIHJldHVybiBwYXJzZUludFN0cmljdChtb250aClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RXhwWWVhciAoeWVhciwgc3RyaXApIHtcbiAgeWVhciA9IHllYXIudG9TdHJpbmcoKVxuICByZXR1cm4gc3RyaXAgPyB5ZWFyLnN1YnN0cigyLCA0KSA6IHllYXJcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyVmFsaWQgKHllYXIpIHtcbiAgaWYgKHR5cGVvZiB5ZWFyICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlXG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICByZXR1cm4geWVhciA+IDBcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyUGFzdCAoeWVhcikge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID4geWVhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnY3JlZGl0Y2FyZHMtdHlwZXMnKVxuY29uc3QgQ2FyZCA9IHJlcXVpcmUoJy4vY2FyZCcpXG5jb25zdCBDdmMgPSByZXF1aXJlKCcuL2N2YycpXG5jb25zdCBleHBpcmF0aW9uID0gcmVxdWlyZSgnLi9leHBpcmF0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoVHlwZXModHlwZXMpXG5tb2R1bGUuZXhwb3J0cy53aXRoVHlwZXMgPSB3aXRoVHlwZXNcblxuZnVuY3Rpb24gd2l0aFR5cGVzICh0eXBlcykge1xuICByZXR1cm4ge1xuICAgIGNhcmQ6IENhcmQodHlwZXMpLFxuICAgIGN2YzogQ3ZjKHR5cGVzKSxcbiAgICBleHBpcmF0aW9uOiBleHBpcmF0aW9uXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkVHlwZXNcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHNcblxuZnVuY3Rpb24gQ2FyZFR5cGVzICh0eXBlcykge1xuICBjb25zdCBtYXAgPSB0eXBlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdHlwZSkge1xuICAgIGFjY1t0eXBlLm5hbWVdID0gdHlwZVxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgcmV0dXJuIHtcbiAgICBmaW5kOiB0eXBlcy5maW5kLmJpbmQodHlwZXMpLFxuICAgIHNvbWU6IHR5cGVzLnNvbWUuYmluZCh0eXBlcyksXG4gICAgZ2V0OiBnZXRcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCAobmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSBtYXBbbmFtZV1cblxuICAgIGlmICghdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0eXBlIGZvdW5kIGZvciBuYW1lOiAnICsgbmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHplcm9GaWxsID0gcmVxdWlyZSgnemVyby1maWxsJylcbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG5cbnZhciBwYWQgPSB6ZXJvRmlsbCgyKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGFuZFllYXIgKHllYXIsIG5vdykge1xuICBub3cgPSBub3cgfHwgbmV3IERhdGUoKVxuICB2YXIgYmFzZSA9IG5vdy5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyKDAsIDIpXG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICByZXR1cm4gcGFyc2VJbnRTdHJpY3QoYmFzZSArIHBhZCh5ZWFyKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGx1aG4gKG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc3RyaW5nIGlucHV0JylcbiAgICBpZiAoIW51bWJlcikgcmV0dXJuIGZhbHNlXG4gICAgbGV0IGxlbmd0aCA9IG51bWJlci5sZW5ndGhcbiAgICBsZXQgYml0ID0gMVxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHZhbHVlXG5cbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KG51bWJlci5jaGFyQXQoLS1sZW5ndGgpLCAxMClcbiAgICAgIGJpdCBePSAxXG4gICAgICBzdW0gKz0gYml0ID8gYXJyYXlbdmFsdWVdIDogdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtICUgMTAgPT09IDBcbiAgfVxufShbMCwgMiwgNCwgNiwgOCwgMSwgMywgNSwgNywgOV0pKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW1cbi8vIGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5pc2ludGVnZXJcbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoXCJpcy1maW5pdGVcIik7XG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmXG4gICAgaXNGaW5pdGUodmFsKSAmJlxuICAgIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaXNJbnRlZ2VyID0gcmVxdWlyZSgnaXMtaW50ZWdlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNWYWxpZE1vbnRoIChtb250aCkge1xuICBpZiAodHlwZW9mIG1vbnRoICE9PSAnbnVtYmVyJyB8fCAhaXNJbnRlZ2VyKG1vbnRoKSkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBtb250aCA+PSAxICYmIG1vbnRoIDw9IDEyXG59XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uZmluZGAgb3IgYF8uZmluZExhc3RgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaW5kSW5kZXhGdW5jIFRoZSBmdW5jdGlvbiB0byBmaW5kIHRoZSBjb2xsZWN0aW9uIGluZGV4LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZChmaW5kSW5kZXhGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCkge1xuICAgIHZhciBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICB2YXIgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKTtcbiAgICAgIGNvbGxlY3Rpb24gPSBrZXlzKGNvbGxlY3Rpb24pO1xuICAgICAgcHJlZGljYXRlID0gZnVuY3Rpb24oa2V5KSB7IHJldHVybiBpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKTsgfTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZmluZEluZGV4RnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyBpdGVyYWJsZVtpdGVyYXRlZSA/IGNvbGxlY3Rpb25baW5kZXhdIDogaW5kZXhdIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmQ7XG4iLCJ2YXIgY3JlYXRlRmluZCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUZpbmQnKSxcbiAgICBmaW5kSW5kZXggPSByZXF1aXJlKCcuL2ZpbmRJbmRleCcpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnRcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxLCAgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLmZpbmQodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uYWdlIDwgNDA7IH0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsIHsgJ2FnZSc6IDEsICdhY3RpdmUnOiB0cnVlIH0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAncGViYmxlcydcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2ZyZWQnXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2Jhcm5leSdcbiAqL1xudmFyIGZpbmQgPSBjcmVhdGVGaW5kKGZpbmRJbmRleCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZDtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJvbUluZGV4PTBdIFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZCBlbGVtZW50LCBlbHNlIGAtMWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZEluZGV4KHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnVzZXIgPT0gJ2Jhcm5leSc7IH0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gMlxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4ID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGZyb21JbmRleCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpLCBpbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEluZGV4O1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGBfLnJlZHVjZWA7IHRoaXMgbWV0aG9kIHRyYW5zZm9ybXMgYG9iamVjdGAgdG8gYSBuZXdcbiAqIGBhY2N1bXVsYXRvcmAgb2JqZWN0IHdoaWNoIGlzIHRoZSByZXN1bHQgb2YgcnVubmluZyBlYWNoIG9mIGl0cyBvd25cbiAqIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgdGhydSBgaXRlcmF0ZWVgLCB3aXRoIGVhY2ggaW52b2NhdGlvblxuICogcG90ZW50aWFsbHkgbXV0YXRpbmcgdGhlIGBhY2N1bXVsYXRvcmAgb2JqZWN0LiBJZiBgYWNjdW11bGF0b3JgIGlzIG5vdFxuICogcHJvdmlkZWQsIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzYW1lIGBbW1Byb3RvdHlwZV1dYCB3aWxsIGJlIHVzZWQuIFRoZVxuICogaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIGZvdXIgYXJndW1lbnRzOiAoYWNjdW11bGF0b3IsIHZhbHVlLCBrZXksIG9iamVjdCkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjMuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBjdXN0b20gYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJhbnNmb3JtKFsyLCAzLCA0XSwgZnVuY3Rpb24ocmVzdWx0LCBuKSB7XG4gKiAgIHJlc3VsdC5wdXNoKG4gKj0gbik7XG4gKiAgIHJldHVybiBuICUgMiA9PSAwO1xuICogfSwgW10pO1xuICogLy8gPT4gWzQsIDldXG4gKlxuICogXy50cmFuc2Zvcm0oeyAnYSc6IDEsICdiJzogMiwgJ2MnOiAxIH0sIGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpO1xuICogfSwge30pO1xuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm0ob2JqZWN0LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgaXNBcnJMaWtlID0gaXNBcnIgfHwgaXNCdWZmZXIob2JqZWN0KSB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KTtcblxuICBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCk7XG4gIGlmIChhY2N1bXVsYXRvciA9PSBudWxsKSB7XG4gICAgdmFyIEN0b3IgPSBvYmplY3QgJiYgb2JqZWN0LmNvbnN0cnVjdG9yO1xuICAgIGlmIChpc0Fyckxpa2UpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaXNBcnIgPyBuZXcgQ3RvciA6IFtdO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmplY3QpKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGlzRnVuY3Rpb24oQ3RvcikgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKSA6IHt9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFjY3VtdWxhdG9yID0ge307XG4gICAgfVxuICB9XG4gIChpc0Fyckxpa2UgPyBhcnJheUVhY2ggOiBiYXNlRm9yT3duKShvYmplY3QsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIG9iamVjdCk7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcbnZhciBpc0ludGVnZXJSZWdleCA9IC9eLT9cXGQrJC9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUludFN0cmljdCAoaW50ZWdlcikge1xuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihpbnRlZ2VyKSA/IGludGVnZXIgOiB1bmRlZmluZWRcbiAgfVxuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlclJlZ2V4LnRlc3QoaW50ZWdlcikgPyBwYXJzZUludChpbnRlZ2VyLCAxMCkgOiB1bmRlZmluZWRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG52YXIgZXhwYW5kWWVhciA9IHJlcXVpcmUoJ2V4cGFuZC15ZWFyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZVllYXIgKHllYXIsIGV4cGFuZCwgbm93KSB7XG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICBpZiAoeWVhciA9PSBudWxsKSByZXR1cm5cbiAgaWYgKCFleHBhbmQpIHJldHVybiB5ZWFyXG4gIHJldHVybiBleHBhbmRZZWFyKHllYXIsIG5vdylcbn1cbiIsIi8qISB6ZXJvLWZpbGwuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qKlxuICogR2l2ZW4gYSBudW1iZXIsIHJldHVybiBhIHplcm8tZmlsbGVkIHN0cmluZy5cbiAqIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjY3MjgzL1xuICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSBudW1iZXJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB6ZXJvRmlsbCAod2lkdGgsIG51bWJlciwgcGFkKSB7XG4gIGlmIChudW1iZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobnVtYmVyLCBwYWQpIHtcbiAgICAgIHJldHVybiB6ZXJvRmlsbCh3aWR0aCwgbnVtYmVyLCBwYWQpXG4gICAgfVxuICB9XG4gIGlmIChwYWQgPT09IHVuZGVmaW5lZCkgcGFkID0gJzAnXG4gIHdpZHRoIC09IG51bWJlci50b1N0cmluZygpLmxlbmd0aFxuICBpZiAod2lkdGggPiAwKSByZXR1cm4gbmV3IEFycmF5KHdpZHRoICsgKC9cXC4vLnRlc3QobnVtYmVyKSA/IDIgOiAxKSkuam9pbihwYWQpICsgbnVtYmVyXG4gIHJldHVybiBudW1iZXIgKyAnJ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==