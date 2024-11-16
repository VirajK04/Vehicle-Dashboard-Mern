import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

const SearchForm = () => {
    const { control, handleSubmit } = useForm();
    const [searchResult, setSearchResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null); // To store delete message

    const onSubmit = async (data) => {
        setErrorMessage(null);
        setDeleteMessage(null); // Clear delete message before searching
        setSearchResult(null);

        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:8000/api/v1/diagnostic/single?id=${data.id}`,
            headers: {},
        };

        try {
            const response = await axios.request(config);
            setSearchResult(response.data.result);
            console.log("Search result:", response.data.result);
        } catch (error) {
            console.error("Error fetching diagnostic:", error.response?.data || error.message);
            setErrorMessage("Failed to fetch diagnostic. Please try again.");
        }
    };

    const handleDelete = async (data) => {
        setErrorMessage(null);
        setDeleteMessage(null); // Clear any previous delete messages

        const config = {
            method: "delete",
            url: `http://localhost:8000/api/v1/diagnostic?id=${data.id}`,
            headers: {},
        };

        try {
            const response = await axios.request(config);
            if (response.status === 200) {
                setDeleteMessage("Diagnostic deleted successfully!");
                setSearchResult(null);  // Clear the search result after deletion
            }
        } catch (error) {
            console.error("Error deleting diagnostic:", error.response?.data || error.message);
            setErrorMessage("Failed to delete diagnostic. Please try again.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "300px",
                margin: "auto",
            }}
        >
            {/* Search Field */}
            <Controller
                name="id"
                control={control}
                defaultValue=""
                rules={{ required: "ID is required" }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="Enter ID"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>

            {/* Delete Button */}
            <Button
                variant="contained"
                color="error"
                onClick={handleSubmit(handleDelete)} // Use handleSubmit to handle the delete form
                sx={{ marginTop: "20px" }}
            >
                Delete
            </Button>

            {/* Results Section */}
            {searchResult && (
                <Box mt={4}>
                    <Typography variant="h6">Search Results:</Typography>
                    <Typography variant="body1">
                        <strong>Name:</strong> {searchResult.name}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Speed:</strong> {searchResult.speed}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Fuel Level:</strong> {searchResult.fuelLevel}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Engine Temperature:</strong> {searchResult.engineTemperature}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Alert:</strong> {searchResult.alert}
                    </Typography>
                </Box>
            )}

            {/* Delete Success or Error Message */}
            {deleteMessage && (
                <Typography variant="body2" color="success.main" mt={2}>
                    {deleteMessage}
                </Typography>
            )}

            {/* Error Message */}
            {errorMessage && (
                <Typography variant="body2" color="error" mt={2}>
                    {errorMessage}
                </Typography>
            )}
        </Box>
    );
};

export default SearchForm;
