DROP TABLE IF EXISTS projects;

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    title_second VARCHAR(255) NOT NULL,
    description_de VARCHAR(2000) NOT NULL,
    description_en VARCHAR(2000) NOT NULL,
    technology_de VARCHAR(2000) NOT NULL,
    technology_en VARCHAR(2000) NOT NULL,
    main_image VARCHAR(255) NOT NULL,
    images TEXT[],
    link VARCHAR(255),
    host VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, title_second, description_de, description_en, technology_de, technology_en, main_image, images, link, host)
VALUES
('Social',
  'Network',
  'Ich habe dieses Projekt während meiner Teilnahme am Coding Bootcamp der Spiced Academy in Berlin entwickelt. Benutzer können sich anmelden, einloggen und abmelden. Mit AWS SES kann der Benutzer das Passwort zurücksetzen. Angemeldet kann der Nutzer mit Hilfe von AWS s3 ein Profilbild hochladen und das Profil bearbeiten. Es besteht auch die Möglichkeit, Wallposts zu schreiben und Bilder anzuhängen, die andere Nutzer lesen können, wenn sie das Profil aufrufen. Der Nutzer kann auch Freundschaftsanfragen stellen, diese annehmen oder ignorieren, bereits angenommene Anfragen ansehen und bestehende Freundschaften löschen. Es gibt auch eine eingebaute Suchfunktion, um nach neuen Freundschaften zu suchen.Mit Socket.io ist auch ein Echtzeit-Chat implementiert. Benutzer können auch private Nachrichten senden, wenn sie befreundet sind. Unittests wurden mit Jest.js durchgeführt. ',
  'I builded this project during my attendance to the Coding Bootcamp at Spiced Academy in Berlin. Users can sign up, sign in, logout. With AWS SES the user is able to reset the password. Signed-in the user is possible to upload a profile picture with the help of AWS s3 and edit the profile. There is also the possibility to write wallposts and attach pictures to them, other users can read them when they call up the profile. The user can also make friend-request, accept or ignore them, watch already accepted requests and delete existing friendships. The There is also a build in search function to search for new frienships. With socket.io there is also a real time chat implemented. Users can also send private messages, if they are friends. Tests are made with Jest.js.',
  'Meine Social Network App basiert im Frontend auf React.js. Für das State-Management kommt Redux zum Einsatz. Im Backend basiert die App auf Node.js/Express und für die Datenbank habe ich postgreSQL verwendet. Um die Echtzeit-Chat-Funktionalität zu implementieren, habe ich Socket.io verwendet. Außerdem habe ich den AWS Cloud Service genutzt, um zwei weitere Features zu realisieren. Zum einen die Möglichkeit, das User-Passwort zurückzusetzen, die auf AWS SES basiert. Und zum anderen den Bild-Upload für den Benutzer-Account, der auf AWS S3 basiert.Für das Unit-Testing im Frontend habe ich Jest.js verwendet.',
  'My social network app is based on React.js in the frontend. For state-management Redux comes in place. In the backend the app is based on Node.js/Express and for the database I used postgreSQL. To implement the real time chat functionalty I used socket.io. I also used AWS cloud service to realise two more features. On the one hand the possibilty to reset the user-password, which is based on AWS SES. And on the other hand the image upload for the user-account, which is based on AWS S3. For unit-testing in the frontend I used Jest.js.',
  '/assets/monkey1.png', 
  '{"/assets/monkey2.png" ,"/assets/monkey3.png" , "/assets/monkey4.png"}',
  'https://github.com/Phil-boter/social-network',
  ''
),
('El',
  'Jeffe',
  'Dieses Projekt ist eine Weiterentwicklung meines Abschlussprojektes, das ich während meiner Teilnahme am Coding Bootcamp der Spiced Academy in Berlin erstellt habe. Auf der Startseite kann der Benutzer entscheiden, ob er nach Einkaufslisten oder Restaurants suchen möchte. Es ist auch möglich, ein Benutzerkonto zu erstellen. Das Einrichten eines Benutzerkontos bietet die Möglichkeit, Einkaufslisten und Restaurants in einer Favoritenliste zu speichern. Nach dem Hinzufügen zu einer der Favoritenlisten kann der Benutzer auch Notizen zu seinen Favoriten hinzufügen und löschen. Eine Suchfunktion für bestimmte Restaurants oder Einkaufslisten innerhalb der Favoritenliste ist ebenfalls verfügbar. Am, Ende besteht die Möglichkeit sich ganz normal auszuloggen oder nach einer nochmaligen Bestätigung das Konto vollständig zu löschen. Für die Suchfunktionalität werden zwei verschiedene serverseitige API-Aufrufe getätigt. Die App wird nun von Redux verwaltet und verwendet Hooks anstelle von Class-Components. Um den Benutzer nach einem Seitenaktualisierung eingeloggt zu halten, habe ich localstorage verwendet. Die App ist für die mobile Nutzung optimiert.',
  'This project is a further development of my final project I builded during my attendance to the Coding Bootcamp at Spiced Academy in Berlin. At the homepage the user can decide to search for shoppinglists or restaurants. It is also possible to make an user account. Setting up an user the account offers the possibility to save shopping list and restaurants in a favourites list. After adding to one of the favourite lists, the user can also add and delete notes to his favourites. A search function for special restaurants or shopping lists inside the favourites is also available. Finally the user can decide to logout or to delete the account. Two different server side API calls are made for the search functionality. Now the app is managed by Redux and uses hooks instead of class-components. To keep the user logged in after a page refresh, I used localstorage. The app is optimized for mobile use.',
  'Um dieses Projekt zu realisieren, habe ich React.js als Grundbaustein im Frontend verwendet. Zur Verwaltung des "States" im Frontend kommt Redux zum Einsatz. Es wurden nur funktionale Komponenten mit Hooks verwendet. Im Backend basiert die App auf Node.js/Express die Funktion der Datenbank übernimmt postgreSQL.',
  'To realise this project I used React.js as basic building block. To manage the "state" in the frontend Redux comes in place. Only functional components with hooks were used. In the backend the app is based on Node.js/Express and for the database I used postgreSQL.:',
  '/assets/elheffe1.png', 
  '{"/assets/elheffe2.png", "/assets/elheffe3.png", "/assets/elheffe4.png"}',
  'https://eljeffe.herokuapp.com',
  'https://github.com/Phil-boter/react-recipeSearch'
),
('Petition',
  '',
  'Ich habe dieses Projekt während meiner Teilnahme am Coding Bootcamp der Spiced Academy in Berlin entwickelt. Benutzer können sich anmelden, einloggen, abmelden. Eine Unterschrift auf eine Leinwand zeichnen und bearbeiten, ihr Profil bearbeiten. Andere Benutzer sehen, die unterschrieben haben, und sie nach Stadt filtern.',
  'I builded this project during my attendance to the Coding Bootcamp at Spiced Academy in Berlin. Users can sign up, sign in, logout. Draw and edit a signature on a canvas, edit their profile. See other users who have signed and filtering them by city.',
  'Meine Petition-App basiert auf der Template-Engine Express-Handlebars im Frontend und Node.js/Express im Backend. Für die Speicherung der Daten wurde PostgreSQL verwendet. Um die Möglichkeit zum Unterschreiben der Petition zu realisieren, wurde Canvas in Kombination mit jQuery verwendet. Für die Überprüfung der Routing-Zulassung habe ich Jest zum Testen verwendet. Um sicherzustellen, dass der Benutzer nur dann bestimmte Routen besuchen kann, wenn er die Petition erfolgreich unterschrieben hat.',
  'My petition app is based on the templating engine Express-Handlebars as basic building block for the frontend and Node.js/Express for the backend. PostgreSQL was used for storing data. To realise the possibilty to sign the petition I used Canvas in combination with jQuery. For checking the routing permisson I used Jest for testing. To ensure that the user can only visit certain routes, if he/her has aigned the petition successfully.',
  '/assets/petition1.png', 
  '{"/assets/petition2.png","/assets/petition3.png", "/assets/petition4.png"}',
  'https://github.com/Phil-boter/petition',
  ''
),
(
  'Image',
  'Board',
  'Ich habe dieses Projekt während meiner Teilnahme am Coding Bootcamp der Spiced Academy in Berlin entwickelt. Benutzer können Bilder auf das Image-Board hochladen. Die Bilder werden bei AWS s3 gespeichert. Nach dem Hochladen ist es möglich, ein einzelnes Bild zu öffnen und Kommentare zu diesem Bild zu machen und vor- und zurück zum nächsten oder vorherigen Bild zu gehen.',
  'I builded this project during my attendance to the Coding Bootcamp at Spiced Academy in Berlin. Users can can upload images to the image-board. The images are stored with AWS s3. Once uploaded it is possible to open up a single picture and make comments to this picture and go for- and backwards to the next or previous picture.',
  'Mein Imageboard "Beautiful Bicycles" basiert auf Vue.js für das Frontend. Für die Bedienung der App kommt Node.js/Express zum Einsatz. PostgreSQL wurde verwendet, um die wichtigsten Daten zu speichern. Die Bilder werden nach dem Upload in der Cloud mit AWS S3 Cloud Service gespeichert.',
  'My imageboard "Beautiful Bicycles" is based on Vue.js for the frontend. For serving the app Node.js/Express comes in place. PostgreSQL was used to store the main data. The images are stored in the cloud with AWS S3 cloud service after upload.',
  '/assets/imageboard1.png',
  '{"/assets/imageboard2.png", "/assets/imageboar3.png", "/assets/imageboard4.png"}',
  'https://github.com/Phil-boter/imageboard',
  ''
),
(
  'Alien',
  'Defender',
  'AlienDefender ist mein erstes kleines Retro-Browserspiel. Um zu beginnen, bewege das kleine Raumschiff mit den Pfeiltasten deiner Tastatur zu dem kleinen Planeten auf der gegenüberliegenden Seite. Passt auf, dass du nicht die kreuzenden Meteore trefft! Wenn du den Planeten erreichst, bekommst du einen Siegpunkt und die Uhr wird auf zehn Sekunden zurückgesetzt. Nun erscheint der Planet erneut auf der gegenüberliegenden Seite und das Spiel geht weiter, bis die Zeit abgelaufen ist oder du einen Meteoriten triffst.',
  'AlienDefender is my first small, retro browser game. To start, move the small spaceship with arrow keys of your keyboard to the small planent at the opposite side. Be aware not to hit the crossing meteors! When you reach the planet you get one victorypoint and the clock is reset to ten seconds. Now the planet appeas once more at the other opposite side and the game goes on until time runs out or you hit a meteor.',
  'AlienDefender basiert auf React und Firebase. Das gesamte Backend für diese App ist Cloud-basiert und wird von Firebase gehostet. Zum Speichern der Highscores wird Firestore verwendet.',
  'AlienDefender is based on React and Firebase. The whole backend for this app is cloud-based and hosted by Firebase. To store the highscores Firestore is used.',
  '/assets/alien1.png',
  '{"/assets/alien2.png", "/assets/alien3.png", "/assets/alien4.png"}',
  'https://github.com/Phil-boter/AlienDefender',
  'https://alien-defender-89037.web.app'
),
(
  'Survey',
  'App',
  'Mit meiner Survey-App kannst du deine Fragen online mit anderen Personen oder Freunden teilen. Nachdem du deine Frage/n in einem Formularfeld eingegeben hast, kannst du diese mit einem Klick in die Zwischenablage speichern und per E-Mail etc. teilen. Es ist auch möglich, mehrere Fragen auf einmal zu stellen, und der Teilnehmer kann dann entscheiden, ob er alle oder nur einige der anderen Fragen beantworten möchte. Der Fragesteller kann dann die Antworten in der Zusammenfassung der gestellten Fragen sehen. ',
  'With my Survey app, you can share your questions online with other people or friends. After you have submitted your question with a form field, you can save it to the clipboard by clicking a button and share it via email etc. . It is also possible to ask several questions at once.The answerer can then decide to answer all or only some of the other questions. The questioner can then see the answers in the summary of the questions asked.',
  'Meine Umfrage-App basiert auf React mit Node/Express-Backend. Ich habe mich entschieden, PostgreSQL als Datenbank zu verwenden.',
  'My survey app is based on React with Node/Express backend. I decided to use PostgreSQL as database.',
  '/assets/survey1.png',
  '{"/assets/survey2.png","/assets/survey3.png","/assets/survey4.png"}',
  'https://github.com/Phil-boter/survey',
  ''
);