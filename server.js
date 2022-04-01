// Programme verarbeiten oft Objekte der realen Welt. Objekte haben 
// Eigenschaften. In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte.

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Rufnummer
    }
}

// Von der Kunden-Klasse wird eine konkrte Instanz gebildet. 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 150000
kunde.Nachname = "Müller"
kunde.Vorname = "Pit"
kunde.Geburtsdatum = "23.10.2000"
kunde.Mail = "mueller@web.de"
kunde.Kennwort = "123"
kunde.Rufnummer = "01766687456"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/' ...) wird abgearbeitet, wenn
// der Kunde die Indexseite (localhost:3000 bzw. 
// n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser
    // zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }                 
})

// Die Methode meineApp.post('/login' ...) wird abgearbeitet, sobald
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
    // an die Konstanten namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    // Die Identität des Kunden wird überprüft.
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
    
        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulationen geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.
        
        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    // Der Cookie wird gelöscht.

    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben Sie die Zugangsdaten ein."
    })          
})

// Wenn die about-Seite angesurft wird, wird die about-Seite 
// Zum Browser zurückgegeben 

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => { 
    
    // Wenn der Anmelde-Cookie gesetzt ist, wird der Nutzer zur
    // About-Seite gelenkt.
        if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('index.ejs',{})
    }else{

    }                       
})

// require('./Uebungen/ifUndElse.js')
// require('./Uebungen/klasseUndObjekt.js')

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => { 
    
    let erfolgsmeldung=""

    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname, 
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Rufnummer: kunde.Rufnummer,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })          
})

// Sobald der Speichern-Button auf der Profil-Seite gedrückt wird, 
// wird die meineApp.post(`profil´...) abgearbeitet 

meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {              
     
    let erfolgsmeldung=""

        // Der Wert der Eigenschaften von Mail im Browser wird
        // zugewiesen (=) an die Eigenschaft Mail des Objekts kunde 

        if(kunde.Mail != browserAnfrage.body.Mail){

            // Wenn der Wet Ein


            erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich"
            kunde.Mail = browserAnfrage.body.Mail
            console.log(erfolgsmeldung)
    
        }

        if(kunde.Kennwort != browserAnfrage.body.Mail){

            // Wenn der Wet Ein


            erfolgsmeldung = erfolgsmeldung + "Änderung des Kennworts erfolgreich"
            kunde.Kennwort = browserAnfrage.body.Kennwort
            console.log(erfolgsmeldung)
    

        }

        if(kunde.Rufnummer != browserAnfrage.body.Rufnummer){

            // Wenn der Wet Ein


            erfolgsmeldung = erfolgsmeldung + "Änderung der Rufnummer erfolgreich"
            kunde.Rufnummer = browserAnfrage.body.Rufnummer
            console.log(erfolgsmeldung)
    

        }
    
        const kennwort = browserAnfrage.body.Kennwort
        const Mail = browserAnfrage.body.mail
        const Rufnummer = browserAnfrage.body.Rufnummer

        
        console.log("Profil gespeichert.")    
    
        serverAntwort.render('profil.ejs', {
            Vorname: kunde.Vorname, 
            Nachname: kunde.Nachname,
            Mail: kunde.Mail,
            Rufnummer: kunde.Rufnummer,
            Kennwort: kunde.Kennwort,
            Erfolgsmeldung: erfolgsmeldung
        })     
    })
    