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

import {
  ProfitAndLossData,
  type ProfitAndLossDataField,
} from "./balanceSheet/model/ProfitandLossData";

import GenericAccordionContent from "./GenericAccordionContent";

const BalanceSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const financialYears = [
    { label: "FY22", value: "2022" },
    { label: "FY23", value: "2023" },
    { label: "FY24", value: "2024" },
    { label: "FY25", value: "2025" },
    { label: "FY26", value: "2026" },
    { label: "FY27", value: "2027" },
  ];

  const [companyName, setCompanyName] = useState("");
  const [financialYear, setFinancialYear] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [profitAndLossYear1, setProfitAndLossYear1] = useState(
    ProfitAndLossData.builder(),
  );
  const [profitAndLossYear2, setProfitAndLossYear2] = useState(
    ProfitAndLossData.builder(),
  );

  const handleProfitAndLossChange = (
    year: "year1" | "year2",
    field: ProfitAndLossDataField,
    value: number,
  ) => {
    const setter =
      year === "year1" ? setProfitAndLossYear1 : setProfitAndLossYear2;
    const current = year === "year1" ? profitAndLossYear1 : profitAndLossYear2;
    setter(ProfitAndLossData.fromObject(current.toObject()).set(field, value));
  };

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Inside BalanceSheet.tsx
  const panelOrder = ["panel1", "panel2", "panel3", "panel4", "panel5"];

  const handleNextSection = () => {
    const index = panelOrder.indexOf(expanded as string);
    if (index < panelOrder.length - 1) {
      setExpanded(panelOrder[index + 1]);
    }
  };

  const handlePreviousSection = () => {
    const index = panelOrder.indexOf(expanded as string);
    if (index > 0) {
      setExpanded(panelOrder[index - 1]);
    }
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
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            select
            label="Financial Year"
            value={financialYear?.value || ""}
            onChange={(e) =>
              setFinancialYear(
                financialYears.find((fy) => fy.value === e.target.value) ||
                  null,
              )
            }
            variant="outlined"
            fullWidth
          >
            {financialYears.map((year) => (
              <MenuItem key={year.label} value={year.value}>
                {year.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Profit and Loss</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProfitAndLoss
              year1={profitAndLossYear1}
              year2={profitAndLossYear2}
              onChange={handleProfitAndLossChange}
              financialYear={financialYear}
              onNext={handleNextSection}
              onPrevious={handlePreviousSection}
            />
          </AccordionDetails>
        </Accordion>

        {["panel2", "panel3", "panel4", "panel5"].map((panel) => (
          <Accordion
            key={panel}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Accordion {panel.slice(-1)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <GenericAccordionContent
                title={`Accordion ${panel.slice(-1)}`}
                onNext={handleNextSection}
                onPrevious={handlePreviousSection}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </>
  );
};

export default BalanceSheet;
