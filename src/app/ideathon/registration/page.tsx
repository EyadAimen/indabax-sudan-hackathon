"use client";
import { useState } from "react";
import Header from "@/components/header/header";
import CustomButton from "@/components/button/button";
import TextField from "@/components/textField/textField";
import styles from "./page.module.css";
import { submitToGoogleSheets } from "@/utils/googlesheetService";

interface Member {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  members: Member[];
  description: string;
  businessModel: string;
  poc: string;
}

interface Errors {
  [key: string]: string;
}

function Registration() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    members: [
      { name: "", email: "", phone: "" },
      { name: "", email: "", phone: "" },
      { name: "", email: "", phone: "" },
      { name: "", email: "", phone: "" }
    ],
    description: "",
    businessModel: "",
    poc: ""
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleMemberChange = (index: number, field: keyof Member, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index][field] = value;
    setFormData(prev => ({ ...prev, members: newMembers }));
    
    const errorKey = `member${index}_${field}`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // Validate main user fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Validate member fields (only if any field is filled)
    formData.members.forEach((member, index) => {
      const hasAnyField = member.name || member.email || member.phone;
      
      if (hasAnyField) {
        if (member.email && !validateEmail(member.email)) {
          newErrors[`member${index}_email`] = "Please enter a valid email address";
        }
        if (member.phone && !validatePhone(member.phone)) {
          newErrors[`member${index}_phone`] = "Please enter a valid phone number";
        }
      }
    });

    // Validate submission content
    if (!formData.description.trim()) {
      newErrors.description = "Idea description is required";
    }
    if (!formData.businessModel.trim()) {
      newErrors.businessModel = "Business model is required";
    }
    if (!formData.poc.trim()) {
      newErrors.poc = "Proof of Concept is required";
    }

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
      const membersData = formData.members
        .filter(m => m.name || m.email || m.phone)
        .map(m => `${m.name}|${m.email}|${m.phone}`)
        .join(",");

      const dataToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        members: membersData,
        description: formData.description,
        businessModel: formData.businessModel,
        poc: formData.poc,
        timestamp: new Date().toISOString()
      };

      const response = await submitToGoogleSheets(dataToSubmit);
      if(!response)
        setSubmitMessage("Failed to submit registration. Please try again.");
      else {
        setSubmitMessage("Registration submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          members: [
            { name: "", email: "", phone: "" },
            { name: "", email: "", phone: "" },
            { name: "", email: "", phone: "" },
            { name: "", email: "", phone: "" }
          ],
          description: "",
          businessModel: "",
          poc: ""
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
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Ideathon Registration</h1>
          <p className={styles.subtitle}>
            Join us for an exciting ideathon event. Register your team below.
          </p>

          <div className={styles.form}>
            {/* Main User Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Team Leader Information</h2>
              <div className={styles.fieldGroup}>
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  value={formData.name}
                  onChange={(value: string) => handleInputChange("name", value)}
                  error={errors.name}
                  required
                />
                <TextField
                  label="Email Address"
                  placeholder="your.email@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(value: string) => handleInputChange("email", value)}
                  error={errors.email}
                  required
                />
                <TextField
                  label="Phone Number"
                  placeholder="+249 12-345 6789"
                  type="tel"
                  value={formData.phone}
                  onChange={(value: string) => handleInputChange("phone", value)}
                  error={errors.phone}
                  required
                />
              </div>
            </section>

            {/* Team Members Section */}
            <section className={styles.section}>
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
                      onChange={(value: string) => handleMemberChange(index, "name", value)}
                      error={errors[`member${index}_name`]}
                    />
                    <TextField
                      label="Email Address"
                      placeholder="member.email@example.com"
                      type="email"
                      value={member.email}
                      onChange={(value: string) => handleMemberChange(index, "email", value)}
                      error={errors[`member${index}_email`]}
                    />
                    <TextField
                      label="Phone Number"
                      placeholder="+249 12-345 6789"
                      type="tel"
                      value={member.phone}
                      onChange={(value: string) => handleMemberChange(index, "phone", value)}
                      error={errors[`member${index}_phone`]}
                    />
                  </div>
                </div>
              ))}
            </section>

            {/* Submission Content Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Submission</h2>
              <div className={styles.fieldGroup}>
                <TextField
                  label="Idea Description"
                  placeholder="Describe your innovative idea in detail..."
                  type="textarea"
                  value={formData.description}
                  onChange={(value: string) => handleInputChange("description", value)}
                  error={errors.description}
                  required
                />
                <TextField
                  label="Business Model"
                  placeholder="Explain your business model and monetization strategy..."
                  type="textarea"
                  value={formData.businessModel}
                  onChange={(value: string) => handleInputChange("businessModel", value)}
                  error={errors.businessModel}
                  required
                />
                <TextField
                  label="Proof of Concept (POC)"
                  placeholder="Describe your proof of concept, prototype, or implementation plan..."
                  type="textarea"
                  value={formData.poc}
                  onChange={(value: string) => handleInputChange("poc", value)}
                  error={errors.poc}
                  required
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className={styles.submitSection}>
              {submitMessage && (
                <p className={`${styles.submitMessage} ${submitMessage.includes("success") ? styles.success : styles.error}`}>
                  {submitMessage}
                </p>
              )}
              <CustomButton
                name={isSubmitting ? "Submitting..." : "Submit"}
                onclick={handleSubmit} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Registration;