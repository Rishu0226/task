// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchTotalCounts = () => axios.get(`${API_BASE_URL}/overview/totalCounts`);
export const fetchTopMetrics = () => axios.get(`${API_BASE_URL}/overview/topMetrics`);
export const fetchMapView = () => axios.get(`${API_BASE_URL}/geo/mapView`);
export const fetchHeatmap = () => axios.get(`${API_BASE_URL}/geo/heatmap`);
export const fetchTypeDistribution = () => axios.get(`${API_BASE_URL}/characteristics/typeDistribution`);

export const fetchCAFVEligibility = () => axios.get(`${API_BASE_URL}/characteristics/cafvEligibility`);
export const fetchElectricRange = () => axios.get(`${API_BASE_URL}/characteristics/electricRange`);
export const fetchModelYearTrend = () => axios.get(`${API_BASE_URL}/trends/modelYear`);
export const fetchMSRPTrend = () => axios.get(`${API_BASE_URL}/trends/msrpTrend`);
export const fetchPopularMakes = () => axios.get(`${API_BASE_URL}/insights/popularMakes`);
export const fetchElectricVsNonElectric = () => axios.get(`${API_BASE_URL}/insights/electricVsNonElectric`);
export const fetchUtilityDistribution = () => axios.get(`${API_BASE_URL}/utility/electricUtilityDistribution`);
export const fetchLegislativeDistrict = () => axios.get(`${API_BASE_URL}/utility/legislativeDistrict`);
export const avgElectricRangeByMake = () => axios.get(`${API_BASE_URL}/characteristics/avgElectricRangeByMake`);
