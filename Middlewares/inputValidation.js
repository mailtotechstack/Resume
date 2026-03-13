export const ResumeValidation = (req, res, next)=>{
    const {contact, education, name, objective, skills, experience} = req.body;
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send("Empty form cannot be submitted");
    }
    else if(Object.keys(contact).length !== 0 && !education && !name && !objective && !skills && !experience){
        return res.status(400).send("You cannot missed the important fields");
    }
    next();
}