"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/my-assets",{

/***/ "./pages/my-assets.js":
/*!****************************!*\
  !*** ./pages/my-assets.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction MyAssets() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loaded'), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    function loadNFTs() {\n        return _loadNFTs.apply(this, arguments);\n    }\n    function _loadNFTs() {\n        _loadNFTs = _asyncToGenerator(_home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3modal, connection, provider, signer, marketContract, tokenContract, data, items;\n            return _home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({\n                            network: \"mainnet\",\n                            cacheProvider: true\n                        });\n                        _ctx1.next = 3;\n                        return web3modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftMarketAddress, _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftAddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);\n                        _ctx1.next = 10;\n                        return marketContract.fetchItemCreated();\n                    case 10:\n                        data = _ctx1.sent;\n                        _ctx1.next = 13;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(_home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenURI, meta, price, item;\n                                return _home_agung_Projects_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return tokenContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenURI = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenURI);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), 'ether');\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                sold: i.sold,\n                                                image: meta.data.image\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 9:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 13:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState('loaded');\n                    case 16:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _loadNFTs.apply(this, arguments);\n    }\n    if (loadingState === 'loaded' && !nfts.length) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"py-10 px-20 text-3xl\",\n        children: \"No Assets Created.\"\n    }, void 0, false, {\n        fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n        lineNumber: 54,\n        columnNumber: 60\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n                children: nfts.map(function(nft, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"border shadow rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: nft.image,\n                                alt: \"\",\n                                className: \"rounded\"\n                            }, void 0, false, {\n                                fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n                                lineNumber: 62,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4 bg-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold text-black\",\n                                    children: [\n                                        \"Price - \",\n                                        nft.price,\n                                        \" Eth\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 37\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n                                lineNumber: 63,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n                        lineNumber: 61,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/agung/Projects/nft-marketplace/pages/my-assets.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this));\n}\n_s(MyAssets, \"tZQqWsB6a3tlmIWr5tsZK11RClg=\");\n_c = MyAssets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyAssets);\nvar _c;\n$RefreshReg$(_c, \"MyAssets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teS1hc3NldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1k7QUFDbEI7QUFDUTtBQUN1QjtBQUV5QjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdoRFMsUUFBUSxHQUFHLENBQUM7OztJQUNqQixHQUFLLENBQW1CUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCUyxJQUFJLEdBQWFULEdBQVksS0FBdkJVLE9BQU8sR0FBSVYsR0FBWTtJQUNwQyxHQUFtQixDQUFvQkEsSUFBc0IsR0FBdEJBLCtDQUFRLENBQUMsQ0FBWSxjQUF0RFcsWUFBWSxHQUFxQlgsSUFBc0IsS0FBekNZLGVBQWUsR0FBSVosSUFBc0I7SUFFN0RDLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JZLFFBQVE7SUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBRVVBLFFBQVE7ZUFBUkEsU0FBUTs7YUFBUkEsU0FBUTtRQUFSQSxTQUFRLHFLQUF2QixRQUFRLFlBQWtCLENBQUM7Z0JBQ2pCQyxTQUFTLEVBS1RDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxNQUFNLEVBRU5DLGNBQWMsRUFDZEMsYUFBYSxFQUNiQyxJQUFJLEVBRUpDLEtBQUs7Ozs7d0JBYkxQLFNBQVMsR0FBRyxHQUFHLENBQUNYLGtEQUFTLENBQUMsQ0FBQzs0QkFDN0JtQixPQUFPLEVBQUUsQ0FBUzs0QkFDbEJDLGFBQWEsRUFBRSxJQUFJO3dCQUN2QixDQUFDOzsrQkFFd0JULFNBQVMsQ0FBQ1UsT0FBTzs7d0JBQXBDVCxVQUFVO3dCQUNWQyxRQUFRLEdBQUcsR0FBRyxDQUFDakIsaUVBQTZCLENBQUNnQixVQUFVO3dCQUN2REUsTUFBTSxHQUFHRCxRQUFRLENBQUNXLFNBQVM7d0JBRTNCVCxjQUFjLEdBQUcsR0FBRyxDQUFDbkIsbURBQWUsQ0FBQ0sscURBQWdCLEVBQUVFLHNGQUFlLEVBQUVXLE1BQU07d0JBQzlFRSxhQUFhLEdBQUcsR0FBRyxDQUFDcEIsbURBQWUsQ0FBQ00sK0NBQVUsRUFBRUUsc0VBQU8sRUFBRVMsUUFBUTs7K0JBQ3BERSxjQUFjLENBQUNZLGdCQUFnQjs7d0JBQTVDVixJQUFJOzsrQkFFVVcsT0FBTyxDQUFDQyxHQUFHLENBQUNaLElBQUksQ0FBQ2EsR0FBRzt5TUFBQyxRQUFRLFNBQUZDLENBQUMsRUFBSSxDQUFDO29DQUMzQ0MsUUFBUSxFQUNSQyxJQUFJLEVBQ05DLEtBQUssRUFFTEMsSUFBSTs7Ozs7bURBSmVuQixhQUFhLENBQUNnQixRQUFRLENBQUNELENBQUMsQ0FBQ0ssT0FBTzs7NENBQWpESixRQUFROzttREFDS2pDLGdEQUFTLENBQUNpQyxRQUFROzs0Q0FBL0JDLElBQUk7NENBQ05DLEtBQUssR0FBR3RDLDREQUF3QixDQUFDbUMsQ0FBQyxDQUFDRyxLQUFLLENBQUNNLFFBQVEsSUFBSSxDQUFPOzRDQUU1REwsSUFBSSxHQUFHLENBQUM7Z0RBQ1JELEtBQUssRUFBTEEsS0FBSztnREFDTEUsT0FBTyxFQUFFTCxDQUFDLENBQUNLLE9BQU8sQ0FBQ0ssUUFBUTtnREFDM0JDLE1BQU0sRUFBRVgsQ0FBQyxDQUFDVyxNQUFNO2dEQUNoQkMsS0FBSyxFQUFFWixDQUFDLENBQUNZLEtBQUs7Z0RBQ2RDLElBQUksRUFBRWIsQ0FBQyxDQUFDYSxJQUFJO2dEQUNaQyxLQUFLLEVBQUVaLElBQUksQ0FBQ2hCLElBQUksQ0FBQzRCLEtBQUs7NENBQzFCLENBQUM7eUVBRU1WLElBQUk7Ozs7Ozs0QkFDZixDQUFDOzRDQWY4Q0osQ0FBQzs7Ozs7d0JBQTFDYixLQUFLO3dCQWlCWFgsT0FBTyxDQUFDVyxLQUFLO3dCQUNiVCxlQUFlLENBQUMsQ0FBUTs7Ozs7O1FBQzVCLENBQUM7ZUFqQ2NDLFNBQVE7O0lBbUN2QixFQUFFLEVBQUVGLFlBQVksS0FBSyxDQUFRLFlBQUtGLElBQUksQ0FBQ3dDLE1BQU0sRUFBRSxNQUFNLDZFQUFHQyxDQUFFO1FBQUNDLFNBQVMsRUFBQyxDQUFzQjtrQkFBQyxDQUFrQjs7Ozs7O0lBQzlHLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0QsU0FBUyxFQUFDLENBQXFCOzhGQUMvQkMsQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBSztrR0FDZkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQTJEOzBCQUVsRTFDLElBQUksQ0FBQ3dCLEdBQUcsQ0FBQyxRQUFRLENBQVBvQixHQUFHLEVBQUVuQixDQUFDO2tDQUNaLE1BQU0sK0RBQUxrQixDQUFHO3dCQUFTRCxTQUFTLEVBQUMsQ0FBMEM7O3dHQUM1REcsQ0FBRztnQ0FBQ0MsR0FBRyxFQUFFRixHQUFHLENBQUNMLEtBQUs7Z0NBQUVRLEdBQUcsRUFBQyxDQUFFO2dDQUFDTCxTQUFTLEVBQUMsQ0FBUzs7Ozs7O3dHQUM5Q0MsQ0FBRztnQ0FBQ0QsU0FBUyxFQUFDLENBQWM7c0hBQ3hCTSxDQUFDO29DQUFDTixTQUFTLEVBQUMsQ0FBK0I7O3dDQUFDLENBQVE7d0NBQUNFLEdBQUcsQ0FBQ2hCLEtBQUs7d0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozt1QkFIbEVILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl2QyxDQUFDO0dBOURRMUIsUUFBUTtLQUFSQSxRQUFRO0FBZ0VqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215LWFzc2V0cy5qcz9mNzE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiXG5pbXBvcnQgeyBuZnRNYXJrZXRBZGRyZXNzLCBuZnRBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJztcblxuaW1wb3J0IE1hcmtldHBsYWNlIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTWFya2V0cGxhY2Uuc29sL01hcmtldHBsYWNlLmpzb24nO1xuaW1wb3J0IE5GVCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb24nO1xuXG5cbmZ1bmN0aW9uIE15QXNzZXRzKCkge1xuICAgIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgnbm90LWxvYWRlZCcpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZE5GVHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcbiAgICAgICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIixcbiAgICAgICAgICAgIGNhY2hlUHJvdmlkZXI6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblxuICAgICAgICBjb25zdCBtYXJrZXRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0TWFya2V0QWRkcmVzcywgTWFya2V0cGxhY2UuYWJpLCBzaWduZXIpO1xuICAgICAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRBZGRyZXNzLCBORlQuYWJpLCBwcm92aWRlcik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5mZXRjaEl0ZW1DcmVhdGVkKCk7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVVJJID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVSSSk7XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbiAgICAgICAgICAgICAgICBvd25lcjogaS5vd25lcixcbiAgICAgICAgICAgICAgICBzb2xkOiBpLnNvbGQsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldE5mdHMoaXRlbXMpO1xuICAgICAgICBzZXRMb2FkaW5nU3RhdGUoJ2xvYWRlZCcpO1xuICAgIH1cblxuICAgIGlmIChsb2FkaW5nU3RhdGUgPT09ICdsb2FkZWQnICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuICg8aDEgY2xhc3NOYW1lPVwicHktMTAgcHgtMjAgdGV4dC0zeGxcIj5ObyBBc3NldHMgQ3JlYXRlZC48L2gxPilcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZnRzLm1hcCgobmZ0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicm91bmRlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+UHJpY2UgLSB7bmZ0LnByaWNlfSBFdGg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXNzZXRzOyJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiV2ViM01vZGFsIiwibmZ0TWFya2V0QWRkcmVzcyIsIm5mdEFkZHJlc3MiLCJNYXJrZXRwbGFjZSIsIk5GVCIsIk15QXNzZXRzIiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTkZUcyIsIndlYjNtb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsIm1hcmtldENvbnRyYWN0IiwidG9rZW5Db250cmFjdCIsImRhdGEiLCJpdGVtcyIsIm5ldHdvcmsiLCJjYWNoZVByb3ZpZGVyIiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZmV0Y2hJdGVtQ3JlYXRlZCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJtZXRhIiwicHJpY2UiLCJpdGVtIiwidG9rZW5JZCIsImdldCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJzb2xkIiwiaW1hZ2UiLCJsZW5ndGgiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsIm5mdCIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/my-assets.js\n");

/***/ })

});