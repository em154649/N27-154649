console.log("Übungen zu If-Else")
console.log("==================")
console.log("Übung 1 - Prüfung auf Wert-Gleichheit:")
// EXCEL: 
// A1:1  Der Wert 1 wird in Zelle A1 getippt
// B1:2  Der Wert 2 wird in Zelle B1 getippt 
// C1: =wenn(A1=B1;"gleich";"ungleich")
// JAVASCRIPT:
let a1 = 3 // Eine Variable (z.B. a1 oder zahl1) wird mit dem Wert 1 initialisiert
let b1 = 4 // Eine Variable (z.B. b1 oder zahl2) wird mit dem Wert 2 initialisiert
if(a1 == b1){
    console.log("a1 und b1 sind gleich.")
}else{
    console.log("a1 und b1 sind nicht gleich.")
}
console.log("Übung 2 - Prüfung auf Wert- und Typ-Gleichheit:")
let a2 = "1" // Die Variable a2 wird mit dem Text "1" initialisiert
let b2 = 1   // Die Variable b2 wird mit der Zahl  1  initialisiert
if(a2 === b2){
    console.log("a2 und b2 sind gleich.")   
}else{
    console.log("a2 und b2 sind nicht gleich.")
}
// Erkenntnisgewinn: Mit dem einfachen Gleichheitszeichen wird ein Wert von rechts nach 
// links zugewiesen. Mit dem doppelten Gleichheitszeichen werden zwei Werte auf 
// Wert-Gleichheit geprüft. Mit dem dreifachen Gleichheitszeichen werden zwei Werte
// auf Wert- und Typ-Gleichheit geprüft.
console.log("Übung 3 - Prüfung auf Wert- (und Typ-) Gleichheit:")
let a3 = 2
let b3 = 3
if(a3 == b3){
    console.log("Der Wert von a3 und b3 ist gleich")
}else{
    console.log("Der Wert von a3 und b3 ist nicht gleich")
}
console.log("Übung 4 - Prüfung auf Wert- (und Typ-) Gleichheit:")
let hauptstadt1 = "Bonn"
let hauptstadt2 = "Weimar"
if(hauptstadt1 == hauptstadt2){
    console.log("Bonn ist gleich Weimar")
}else{
    console.log("Bonn ist nicht Weimar")
}
console.log("Übung 5 - Prüfung auf größer")
let einwohnerBerlin = 3000000
let einwohnerKoeln = 1000000
if(einwohnerBerlin > einwohnerKoeln){
    console.log("Berlin ist größer")
}else{
    console.log("Köln ist größer")
}
console.log("Übung 6 - Prüfung auf kleiner")
let punkteBayern = 52
let punkteDortmund = 43
if (punkteBayern < punkteDortmund){
    console.log("Dortmund ist Meister")
}else{
    console.log("Bayern ist Meister")
}
console.log("Übung 6 - Prüfung des MwSt-Satzes")
let lebensmittel = true
if(lebensmittel){
    console.log("Mehrwertsteuersatz: 7%")
}else{
    console.log("Mehrwertsteuersatz: 19%")
}
// Erkenntnisgewinn: Wenn der Ausdruck (hier: lebensmittel) true oder false ist,
// ist kein Vergleichsoperator (== oder ===) notwendig.
console.log("Übung 7 - Die Prüfung ist immer true")
if(true){
    console.log("Diese Prüfung ist immer wahr.")
}
console.log("Übung 8 - Die Prüfung von Zahlen")
let a8 = 1
let b8 = 2
if(a8 - b8){
    console.log("Die Prüfung ist true")
}else{
    console.log("Die Prüfung ist false")
}
// Erkenntnisgewinn:
// Die Zahl 0 ist false
// Eine positive Zahl ist true
// Eine negative Zahl ist true
console.log("Übung 9 - Saldo")
let einzahlung = 1000
let auszahlung = 1000 
if(einzahlung-auszahlung){
    console.log("Der Saldo ist nicht null")
}else{
    console.log("Der Saldo ist null")
}
} 
  58  Uebungen/klasseUndObjekt.js 
console.log("Übungen zu Klasse und Objekt")
console.log("============================") 
// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// zu a) Das Objekt der realen Welt ist der Spieler. 
// zu b)
class Spieler{
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    }
}
// zu c)
// Es wird nun ein konkreter Spieler mit konkreten Eigenschaftswerten erzeugt.
// Dazu wird der konkrete Spieler deklariert (=bekanntgemacht): let spielerMueller
// In einem zweiten Schritt wird der konkrete Spieler instanziiert = new Spieler()
let spielerMueller = new Spieler()
// zu d)
// Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben:
spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB"
spielerMueller.Alter = 18
if(spielerMueller.Alter >= 18){
    spielerMueller.Volljaehrig = true
    console.log("Der Spieler " + spielerMueller.Name + " ist volljährig.")
}
console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler " + spielerMueller.Name + " hat die Nummer " + spielerMueller.Nummer + ".")
// Übung 2
// In einem Schulverwaltungsprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// zu a) Das "Zeugnis" ist das Objekt der realen Welt.
// zu b)
class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum
        this.Gesamtnote
        this.Fehlstunden
        this.Faecher
    }
}
// zu c)
let zeugnisPit = new Zeugnis()
let zeugnisMax = new Zeugnis()
// zu d)
zeugnisPit.SchuelerName = "Pit Kiff"
zeugnisPit.Fehlstunden = 100
zeugnisPit.Gesamtnote = 1
zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10
zeugnisMax.Gesamtnote = 2
if(zeugnisMax.Fehlstunden > zeugnisPit.Fehlstunden){
    console.log("Max Muster hat mehr Fehlstunden") 
}else{
    console.log("Pit Kiff hat mehr Fehlstunden")
}


// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// In einem Kiosk soll das Sortiment verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Die Objekte der realen Welt sind die Produkte

// zu b)
class Produkt{
    constructor(){
        this.BruttoPreis
        this.Bezeichnung
        this.MwStSatz
        this.Barcode
    }
}

// zu c)
// Deklaration und Instanziierung
let produkt1 = new Produkt()

// zu d)

produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 5901234123457
produkt1.BruttoPreis = 0.79 // Im Quellcode steht anstelle des Kommas ein Punkt
produkt1.MwStSatz = 19 // Prozent

console.log("Das Produkt " + produkt1.Bezeichnung + " hat den Bruttopreis " + produkt1.BruttoPreis + " €.")

produkt1.Nettopreis = produkt1.BruttoPreis / (100 + produkt1.MwStSatz) * 100

console.log("Nettopreis: " + produkt1.Nettopreis + " €.")

if(produkt1.BruttoPreis > 1){
    console.log("Achtung! Preis von " + produkt1.Bezeichnung + " muss gesenkt werden!")
}else{
    console.log("Preis von " + produkt1.Bezeichnung + " ist o.k.")
}

// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// e) Geben Sie ausgewählte Eigenschaften auf der console aus.

class Stand{
    constructor(){
        this.Namen
        this.Lage
        this.Oeffnungszeiten
        this.Personalanzahl
        this.Angebot
        this.Ausgaben
        this.Einnahmen
    }
}

let standCafeteria = new Stand

standCafeteria.Name = "Cafeteria"
standCafeteria.Lage = "Turnhalle"
standCafeteria.Oeffnungszeiten = "10 Uhr bis 18 Uhr"
standCafeteria.Personalanzahl = 3
standCafeteria.Angebot = "Kaffee und Kuchen"
standCafeteria.Ausgaben = 1500
standCafeteria.Einnahmen = 1000

if(standCafeteria.Einnahmen > standCafeteria.Ausgaben){
    console.log("Der Stand " + standCafeteria.Name + " macht Gewinn. ")
}else{
    console.log("Der Stand " + standCafeteria.Name + " macht keinen Gewinn")
}
