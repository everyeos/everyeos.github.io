webpackJsonp([168],{876:function(e,t,o){!function(t,o){e.exports=o()}(0,function(){"use strict";return[{locale:"he",pluralRuleFunction:function(e,t){var o=String(e).split("."),a=o[0],r=!o[1],n=Number(o[0])==e,i=n&&o[0].slice(-1);return t?"other":1==e&&r?"one":2==a&&r?"two":r&&(e<0||e>10)&&n&&0==i?"many":"other"},fields:{year:{displayName:"\u05e9\u05e0\u05d4",relative:{0:"\u05d4\u05e9\u05e0\u05d4",1:"\u05d4\u05e9\u05e0\u05d4 \u05d4\u05d1\u05d0\u05d4","-1":"\u05d4\u05e9\u05e0\u05d4 \u05e9\u05e2\u05d1\u05e8\u05d4"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e0\u05d4",two:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e0\u05d4",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e0\u05d9\u05dd"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05d4",two:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e0\u05d4",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e0\u05d9\u05dd"}}},month:{displayName:"\u05d7\u05d5\u05d3\u05e9",relative:{0:"\u05d4\u05d7\u05d5\u05d3\u05e9",1:"\u05d4\u05d7\u05d5\u05d3\u05e9 \u05d4\u05d1\u05d0","-1":"\u05d4\u05d7\u05d5\u05d3\u05e9 \u05e9\u05e2\u05d1\u05e8"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05d7\u05d5\u05d3\u05e9",two:"\u05d1\u05e2\u05d5\u05d3 \u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9",two:"\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"}}},day:{displayName:"\u05d9\u05d5\u05dd",relative:{0:"\u05d4\u05d9\u05d5\u05dd",1:"\u05de\u05d7\u05e8",2:"\u05de\u05d7\u05e8\u05ea\u05d9\u05d9\u05dd","-2":"\u05e9\u05dc\u05e9\u05d5\u05dd","-1":"\u05d0\u05ea\u05de\u05d5\u05dc"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05d9\u05d5\u05dd {0}",two:"\u05d1\u05e2\u05d5\u05d3 \u05d9\u05d5\u05de\u05d9\u05d9\u05dd",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d9\u05de\u05d9\u05dd",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d9\u05de\u05d9\u05dd"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05d9\u05d5\u05dd {0}",two:"\u05dc\u05e4\u05e0\u05d9 \u05d9\u05d5\u05de\u05d9\u05d9\u05dd",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d9\u05de\u05d9\u05dd",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d9\u05de\u05d9\u05dd"}}},hour:{displayName:"\u05e9\u05e2\u05d4",relative:{0:"\u05d1\u05e9\u05e2\u05d4 \u05d6\u05d5"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e2\u05d4",two:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e2\u05d5\u05ea",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e2\u05d5\u05ea"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05d4",two:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e2\u05d5\u05ea",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e2\u05d5\u05ea"}}},minute:{displayName:"\u05d3\u05e7\u05d4",relative:{0:"\u05d1\u05d3\u05e7\u05d4 \u05d6\u05d5"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05d3\u05e7\u05d4",two:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d3\u05e7\u05d5\u05ea",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05d3\u05e7\u05d5\u05ea"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05d3\u05e7\u05d4",two:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d3\u05e7\u05d5\u05ea",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05d3\u05e7\u05d5\u05ea"}}},second:{displayName:"\u05e9\u05e0\u05d9\u05d9\u05d4",relative:{0:"\u05e2\u05db\u05e9\u05d9\u05d5"},relativeTime:{future:{one:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05d1\u05e2\u05d5\u05d3 \u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",many:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e0\u05d9\u05d5\u05ea",other:"\u05d1\u05e2\u05d5\u05d3 {0} \u05e9\u05e0\u05d9\u05d5\u05ea"},past:{one:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05dc\u05e4\u05e0\u05d9 \u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",many:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e0\u05d9\u05d5\u05ea",other:"\u05dc\u05e4\u05e0\u05d9 {0} \u05e9\u05e0\u05d9\u05d5\u05ea"}}}}}]})}});
//# sourceMappingURL=168.24dfd1dc.chunk.js.map