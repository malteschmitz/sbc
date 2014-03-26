function rebuildt() {
 //////vorschau:
 document.getElementById("vorschau").style.borderWidth = document.opt.NborderWidth.value + "px";
 document.getElementById("vorschau").style.borderColor = "#" + document.opt.NborderColor.value;
 document.getElementById("vorschau").style.borderStyle = document.opt.NborderStyle.value;
 document.getElementById("vorschau").style.backgroundColor = "#" + document.opt.NbackgroundColor.value;
 document.getElementById("vorschau").style.color = "#" + document.opt.Ncolor.value;
 document.getElementById("vorschau").firstChild.nodeValue = document.opt.Nbeschriftung.value;
 document.getElementById("vorschau").style.padding = document.opt.Npadding.value;
 document.getElementById("vorschau").style.fontFamily = document.opt.NfontFamily.value;
 document.getElementById("vorschau").style.fontSize = document.opt.NfontSize.value + "pt";
 if (document.opt.NfontWeight.checked == true) document.getElementById("vorschau").style.fontWeight = "bold"; else document.getElementById("vorschau").style.fontWeight = "normal";
 if (document.opt.NfontStyle.checked == true) document.getElementById("vorschau").style.fontStyle = "italic"; else document.getElementById("vorschau").style.fontStyle = "normal";
 if (document.opt.NfontVariant.checked == true) document.getElementById("vorschau").style.fontVariant = "small-caps"; else document.getElementById("vorschau").style.fontVariant = "normal";
 var tmp = "";
 if (document.opt.NtextDecoration0.checked == true) tmp += " underline";
 if (document.opt.NtextDecoration1.checked == true) tmp += " overline";
 if (document.opt.NtextDecoration2.checked == true) tmp += " line-through";
 if (document.opt.NtextDecoration0.checked == false && document.opt.NtextDecoration1.checked == false && document.opt.NtextDecoration2.checked == false) tmp = " none";
 tmp = tmp.substring(1,tmp.length);
 document.getElementById("vorschau").style.textDecoration = tmp;
 //////code:
 //css:
 var qc = "<button style=\"";
 qc += "border-width:" + document.opt.NborderWidth.value + "px;";
 qc += "border-color:#" + document.opt.NborderColor.value + ";";
 qc += "border-style:" + document.opt.NborderStyle.value + ";";
 qc += "background-color:#" + document.opt.NbackgroundColor.value + ";";
 qc += "color:#" + document.opt.Ncolor.value + ";";
 qc += "padding:" + document.opt.Npadding.value + ";";
 qc += "font-family:" + document.opt.NfontFamily.value + ";";
 qc += "font-size:" + document.opt.NfontSize.value + "pt;";
 qc += "font-weight:";
 if (document.opt.NfontWeight.checked == true) qc += "bold;"; else qc += "normal;";
 qc += "font-style:";
 if (document.opt.NfontStyle.checked == true) qc += "italic;"; else qc += "normal;";
 qc += "font-variant:";
 if (document.opt.NfontVariant.checked == true) qc += "small-caps;"; else qc += "normal;";
 var textDecorationNorm = "";
 if (document.opt.NtextDecoration0.checked == true) textDecorationNorm += " underline";
 if (document.opt.NtextDecoration1.checked == true) textDecorationNorm += " overline";
 if (document.opt.NtextDecoration2.checked == true) textDecorationNorm += " line-through";
 if (document.opt.NtextDecoration0.checked == false && document.opt.NtextDecoration1.checked == false && document.opt.NtextDecoration2.checked == false) textDecorationNorm = " none";
 textDecorationNorm = textDecorationNorm.substring(1,textDecorationNorm.length);
 qc += "text-decoration:" + textDecorationNorm + ";\" ";
 //Button Zugriff mit ACHTUNG punkt am ende und bzs mit style. am ende
 var bz = "";
 if (document.opt.Nthisv.checked == true) bz = "this."; else bz = "document.getElementById('" + document.opt.Nid.value + "')."
 var bzs = "";
 bzs = bz + "style."
 //javascript mouseover
 qc += "onMouseOver=\"";
 if (document.opt.NborderWidth.value != document.opt.HborderWidth.value) qc += bzs + "borderWidth = '" + document.opt.HborderWidth.value + "pt';";
 if (document.opt.NborderColor.value != document.opt.HborderColor.value) qc += bzs + "borderColor = '#" + document.opt.HborderColor.value + "';";
 if (document.opt.NborderStyle.value != document.opt.HborderStyle.value) qc += bzs + "borderStyle = '" + document.opt.HborderStyle.value + "';";
 if (document.opt.NbackgroundColor.value != document.opt.HbackgroundColor.value) qc += bzs + "backgroundColor = '#" + document.opt.HbackgroundColor.value + "';";
 if (document.opt.Ncolor.value != document.opt.Hcolor.value) qc += bzs + "color = '#" + document.opt.Hcolor.value + "';";
 if (document.opt.Npadding.value != document.opt.Hpadding.value) qc += bzs + "padding = '" + document.opt.Hpadding.value + "';";
 if (document.opt.Nbeschriftung.value != document.opt.Hbeschriftung.value) qc += bz + "firstChild.nodeValue = '" + document.opt.Hbeschriftung.value + "';";
 if (document.opt.NfontFamily.value != document.opt.HfontFamily.value) qc += bzs + "fontFamily = '" + document.opt.HfontFamily.value + "';";
 if (document.opt.NfontSize.value != document.opt.HfontSize.value) qc += bzs + "fontSize = '" + document.opt.HfontSize.value + "pt';";
 if (document.opt.NfontWeight.checked != document.opt.HfontWeight.checked) {
  qc += bzs + "fontWeight = '"
  if (document.opt.HfontWeight.checked == true) qc += "bold"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.NfontStyle.checked != document.opt.HfontStyle.checked) {
  qc += bzs + "fontStyle = '"
  if (document.opt.HfontStyle.checked == true) qc += "italic"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.NfontVariant.checked != document.opt.HfontVariant.checked) {
  qc += bzs + "fontVariant = '"
  if (document.opt.HfontWeight.checked == true) qc += "small-caps"; else qc += "normal";
  qc += "';"
 }
 var textDecorationHigh = "";
 if (document.opt.HtextDecoration0.checked == true) textDecorationHigh += " underline";
 if (document.opt.HtextDecoration1.checked == true) textDecorationHigh += " overline";
 if (document.opt.HtextDecoration2.checked == true) textDecorationHigh += " line-through";
 if (document.opt.HtextDecoration0.checked == false && document.opt.HtextDecoration1.checked == false && document.opt.HtextDecoration2.checked == false) textDecorationHigh = " none";
 textDecorationHigh = textDecorationHigh.substring(1,textDecorationHigh.length);
 if (textDecorationNorm != textDecorationHigh) qc += bzs + "textDecoration = '" + textDecorationHigh + "';";
 qc += "\" ";
 //javascript mouseout
 qc += "onMouseOut=\"";
 if (document.opt.NborderWidth.value != document.opt.HborderWidth.value) qc += bzs + "borderWidth = '" + document.opt.NborderWidth.value + "pt';";
 if (document.opt.NborderColor.value != document.opt.HborderColor.value) qc += bzs + "borderColor = '#" + document.opt.NborderColor.value + "';";
 if (document.opt.NborderStyle.value != document.opt.HborderStyle.value) qc += bzs + "borderStyle = '" + document.opt.NborderStyle.value + "';";
 if (document.opt.NbackgroundColor.value != document.opt.HbackgroundColor.value) qc += bzs + "backgroundColor = '#" + document.opt.NbackgroundColor.value + "';";
 if (document.opt.Ncolor.value != document.opt.Hcolor.value) qc += bzs + "color = '#" + document.opt.Ncolor.value + "';";
 if (document.opt.Npadding.value != document.opt.Hpadding.value) qc += bzs + "padding = '" + document.opt.Npadding.value + "';";
 if (document.opt.Nbeschriftung.value != document.opt.Hbeschriftung.value) qc += bz + "firstChild.nodeValue = '" + document.opt.Nbeschriftung.value + "';";
 if (document.opt.NfontFamily.value != document.opt.HfontFamily.value) qc += bzs + "fontFamily = '" + document.opt.NfontFamily.value + "';";
 if (document.opt.NfontSize.value != document.opt.HfontSize.value) qc += bzs + "fontSize = '" + document.opt.NfontSize.value + "pt';";
 if (document.opt.NfontWeight.checked != document.opt.HfontWeight.checked) {
  qc += bzs + "fontWeight = '"
  if (document.opt.NfontWeight.checked == true) qc += "bold"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.NfontStyle.checked != document.opt.HfontStyle.checked) {
  qc += bzs + "fontStyle = '"
  if (document.opt.NfontStyle.checked == true) qc += "italic"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.NfontVariant.checked != document.opt.HfontVariant.checked) {
  qc += bzs + "fontVariant = '"
  if (document.opt.NfontWeight.checked == true) qc += "small-caps"; else qc += "normal";
  qc += "';"
 }
 if (textDecorationNorm != textDecorationHigh) qc += bzs + "textDecoration = '" + textDecorationNorm + "';";
 qc += "\" ";
 //javascript mousedown
 qc += "onMouseDown=\"";
 if (document.opt.HborderWidth.value != document.opt.PborderWidth.value) qc += bzs + "borderWidth = '" + document.opt.PborderWidth.value + "pt';";
 if (document.opt.HborderColor.value != document.opt.PborderColor.value) qc += bzs + "borderColor = '#" + document.opt.PborderColor.value + "';";
 if (document.opt.HborderStyle.value != document.opt.PborderStyle.value) qc += bzs + "borderStyle = '" + document.opt.PborderStyle.value + "';";
 if (document.opt.HbackgroundColor.value != document.opt.PbackgroundColor.value) qc += bzs + "backgroundColor = '#" + document.opt.PbackgroundColor.value + "';";
 if (document.opt.Hcolor.value != document.opt.Pcolor.value) qc += bzs + "color = '#" + document.opt.Pcolor.value + "';";
 if (document.opt.Hpadding.value != document.opt.Ppadding.value) qc += bzs + "padding = '" + document.opt.Ppadding.value + "';";
 if (document.opt.Hbeschriftung.value != document.opt.Pbeschriftung.value) qc += bz + "firstChild.nodeValue = '" + document.opt.Pbeschriftung.value + "';";
 if (document.opt.HfontFamily.value != document.opt.PfontFamily.value) qc += bzs + "fontFamily = '" + document.opt.PfontFamily.value + "';";
 if (document.opt.HfontSize.value != document.opt.PfontSize.value) qc += bzs + "fontSize = '" + document.opt.PfontSize.value + "pt';";
 if (document.opt.HfontWeight.checked != document.opt.PfontWeight.checked) {
  qc += bzs + "fontWeight = '"
  if (document.opt.PfontWeight.checked == true) qc += "bold"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.HfontStyle.checked != document.opt.PfontStyle.checked) {
  qc += bzs + "fontStyle = '"
  if (document.opt.PfontStyle.checked == true) qc += "italic"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.HfontVariant.checked != document.opt.PfontVariant.checked) {
  qc += bzs + "fontVariant = '"
  if (document.opt.PfontWeight.checked == true) qc += "small-caps"; else qc += "normal";
  qc += "';"
 }
 var textDecorationPress = "";
 if (document.opt.PtextDecoration0.checked == true) textDecorationPress += " underline";
 if (document.opt.PtextDecoration1.checked == true) textDecorationPress += " overline";
 if (document.opt.PtextDecoration2.checked == true) textDecorationPress += " line-through";
 if (document.opt.PtextDecoration0.checked == false && document.opt.PtextDecoration1.checked == false && document.opt.PtextDecoration2.checked == false) textDecorationPress = " none";
 textDecorationPress = textDecorationPress.substring(1,textDecorationPress.length);
 if (textDecorationHigh != textDecorationPress) qc += bzs + "textDecoration = '" + textDecorationPress + "';";
 qc += "\" ";
 //javascript mouseup
 qc += "onMouseUp=\"";
 if (document.opt.HborderWidth.value != document.opt.PborderWidth.value) qc += bzs + "borderWidth = '" + document.opt.HborderWidth.value + "pt';";
 if (document.opt.HborderColor.value != document.opt.PborderColor.value) qc += bzs + "borderColor = '#" + document.opt.HborderColor.value + "';";
 if (document.opt.HborderStyle.value != document.opt.PborderStyle.value) qc += bzs + "borderStyle = '" + document.opt.HborderStyle.value + "';";
 if (document.opt.HbackgroundColor.value != document.opt.PbackgroundColor.value) qc += bzs + "backgroundColor = '#" + document.opt.HbackgroundColor.value + "';";
 if (document.opt.Hcolor.value != document.opt.Pcolor.value) qc += bzs + "color = '#" + document.opt.Hcolor.value + "';";
 if (document.opt.Hpadding.value != document.opt.Ppadding.value) qc += bzs + "padding = '" + document.opt.Hpadding.value + "';";
 if (document.opt.Hbeschriftung.value != document.opt.Pbeschriftung.value) qc += bz + "firstChild.nodeValue = '" + document.opt.Hbeschriftung.value + "';";
 if (document.opt.HfontFamily.value != document.opt.PfontFamily.value) qc += bzs + "fontFamily = '" + document.opt.HfontFamily.value + "';";
 if (document.opt.HfontSize.value != document.opt.PfontSize.value) qc += bzs + "fontSize = '" + document.opt.HfontSize.value + "pt';";
 if (document.opt.HfontWeight.checked != document.opt.PfontWeight.checked) {
  qc += bzs + "fontWeight = '"
  if (document.opt.HfontWeight.checked == true) qc += "bold"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.HfontStyle.checked != document.opt.PfontStyle.checked) {
  qc += bzs + "fontStyle = '"
  if (document.opt.HfontStyle.checked == true) qc += "italic"; else qc += "normal";
  qc += "';"
 }
 if (document.opt.HfontVariant.checked != document.opt.PfontVariant.checked) {
  qc += bzs + "fontVariant = '"
  if (document.opt.HfontWeight.checked == true) qc += "small-caps"; else qc += "normal";
  qc += "';"
 }
 if (textDecorationHigh != textDecorationPress) qc += bzs + "textDecoration = '" + textDecorationHigh + "';";
 qc += "\"";
 //beschriftung:
 if (document.opt.Nthisv.checked == false) qc += " id=\"" + document.opt.Nid.value + "\"";
 qc += " onClick=\"" + document.opt.Pereignis.value + "\">"
 qc += document.opt.Nbeschriftung.value;
 qc += "</button>"
 //////ausgabe:
 document.getElementById("code").firstChild.nodeValue = qc;
}

function high() {
 document.getElementById("vorschau").style.borderWidth = document.opt.HborderWidth.value + "px";
 document.getElementById("vorschau").style.borderColor = "#" + document.opt.HborderColor.value;
 document.getElementById("vorschau").style.borderStyle = document.opt.HborderStyle.value;
 document.getElementById("vorschau").style.backgroundColor = "#" + document.opt.HbackgroundColor.value;
 document.getElementById("vorschau").style.color = "#" + document.opt.Hcolor.value;
 document.getElementById("vorschau").style.padding =  document.opt.Hpadding.value;
 document.getElementById("vorschau").firstChild.nodeValue = document.opt.Hbeschriftung.value;
 document.getElementById("vorschau").style.fontFamily = document.opt.HfontFamily.value;
 document.getElementById("vorschau").style.fontSize = document.opt.HfontSize.value + "pt";
 if (document.opt.HfontWeight.checked == true) document.getElementById("vorschau").style.fontWeight = "bold"; else document.getElementById("vorschau").style.fontWeight = "normal";
 if (document.opt.HfontStyle.checked == true) document.getElementById("vorschau").style.fontStyle = "italic"; else document.getElementById("vorschau").style.fontStyle = "normal";
 if (document.opt.HfontVariant.checked == true) document.getElementById("vorschau").style.fontVariant = "small-caps"; else document.getElementById("vorschau").style.fontVariant = "normal";
 var tmp = "";
 if (document.opt.HtextDecoration0.checked == true) tmp += " underline";
 if (document.opt.HtextDecoration1.checked == true) tmp += " overline";
 if (document.opt.HtextDecoration2.checked == true) tmp += " line-through";
 if (document.opt.HtextDecoration0.checked == false && document.opt.HtextDecoration1.checked == false && document.opt.HtextDecoration2.checked == false) tmp = " none";
 tmp = tmp.substring(1,tmp.length);
 document.getElementById("vorschau").style.textDecoration = tmp;
 }

function norm() {
 //vorschau: (wie in rebuildt)
 document.getElementById("vorschau").style.borderWidth = document.opt.NborderWidth.value + "px";
 document.getElementById("vorschau").style.borderColor = "#" + document.opt.NborderColor.value;
 document.getElementById("vorschau").style.borderStyle = document.opt.NborderStyle.value;
 document.getElementById("vorschau").style.backgroundColor = "#" + document.opt.NbackgroundColor.value;
 document.getElementById("vorschau").style.color = "#" + document.opt.Ncolor.value;
 document.getElementById("vorschau").style.padding =  document.opt.Npadding.value;
 document.getElementById("vorschau").firstChild.nodeValue = document.opt.Nbeschriftung.value;
 document.getElementById("vorschau").style.fontFamily = document.opt.NfontFamily.value;
 document.getElementById("vorschau").style.fontSize = document.opt.NfontSize.value + "pt";
 if (document.opt.NfontWeight.checked == true) document.getElementById("vorschau").style.fontWeight = "bold"; else document.getElementById("vorschau").style.fontWeight = "normal";
 if (document.opt.NfontStyle.checked == true) document.getElementById("vorschau").style.fontStyle = "italic"; else document.getElementById("vorschau").style.fontStyle = "normal";
 if (document.opt.NfontVariant.checked == true) document.getElementById("vorschau").style.fontVariant = "small-caps"; else document.getElementById("vorschau").style.fontVariant = "normal";
 var tmp = "";
 if (document.opt.NtextDecoration0.checked == true) tmp += " underline";
 if (document.opt.NtextDecoration1.checked == true) tmp += " overline";
 if (document.opt.NtextDecoration2.checked == true) tmp += " line-through";
 if (document.opt.NtextDecoration0.checked == false && document.opt.NtextDecoration1.checked == false && document.opt.NtextDecoration2.checked == false) tmp = " none";
 tmp = tmp.substring(1,tmp.length);
 document.getElementById("vorschau").style.textDecoration = tmp;
}

function press() {
 document.getElementById("vorschau").style.borderWidth = document.opt.PborderWidth.value + "px";
 document.getElementById("vorschau").style.borderColor = "#" + document.opt.PborderColor.value;
 document.getElementById("vorschau").style.borderStyle = document.opt.PborderStyle.value;
 document.getElementById("vorschau").style.backgroundColor = "#" + document.opt.PbackgroundColor.value;
 document.getElementById("vorschau").style.color = "#" + document.opt.Pcolor.value;
 document.getElementById("vorschau").style.padding =  document.opt.Ppadding.value;
 document.getElementById("vorschau").firstChild.nodeValue = document.opt.Pbeschriftung.value;
 document.getElementById("vorschau").style.fontFamily = document.opt.PfontFamily.value;
 document.getElementById("vorschau").style.fontSize = document.opt.PfontSize.value + "pt";
 if (document.opt.PfontWeight.checked == true) document.getElementById("vorschau").style.fontWeight = "bold"; else document.getElementById("vorschau").style.fontWeight = "normal";
 if (document.opt.PfontStyle.checked == true) document.getElementById("vorschau").style.fontStyle = "italic"; else document.getElementById("vorschau").style.fontStyle = "normal";
 if (document.opt.PfontVariant.checked == true) document.getElementById("vorschau").style.fontVariant = "small-caps"; else document.getElementById("vorschau").style.fontVariant = "normal";
 var tmp = "";
 if (document.opt.PtextDecoration0.checked == true) tmp += " underline";
 if (document.opt.PtextDecoration1.checked == true) tmp += " overline";
 if (document.opt.PtextDecoration2.checked == true) tmp += " line-through";
 if (document.opt.PtextDecoration0.checked == false && document.opt.PtextDecoration1.checked == false && document.opt.PtextDecoration2.checked == false) tmp = " none";
 tmp = tmp.substring(1,tmp.length);
 document.getElementById("vorschau").style.textDecoration = tmp;
}

function gleich(x){
 switch(x) {
  case 10:
   document.opt.HfontWeight.checked = document.opt.NfontWeight.checked;
   document.opt.PfontWeight.checked = document.opt.NfontWeight.checked;
   document.opt.HfontStyle.checked = document.opt.NfontStyle.checked;
   document.opt.PfontStyle.checked = document.opt.NfontStyle.checked;
   document.opt.HfontVariant.checked = document.opt.NfontVariant.checked;
   document.opt.PfontVariant.checked = document.opt.NfontVariant.checked;
   document.opt.HtextDecoration0.checked = document.opt.NtextDecoration0.checked;
   document.opt.PtextDecoration0.checked = document.opt.NtextDecoration0.checked;
   document.opt.HtextDecoration1.checked = document.opt.NtextDecoration1.checked;
   document.opt.PtextDecoration1.checked = document.opt.NtextDecoration1.checked;
   document.opt.HtextDecoration2.checked = document.opt.NtextDecoration2.checked;
   document.opt.PtextDecoration2.checked = document.opt.NtextDecoration2.checked;
   break;
  case 9:
   document.opt.HfontSize.value = document.opt.NfontSize.value;
   document.opt.PfontSize.value = document.opt.NfontSize.value;
   break;
  case 8:
   document.opt.HfontFamily.value = document.opt.NfontFamily.value;
   document.opt.PfontFamily.value = document.opt.NfontFamily.value;
   break;
  case 7:
   document.opt.Hpadding.value = document.opt.Npadding.value;
   document.opt.Ppadding.value = document.opt.Npadding.value;
   break;
  case 6:
   document.opt.Hbeschriftung.value = document.opt.Nbeschriftung.value;
   document.opt.Pbeschriftung.value = document.opt.Nbeschriftung.value;
   break;
  case 5:
   document.opt.Hcolor.value = document.opt.Ncolor.value;
   document.opt.Pcolor.value = document.opt.Ncolor.value;
   break;
  case 4:
   document.opt.HbackgroundColor.value = document.opt.NbackgroundColor.value;
   document.opt.PbackgroundColor.value = document.opt.NbackgroundColor.value;
   break;
  case 3:
   document.opt.HborderColor.value = document.opt.NborderColor.value;
   document.opt.PborderColor.value = document.opt.NborderColor.value;
   break;
  case 2:
   document.opt.HborderStyle.value = document.opt.NborderStyle.value;
   document.opt.PborderStyle.value = document.opt.NborderStyle.value;
   break;
  case 1:
   document.opt.HborderWidth.value = document.opt.NborderWidth.value;
   document.opt.PborderWidth.value = document.opt.NborderWidth.value;
   break;
  case 0:
   document.opt.HborderWidth.value = document.opt.NborderWidth.value;
   document.opt.PborderWidth.value = document.opt.NborderWidth.value;
   document.opt.HborderStyle.value = document.opt.NborderStyle.value;
   document.opt.PborderStyle.value = document.opt.NborderStyle.value;
   document.opt.HborderColor.value = document.opt.NborderColor.value;
   document.opt.PborderColor.value = document.opt.NborderColor.value;
   document.opt.HbackgroundColor.value = document.opt.NbackgroundColor.value;
   document.opt.PbackgroundColor.value = document.opt.NbackgroundColor.value;
   document.opt.Hcolor.value = document.opt.Ncolor.value;
   document.opt.Pcolor.value = document.opt.Ncolor.value;
   document.opt.Hbeschriftung.value = document.opt.Nbeschriftung.value;
   document.opt.Pbeschriftung.value = document.opt.Nbeschriftung.value;
   document.opt.Hpadding.value = document.opt.Npadding.value;
   document.opt.Ppadding.value = document.opt.Npadding.value;
   document.opt.HfontFamily.value = document.opt.NfontFamily.value;
   document.opt.PfontFamily.value = document.opt.NfontFamily.value;
   document.opt.HfontSize.value = document.opt.NfontSize.value;
   document.opt.PfontSize.value = document.opt.NfontSize.value;
   document.opt.HfontWeight.checked = document.opt.NfontWeight.checked;
   document.opt.PfontWeight.checked = document.opt.NfontWeight.checked;
   document.opt.HfontStyle.checked = document.opt.NfontStyle.checked;
   document.opt.PfontStyle.checked = document.opt.NfontStyle.checked;
   document.opt.HfontVariant.checked = document.opt.NfontVariant.checked;
   document.opt.PfontVariant.checked = document.opt.NfontVariant.checked;
   document.opt.HtextDecoration0.checked = document.opt.NtextDecoration0.checked;
   document.opt.PtextDecoration0.checked = document.opt.NtextDecoration0.checked;
   document.opt.HtextDecoration1.checked = document.opt.NtextDecoration1.checked;
   document.opt.PtextDecoration1.checked = document.opt.NtextDecoration1.checked;
   document.opt.HtextDecoration2.checked = document.opt.NtextDecoration2.checked;
   document.opt.PtextDecoration2.checked = document.opt.NtextDecoration2.checked;
   break;
 }
 rebuildt();
}
function testclick() {
 location.href = "JavaScript:" + document.opt.Pereignis.value;
}