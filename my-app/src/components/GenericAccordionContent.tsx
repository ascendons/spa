import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface GenericAccordionContentProps {
  title: string;
  onNext: () => void;
  onPrevious: () => void;
}

const GenericAccordionContent: React.FC<GenericAccordionContentProps> = ({
  title,
  onNext,
  onPrevious,
}) => (
  <>
    <Typography>{title} content goes here.</Typography>
    <Box display="flex" justifyContent="space-between" mt={3}>
      <Button variant="outlined" onClick={onPrevious}>
        Previous
      </Button>
      <Button variant="contained" onClick={onNext}>
        Next
      </Button>
    </Box>
  </>
);

export default GenericAccordionContent;
