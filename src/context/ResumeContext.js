"use client";
import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    pin: "",
  });

  const updateForm = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
  const [selectedTemplates, setSelectedTemplates] = useState(
    "/templates/template1.png"
  );

  return (
    <ResumeContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        formData,
        updateForm,
        selectedTemplates,
        setSelectedTemplates,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
