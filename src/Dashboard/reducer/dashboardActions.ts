import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export const getSummary = () => {
  const req = axios.get(`${BASE_URL}/billingCycles/summary`);

  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: req,
  };
};
