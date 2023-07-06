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
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"node/express", "logo-nodejs","success"}, {"react", "logo-react", "secondary"}}'
),
(
    'El',
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"node/express", "logo-nodejs", "success"}, {"react", "logo-react", "secondary"}}'
),
(
    'Petition',
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"node/express", "logo-nodejs", "success"}, {"handlebars", "logo-nodejs", "danger"}}'
),
(
    'Image',
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"node/express", "logo-nodejs", "success"}, {"vue", "logo-vue", "success"}}'
),
(
    'Alien',
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"furebase", "logo-firebase", "warning"}, {"react", "logo-react", "secondary"}}'
),
(
    'Survey',
    '{{"html5", "logo-html5", "primary"}, {"css3", "logo-css3", "danger"}, {"javascript", "logo-javascript", "warning"}, {"node/express", "logo-nodejs", "success"}, {"react", "logo-react", "secondary"}}'
);