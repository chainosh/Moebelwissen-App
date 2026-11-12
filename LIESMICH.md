# Möbelwissen – Web-App

Das ist eine reine statische Web-App. Sie enthält **keine Inhalte und keine Preise**. Das Wissen spielt jeder selbst als Datei in der App ein (`moebelwissen-vX-JJJJ-MM-TT.json`).

## Deployen (Vercel)
- Diesen Ordner als Projekt deployen. Es gibt keinen Build-Schritt.
  - Framework: „Other“
  - Build Command: leer
  - Output Directory: das Projektverzeichnis
- `vercel.json` sorgt für drei Dinge:
  - Die App-Dateien werden nicht veraltet zwischengespeichert.
  - Das Manifest wird richtig ausgeliefert.
  - Die Seite erscheint nicht in Suchmaschinen.

## Auf dem Gerät installieren
- **iPhone/iPad:** Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
- **Android:** Adresse in Chrome öffnen → Menü (⋮) → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
- Danach die App öffnen → „Wissensdatei einspielen“ → die erhaltene `.json`-Datei auswählen.

## App aktualisieren
Neue App-Dateien einfach erneut deployen. Die Geräte holen sich die neue Version beim nächsten Öffnen mit Internet. Das eingespielte Wissen bleibt dabei erhalten.
