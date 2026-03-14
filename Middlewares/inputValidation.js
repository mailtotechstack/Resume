import Joi from "joi";
export const ResumeValidation = (req, res, next)=>{
    const schema = Joi.object({
        // 1. Basic Info
        name: Joi.string().min(3).max(30).required().messages({
            "string.empty":"Name is Required",
            "string.min": "Name must be at least 3 characters long"
        }),

        // 2. Contact Info (Nested Object)
        contact : Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
            address: Joi.string().min(10).max(40).required(),
            linkedin: Joi.string().optional(),
            github: Joi.string().optional(),
            portfolio: Joi.string().optional()
        }).required(),

        // 3. Education (Array of Objects with Reference Validation)
        education: Joi.array().items(Joi.object({
            course: Joi.string().min(2).required(),
            fullMarks: Joi.number().required(),
            obtainedMarks: Joi.number().max(Joi.ref('fullMarks')).required().messages({
                "number.max": "Obtained marks cannot be greater than full marks"
            }),
            university: Joi.string().required(),
            year: Joi.number().min(1900).max(2026).required()
        })).min(1).required(),

        // 4. Skills and Objective
        skills: Joi.array().items(Joi.string()).min(1).required(),
        objective: Joi.string().max(500).required(),

        // 5. Experience (Optional)
        experience: Joi.array().items(Joi.object()).optional()
    });
    const {error} = schema.validate(req.body, {abortEarly: false})
    if(error){
        const errorMessages =  error.details.map(err => err.message);
        return res.status(400).json({success: false, errors: errorMessages});
    }
    next();
}