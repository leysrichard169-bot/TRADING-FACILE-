# TRADING-FACILE-

Site vitrine en français pour les débutants en trading.

## Je ne vois pas l'aperçu : quoi faire ?

Si le fichier n'affiche rien, lance le site avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvre ce lien dans ton navigateur :

- http://127.0.0.1:8000

## Bugs corrigés

- Calcul du risque formaté correctement en français (`10,00 €`).
- Validation renforcée sur le pourcentage (0 à 100).
- Calcul déclenchable avec la touche `Entrée` dans les champs.
- Meilleure accessibilité clavier (focus visible).
- Navigation plus robuste sur mobile.

## Lancer en local

### Option 1 (rapide)
Ouvre simplement `index.html` dans ton navigateur.

### Option 2 (recommandée)
```bash
python3 -m http.server 8000
```
Puis ouvre : `http://127.0.0.1:8000`
