const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage,serverAntwort, next) => {             
    serverAntwort.render('index.ejs', {})          
})

// Wenn die login-Seite im Browser aufgegrufen wird,

meineApp.get('/login',(browserAnfrage,serverAntwort, next) => {        
    
    // ... dann wird die login.ejs vom Sever gerendert an den
    // Browser zurückgegeben:
    
    serverAntwort.render('login.ejs', {})          
})

// Die meineApp.post (´login´) wird ausgeführt,sobald der Button
// auf den Login-Formular gedrückt wird 
    serverAntwort.render('index.ejs', {})          
})
// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte
class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
    }
}
// Von der Kunden-Klasse wird eine konkrte Instanz
// gebildet. 
let kunde = new Kunde()
// Die konkrete Instanz bekommt Eigenschaftswerte
// zugewiesen
kunde.IdKunde = 150000
kunde.Nachname = "Müller"
kunde.Vorname = "Pit"
kunde.Geburtsdatum = "23.10.2000"
kunde.Mail = "mueller@web.de"
kunde.Kennwort = "123"
const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})
meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})
meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    if(idKunde == kunde.IdKunde){
    // Die Identität des Kunden wird überprüft.

    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.

        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {})
    }
})
// Wenn die login-Seite im Browser aufgerufen wird, ...
meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              
    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:
    serverAntwort.render('login.ejs', {})          
})
// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.
meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})
// require('./Uebungen/ifUndElse.js')
require('./Uebungen/klasseUndObjekt.js')