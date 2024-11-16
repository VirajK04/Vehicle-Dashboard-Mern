import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const DiagnosticFields = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/diagnostic",
                data,
                { headers: { "Content-Type": "application/json" } }
            );
            alert("Diagnostic created successfully!");
        } catch (error) {
            console.error("Error creating diagnostic:", error.response?.data || error.message);
            alert("Failed to create diagnostic!");
        }
    };

    return (
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmit)} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto' }}
        >
            {/* Name */}
            <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="Name"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                    />
                )}
            />

            {/* Speed */}
            <Controller
                name="speed"
                control={control}
                defaultValue=""
                rules={{
                    required: "Speed is required",
                    valueAsNumber: true,
                    min: { value: 0, message: "Speed must be a positive number" }
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="Speed"
                        type="number"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                    />
                )}
            />

            {/* Fuel Level */}
            <Controller
                name="fuelLevel"
                control={control}
                defaultValue=""
                rules={{
                    required: "Fuel Level is required",
                    valueAsNumber: true,
                    min: { value: 0, message: "Fuel Level must be a positive number" },
                    max: { value: 100, message: "Fuel Level cannot exceed 100%" }
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="Fuel Level"
                        type="number"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                    />
                )}
            />

            {/* Engine Temperature */}
            <Controller
                name="engineTemperature"
                control={control}
                defaultValue=""
                rules={{
                    required: "Engine Temperature is required",
                    valueAsNumber: true,
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="Engine Temperature"
                        type="number"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default DiagnosticFields;
