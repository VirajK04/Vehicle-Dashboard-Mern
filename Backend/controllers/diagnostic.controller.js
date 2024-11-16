import { Diagnostic } from "../models/diagnostic.model.js";

const postDiagnostic = async (req, res) => {
    try {
        const {name, speed, fuelLevel, engineTemperature} = req.body;

        let alert = [];

        if(speed > 100) alert.push("High Speed Alert");
        if(fuelLevel < 20) alert.push("Low Fuel Level Alert");
        if(engineTemperature > 100) alert.push("High Engine Temperature Alert");

        Diagnostic.create({
            name,
            alert,
            speed,
            fuelLevel,
            engineTemperature
        }).then(
            result => res.status(201).json({message : "Diagnostic created successfully",result})
        ).catch( error => {
            res.status(500).json({message : "Could not create Diagnostic", error});
        })
    } catch (error) {
        res.status(500).json({message : "Something went wrongc", error});
    }
}

const getAllDiagnostic = async (req, res) => {

    await Diagnostic.find()
    .then(
        result => res.status(200).json({message : "Diagnostics retrieved successfully", result})
    )
    .catch(
        err => res.status(500).json({message : "Could not get all Diagnostics", err})
    )
}

const getDiagnostic = async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: "ID is required in query params" });
    }

    await Diagnostic.findById(id)
    .then(
        result => res.status(200).json({message : "Diagnostics deleted successfully", result})
    ).catch(
        err => res.status(500).json({message : "Could not delete Diagnostic", err})
    )
}


const deleteDiagnostic = async (req, res) => {

    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: "ID is required in query params" });
    }

    await Diagnostic.findByIdAndDelete(id)
    .then(
        result => res.status(200).json({message : "Diagnostics deleted successfully", result})
    ).catch(
        err => res.status(500).json({message : "Could not delete Diagnostic", err})
    )
}

export { postDiagnostic, getAllDiagnostic, getDiagnostic, deleteDiagnostic }