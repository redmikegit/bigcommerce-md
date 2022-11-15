(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])(noCompareMessage);
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsImNvbnRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwiVXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvblRvZ2dsZUNsaWNrIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3Iiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJhdHRyIiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJsZW5ndGgiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInRyaWdnZXIiLCJwdXNoU3RhdGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJpIiwidGVtcCIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJscyIsImFkZENsYXNzIiwiY29tcGFyZSIsImpvaW4iLCJmaW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwibm9Db21wYXJlTWVzc2FnZSIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJ2YWx1ZSIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiLCJzaG93QWxlcnRNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDMUI7QUFBQSxJQUVEQSxXQUFXO0VBQUE7RUFDNUIscUJBQVlDLE9BQU8sRUFBRTtJQUFBO0lBQ2pCLGdDQUFNQSxPQUFPLENBQUM7SUFFZEMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtNQUMxQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUN0Q0osTUFBTSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0lBQUM7RUFDUDtFQUFDO0VBQUEsT0FFREMsb0JBQW9CLEdBQXBCLGdDQUF1QjtJQUNuQixJQUFNQyxlQUFlLEdBQUdDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUUzRCxJQUFJVCxNQUFNLENBQUNLLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQzdDRixlQUFlLENBQUNHLEtBQUssRUFBRTtNQUN2QlgsTUFBTSxDQUFDSyxZQUFZLENBQUNPLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDbEQ7RUFDSixDQUFDO0VBQUEsT0FFREMsY0FBYyxHQUFkLHdCQUFlQyxLQUFLLEVBQUVDLGFBQWEsRUFBRTtJQUNqQyxJQUFNQyxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUssQ0FB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OiJ0aGVtZS1idW5kbGUuY2h1bmsuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxufTtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcy5pbmNsdWRlcyhpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0cy5pbmNsdWRlcyhpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybHMpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG5vQ29tcGFyZU1lc3NhZ2UsIHVybHMgfSkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9