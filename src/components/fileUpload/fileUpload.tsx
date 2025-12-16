
import { useState } from 'react';
import CustomButton from '@/components/button/button';
import styles from './fileUpload.module.css';

interface FileUploadProps {
  label?: string;
  accept?: string;
  onFileUploaded?: (fileLink: string) => void;
  error?: string;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label = "Upload File",
  accept = "application/pdf",
  onFileUploaded,
  error,
  required = false
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [fileName, setFileName] = useState('');
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
    setUploadError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError('Please select a file first');
      return;
    }

    setUploading(true);
    setUploadError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Call the callback with the file link
      if (onFileUploaded) {
        setIsUploaded(true);
        onFileUploaded(data.webViewLink);
      }

      setUploadError('');
    } catch (err: any) {
      console.error(err);
      setUploadError('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.fileUploadContainer}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <div className={styles.uploadSection}>
        <div className={styles.fileInputWrapper}>
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className={styles.fileInput}
            id="file-upload"
          />
          <label htmlFor="file-upload" className={styles.fileInputLabel}>
            <svg 
              className={styles.uploadIcon} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
              />
            </svg>
            <span className={styles.fileInputText}>
              {fileName || 'Choose a file'}
            </span>
          </label>
        </div>

        <div className={styles.buttonWrapper}>
          <CustomButton
            name={uploading ? 'Uploading...' : 'Upload'}
            onclick={handleUpload}
            disabled={uploading || !file}
          />
        </div>
      </div>

      {(uploadError || error) && (
        <span className={styles.errorMessage}>{uploadError || error}</span>
      )}

      {!uploading && file && !uploadError && !error && !isUploaded && (
        <p className={styles.successMessage}>
          File ready to upload: {fileName}
        </p>
      )}

      {!uploading && file && !uploadError && !error && isUploaded && (
        <p className={styles.successMessage}>
          File Uploaded successfully, You can submit the form now.
        </p>
      )}
    </div>
  );
};

export default FileUpload;