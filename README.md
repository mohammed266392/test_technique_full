# test_technique_full

Se connecter au server PostGres dans le terminal en une seule commande
sudo -i -u postgres psql

va exécuter le logiciel psql en mode super-utilisateur directement.

Créer un utilisateur
CREATE ROLE nomDuLutilisateur;

ou, avec un peu plus de détails :

CREATE ROLE nomDuLutilisateur WITH <une liste de droits>;

Quelques droits possibles
LOGIN : donne le droit à l’utilisateur de se connecter
PASSWORD 'leMotDePasse' : donne un mot de passe à l’utilisateur.
