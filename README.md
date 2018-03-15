# legi-api

API http pour interroger les textes issus de la base LEGI.

Le format par défaut est le JSON, avec un structure d'arbre [unist](https://github.com/syntax-tree/unist)

## Usage

 - `/texte/[ID]` : récupérer un texte
    - `?date=2010-01-01` : état du texte pour une date donnée
    - `?format=json|markdown|html` : récupérer dans le format donné

## Exemple

 - `/texte/LEGITEXT000006069414` : code de la propriété intellectuelle
 - `/texte/LEGITEXT000006069414?date=2016-01-01` : code de la propriété intellectuelle au 1/1/2016
 - `/texte/LEGITEXT000006069414?date=2016-01-01&format=html` : code de la propriété intellectuelle au 1/1/2016 en HTML
 - `/texte/JORFTEXT000000465978` : texte du journal officiel
 - `/texte/LEGISCTA000006132321` : une section du code du travail


## Related
 - https://github.com/revolunet/legi.js
 - https://github.com/Legilibre/legi.py