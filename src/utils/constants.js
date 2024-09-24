const API_URL = "http://localhost:4000";

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,

  TICKET: `${API_URL}/api/activites`,
  TICKET_NEW: `${API_URL}/api/activites/new`,
  TICKET_DETAILS: (id) => `${API_URL}/api/test/${id}`,
};

export const APP_ROUTES = {
  SIGN_UP: "/Inscription",
  SIGN_IN: "/Connexion",
};
