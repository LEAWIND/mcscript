(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{314:function(e,n,t){"use strict";t.r(n);var a=t(17),i=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_3-file-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-file-system"}},[e._v("#")]),e._v(" 3) File system")]),e._v(" "),n("h2",{attrs:{id:"_3-1-file-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-file-setup"}},[e._v("#")]),e._v(" 3.1 File setup")]),e._v(" "),n("p",[e._v("In einem Minecraft Datapack können alle Datein in ein scripts Ordner gepackt werden, um dann in "),n("code",[e._v("/functions")]),e._v(" den Output zu generieren.\nEs werden immer Dateien mit gleichem Namen, wie ihr Root generiert.")]),e._v(" "),n("p",[e._v("Ein benutzerdefinierter Name kann mit "),n("code",[e._v("#file: *name*")]),e._v(" gesetzt werden."),n("br"),e._v("\nBitte ohne "),n("code",[e._v(".mcfunction")]),e._v("!!")]),e._v(" "),n("p",[e._v("Statt des Namen kann auch gleich ein ganzer Pfad, an dem die neue Datei sein soll, angegeben werden:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("#file: C:/test/neu")])]),e._v(" "),n("li",[n("code",[e._v("#file: ./neu")]),e._v(" (Im gleichen Ordner)")]),e._v(" "),n("li",[n("code",[e._v("#file: ./unterordner/neu")])]),e._v(" "),n("li",[n("code",[e._v("#file: ../neu")]),e._v(" (Ein Ordner dadrüber)")]),e._v(" "),n("li",[n("code",[e._v("#file: ../unterordner/neu")])])]),e._v(" "),n("p",[e._v("Es können auch mehrere Dateien spezifiziert werden:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("#file: neu\n//commands hier\n#file: zwei\n//Commands für zwei hier\n")])])]),n("p",[e._v("Auch sehr gut mit "),n("a",{attrs:{href:"#loops"}},[e._v("for-loops")]),e._v(" kombinierbar:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("#file: neu\n//commands hier\nfor(1,5){\n\t#file: test$(i)\n\t//Commands für jede Datei hier\n}\n")])])]),n("h2",{attrs:{id:"_3-2-dateien-erweitern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-dateien-erweitern"}},[e._v("#")]),e._v(" 3.2 Dateien erweitern")]),e._v(" "),n("p",[e._v("Eine bereits bestehende Datei, vorher mit "),n("code",[e._v("#file:")]),e._v(", kann nun auch aus anderen Dateien erweitert werden und neuer Code einfach hinten drangehängt werden:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("extend: ./test\n/commands kommen hier.\n")])])]),n("h2",{attrs:{id:"_3-3-globale-dateien"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-globale-dateien"}},[e._v("#")]),e._v(" 3.3 Globale Dateien")]),e._v(" "),n("p",[n("a",{attrs:{href:"#vars"}},[e._v("Variablen")]),e._v(", "),n("a",{attrs:{href:"#consts"}},[e._v("Konstanten")]),e._v(" und "),n("a",{attrs:{href:"#modals"}},[e._v("Modals")]),e._v(" werden für jede Datei seperat gespeichert.\nJetzt kann man eine globale Datei mit der Endung "),n("code",[e._v(".gl.mcscript")]),e._v(" erstellen. Der Compiler erkennt diese automatisch und verwendet die deklarierten Objekte auch in anderen Dateien.\nSo kann man die Modals zum Beispiel in eine eigende Datei schreiben.")])])}),[],!1,null,null,null);n.default=i.exports}}]);