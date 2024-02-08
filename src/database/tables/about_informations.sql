DROP TABLE IF EXISTS about_informations;

CREATE TABLE about_informations(
    id SERIAL PRIMARY KEY,
    info_text_de TEXT NOT NULL,
    info_text_en TEXT NOT NULL,
    badges JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO about_informations (info_text_de, info_text_en, badges)
VALUES
(
            '<p>
                                Ich bin ein Junior Full Stack Developer mit
                                einem Hintergrund in der Lebensmittelindustrie
                                und im Automobil-Service. Meine berufliche
                                Laufbahn begann ich mit einer Ausbildung zum
                                Brauer und Mälzer. Nachdem ich die Ausbildung
                                als Ausbildungsbester Niederbayern abschlossen
                                hatte, begann ich an der Technischen Universität
                                Berlin meine Ausbildung zum Diplom Braumeister,
                                die ich 2008 erfolgreich abschloss.
                                <br />
                                <br />
                                Danach war ich bei der ARWE Group, dem bis dahin
                                größten europäischen Unternehmen im
                                Automobil-Service, als Teamleiter und später als
                                Qualitätsmanager tätig. <br />
                                Als der Konzern während der Corona-Krise in die
                                Insolvenz ging, konnte ich nun meinen lang
                                gehegten Wunsch nach einer Neuorientierung
                                konsequent umsetzen. Um meinen lang gehegten
                                Wunsch zu verwirklichen, hatte ich bereits bei
                                CodeCademy.com erste Erfahrungen mit dem Coding
                                gesammelt und war mir sicher, dass das Coding
                                meine Zukunft sein würde. Als mir die Chance
                                geboten wurde, an einem Bootcamp der SPICED
                                Academy teilzunehmen, um ein Full Stack
                                Developer zu werden, habe ich sie ergriffen.
                                <br />
                                <br />
                                In diesem 12-wöchigen Intensivkurs tauchte ich
                                in die Tiefen von JavaScript ein. An der SPICED
                                Academy habe ich meine ersten
                                Full-Stack-Webanwendungen entwickelt, wobei ich
                                APIs von Drittanbietern, Frontend-Frameworks wie
                                React.js und Vue.js und Backend-Anwendungen wie
                                Express verwendet habe. Nach meinem Abschluss an
                                der Spiced Academy habe ich den
                                Webentwicklungs-Karrierepfad bei CodeCademy
                                absolviert. Da ich mich persönlich
                                weiterentwickeln möchte und die Entwicklung für
                                mobile Geräte immer wichtiger wird, habe ich
                                begonnen, meine ersten Apps mit React-Native und
                                Google Firebase zu entwickeln. Schauen Sie sich
                                also gerne einen Teil meines Codes auf
								</p>
	  							<br />			
                                <button #button
									style="color: white;  font-size: 1.4rem; background: black; border-radius: 8px; height: 40px; width: auto; padding: 7px; text-align: center;"
									type="button">
                                     Github
                                              
                                </button>.
	   							<br />
								<p> 
                                Derzeit arbeite ich als Software-Entwickler bei Accenture Industry X an einem Qualitätssicherungs-Tool für die Automobilindustrie. 
                                Hierbei umfasst mein Tätigkeitsgebiet die Weiterentwicklung und Wartung des Frontends, 
                                aber auch das Bearbeiten von Incidents im DevOps-Umfeld. 
                                CI/CD, Releasemanagement und Backend-Entwicklung zählen ebenso zu meinen Tätigkeiten.
                            	</p>',
    '                         <p>
                                I am a junior full stack developer with a
                                background in the food industry and automotive
                                service. I started my professional career with
                                an apprenticeship as a brewer and maltster.
                                After finishing the apprenticeship as the best
                                apprentice in Lower Bavaria, I started my
                                education at the Technical University of Berlin
                                to obtain a diploma as a master brewer, which I
                                successfully completed in 2008
                                <br />
                                <br />
                                After that I worked for the ARWE Group, until
                                then europes largest company in automotive
                                service, as team leader and later on as quality
                                manager.
                                <br />
                                When the group went bankrupt during the Corona
                                crisis, I was now able to consistently realise
                                my long-held wish for a reorientation. To
                                realise my long-cherished wish I had already
                                gained my first experience of coding at
                                CodeCademy.com and was sure that coding would be
                                my future. <br />
                                When I was offered the chance to attend a
                                bootcamp at Spiced Academy to become a full
                                stack web developer, I took it.
                                <br />
                                <br />
                                In this intensive 12 week course I dived into
                                the depths of JavaScript. At Spiced Academy I
                                built my first full stack web applications using
                                third party APIs, frontend frameworks like
                                React.js and Vue.js and backend like Express.
                                After graduating from the Spiced Academy, I
                                completed the web development career path at
                                CodeCademy. <br />
                                Since I personally want to develop myself
                                further and development for mobile devices is
                                becoming more and more important, I started
                                developing my first apps with react-native and
                                Google Firebase. So feel free to have a look at
                                some of my code on
       								</p>
	  							<br />			
                                <button #button
									style"color: white;  font-size: 1.4rem; background: black; border-radius: 8px; height: 40px; width: auto; padding: 7px; text-align: center;"
									type="button">
                                     Github
                                              
                                </button>.
	   							<br />
								<p> 
                                I am currently working as a software developer at Accenture Industry X on a quality assurance tool for the automotive industry. 
                                In this context, my field of activity includes the further development and maintenance of the frontend, 
                                but also the handling of incidents in a DevOps environment. 
                                CI/CD, release management and backend development are also part of my job.
                            </p>
                            ',
    jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary', 'label', 'HTML5'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger', 'label', 'CSS3'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning', 'label', 'JavaScript'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success', 'label', 'NodeJS'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary', 'label', 'ReactJS'),
        jsonb_build_object('logo', 'logo-firebase', 'color', 'warning', 'label', 'Google Firebase'),
        jsonb_build_object('logo', 'logo-angular', 'color', 'danger', 'label', 'Angular'),
        jsonb_build_object('logo', 'logo-github', 'color', 'dark', 'label', 'Github')
    )
);