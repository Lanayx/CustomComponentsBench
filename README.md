# CustomComponentsBench
Benchmark performance hit of Custom Elements using Vue wrappers

Results on AMD Ryzen 7 2700X with 4x slowdown

## Vue-custom-element wrapper (index1.html): 8019 ms
491 msLoading
3638 msScripting
729 msRendering
45 msPainting
1960 msSystem
1156 msIdle
8019 msTotal

## Regular Vue component (index2.html): 5545 ms
42 msLoading
1586 msScripting
620 msRendering
11 msPainting
1940 msSystem
1346 msIdle
5545 msTotal

## vue-web-component-wrapper (index3.html): 6962 ms
354 msLoading
2154 msScripting
681 msRendering
40 msPainting
2030 msSystem
1704 msIdle
6962 msTotal
