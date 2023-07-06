DROP TABLE IF EXISTS badges;

CREATE TABLE badges(
    id SERIAL PRIMARY KEY,
    badge_id VARCHAR(255) NOT NULL,
    badge TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO badges (badge_id, badge)
VALUES
(
    'Social',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"node/express", "logo-nodejs"}, {"react", "logo-react"}}'
),
(
    'El',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"node/express", "logo-nodejs"}, {"react", "logo-react"}}'
),
(
    'Petition',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"node/express", "logo-nodejs"}, {"handlebars", "logo-nodejs"}}'
),
(
    'Image',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"node/express", "logo-nodejs"}, {"vue", "logo-vue"}}'
),
(
    'Alien',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"furebase", "logo-firebase"}, {"react", "logo-react"}}'
),
(
    'Survey',
    '{{"html5", "logo-html5"}, {"css3", "logo-css3"}, {"javascript", "logo-javascript"}, {"node/express", "logo-nodejs"}, {"react", "logo-react"}}'
);