import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name Field is mandatory"],
        trim: true,
        maxLength: [50, "Name cannot exceed 50 characters"]
    },
    contact: {
        phone: {
            type: String,
            required: [true, "Phone no is also mandatory"],
            maxLength: [10, "Phone cannot exceed 10 character"]
        },
        email: {
            type: String,
            required: [true, "Email is is also mandatory"],
            trim: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        address: {
            type: String,
            required: [true, "Address is mandatory"],
            trim: true,
        },
        linkedin: {
            type: String,
            trim: true,
        },
        portfolio: {
            type: String,
            trim: true,
        },
        github: {
            type: String,
            trim: true
        }
    },
    education: [{
        
        course: {
            type: String,
            required: [true, "Course is Mandatory"],
            trim: true,
        },
        fullMarks: {
            type: Number,
            required: [true, "Full Marks is Mandatory"],
            trim: true,
        },
        obtainedMarks: {
            type: Number,
            required: [true, "Obtained Marks is Mandatory"],
            trim: true,
            validate: {
                validator: function(value){
                    return value <= this.fullMarks;
                },
                message: "Obtained marks cannot be greater than full marks"
            }
        },
        university: {
            type: String,
            required: [true, "University/Board is Mandatory"],
            trim: true,
        },
        year: {
            type: Number,
            required: [true, "Year is Mandatory"],
            trim: true,
        },
    }],
    skills: {
        type: [String],
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message: "At least one skill is required"
        },
        required: [true, "Skills is required"]
    },
    objective:{
        type: String,
        trim: true,
        required: [true, "Career Objective is also required"]
    },
    project: [{
        title : { type: String, trim: true},
        description: {type: String, trim: true},
        link: {type: String, trim: true}
    }]

},{timestamps: true});

const Resume = mongoose.model("Resume", resumeSchema);

export {Resume};