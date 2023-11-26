DROP TABLE IF EXISTS contact_informations;

CREATE TABLE contact_informations(
    id SERIAL PRIMARY KEY,
    info_text_de VARCHAR(4000) NOT NULL,
    info_text_en VARCHAR(4000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contact_informations (info_text_de, info_text_ens)
VALUES
(
    'Schaue dir meinen Code und meine Projekte auf',
    'Find my code and my latest projects on'
);