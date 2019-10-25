## Project-3 -  Gruppe 13
## Vår løsning
Vi har valgt å lage en web applikasjon hvor det er mulig å søke på ulike filmer, og få informasjon om disse. 
Det skal også være mulig å gi en rating på hver film. Brukeren har mulighet til å sortere filmer på år og tittel, og filtrere på sjangere.

## React-redux
Vi har valgt å bruke react Redux fremfor Mobux, da redux er bedre dokumentert, og dermed er lettere å sette seg inn i. 
Redux er et verktøy for å håndtere  states. Redux lagrer alle tilstandene globalt og i en store. 

BILDE INN HER

Vi har alle reducerene våre i mappen reducers, som blir satt sammen i index.js med combineReducers også i mappen. 
I index.js i actions mappen blir alle funksjonene opprettet. I src/index.js oppretter vi en store ved createStore, 
i denne har vi lagt inn redux devtools extension som har vært et fantastisk verktøy og hjulpet oss masse. 
Vi har brukt mapStateToProps og mapDispatchToProps for å dispatche og hente ut tilstander til/fra store. 

## MongoDB
Databasen vi har valgt å bruke i dette prosjektet er mongoDB. MongoDB er et NoSQL-databaseprogram, og er godt dokumentert, 
som gjør det lett for oss som utviklere å bruke den.  Vi har opprettet en moviedb, som inneholder alle filmene, 
brukerne kan søke på. Oppsettet på hver film:

BILDE INN HER

## REST Api
# express & mongoose
Vi bruker express, som er et javascript rammeverk for node.js. Express “minimal & flexible” og gjør det lett og raskt å lage et robust API. 
Applikasjonen vår kjører på port 4000 og tillater requests fra alle. Ikke så bra sikkerhetsmessig, men var ikke et krav i oppgaven. 
Til MongoDB har vi brukt mongoose, som er et modeleringsverktøy designet for å jobbe i et asynkront miljø. 
Vi har blant annet brukt det til å lage ProduktSchema’et vårt: movies og til Paginate for sortering og sidevisning. 


# Pagination & sortering/filtrering
For sortering og sidevisning, har vi brukt en pagination plugin for mongoose: mongoose-paginate. Link til denne plugin’en finner du under kilder.


## Testing
# Cypress

Vi benytter oss av cypress for automatisert end-to-end testing av prosjektet.
For å kjøre testene: npm cypress run(?)

# Jest
Vi benytter oss av jest for å enhetsteste prosjektet vårt. 
 For å kjøre testene skriver man npm test i terminalen. 


## Kilder

*  [Youtube serie om REST Api (video 1-6):](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
*  [Mongoose paginate:](https://www.npmjs.com/package/mongoose-paginate)
*  [Testet med omdbapi før vi hadde serveren oppe](http://www.omdbapi.com/)
*  [Guide til backend](https://www.robinwieruch.de/minimal-node-js-babel-setup?fbclid=IwAR3LhI0rajfUEFNTLRUmvGsZmTpbZE5WOY4_4QjLKist7L1hG2Nassdnrqo)
*  [Guide for end-to-end testing med cypress](https://www.robinwieruch.de/react-testing-cypress?fbclid=IwAR0mR3f2WNR2hH0IStmhCVbxEbwKm66QOU1NY6HZbbLkb2FNA_WqRBuzzIE)


