DROP TABLE IF EXISTS contact_informations;

CREATE TABLE contact_informations(
    id SERIAL PRIMARY KEY,
    info_text_de VARCHAR(4000) NOT NULL,
    info_text_en VARCHAR(4000) NOT NULL,
    badges JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contact_informations (info_text_de, info_text_en, badges)
VALUES
(
    'Schaue dir meinen Code und meine Projekte auf',
    '>Find my code and my latest projects on',
    jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary'),
        jsonb_build_object('logo', 'logo-firebase', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-angular', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-github', 'color', 'dark')
    )
);