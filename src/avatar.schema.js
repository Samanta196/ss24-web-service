import Joi from 'joi'
export default Joi.object({

    id: Joi.any(),

    createdAt: Joi.any(),

    avatarName: Joi
        .string()
        .max(20)
        .required(),

    childAge: Joi.number().integer().min(0).max(100),

    skinColor: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),

    hairstyle: Joi.string()
        .valid(
            'short',
            'bald',
            'short-curly',
            'short-straight',
            'medium-curly',
            'medium-straight',
            'long-curly',
            'long-straight',
            'dread-locks')
        .default('medium-straight'),

    headShape: Joi.string()
        .valid(
            'oval',
            'heart',
            'round',
            'long')
        .default('oval'),

    upperClothing: Joi.string()
    .valid( 'hoodie',
        'jacket',
        'tshirt',
        'dress')
    .default('tshirt'),

    lowerClothing: Joi
        .alternatives()
            .conditional('upperClothing', {
                is:'dress',
            then: Joi.forbidden(),
            otherwise: Joi
                .string()
                .valid('shorts',
                    'pants',
                    'skirt')
                .default('pants'), }),
})


