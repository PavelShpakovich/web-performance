(() => {
  'use strict';
  var e = {
      334: (e, o, r) => {
        function t() {
          console.log('Hello');
        }
        function l() {
          console.log('Bye');
        }
        r.r(o), r.d(o, { sayBye: () => l, sayHello: () => t });
      },
    },
    o = {};
  function r(t) {
    var l = o[t];
    if (void 0 !== l) return l.exports;
    var n = (o[t] = { exports: {} });
    return e[t](n, n.exports, r), n.exports;
  }
  (r.d = (e, o) => {
    for (var t in o) r.o(o, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
  }),
    (r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (r.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  r.r({}), (0, r(334).sayHello)();
})();
