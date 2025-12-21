"use client";
import { useState } from "react";
import Header from "@/components/header/header";
import CustomButton from "@/components/button/button";
import TextField from "@/components/textField/textField";
import styles from "./page.module.css";
import { submitToGoogleSheets } from "@/utils/googlesheetService";
import FileUpload from "@/components/fileUpload/fileUpload";
import { useRouter } from "next/navigation";
import { PassThrough } from "stream";

interface Member {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  email: string;
  leaderName: string;
  
  projectTitle: string;
  projectDocument: string;
}

interface Errors {
  [key: string]: string;
}

function Registration() {
  const [formData, setFormData] = useState<FormData>({
    leaderName: "",
    email: "",
    projectTitle: "",
    projectDocument: ""
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [viewForm, setViewForm] = useState(false);
  const [passwordDisabled, setPasswordDisabled] = useState(false);
  const router = useRouter();
  const handlePasswordSubmit = async () => {
    setPasswordDisabled(true);
    setPasswordError("");
    const correctPassword = "Test1234";
    const testValue = "12345";

  // Call YOUR Next.js API, not the Google Script directly
  const response = await fetch('/api/checkPassword', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ testval: password }),
  });

  const data = await response.json();

  if (data.exists) {
    setViewForm(true);
    setPasswordError("");
    console.log("Value exists in the Google Sheet!");
  } else {
    setPasswordError("Incorrect password. Please try again.");
    console.log("Value is available.");
  }
    setPasswordDisabled(false);
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const validatePhone = (phone: string): boolean => {
  //   const phoneRegex = /^[\d\s\-+()]{10,}$/;
  //   return phoneRegex.test(phone);
  // };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };



  // const handleMemberChange = (index: number, field: keyof Member, value: string) => {
  //   const newMembers = [...formData.members];
  //   newMembers[index][field] = value;
  //   setFormData(prev => ({ ...prev, members: newMembers }));
    
  //   const errorKey = `member${index}_${field}`;
  //   if (errors[errorKey]) {
  //     setErrors(prev => ({ ...prev, [errorKey]: "" }));
  //   }
  // };

  // Callback function for the FileUpload component
  const handleFileUploaded = (fileLink: string) => {
    handleInputChange("projectDocument", fileLink);
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // Validate main user fields
    if (!formData.leaderName.trim()) {
      newErrors.leaderName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!validatePhone(formData.phone)) {
    //   newErrors.phone = "Please enter a valid phone number";
    // }
    if (!formData.projectTitle.trim()) {
      newErrors.projectTitle = "Project title is required";
    }
    if (!formData.projectDocument.trim()) {
      newErrors.projectDocument = "Project document is required";
    }

    // Validate member fields (only if any field is filled)
  //   formData.members.forEach((member, index) => {
  //     const hasAnyField = member.name || member.email || member.phone;
      
  //     if (hasAnyField) {
  //       if (member.email && !validateEmail(member.email)) {
  //         newErrors[`member${index}_email`] = "Please enter a valid email address";
  //       }
  //       if (member.phone && !validatePhone(member.phone)) {
  //         newErrors[`member${index}_phone`] = "Please enter a valid phone number";
  //       }
  //     }
  //   }
  // );

    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setSubmitMessage("Please Enter the missing data in the form.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Format members data as comma-separated strings
      // const membersData = formData.members
      //   .filter(m => m.name || m.email || m.phone)
      //   .map(m => `${m.name}|${m.email}|${m.phone}`)
      //   .join(",");

      const dataToSubmit = {
        leaderName: formData.leaderName,
        email: formData.email,
        projectTitle: formData.projectTitle,
        projectDocument: formData.projectDocument,
        timestamp: new Date().toISOString()
      };

      const response = await submitToGoogleSheets(dataToSubmit);
      if(!response)
        setSubmitMessage("Failed to submit registration. Please try again.");
      else {
        setSubmitMessage("Registration submitted successfully!");
        setFormData({
          leaderName: "",
          email: "",
          projectTitle: "",
          projectDocument: ""
        });
        setErrors({});
      }
      
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };






return (
  <div>
    <Header />
    {!viewForm ? (
      <main className={styles.page}>
        <div className={styles.successContainer}>
          <TextField 
            label="Password"
            type="password"
            onChange={(value: string) => setPassword(value)}
            error={passwordError}
          />
          <CustomButton name={passwordDisabled? "Submitting..." : "Submit"} onclick={handlePasswordSubmit} disabled={passwordDisabled} />
        </div>
      </main>
    ) : (
      <main className={styles.page}>
      
        {submitMessage && submitMessage.includes("success") ? (
          
            <div className={styles.successContainer}>
              <p className={`${styles.submitMessage} ${styles.success}`}>
                {submitMessage}
              </p>
              <CustomButton name="Redirect to home page" onclick={() => router.replace("/")} />
            </div>
          
        ) : (
         
            <div className={styles.container}>
              <h1 className={styles.title}>Ideathon Registration</h1>
              <p className={styles.subtitle}>
                Join us for an exciting ideathon event. Register your team below.
              </p>
    
              <div className={styles.form}>
                {/* Main User Section */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Team Information</h2>
                  <div className={styles.fieldGroup}>

                    <TextField
                      label="Team Leader/Individual Full Name"
                      placeholder="Enter your full name"
                      type="text"
                      value={formData.leaderName}
                      onChange={(value: string) => handleInputChange("leaderName", value)}
                      error={errors.leaderName}
                      required
                    />
                    
                    <TextField
                      label="Team Leader/Individual Email Address"
                      placeholder="your.email@example.com"
                      type="email"
                      value={formData.email}
                      onChange={(value: string) => handleInputChange("email", value)}
                      error={errors.email}
                      required
                    />
                    
                  </div>
                </section>
    
                {/* Team Members Section */}
                {/* <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Team Members (Optional)</h2>
                  <p className={styles.sectionDescription}>
                    Add up to 4 additional team members
                  </p>
                  {formData.members.map((member, index) => (
                    <div key={index} className={styles.memberGroup}>
                      <h3 className={styles.memberTitle}>Member {index + 1}</h3>
                      <div className={styles.fieldGroup}>
                        <TextField
                          label="Full Name"
                          placeholder="Enter member's full name"
                          type="text"
                          value={member.name}
                          onChange={(value: string) =>
                            handleMemberChange(index, "name", value)
                          }
                          error={errors[`member${index}_name`]}
                        />
                        <TextField
                          label="Email Address"
                          placeholder="member.email@example.com"
                          type="email"
                          value={member.email}
                          onChange={(value: string) =>
                            handleMemberChange(index, "email", value)
                          }
                          error={errors[`member${index}_email`]}
                        />
                        <TextField
                          label="Phone Number"
                          placeholder="+249 12-345 6789"
                          type="tel"
                          value={member.phone}
                          onChange={(value: string) =>
                            handleMemberChange(index, "phone", value)
                          }
                          error={errors[`member${index}_phone`]}
                        />
                      </div>
                    </div>
                  ))}
            </section> */}

            {/* Submission Content Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Submission</h2>
              <p className={styles.sectionDescription}>
                Upload a PDF file describing your project idea, business model,Proof of concept (POC). Also attach your video presentation link in the PDF.
              </p>
              <div className={styles.fieldGroup}>
                <TextField
                  label="Project Title"
                  placeholder="Enter your project title."
                  type="text"
                  value={formData.projectTitle}
                  onChange={(value: string) =>
                    handleInputChange("projectTitle", value)
                  }
                  error={errors.projectTitle}
                  required
                />
                <FileUpload
                  label="Upload Project Document"
                  required={true}
                  accept="application/pdf"
                  onFileUploaded={handleFileUploaded}
                  error={errors.projectDocument}
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className={styles.submitSection}>
              {submitMessage && (
                <p
                  className={`${styles.submitMessage} ${
                    submitMessage.includes("success")
                      ? styles.success
                      : styles.error
                  }`}
                >
                  {submitMessage}
                </p>
              )}
              <CustomButton
                name={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
                onclick={handleSubmit}
              />
            </div>
          </div>
        </div>

    )}
      </main>  
    )}
  </div>
);
} 

export default Registration;