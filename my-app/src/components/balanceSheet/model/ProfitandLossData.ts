// models/ProfitAndLossData.ts

export type ProfitAndLossDataField =
  | "revenueFromOperations"
  | "otherIncome"
  | "costOfGoodsSold"
  | "employeeBenefitsExpense"
  | "financeCosts"
  | "depreciationAmortization"
  | "otherExpenses"
  | "exceptionalItems"
  | "extraordinaryItems"
  | "partnersRemuneration"
  | "currentTax"
  | "priorYearTaxAdjustments"
  | "deferredTax"
  | "discontinuedOperationsProfitLoss"
  | "discontinuedOperationsTax";

export class ProfitAndLossData {
  private data: Partial<Record<ProfitAndLossDataField, number>> = {};

  constructor(initialData?: Partial<Record<ProfitAndLossDataField, number>>) {
    if (initialData) {
      for (const key in initialData) {
        const value = initialData[key as ProfitAndLossDataField];
        if (value !== undefined) {
          this.set(key as ProfitAndLossDataField, value);
        }
      }
    }
  }

  // Get a value, defaulting to 0 if not set
  get(field: ProfitAndLossDataField): number | undefined {
    return this.data[field];
  }

  // Set a value (returns this for chaining)
  set(field: ProfitAndLossDataField, value: number): this {
    this.data[field] = value;
    return this;
  }

  // Get the raw object (e.g. for saving or sending to API)
  toObject(): Partial<Record<ProfitAndLossDataField, number>> {
    return { ...this.data };
  }

  // Static builder
  static builder(): ProfitAndLossData {
    return new ProfitAndLossData();
  }

  // Static initializer from plain object
  static fromObject(
    obj: Partial<Record<ProfitAndLossDataField, number>>,
  ): ProfitAndLossData {
    return new ProfitAndLossData(obj);
  }

  // Field metadata (label + key)
  static fields: { label: string; key: ProfitAndLossDataField }[] = [
    { label: "Revenue from operations", key: "revenueFromOperations" },
    { label: "Other income", key: "otherIncome" },
    { label: "Cost of goods sold", key: "costOfGoodsSold" },
    { label: "Employee benefits expense", key: "employeeBenefitsExpense" },
    { label: "Finance costs", key: "financeCosts" },
    {
      label: "Depreciation and amortization expense",
      key: "depreciationAmortization",
    },
    { label: "Other expenses", key: "otherExpenses" },
    { label: "Exceptional items", key: "exceptionalItems" },
    { label: "Extraordinary items", key: "extraordinaryItems" },
    { label: "Partners’ remuneration", key: "partnersRemuneration" },
    { label: "Current tax", key: "currentTax" },
    {
      label: "Excess/Short provision of tax (earlier years)",
      key: "priorYearTaxAdjustments",
    },
    { label: "Deferred tax charge/benefit", key: "deferredTax" },
    {
      label: "Profit/loss from discontinuing operations",
      key: "discontinuedOperationsProfitLoss",
    },
    {
      label: "Tax expense of discontinuing operations",
      key: "discontinuedOperationsTax",
    },
  ];
}
