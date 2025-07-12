import React, { useState } from "react";
import JParticlesEffect from "./JParticlesEffect";
import ProfitAndLoss from "./balanceSheet/ProfitandLoss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProfitAndLossData, type ProfitAndLossDataField } from "./balanceSheet/model/ProfitandLossData";

const BalanceSheet: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const financialYears = ['FY23', 'FY24', 'FY25', 'FY26', 'FY27'];
  const [companyName, setCompanyName] = useState('');
  const [financialYear, setFinancialYear] = useState('FY25');
  const [profitAndLossYear1, setProfitAndLossYear1] = useState(ProfitAndLossData.builder());
  const [profitAndLossYear2, setProfitAndLossYear2] = useState(ProfitAndLossData.builder());
  
  const handleProfitAndLossChange = (
    year: 'year1' | 'year2',
    field: ProfitAndLossDataField,
    value: number
  ) => {
    const setter = year === 'year1' ? setProfitAndLossYear1 : setProfitAndLossYear2;
    const current = year === 'year1' ? profitAndLossYear1 : profitAndLossYear2;
    setter(ProfitAndLossData.fromObject(current.toObject()).set(field, value));
    console.log(`Updated ${year} - ${field}: ${value}`);
  };
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <section className="home-section">
        <JParticlesEffect />
        <div className="home-content">
          <div className="home-heading">Balance Sheet Generator</div>
        </div>
      </section>

      <section className="relative w-full bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <TextField
          select
          label="Financial Year"
          value={financialYear}
          onChange={e => setFinancialYear(e.target.value)}
          variant="outlined"
          fullWidth
        >
          {financialYears.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>
      </div>

        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Profit and Loss</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProfitAndLoss
  year1={profitAndLossYear1}
  year2={profitAndLossYear2}
  onChange={handleProfitAndLossChange}
/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for accordion 2 goes here.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for accordion 3 goes here.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for accordion 4 goes here.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for accordion 5 goes here.</Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
};

export default BalanceSheet;
