const Location = require("../models/locationModel");

const locationController = {
  updateLocation: async (req, res) => {
    const { latitude, longitude } = req.body;

    try {
      // Clear previous location data
      await Location.deleteMany({});

      // Save the new location data to the database (MongoDB in this example)
      const locationRecord = new Location({ latitude, longitude });
      await locationRecord.save();

      res.status(200).json({ message: "Location updated successfully" });
    } catch (error) {
      console.error("Error updating location:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  // New function to retrieve location data
  getLocationData: async (req, res) => {
    try {
      const locationData = await Location.findOne(); // Retrieve the most recent location data

      if (locationData) {
        const { latitude, longitude } = locationData;
        res.status(200).json({ latitude, longitude });
      } else {
        res.status(404).json({ message: "Location data not found" });
      }
    } catch (error) {
      console.error("Error getting location data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = locationController;
