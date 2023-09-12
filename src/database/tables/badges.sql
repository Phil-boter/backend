DROP TABLE IF EXISTS badges;

CREATE TABLE badges(
    id SERIAL PRIMARY KEY,
    badge_id VARCHAR(255) NOT NULL,
    badge JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO badges (badge_id, badge)
VALUES
(
    'Social',
    jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary')
    )
),
(
    'El',
        jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary')
    )
),
(
    'Petition',
        jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'danger')
    )
),
(
    'Image',
        jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-vue', 'color', 'success')
    )
),
(
    'Alien',
        jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-firebase', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary')
    )
),
(
    'Survey',
        jsonb_build_array(
        jsonb_build_object('logo', 'logo-html5', 'color' , 'primary'),
        jsonb_build_object('logo', 'logo-css3', 'color', 'danger'),
        jsonb_build_object('logo', 'logo-javascript', 'color', 'warning'),
        jsonb_build_object('logo', 'logo-nodejs', 'color', 'success'),
        jsonb_build_object('logo', 'logo-react', 'color', 'secondary')
    )
);