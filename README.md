**Resume Parser and Document Understanding System (MERN Stack)**

This project is a powerful resume parser built on the MERN stack (MongoDB, Express.js, React, Node.js) that extracts and processes structured information from resumes in PDF format. The resume data is extracted directly from the PDF content and processed through AI models hosted on Hugging Face, enabling extraction of key data such as **work experience**, **education**, **skills**, **contact information**, and more.

### Key Features:
- **PDF Parsing**: Efficiently extracts structured text data from PDF resumes.
- **AI Model Integration**: Uses advanced AI models to process and extract meaningful insights from resumes, including work experience, education, skills, and personal information.
- **Data Storage**: Parses and stores resume data in MongoDB, offering easy access and manipulation.
- **React Frontend**: A user-friendly interface for uploading resumes and viewing parsed results.
- **Error Handling & Retry Logic**: Implements a robust error-handling mechanism, ensuring smooth operations even with API failures.

### Technologies Used:
- **Backend**: Node.js, Express.js, Multer for file uploads
- **Frontend**: React.js, Axios for API requests
- **Database**: MongoDB for storing parsed resume data
- **AI Models**: Hugging Face models for document-based question answering

This project offers an innovative solution to automate the extraction of valuable data from resumes, streamlining the hiring process for HR professionals and job applicants.

### Setup Instructions:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables for AI model API keys.
4. Start the application with `npm start` to run both frontend and backend.

### Contributing:
We welcome contributions to enhance the features, improve model accuracy, or add new functionalities. Please feel free to fork the repository, open issues, and submit pull requests.
