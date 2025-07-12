import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { ProfitAndLossData, type ProfitAndLossDataField } from './model/ProfitandLossData';

interface ProfitAndLossProps {
  year1: ProfitAndLossData;
  year2: ProfitAndLossData;
  onChange: (year: 'year1' | 'year2', field: ProfitAndLossDataField, value: number) => void;
}

const ProfitAndLoss: React.FC<ProfitAndLossProps> = ({ year1, year2, onChange }) => {
  const handleChange = (
    field: ProfitAndLossDataField,
    year: 'year1' | 'year2',
    value: string
  ) => {
    const numValue = parseFloat(value) || 0;
    onChange(year, field, numValue);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Profit and Loss Statement
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Particulars</strong></TableCell>
                <TableCell><strong>31 March 20XX</strong></TableCell>
                <TableCell><strong>31 March 20XY</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ProfitAndLossData.fields.map(({ label, key }) => (
                <TableRow key={key}>
                  <TableCell>{label}</TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={year1.get(key)}
                      onChange={e => handleChange(key, 'year1', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={year2.get(key)}
                      onChange={e => handleChange(key, 'year2', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default ProfitAndLoss;
