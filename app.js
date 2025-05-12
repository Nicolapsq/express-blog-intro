const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// importazione dell' array
// const {posts} = require("/array.js")

// creazione di un array di oggetti
const posts = [
    {
        titolo: "I benefici della meditazione quotidiana",
        contenuto: "Praticare la meditazione ogni giorno può aiutare a ridurre lo stress, migliorare la concentrazione e aumentare il benessere generale. Bastano pochi minuti per iniziare a notare i benefici.",
        img: "/images/ciambellone.jpeg",
        tags: ["meditazione", "benessere", "mindfulness", "salute mentale", "routine"]
    },
    {
        titolo: "5 libri che ti cambieranno la vita",
        contenuto: "Alcuni libri riescono davvero a lasciarti qualcosa dentro. Ecco una selezione di 5 titoli che ti faranno riflettere e, forse, vedere il mondo con occhi diversi.",
        img: "/images/cracker_barbabietola.jpeg",
        tags: ["libri", "crescita personale", "lettura", "ispirazione"]
    },
    {
        titolo: "Ricetta facile: pasta al pesto fatto in casa",
        contenuto: "Scopri come preparare un delizioso pesto fresco con ingredienti semplici e genuini. Una ricetta veloce che conquisterà tutti a tavola.",
        img: "/images/pane_fritto_dolce.jpeg",
        tags: ["ricette", "cucina italiana", "pesto", "facile", "vegetariano"]
    },
    {
        titolo: "Come organizzare una giornata produttiva",
        contenuto: "La produttività non è questione di lavorare di più, ma di lavorare meglio. Ecco alcuni consigli per gestire il tuo tempo in modo efficace.",
        img: "/images/pasta_barbabietola.jpeg",
        tags: ["produttività", "time management", "consigli", "lavoro", "organizzazione"]
    },
    {
        titolo: "Viaggio in Portogallo: cosa vedere a Lisbona",
        contenuto: "Colori, storia e musica: Lisbona è una città che sa sorprendere. Ti accompagno in un itinerario tra i suoi quartieri più affascinanti.",
        img: "/images/torta_paesana.jpeg",
        tags: ["viaggi", "Portogallo", "Lisbona", "turismo", "consigli di viaggio"]
    }
];

// rotta / (root)
app.get("/", (req, res) => {
    console.log(`richiesta sulla rotta sorgente "/"`);
    res.send("Server del mio blog");
});

// rotta /bacheca
app.get("/bacheca", (req, res) => {
    res.json({posts});
});

// mandiamo in ascolto il server:
app.listen(port, () => {
    console.log("Server in ascolto su http://localhost:" + port);
});