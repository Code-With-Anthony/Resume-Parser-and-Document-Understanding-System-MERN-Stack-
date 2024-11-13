import multer from "multer";
const upload = multer({ dest: "uploads/" });

export const pdfDetails = (req, res) => {
  const file = req.body;
  console.log("Received data", file);

  try {
    console.log("Backend Received the file: ", file);
    res.send({ file });
  } catch (error) {
    console.error("Error Occured While Parsing PDF", error);
    res.status(500).send("Error Occured While Parsing PDF");
  }
};
