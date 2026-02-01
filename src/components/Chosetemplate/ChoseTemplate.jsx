"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
} from "@mui/material";
import Image from "next/image";
import HomeLogo from "../HomeLogo/HomeLogo";
import UploadFun from "../UploadFuntion/UploadFun";
import { useResume } from "@/context/ResumeContext";

const templates = [
  {
    id: 1,
    templetId: "temp1",
    name: "Template 1",
    imageUrl: "/logo/temp4.png",
    withPhoto: true,
    columns: 1,
  },
  {
    id: 2,
    templetId: "temp2",
    name: "Template 2",
    imageUrl: "/logo/temp6.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 3,
    templetId: "temp3",
    name: "Template 3",
    imageUrl: "/logo/temp2.png",
    withPhoto: true,
    columns: 2,
  },
];

const ChoseTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedPage, setSelectedPage] = useState("select-resume");
  const [filters, setFilters] = useState({
    withPhoto: false,
    withoutPhoto: false,
    oneColumn: false,
    twoColumn: false,
  });
  const { setSelectedTemplates } = useResume();

  const handleSelect = (id, url) => {
    setSelectedTemplate(id);
    setSelectedTemplates(url);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const filteredTemplates = templates.filter((template) => {
    if (filters.withPhoto && !template.withPhoto) return false;
    if (filters.withoutPhoto && template.withPhoto) return false;
    if (filters.oneColumn && template.columns !== 1) return false;
    if (filters.twoColumn && template.columns !== 2) return false;
    return true;
  });

  return (
    <>
      {selectedPage == "select-resume" ? (
        <Box p={4}>
          <HomeLogo />
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
            Choose from our resume templates
          </Typography>
          <Typography variant="body1" textAlign="center" mb={4}>
            You can always change your template later.
          </Typography>

          {/* Content */}
          <Box display="flex" gap={4}>
            {/* Sidebar Filters */}
            <Box width="250px">
              <Typography variant="h6" mb={2}>
                Filters
              </Typography>

              <Typography fontWeight="bold" mb={1}>
                Headshot
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox name="withPhoto" onChange={handleFilterChange} />
                }
                label="With photo"
              />
              <FormControlLabel
                control={
                  <Checkbox name="withoutPhoto" onChange={handleFilterChange} />
                }
                label="Without photo"
              />

              <Typography fontWeight="bold" mt={2} mb={1}>
                Columns
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox name="oneColumn" onChange={handleFilterChange} />
                }
                label="1 column"
              />
              <FormControlLabel
                control={
                  <Checkbox name="twoColumn" onChange={handleFilterChange} />
                }
                label="2 columns"
              />
            </Box>

            {/* Templates Grid */}
            <Box flex={1}>
              <Grid container spacing={4}>
                {filteredTemplates.length > 0 ? (
                  filteredTemplates.map((template) => (
                    <Grid item xs={12} sm={6} md={4} key={template.id}>
                      <Box
                        border={
                          selectedTemplate === template.id
                            ? "4px solid #007BFF"
                            : "2px solid #ccc"
                        }
                        borderRadius="8px"
                        overflow="hidden"
                        onClick={() =>
                          handleSelect(template.id, template.imageUrl)
                        }
                        sx={{
                          cursor: "pointer",
                          transition: "border 0.3s",

                          maxWidth: 350,
                          mx: "auto",
                          boxShadow: 3,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={template.imageUrl}
                          alt={template.name}
                          width={300}
                          height={400}
                        />
                      </Box>
                    </Grid>
                  ))
                ) : (
                  <Typography>
                    No templates found with selected filters.
                  </Typography>
                )}
              </Grid>
            </Box>
          </Box>

          {/* Footer Buttons */}
          <Box mt={6} textAlign="center">
            <Button variant="text" sx={{ mr: 2 }}>
              Choose later
            </Button>
            <Button
              variant="contained"
              className={selectedTemplate && "gradient-button"}
              onClick={() => setSelectedPage("upload-option")}
              color="secondary"
              disabled={!selectedTemplate}
            >
              Use this template
            </Button>
          </Box>
        </Box>
      ) : selectedPage == "upload-option" ? (
        <UploadFun setSelectedPage={setSelectedPage} />
      ) : (
        ""
      )}
    </>
  );
};
export default ChoseTemplate;
