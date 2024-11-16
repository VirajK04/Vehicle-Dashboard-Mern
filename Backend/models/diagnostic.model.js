import mongoose from "mongoose";

const diagnosticSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        alert:{
            type: Array,
            
        },
        speed:{
            type: Number,
            required: true
        },
        fuelLevel:{
            type: Number,
            required: true
        },
        engineTemperature:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Diagnostic = mongoose.model("Diagnostic", diagnosticSchema);